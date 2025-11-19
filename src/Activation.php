<?php
/**
 * Plugin activation and deactivation handler.
 *
 * @package WpCptOrdering
 */

declare(strict_types=1);

namespace WpCptOrdering;

/**
 * Handles plugin activation and deactivation.
 */
class Activation
{
    /**
     * Plugin activation callback.
     * Verifies requirements and seeds default options.
     *
     * @return void
     */
    public static function activate(): void
    {
        // Verify minimum PHP version requirement.
        if (version_compare(PHP_VERSION, '8.0', '<')) {
            \deactivate_plugins(get_basename());
            \wp_die(
                \esc_html__('WP CPT Ordering requires PHP 8.0 or higher.', 'wp-cpt-ordering'),
                \esc_html__('Plugin Activation Error', 'wp-cpt-ordering'),
                ['back_link' => true]
            );
        }

        // Verify minimum WordPress version requirement.
        global $wp_version;
        if (version_compare($wp_version, '6.0', '<')) {
            \deactivate_plugins(get_basename());
            \wp_die(
                \esc_html__('WP CPT Ordering requires WordPress 6.0 or higher.', 'wp-cpt-ordering'),
                \esc_html__('Plugin Activation Error', 'wp-cpt-ordering'),
                ['back_link' => true]
            );
        }


        $defaults = [
            'enabled_post_types' => ['post', 'page'],      // Default to core post types.
            'capability'         => 'edit_others_posts',   // Editors and above can reorder.
            'orderby_default'    => true,                  // Auto-apply ordering to queries.
        ];

        // Only add if doesn't exist (won't overwrite on re-activation).
        \add_option('wp_cpt_ordering_options', $defaults, '', false);
    }

    /**
     * Plugin deactivation callback.
     *
     * @return void
     */
    public static function deactivate(): void
    {
        // Note: We don't delete options or custom order data.
        // This allows users to safely deactivate/reactivate without data loss.
        // If you add custom rewrite rules later, flush them here.
    }
}
