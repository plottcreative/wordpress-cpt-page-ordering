<?php

declare(strict_types=1);

namespace PlottOs;

/**
 * Plugin Name:       WP CPT Ordering
 * Description:       Drag-and-drop reordering for posts, pages, and custom post types with persistent storage.
 * Version:           0.1.0-alpha.2
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
 * Plugin constants for paths and URLs.
 */
const VERSION = '0.1.0-alpha.2';
const FILE    = __FILE__;
const DIR     = __DIR__;

/**
 * Get plugin basename.
 */
function get_basename(): string
{
    return \plugin_basename(FILE);
}

/**
 * Get plugin URL.
 */
function get_url(): string
{
    return \plugins_url('', FILE);
}

/**
 * Get assets URL.
 */
function get_assets_url(): string
{
    return get_url() . '/assets';
}

/**
 * Composer autoloader.
 * Enables PSR-4 class autoloading if dependencies are installed.
 */
if (is_readable(DIR . '/vendor/autoload.php')) {
    require_once DIR . '/vendor/autoload.php';
}

/**
 * Plugin activation hook.
 * Runs once when plugin is activated via WordPress admin.
 *
 * @return void
 */
function activate(): void
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

    // Initialise plugin options with sensible defaults.
    $defaults = [
        'enabled_post_types' => ['post', 'page'],  // Default to core post types.
        'capability'         => 'edit_others_posts', // Editors and above can reorder.
        'orderby_default'    => true,              // Auto-apply ordering to queries.
    ];

    // Only add if doesn't exist (won't overwrite on re-activation).
    \add_option('wp_cpt_ordering_options', $defaults, '', false);
}

\register_activation_hook(FILE, __NAMESPACE__ . '\\activate');

/**
 * Plugin deactivation hook.
 * Runs when plugin is deactivated via WordPress admin.
 * Intentionally minimal - preserves user data and settings.
 *
 * @return void
 */
function deactivate(): void
{
    // Note: We don't delete options or custom order data.
    // This allows users to safely deactivate/reactivate without data loss.
    // If you add custom rewrite rules later, flush them here.
}

\register_deactivation_hook(FILE, __NAMESPACE__ . '\\deactivate');

/**
 * Bootstrap plugin functionality.
 * Loads after all plugins are Initialised to ensure WordPress core is ready.
 */
\add_action('plugins_loaded', static function (): void {
    // Load admin functionality only in admin context.
    if (\is_admin()) {
        init_admin();
    }

    // Load frontend query modifications.
    init_frontend();
});

/**
 * Initialise admin-specific functionality.
 * Handles settings page, drag-drop UI, and AJAX endpoints.
 *
 * @return void
 */
function init_admin(): void
{
    // Get user capability requirement from settings.
    $options    = (array) \get_option('wp_cpt_ordering_options', []);
    $capability = $options['capability'] ?? 'edit_others_posts';

    // Define security constants for nonce validation.
    if (!\defined(__NAMESPACE__ . '\\NONCE_ACTION')) {
        \define(__NAMESPACE__ . '\\NONCE_ACTION', 'wp_cpt_ordering_action');
        \define(__NAMESPACE__ . '\\NONCE_NAME', 'wp_cpt_ordering_nonce');
    }

    // Load admin settings page (under Settings > Post Ordering).
    if (\class_exists('\\PlottOs\\Admin\\Settings')) {
        $settings = new \PlottOs\Admin\Settings($capability);
        $settings->init();
    }

    // Load drag-drop interface (under Tools > Reorder Posts).
    if (\class_exists('\\PlottOs\\Admin\\DragDrop')) {
        $drag_drop = new \PlottOs\Admin\DragDrop($capability);
        $drag_drop->init();
    }

    // Load AJAX handlers for saving order.
    if (\class_exists('\\PlottOs\\Admin\\Ajax')) {
        $ajax = new \PlottOs\Admin\Ajax($capability);
        $ajax->init();
    }
}

/**
 * Initialise frontend functionality.
 * Modifies WP_Query to respect custom ordering.
 *
 * @return void
 */
function init_frontend(): void
{
    // Load query modifier to apply custom ordering to frontend queries.
    if (\class_exists('\\PlottOs\\Frontend\\QueryModifier')) {
        $query_modifier = new \PlottOs\Frontend\QueryModifier();
        $query_modifier->init();
    }
}
