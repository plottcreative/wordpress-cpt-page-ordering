<?php
/**
 * AJAX handler for taxonomy drag-and-drop reordering.
 * Processes AJAX requests to save term order.
 *
 * @package WpCptOrdering
 */

declare(strict_types=1);

namespace WpCptOrdering\Admin;

/**
 * Handles AJAX requests for saving term order.
 */
class AjaxTerm
{
    private string $capability;
    private string $option_name = 'wp_cpt_ordering_options';

    public function __construct(string $capability)
    {
        $this->capability = $capability;
    }

    /**
     * Initialize AJAX handlers.
     */
    public function init(): void
    {
        \add_action('wp_ajax_wp_cpt_ordering_save_term', [$this, 'handleSaveOrder']);
    }

    /**
     * Handle AJAX request to save term order.
     * Updates term meta with menu_order for each term based on new position.
     */
    public function handleSaveOrder(): void
    {
        // Verify nonce
        if (!\check_ajax_referer(\WpCptOrdering\TERM_NONCE_ACTION, 'nonce', false)) {
            \wp_send_json_error([
                'message' => \__('Security check failed.', 'wp-cpt-ordering'),
            ], 403);
            return;
        }

        // Check user capability
        if (!\current_user_can($this->capability)) {
            \wp_send_json_error([
                'message' => \__('You do not have permission to perform this action.', 'wp-cpt-ordering'),
            ], 403);
            return;
        }

        // Get and validate taxonomy
        $taxonomy = isset($_POST['taxonomy']) ? \sanitize_text_field(\wp_unslash($_POST['taxonomy'])) : '';

        if (empty($taxonomy)) {
            \wp_send_json_error([
                'message' => \__('Invalid taxonomy.', 'wp-cpt-ordering'),
            ], 400);
            return;
        }

        // Verify taxonomy is enabled in settings
        $options = (array) \get_option($this->option_name, []);
        $enabled_taxonomies = $options['enabled_taxonomies'] ?? [];

        if (!\in_array($taxonomy, $enabled_taxonomies, true)) {
            \wp_send_json_error([
                'message' => \__('This taxonomy is not enabled for ordering.', 'wp-cpt-ordering'),
            ], 403);
            return;
        }

        // Get and validate order array
        $order = $_POST['order'] ?? [];

        if (!\is_array($order) || empty($order)) {
            \wp_send_json_error([
                'message' => \__('Invalid order data.', 'wp-cpt-ordering'),
            ], 400);
            return;
        }

        // Update menu_order for each term
        $updated_count = 0;
        foreach ($order as $position => $term_id) {
            $term_id = (int) $term_id;

            // Verify term exists and belongs to correct taxonomy
            $term = \get_term($term_id, $taxonomy);

            if (!$term || \is_wp_error($term)) {
                continue;
            }

            // Update term meta with menu order
            $result = \update_term_meta($term_id, \WpCptOrdering\TERM_META_KEY, $position);

            if ($result !== false) {
                $updated_count++;
            }
        }

        // Send success response
        \wp_send_json_success([
            'message' => sprintf(
                /* translators: %d: Number of terms updated */
                \_n(
                    'Order updated for %d item.',
                    'Order updated for %d items.',
                    $updated_count,
                    'wp-cpt-ordering'
                ),
                $updated_count
            ),
            'updated_count' => $updated_count,
        ]);
    }
}
