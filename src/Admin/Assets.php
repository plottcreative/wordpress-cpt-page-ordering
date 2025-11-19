<?php
// src/Admin/Assets.php

add_action('admin_enqueue_scripts', function ($hook) {
    // Only load on Settings → Post Ordering
    if ($hook !== 'settings_page_wp-cpt-ordering') {
        return;
    }

    // Use your defined constants from the plugin bootstrap
    $ver  = defined('\WpCptOrdering\VERSION') ? \WpCptOrdering\VERSION : time();
    $base = plugins_url('', \WpCptOrdering\FILE);

    // Vite output CSS
    wp_enqueue_style(
        'wp-cpt-ordering-admin-settings',
        $base . '/assets/style.css',
        [],
        $ver
    );

    // IIFE bundle (no type="module")
    wp_register_script(
        'wp-cpt-ordering-admin-settings',
        $base . '/assets/admin-settings.js',
        ['wp-api-fetch','wp-i18n'],
        $ver,
        true
    );

    // Boot data (must come BEFORE the script)
    wp_add_inline_script(
        'wp-cpt-ordering-admin-settings',
        'window.WP_CPT_ORDERING_SETTINGS_BOOT = ' . wp_json_encode([
            'restUrl' => esc_url_raw(rest_url('wp-cpt-ordering/v1')),
            'nonce'   => wp_create_nonce('wp_rest'),
            'i18n'    => [
                'saved' => __('Settings saved', 'wp-cpt-ordering'),
                'error' => __('Save failed', 'wp-cpt-ordering'),
            ],
        ]) . ';',
        'before'
    );

    wp_enqueue_script('wp-cpt-ordering-admin-settings');
    
});
