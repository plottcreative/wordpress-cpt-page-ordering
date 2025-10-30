<?php

declare(strict_types=1);

namespace PlottOs;

/**
 * Plugin Name:       WP CPT Ordering
 * Description:       Drag-and-drop reordering for posts, pages, and custom post types with persistent storage.
 * Version:           0.1.0-beta.1
 * Plugin URI:        https://github.com/ewanlockwood/wordpress-cpt-page-ordering
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
const VERSION = '0.1.0-beta.1';
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
\add_action('plugins_loaded', static function (): void {
    if (\is_admin()) {
        Admin\Bootstrap::init();
    }
    Frontend\Bootstrap::init();
});
