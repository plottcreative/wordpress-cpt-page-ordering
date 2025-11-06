<?php
/**
 * Fired when the plugin is uninstalled.
 * This will only remove this plugin's options. 
 */

if (!defined('WP_UNINSTALL_PLUGIN')) {
    exit;
}

delete_option('wp_cpt_ordering_options');