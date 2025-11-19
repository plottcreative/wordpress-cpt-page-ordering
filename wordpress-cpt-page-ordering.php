<?php

declare(strict_types=1);

namespace PlottOs;

/**
 * Plugin Name:       WP CPT Ordering
 * Description:       Drag-and-drop reordering for posts, pages, and custom post types with persistent storage.
 * Version:           0.1.4
 * Plugin URI:        https://github.com/plottcreative/wordpress-cpt-page-ordering
 * Author:            Ewan Lockwood
 * Author URI:        https://plott.co.uk
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Requires at least: 6.0
 * Requires PHP:      8.0
 * Text Domain:       wp-cpt-ordering
 *
 * @package PlottOs
 */

// Prevent direct access.
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Plugin constants.
 */
const VERSION = '0.1.2';
const FILE    = __FILE__;
const DIR     = __DIR__;

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
        \PlottOs\Admin\Bootstrap::init();
    }

    // Frontend bootstrap (unchanged)
    \PlottOs\Frontend\Bootstrap::init();

    // REST routes must be registered regardless of is_admin()
    if (class_exists(\PlottOs\Admin\Rest\Settings_Controller::class)) {
        \PlottOs\Admin\Rest\Settings_Controller::register();
    }
});


add_action('rest_api_init', function () {
    $routes = rest_get_server()->get_routes();
    error_log( isset($routes['/plottos/v1/settings'])
      ? '[PLOTTOS] REST route PRESENT'
      : '[PLOTTOS] REST route MISSING'
    );
});

