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
            \define('WpCptOrdering\\TERM_NONCE_ACTION', 'wp_cpt_ordering_term_action');
            \define('WpCptOrdering\\TERM_NONCE_NAME', 'wp_cpt_ordering_term_nonce');
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

        // Load taxonomy drag-drop interface.
        if (\class_exists('\\WpCptOrdering\\Admin\\DragDropTerm')) {
            $drag_drop_term = new DragDropTerm($capability);
            $drag_drop_term->init();
        }

        // Load AJAX handlers for saving term order.
        if (\class_exists('\\WpCptOrdering\\Admin\\AjaxTerm')) {
            $ajax_term = new AjaxTerm($capability);
            $ajax_term->init();
        }
    }
}
