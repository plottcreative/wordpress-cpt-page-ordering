<?php
/**
 * Settings page for WP CPT Ordering.
 * Allows users to select which post types to enable ordering for.
 *
 * @package PlottOs
 */

namespace PlottOs\Admin;

class Settings
{
    private string $capability;
    private string $option_name = 'wp_cpt_ordering_options';
    private string $option_group = 'wp_cpt_ordering_group';
    private string $page_slug = 'wp-cpt-ordering';

    public function __construct(string $capability)
    {
        $this->capability = $capability;
    }

    public function init(): void
    {
        \add_action('admin_init', [$this, 'registerSettings']);
        \add_action('admin_menu', [$this, 'addSettingsPage']);
    }

    /**
     * Add settings page under Settings menu.
     */
    public function addSettingsPage(): void {
        $hook = add_options_page(
            __('Post Ordering', 'plottos'),
            __('Post Ordering', 'plottos'),
            $this->capability,
            $this->page_slug, // 'wp-cpt-ordering'
            [$this, 'renderSettingsPage']
        );

        // Only when our page loads:
        add_action('load-' . $hook, function () {
            add_action('admin_enqueue_scripts', [$this, 'enqueueVueAssets']);
        });
    }

    public function enqueueVueAssets(): void {
        $base = plugins_url('', \PlottOs\FILE);
        $ver  = defined('PLOTTOS_VERSION') ? PLOTTOS_VERSION : time();

        wp_enqueue_style('plottos-admin-settings', $base . '/assets/style.css', [], $ver);

        wp_register_script(
            'plottos-admin-settings',
            $base . '/assets/admin-settings.js',
            ['wp-api-fetch','wp-i18n'],
            $ver,
            true
        );

        wp_add_inline_script(
            'plottos-admin-settings',
            'window.PLOTTOS_SETTINGS_BOOT=' . wp_json_encode([
                'restUrl' => esc_url_raw(rest_url('plottos/v1')),
                'nonce'   => wp_create_nonce('wp_rest'),
                'i18n'    => ['saved'=>__('Settings saved','plottos'),'error'=>__('Save failed','plottos')],
            ]) . ';',
            'before'
        );

        wp_enqueue_script('plottos-admin-settings');
    }

    /**
     * Register settings, sections, and fields.
     */
    public function registerSettings(): void
    {
        // Register the option that will store our settings
        \register_setting(
            $this->option_group,  // Option group
            $this->option_name,   // Option name
            [
                'type' => 'array',
                'sanitize_callback' => [$this, 'sanitizeOptions'],
            ]
        );

        // Add settings section
        \add_settings_section(
            'wp_cpt_ordering_main',                 // Section ID
            'Settings',                             // Section title
            [$this, 'renderSectionDescription'],    // Callback
            $this->page_slug                        // Page slug
        );

        // Add field for post type selection
        \add_settings_field(
            'enabled_post_types',                       // Field ID
            'Enable Ordering For',                      // Field title
            [$this, 'renderPostTypesField'],            // Callback
            $this->page_slug,                           // Page slug
            'wp_cpt_ordering_main'                      // Section ID
        );
    }

    /**
     * Render the settings page.
     */
    public function renderSettingsPage(): void
    {
        if (!\current_user_can($this->capability)) {
            \wp_die(\esc_html__('You do not have sufficient permissions to access this page.', 'wp-cpt-ordering'));
        } ?>
        <div class="wrap">
            <h1><?php echo \esc_html(\get_admin_page_title()); ?></h1>

            <div id="plottos-cpt-ordering-settings-root">
                <form action="options.php" method="post" class="plottos-settings-fallback">
                    <?php
                    \settings_fields($this->option_group);
                    \do_settings_sections($this->page_slug);
                    \submit_button('Save Settings');
                    ?>
                </form>
            </div>
        </div>
        <?php
    }


    /**
     * Render section description.
     */
    public function renderSectionDescription(): void
    {
        echo '<p>' . \esc_html__('Select which post types should have drag-and-drop ordering enabled.', 'wp-cpt-ordering') . '</p>';
    }

    /**
     * Render post types checkboxes field.
     */
    public function renderPostTypesField(): void
    {
        // Get current saved options
        $options = \get_option($this->option_name, []);
        $enabled = $options['enabled_post_types'] ?? [];

        // Get all public post types
        $post_types = \get_post_types(['public' => true], 'objects');

        // Output checkboxes for each post type
        foreach ($post_types as $post_type) {
            if ($post_type->name === 'attachment') {
                continue;
            }

            printf(
                '<label style="display: block; margin-bottom: 8px;"><input type="checkbox" name="%s[enabled_post_types][]" value="%s" %s> %s</label>',
                \esc_attr($this->option_name),
                \esc_attr($post_type->name),
                \checked(\in_array($post_type->name, $enabled, true), true, false),
                \esc_html($post_type->label)
            );
        }

        echo '<p class="description">' . \esc_html__('Check the post types you want to reorder.', 'wp-cpt-ordering') . '</p>';
    }

    /**
     * Sanitize settings before saving.
     *
     * @param array|null $input Raw input from form (null when no checkboxes selected).
     * @return array Sanitized options.
     */
    public function sanitizeOptions(?array $input): array
    {
        $sanitized = [];
        if ($input === null) {
            $input = [];
        }

        // Sanitize enabled_post_types array
        if (isset($input['enabled_post_types']) && \is_array($input['enabled_post_types'])) {
            $sanitized['enabled_post_types'] = \array_map('sanitize_key', $input['enabled_post_types']);
        } else {
            $sanitized['enabled_post_types'] = [];
        }

        // Preserve other options that might exist
        $existing = \get_option($this->option_name, []);
        $sanitized['capability'] = $existing['capability'] ?? 'edit_others_posts';
        $sanitized['orderby_default'] = $existing['orderby_default'] ?? true;

        return $sanitized;
    }
}