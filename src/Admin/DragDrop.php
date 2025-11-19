<?php
/**
 * Drag-and-drop reordering interface.
 * Integrates with native WordPress post list tables.
 *
 * @package WpCptOrdering
 */

declare(strict_types=1);

namespace WpCptOrdering\Admin;

/**
 * Handles drag-and-drop reordering UI on post list tables.
 */
class DragDrop
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
        \add_filter('views_edit-post', [$this, 'addDragDropNotice'], 5);
        \add_filter('views_edit-page', [$this, 'addDragDropNotice'], 5);
        
        // Add filter for custom post types dynamically
        $options = (array) \get_option($this->option_name, []);
        $enabled_post_types = $options['enabled_post_types'] ?? [];
        
        foreach ($enabled_post_types as $post_type) {
            if (!\in_array($post_type, ['post', 'page'], true)) {
                \add_filter('views_edit-' . $post_type, [$this, 'addDragDropNotice'], 5);
            }
        }
        
        // Force order by menu_order on enabled post types
        \add_action('pre_get_posts', [$this, 'forceMenuOrder']);
    }

    /**
     * Force menu_order sorting on enabled post type list pages.
     *
     * @param \WP_Query $query The WP_Query instance.
     */
    public function forceMenuOrder(\WP_Query $query): void
    {
        // Only in admin area, on main query, on edit.php pages
        if (!\is_admin() || !$query->is_main_query()) {
            return;
        }
        
        global $pagenow;
        if ($pagenow !== 'edit.php') {
            return;
        }
        
        $post_type = $query->get('post_type');
        if (empty($post_type)) {
            $post_type = 'post';
        }
        
        // Check if this post type has ordering enabled
        $options = (array) \get_option($this->option_name, []);
        $enabled_post_types = $options['enabled_post_types'] ?? [];
        
        if (!\in_array($post_type, $enabled_post_types, true)) {
            return;
        }
        
        // Only apply if user hasn't specified different orderby
        if (empty($query->get('orderby'))) {
            $query->set('orderby', 'menu_order');
            $query->set('order', 'ASC');
        }
    }

    /**
     * Add drag-drop notice above post list table.
     *
     * @param array<string, string> $views View links.
     * @return array<string, string> Modified view links.
     */
    public function addDragDropNotice(array $views): array
    {
        // Check user capability
        if (!\current_user_can($this->capability)) {
            return $views;
        }
        
        // Get current post type
        // phpcs:ignore WordPress.Security.NonceVerification.Recommended
        $post_type = $_GET['post_type'] ?? 'post';
        
        // Check if this post type has ordering enabled
        $options = (array) \get_option($this->option_name, []);
        $enabled_post_types = $options['enabled_post_types'] ?? [];
        
        if (!\in_array($post_type, $enabled_post_types, true)) {
            return $views;
        }
        
        echo '<div id="reorder-feedback" style="display: none;"></div>';
        echo '<p class="description" style="margin-bottom: 10px;">';
        \esc_html_e('Drag and drop rows to reorder. Changes are saved automatically.', 'wp-cpt-ordering');
        echo '</p>';
        
        return $views;
    }

    /**
     * Enqueue JavaScript and CSS for drag-drop interface.
     *
     * @param string $hook Current admin page hook.
     */
    public function enqueueAssets(string $hook): void
    {
        // Only load on post list pages (edit.php)
        if ($hook !== 'edit.php') {
            return;
        }
        
        // Get current post type
        // phpcs:ignore WordPress.Security.NonceVerification.Recommended
        $post_type = $_GET['post_type'] ?? 'post';
        
        // Check if this post type has ordering enabled
        $options = (array) \get_option($this->option_name, []);
        $enabled_post_types = $options['enabled_post_types'] ?? [];
        
        if (!\in_array($post_type, $enabled_post_types, true)) {
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

        // Enqueue our custom drag-drop script
        \wp_enqueue_script(
            'wp-cpt-ordering-drag-drop',
            \PlottOs\get_assets_url() . '/js/drag-drop.js',
            ['sortablejs', 'jquery'],
            \PlottOs\VERSION,
            true
        );

        // Pass AJAX URL and nonce to JavaScript
        \wp_localize_script(
            'wp-cpt-ordering-drag-drop',
            'wpCptOrdering',
            [
                'ajaxUrl'  => \admin_url('admin-ajax.php'),
                'nonce'    => \wp_create_nonce(\PlottOs\NONCE_ACTION),
                'postType' => $post_type,
            ]
        );

        // Enqueue our CSS
        \wp_enqueue_style(
            'wp-cpt-ordering-drag-drop',
            \PlottOs\get_assets_url() . '/css/drag-drop.css',
            [],
            \PlottOs\VERSION
        );
    }
}