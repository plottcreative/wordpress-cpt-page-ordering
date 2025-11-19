<?php
/**
 * Admin area bootstrap.
 *
 * @package WpCptOrdering
 */

declare(strict_types=1);

namespace WpCptOrdering\Admin;

/**
 * Initializes all admin-specific functionality.
 */
class Bootstrap
{
    /**
     * Initialize admin components.
     * Loads settings page, drag-drop UI, and AJAX handlers.
     *
     * @return void
     */
    public static function init(): void
    {
        // Get user capability requirement from settings.
        $options    = (array) \get_option('wp_cpt_ordering_options', []);
        $capability = $options['capability'] ?? 'edit_others_posts';

        // Define security constants for nonce validation.
        if (!\defined('WpCptOrdering\\NONCE_ACTION')) {
            \define('WpCptOrdering\\NONCE_ACTION', 'wp_cpt_ordering_action');
            \define('WpCptOrdering\\NONCE_NAME', 'wp_cpt_ordering_nonce');
        }

        // Load admin settings page (under Settings > Post Ordering).
        if (\class_exists('\\WpCptOrdering\\Admin\\Settings')) {
            $settings = new Settings($capability);
            $settings->init();
        }

        // Load drag-drop interface (under Tools > Reorder Posts).
        if (\class_exists('\\WpCptOrdering\\Admin\\DragDrop')) {
            $drag_drop = new DragDrop($capability);
            $drag_drop->init();
        }

        // Load AJAX handlers for saving order.
        if (\class_exists('\\WpCptOrdering\\Admin\\Ajax')) {
            $ajax = new Ajax($capability);
            $ajax->init();
        }
    }
}
