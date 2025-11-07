<?php
namespace PlottOs\Admin\Rest;

use WP_Rest_Request;
use WP_Rest_Response;

class SettingController {
    const NAMESPACE = 'plottos/v1';
    const ROUTE = '/settings';

    public static function register() {
        add_action('rest_api_init', function() {
            register_rest_route(self::NAMESPACE, self::ROUTE, [
                [
                    'methods'               => 'GET',
                    'callback'              => [self::class, 'getItems'],
                    'permission_callback'   => [self::class, 'canManage'],
                ],
                [
                    'methods'               => 'PUT',
                    'callback'              => [self::class, 'updateItems'],
                    'permission_callback'   => [self::class, 'canManage'],
                    'args'                  => [
                        'apply_on_archives' => [ 'type' => 'boolean'],
                        'apply_on_search'   => [ 'type' => 'boolean'],
                        'enabled_types' => [ 'type' => 'array', 'items' => ['type' => 'string']],
                    ]
                ]
            ]);
        });
    }

    public static function canManage() {
        return current_user_can('manage_options');
    }

    public static function getItems(WP_REST_Request $req) : WP_REST_Response {
        $opts = get_option('plottos_ordering', [
            'apply_on_archives' => true,
            'apply_on_search'   => false,
            'enabled_types'     => ['page'],
        ]);

        $all_types = get_post_types(['public' => true], 'objects');

        return new WP_REST_Response([
            'settings' => $opts,
            'postTypes' => array_values( array_map(fn($o) => [
                'slug'  => $o->name,
                'label' => $o->label->singular_name ?? $o->label,
            ], $all_types)),
        ]);
    }

    public static function updateItems(WP_REST_Request $req) : WP_REST_Response {
        $payload = [
            'apply_on_archives' => (bool) $req->get_param('apply_on_archives'),
            'apply_on_search'   => (bool) $req->get_param('apply_on_search'),
            'enabled_types'     => array_values( array_filter( array_map('sanitize_key', (array) $req->get_param('enabled_types')))),
        ];
        update_option('plottos_ordering', $payload);
        
        return new WP_REST_Response(['ok' => true, 'settings' => $payload]);
    }
}