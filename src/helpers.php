<?php
/**
 * Plugin helper functions.
 * Utility functions used throughout the plugin.
 *
 * @package WpCptOrdering
 */

declare(strict_types=1);

namespace WpCptOrdering;

/**
 * Get plugin basename.
 * Can't use const because plugin_basename() is a function call.
 *
 * @return string Plugin basename.
 */
function get_basename(): string
{
    return \plugin_basename(FILE);
}

/**
 * Get plugin URL.
 * Can't use const because plugins_url() is a function call.
 *
 * @return string Plugin URL.
 */
function get_url(): string
{
    return \plugins_url('', FILE);
}

/**
 * Get assets URL.
 *
 * @return string Assets directory URL.
 */
function get_assets_url(): string
{
    return get_url() . '/assets';
}
