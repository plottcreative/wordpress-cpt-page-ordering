// src/Admin/Assets.php
add_action('admin_enqueue_scripts', function ($hook) {
    // Adjust this to your actual page hook. Example:
    if ($hook !== 'settings_page_plottos-ordering') return;

    $ver = defined('PLOTTOS_VERSION') ? PLOTTOS_VERSION : time();
    $base = plugins_url('', PLOTTOS_PLUGIN_FILE);

    // CSS produced by Vite (style.css)
    wp_enqueue_style(
        'plottos-admin-settings',
        $base . '/assets/style.css',
        [],
        $ver
    );

    // Boot data (REST base + nonce + strings) BEFORE the app
    wp_register_script(
        'plottos-admin-settings',
        $base . '/assets/admin-settings.js',
        ['wp-api-fetch', 'wp-i18n'], // required WP deps
        $ver,
        true
    );

    wp_add_inline_script(
        'plottos-admin-settings',
        'window.PLOTTOS_SETTINGS_BOOT=' . wp_json_encode([
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
