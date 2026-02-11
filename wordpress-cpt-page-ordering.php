<?php

declare(strict_types=1);

namespace WpCptOrdering;

/**
 * Plugin Name:       WP CPT Ordering
 * Description:       Drag-and-drop reordering for posts, pages, and custom post types with persistent storage.
 * Version:           1.0.1
 * Plugin URI:        https://github.com/plottcreative/wordpress-cpt-page-ordering
 * Author:            Ewan Lockwood
 * Author URI:        https://plott.co.uk
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Requires at least: 6.0
 * Requires PHP:      7.4
 * Text Domain:       wp-cpt-ordering
 *
 * @package WpCptOrdering
 */

// Prevent direct access.
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Plugin constants.
 */
const VERSION = '1.0.1';
const FILE    = __FILE__;
const DIR     = __DIR__;
const NONCE_ACTION = 'wp_cpt_ordering_action';
const NONCE_NAME = 'wp_cpt_ordering_nonce';
const TERM_NONCE_ACTION = 'wp_cpt_ordering_term_action';
const TERM_NONCE_NAME = 'wp_cpt_ordering_term_nonce';
const TERM_META_KEY = '_menu_order';

/**
 * Load Composer autoloader.
 * This loads PSR-4 classes and helper functions automatically.
 */
if (is_readable(DIR . '/vendor/autoload.php')) {
    require_once DIR . '/vendor/autoload.php';
}

/**
 * Register activation and deactivation hooks.
 */
\register_activation_hook(FILE, [Activation::class, 'activate']);
\register_deactivation_hook(FILE, [Activation::class, 'deactivate']);

/**
 * Bootstrap plugin.
 * Initialize admin and frontend components after WordPress loads.
 */
add_action('plugins_loaded', static function (): void {
    // Admin UI (menus, enqueue, etc.)
    if (\is_admin()) {
        \WpCptOrdering\Admin\Bootstrap::init();
    }

    // Frontend bootstrap
    \WpCptOrdering\Frontend\Bootstrap::init();
});

/**
 * Register REST routes.
 * Must be done in rest_api_init hook.
 */
add_action('rest_api_init', function (): void {
    if (class_exists(\WpCptOrdering\Admin\Rest\Settings_Controller::class)) {
        \WpCptOrdering\Admin\Rest\Settings_Controller::register();
    }
});

