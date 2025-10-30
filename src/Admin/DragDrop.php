<?php
/**
 * Drag-and-drop reordering interface.
 * Provides admin pages for reordering posts via drag-and-drop.
 *
 * @package PlottOs
 */

declare(strict_types=1);

namespace PlottOs\Admin;

/**
 * Handles drag-and-drop reordering UI.
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
        \add_action('admin_menu', [$this, 'addMenuPages']);
        \add_action('admin_enqueue_scripts', [$this, 'enqueueAssets']);
    }

    /**
     * Add submenu pages under Tools for each enabled post type.
     */
    public function addMenuPages(): void
    {
        $options = (array) \get_option($this->option_name, []);
        $enabled_post_types = $options['enabled_post_types'] ?? [];

        if (empty($enabled_post_types)) {
            return;
        }

        foreach ($enabled_post_types as $post_type) {
            $post_type_object = \get_post_type_object($post_type);

            if (!$post_type_object) {
                continue;
            }

            // Add submenu page under Tools
            \add_submenu_page(
                'tools.php',                                    // Parent slug
                sprintf(
                    /* translators: %s: Post type label (plural) */
                    \__('Reorder %s', 'wp-cpt-ordering'),
                    $post_type_object->labels->name
                ),
                sprintf(
                    /* translators: %s: Post type label (plural) */
                    \__('Reorder %s', 'wp-cpt-ordering'),
                    $post_type_object->labels->name
                ),
                $this->capability,                              // Capability required
                'reorder-' . $post_type,                        // Menu slug
                [$this, 'renderPage']                           // Callback
            );
        }
    }

    /**
     * Enqueue JavaScript and CSS for drag-drop interface.
     *
     * @param string $hook Current admin page hook.
     */
    public function enqueueAssets(string $hook): void
    {
        // Only load on our reorder pages
        if (strpos($hook, 'tools_page_reorder-') !== 0) {
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
                'ajaxUrl' => \admin_url('admin-ajax.php'),
                'nonce'   => \wp_create_nonce(\PlottOs\NONCE_ACTION),
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

    /**
     * Render drag-drop reordering page.
     */
    public function renderPage(): void
    {
        // Check user capability
        if (!\current_user_can($this->capability)) {
            \wp_die(\esc_html__('You do not have sufficient permissions to access this page.', 'wp-cpt-ordering'));
        }

        // Extract post type from current page slug
        $post_type = $this->getCurrentPostType();

        if (!$post_type) {
            \wp_die(\esc_html__('Invalid post type.', 'wp-cpt-ordering'));
        }

        $post_type_object = \get_post_type_object($post_type);

        if (!$post_type_object) {
            \wp_die(\esc_html__('Invalid post type.', 'wp-cpt-ordering'));
        }

        // Fetch posts ordered by menu_order
        $posts = \get_posts([
            'post_type'      => $post_type,
            'posts_per_page' => -1,
            'orderby'        => 'menu_order',
            'order'          => 'ASC',
            'post_status'    => 'any',
        ]);

        ?>
        <div class="wrap">
            <h1>
                <?php
                printf(
                    /* translators: %s: Post type label (plural) */
                    \esc_html__('Reorder %s', 'wp-cpt-ordering'),
                    \esc_html($post_type_object->labels->name)
                );
                ?>
            </h1>

            <?php if (empty($posts)) : ?>
                <p><?php \esc_html_e('No items found.', 'wp-cpt-ordering'); ?></p>
            <?php else : ?>
                <div id="reorder-feedback" style="display: none;"></div>

                <p class="description">
                    <?php \esc_html_e('Drag and drop to reorder. Changes are saved automatically.', 'wp-cpt-ordering'); ?>
                </p>

                <ul id="sortable-posts" class="wp-cpt-ordering-list" data-post-type="<?php echo \esc_attr($post_type); ?>">
                    <?php foreach ($posts as $post) : ?>
                        <li class="sortable-item" data-id="<?php echo \esc_attr((string) $post->ID); ?>">
                            <span class="dashicons dashicons-menu"></span>
                            <span class="post-title"><?php echo \esc_html($post->post_title ?: __('(no title)', 'wp-cpt-ordering')); ?></span>
                            <span class="post-status"><?php echo \esc_html($post->post_status); ?></span>
                        </li>
                    <?php endforeach; ?>
                </ul>
            <?php endif; ?>
        </div>
        <?php
    }

    /**
     * Get current post type from page slug.
     *
     * @return string|null Post type name or null if invalid.
     */
    private function getCurrentPostType(): ?string
    {
        // phpcs:ignore WordPress.Security.NonceVerification.Recommended
        $page = $_GET['page'] ?? '';

        if (strpos($page, 'reorder-') !== 0) {
            return null;
        }

        return substr($page, 8); // Remove 'reorder-' prefix
    }
}
