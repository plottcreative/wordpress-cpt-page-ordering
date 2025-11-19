<?php
/**
 * AJAX handler for drag-and-drop reordering.
 * Processes AJAX requests to save post order.
 *
 * @package WpCptOrdering
 */

declare(strict_types=1);

namespace WpCptOrdering\Admin;

/**
 * Handles AJAX requests for saving post order.
 */
class Ajax
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
        \add_action('wp_ajax_wp_cpt_ordering_save', [$this, 'handleSaveOrder']);
    }

    /**
     * Handle AJAX request to save post order.
     * Updates menu_order for each post based on new position.
     */
    public function handleSaveOrder(): void
    {
        // Verify nonce
        if (!\check_ajax_referer(\WpCptOrdering\NONCE_ACTION, 'nonce', false)) {
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

        // Get and validate post type
        $post_type = \sanitize_key($_POST['post_type'] ?? '');

        if (empty($post_type)) {
            \wp_send_json_error([
                'message' => \__('Invalid post type.', 'wp-cpt-ordering'),
            ], 400);
            return;
        }

        // Verify post type is enabled in settings
        $options = (array) \get_option($this->option_name, []);
        $enabled_post_types = $options['enabled_post_types'] ?? [];

        if (!\in_array($post_type, $enabled_post_types, true)) {
            \wp_send_json_error([
                'message' => \__('This post type is not enabled for ordering.', 'wp-cpt-ordering'),
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

        // Update menu_order for each post
        $updated_count = 0;
        foreach ($order as $position => $post_id) {
            $post_id = (int) $post_id;

            // Verify post exists and is correct post type
            $post = \get_post($post_id);

            if (!$post || $post->post_type !== $post_type) {
                continue;
            }

            // Update menu_order (position is 0-indexed, so we use it directly)
            $result = \wp_update_post([
                'ID'         => $post_id,
                'menu_order' => $position,
            ], true);

            if (!\is_wp_error($result)) {
                $updated_count++;
            }
        }

        // Send success response
        \wp_send_json_success([
            'message' => sprintf(
                /* translators: %d: Number of posts updated */
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
