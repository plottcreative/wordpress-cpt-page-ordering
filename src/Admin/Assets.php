<?php
// src/Admin/Assets.php

add_action('admin_enqueue_scripts', function ($hook) {
    // Only load on Settings → Post Ordering
    if ($hook !== 'settings_page_wp-cpt-ordering') {
        return;
    }

    // Use your defined constants from the plugin bootstrap
    $ver  = defined('\PlottOs\VERSION') ? \PlottOs\VERSION : time();
    $base = plugins_url('', \PlottOs\FILE);

    // Vite output CSS
    wp_enqueue_style(
        'plottos-admin-settings',
        $base . '/assets/style.css',
        [],
        $ver
    );

    // IIFE bundle (no type="module")
    wp_register_script(
        'plottos-admin-settings',
        $base . '/assets/admin-settings.js',
        ['wp-api-fetch','wp-i18n'],
        $ver,
        true
    );

    // Boot data (must come BEFORE the script)
    wp_add_inline_script(
        'plottos-admin-settings',
        'window.PLOTTOS_SETTINGS_BOOT = ' . wp_json_encode([
            'restUrl' => esc_url_raw(rest_url('plottos/v1')),
            'nonce'   => wp_create_nonce('wp_rest'),
            'i18n'    => [
                'saved' => __('Settings saved', 'plottos'),
                'error' => __('Save failed', 'plottos'),
            ],
        ]) . ';',
        'before'
    );

    wp_enqueue_script('plottos-admin-settings');
    
});
