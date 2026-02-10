<?php
/**
 * Drag-and-drop reordering interface for taxonomies.
 * Integrates with native WordPress taxonomy term list tables.
 *
 * @package WpCptOrdering
 */

declare(strict_types=1);

namespace WpCptOrdering\Admin;

/**
 * Handles drag-and-drop reordering UI on term list tables.
 */
class DragDropTerm
{
    private string $capability;
    private string $option_name = 'wp_cpt_ordering_options';

    public function __construct(string $capability)
    {
        $this->capability = $capability;
    }

    /**
     * Initialize drag-drop interface.
     */
    public function init(): void
    {
        \add_action('admin_enqueue_scripts', [$this, 'enqueueAssets']);
        \add_filter('admin_notices', [$this, 'addDragDropNotice']);
        \add_filter('terms_clauses', [$this, 'forceTermOrder'], 10, 3);
    }

    /**
     * Force menu_order sorting on enabled taxonomy admin pages.
     * Uses LEFT JOIN so terms without meta still appear.
     *
     * @param array<string, string> $clauses    SQL clauses.
     * @param array<string>         $taxonomies Taxonomies being queried.
     * @param array<mixed>          $args       Query arguments.
     * @return array<string, string> Modified clauses.
     */
    public function forceTermOrder(array $clauses, array $taxonomies, array $args): array
    {
        if (!\is_admin()) {
            return $clauses;
        }

        global $pagenow;
        if ($pagenow !== 'edit-tags.php') {
            return $clauses;
        }

        $enabled_taxonomies = $this->getEnabledTaxonomies();

        // Check if any queried taxonomy is enabled
        $should_apply = false;
        foreach ($taxonomies as $taxonomy) {
            if (\in_array($taxonomy, $enabled_taxonomies, true)) {
                $should_apply = true;
                break;
            }
        }

        if (!$should_apply) {
            return $clauses;
        }

        global $wpdb;
        $meta_key = \WpCptOrdering\TERM_META_KEY;

        // Use LEFT JOIN so terms without meta still appear
        $clauses['join'] .= " LEFT JOIN {$wpdb->termmeta} AS tm ON t.term_id = tm.term_id AND tm.meta_key = '{$meta_key}'";
        $clauses['orderby'] = 'ORDER BY COALESCE(CAST(tm.meta_value AS UNSIGNED), 999999)';
        $clauses['order'] = 'ASC';

        return $clauses;
    }

    /**
     * Add drag-drop notice above term list table.
     */
    public function addDragDropNotice(): void
    {
        // Check user capability
        if (!\current_user_can($this->capability)) {
            return;
        }

        // Only show on edit-tags.php
        // phpcs:ignore WordPress.Security.NonceVerification.Recommended
        global $pagenow;
        if ($pagenow !== 'edit-tags.php') {
            return;
        }

        // Get current taxonomy
        // phpcs:ignore WordPress.Security.NonceVerification.Recommended
        $taxonomy = isset($_GET['taxonomy']) ? \sanitize_text_field(\wp_unslash($_GET['taxonomy'])) : '';

        if (empty($taxonomy)) {
            return;
        }

        // Check if this taxonomy is enabled for ordering
        $enabled_taxonomies = $this->getEnabledTaxonomies();

        if (!\in_array($taxonomy, $enabled_taxonomies, true)) {
            return;
        }

        echo '<div id="reorder-feedback" style="display: none;"></div>';
        echo '<p class="description" style="margin-bottom: 10px;">';
        \esc_html_e('Drag and drop rows to reorder. Changes are saved automatically.', 'wp-cpt-ordering');
        echo '</p>';
    }

    /**
     * Enqueue JavaScript and CSS for drag-drop interface.
     *
     * @param string $hook Current admin page hook.
     */
    public function enqueueAssets(string $hook): void
    {
        // Only load on term list pages (edit-tags.php)
        if ($hook !== 'edit-tags.php') {
            return;
        }

        // Get current taxonomy
        // phpcs:ignore WordPress.Security.NonceVerification.Recommended
        $taxonomy = isset($_GET['taxonomy']) ? \sanitize_text_field(\wp_unslash($_GET['taxonomy'])) : '';

        if (empty($taxonomy)) {
            return;
        }

        // Check if this taxonomy is enabled for ordering
        $enabled_taxonomies = $this->getEnabledTaxonomies();

        if (!\in_array($taxonomy, $enabled_taxonomies, true)) {
            return;
        }

        // Check user capability
        if (!\current_user_can($this->capability)) {
            return;
        }

        // Enqueue SortableJS from CDN
        \wp_enqueue_script(
            'sortablejs',
            'https://cdn.jsdelivr.net/npm/sortablejs@1.15.2/Sortable.min.js',
            [],
            '1.15.2',
            true
        );

        // Enqueue our custom drag-drop script for terms
        \wp_enqueue_script(
            'wp-cpt-ordering-drag-drop-term',
            \WpCptOrdering\get_assets_url() . '/js/drag-drop-term.js',
            ['sortablejs', 'jquery'],
            \WpCptOrdering\VERSION,
            true
        );

        // Pass AJAX URL and nonce to JavaScript
        \wp_localize_script(
            'wp-cpt-ordering-drag-drop-term',
            'wpCptOrderingTerm',
            [
                'ajaxUrl'  => \admin_url('admin-ajax.php'),
                'nonce'    => \wp_create_nonce(\WpCptOrdering\TERM_NONCE_ACTION),
                'taxonomy' => $taxonomy,
            ]
        );

        // Enqueue our CSS
        \wp_enqueue_style(
            'wp-cpt-ordering-drag-drop',
            \WpCptOrdering\get_assets_url() . '/css/drag-drop.css',
            [],
            \WpCptOrdering\VERSION
        );
    }

    /**
     * Get list of enabled taxonomies.
     *
     * @return array<string> Enabled taxonomy slugs.
     */
    private function getEnabledTaxonomies(): array
    {
        $options = (array) \get_option($this->option_name, []);
        return $options['enabled_taxonomies'] ?? [];
    }
}
