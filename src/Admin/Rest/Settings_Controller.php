<?php
declare(strict_types=1);

namespace WpCptOrdering\Admin\Rest;

use WP_REST_Request;
use WP_REST_Response;

final class Settings_Controller
{
    private const NS = 'wp-cpt-ordering/v1';
    private const ROUTE = '/settings';
    private const OPTION = 'wp_cpt_ordering_options';

    public static function register(): void
    {
        \add_action('rest_api_init', function () {
            \register_rest_route(self::NS, self::ROUTE, [
                [
                    'methods'             => 'GET',
                    'callback'            => [self::class, 'get_items'],
                    'permission_callback' => [self::class, 'can_manage'],
                ],
                [
                    'methods'             => 'PUT',
                    'callback'            => [self::class, 'update_items'],
                    'permission_callback' => [self::class, 'can_manage'],
                    'args'                => [
                        'apply_on_archives' => ['type' => 'boolean'],
                        'apply_on_search'   => ['type' => 'boolean'],
                        'enabled_types'     => ['type' => 'array', 'items' => ['type' => 'string']],
                    ],
                ],
            ]);
        });
    }

    public static function can_manage(): bool
    {
        return \current_user_can('manage_options');
    }

    public static function get_items(WP_REST_Request $r): WP_REST_Response
    {
        $opts = (array) \get_option(self::OPTION, []);
        $normalized = [
            'apply_on_archives' => (bool)($opts['apply_on_archives'] ?? true),
            'apply_on_search'   => (bool)($opts['apply_on_search'] ?? false),
            // Map your stored key to what Vue expects
            'enabled_types'     => \array_values((array)($opts['enabled_post_types'] ?? ['page'])),
        ];

        $pts = \get_post_types(['public' => true], 'objects');
        $postTypes = \array_values(\array_map(
            fn($o) => ['slug' => $o->name, 'label' => $o->labels->singular_name ?? $o->label],
            $pts
        ));

        return new WP_REST_Response(['settings' => $normalized, 'postTypes' => $postTypes]);
    }

    public static function update_items(WP_REST_Request $r): WP_REST_Response
    {
        // Write back using your *stored* option schema (enabled_post_types)
        $enabled = \array_values(\array_filter(\array_map('sanitize_key', (array)$r->get_param('enabled_types'))));
        $payload = [
            'apply_on_archives'   => (bool)$r->get_param('apply_on_archives'),
            'apply_on_search'     => (bool)$r->get_param('apply_on_search'),
            'enabled_post_types'  => $enabled,
        ];

        \update_option(self::OPTION, \array_merge(
            (array)\get_option(self::OPTION, []),
            $payload
        ));

        // Return Vue’s shape
        return new WP_REST_Response([
            'ok' => true,
            'settings' => [
                'apply_on_archives' => $payload['apply_on_archives'],
                'apply_on_search'   => $payload['apply_on_search'],
                'enabled_types'     => $enabled,
            ],
        ]);
    }
}
