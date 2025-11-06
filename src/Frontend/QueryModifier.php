<?php
/**
 * Frontend query modifier.
 * Automatically applies menu_order to queries for enabled post types.
 *
 * @package PlottOs
 */

declare(strict_types=1);

namespace PlottOs\Frontend;

/**
 * Modifies WP_Query to respect custom post ordering on frontend.
 */
class QueryModifier
{
    private string $option_name = 'wp_cpt_ordering_options';

    /**
     * Initialize query modifier.
     */
    public function init(): void
    {
        \add_action('pre_get_posts', [$this, 'applyCustomOrder']);
    }

    /**
     * Apply custom menu_order sorting to queries for enabled post types.
     *
     * @param \WP_Query $query The WP_Query instance.
     */
    public function applyCustomOrder(\WP_Query $query): void
    {
        // Only modify frontend queries (not admin area)
        if (\is_admin()) {
            return;
        }

        // Note: We intentionally do NOT check is_main_query()
        // This allows the plugin to work with custom WP_Query in blocks/templates
        // Developer can still override by setting explicit orderby

        // Get plugin settings
        $options = (array) \get_option($this->option_name, []);
        $enabled_post_types = $options['enabled_post_types'] ?? [];
        $orderby_default = $options['orderby_default'] ?? true;

        // Check if automatic ordering is enabled
        if (!$orderby_default) {
            return;
        }

        // Exit if no enabled post types
        if (empty($enabled_post_types)) {
            return;
        }

        // Get the post type being queried
        $post_type = $query->get('post_type');

        // Handle default 'post' type when empty
        if (empty($post_type)) {
            // On single post type archives, get from query var
            if (\is_post_type_archive()) {
                $post_type = \get_query_var('post_type');
            } elseif (\is_home() || \is_archive() || \is_search()) {
                // Default to 'post' for blog pages
                $post_type = 'post';
            }
        }

        // Handle array of post types (uncommon but possible)
        if (\is_array($post_type)) {
            // Check if ANY of the post types are enabled
            $has_enabled = false;
            foreach ($post_type as $type) {
                if (\in_array($type, $enabled_post_types, true)) {
                    $has_enabled = true;
                    break;
                }
            }
            if (!$has_enabled) {
                return;
            }
        } else {
            // Single post type - check if enabled
            if (!\in_array($post_type, $enabled_post_types, true)) {
                return;
            }
        }

        // Only apply if developer hasn't explicitly set orderby
        // This respects manual ordering in custom queries
       // This respects manual ordering in custom queries
        $explicit_orderby = $query->get('orderby');

        // Allow developers to disable ordering for specific contexts
        if (false === apply_filters('plottos_ordering_apply', true, $query)) {
            return;
        }

        // Allow developers to force menu_order even if an explicit orderby exists
        $force_menu_order = apply_filters('plottos_force_menu_order', false, $query);

        // Respect explicit orderby if not forcing
        if (!empty($explicit_orderby) && !$force_menu_order) {
            return;
        }

        // Apply menu_order sorting
        $query->set('orderby', 'menu_order');
        $query->set('order', 'ASC');
    }
}
