<?php
/**
 * Admin area bootstrap.
 *
 * @package PlottOs
 */

declare(strict_types=1);

namespace PlottOs\Admin;

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
        if (!\defined('PlottOs\\NONCE_ACTION')) {
            \define('PlottOs\\NONCE_ACTION', 'wp_cpt_ordering_action');
            \define('PlottOs\\NONCE_NAME', 'wp_cpt_ordering_nonce');
        }

        // Load admin settings page (under Settings > Post Ordering).
        if (\class_exists('\\PlottOs\\Admin\\Settings')) {
            $settings = new Settings($capability);
            $settings->init();
        }

        if (class_exists(\PlottOs\Admin\Rest\Settings_Controller::class)) {
            \PlottOs\Admin\Rest\Settings_Controller::register();
        }


        // Load drag-drop interface (under Tools > Reorder Posts).
        if (\class_exists('\\PlottOs\\Admin\\DragDrop')) {
            $drag_drop = new DragDrop($capability);
            $drag_drop->init();
        }

        // Load AJAX handlers for saving order.
        if (\class_exists('\\PlottOs\\Admin\\Ajax')) {
            $ajax = new Ajax($capability);
            $ajax->init();
        }
    }
}
