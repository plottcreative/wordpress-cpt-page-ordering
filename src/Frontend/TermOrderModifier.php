<?php
/**
 * Frontend term order modifier.
 * Automatically applies menu_order to term queries for enabled taxonomies.
 *
 * @package WpCptOrdering
 */

declare(strict_types=1);

namespace WpCptOrdering\Frontend;

/**
 * Modifies get_terms queries to respect custom taxonomy term ordering on frontend.
 */
class TermOrderModifier
{
    private string $option_name = 'wp_cpt_ordering_options';

    /**
     * Initialize term order modifier.
     */
    public function init(): void
    {
        // The terms_clauses filter signature is: clauses, taxonomies, args
        \add_filter('terms_clauses', [$this, 'modifyTermQueryClauses'], 10, 3);
    }

    /**
     * Modify term query SQL clauses to apply custom ordering.
     *
     * @param array<string, string> $clauses    SQL clauses array with keys: fields, join, where, orderby, order, limits.
     * @param array<string>         $taxonomies Array of taxonomies being queried.
     * @param array<mixed>          $args       Array of query arguments.
     * @return array<string, string> Modified SQL clauses.
     */
    public function modifyTermQueryClauses(array $clauses, array $taxonomies, array $args): array
    {
        // Only modify frontend queries (not admin area)
        if (\is_admin()) {
            return $clauses;
        }

        // Get plugin settings
        $options = (array) \get_option($this->option_name, []);
        $enabled_taxonomies = $options['enabled_taxonomies'] ?? [];
        $orderby_default = $options['orderby_default'] ?? true;

        // Check if automatic ordering is enabled
        if (!$orderby_default || empty($enabled_taxonomies)) {
            return $clauses;
        }

        // Check if any of the queried taxonomies are enabled
        $should_apply = false;
        foreach ($taxonomies as $taxonomy) {
            if (\in_array($taxonomy, $enabled_taxonomies, true)) {
                $should_apply = true;
                break;
            }
        }

        if (!$should_apply) {
            return $clauses;
        }

        // Get current orderby
        $orderby = $args['orderby'] ?? '';

        // Allow developers to disable ordering for specific contexts
        if (false === \apply_filters('wp_cpt_ordering_apply_term', true, $taxonomies, $args)) {
            return $clauses;
        }

        // Allow developers to force menu_order even if an explicit orderby exists
        $force_menu_order = \apply_filters('wp_cpt_ordering_force_menu_order_term', false, $taxonomies, $args);

        // Respect explicit orderby if not forcing (unless orderby is term_order)
        if (!empty($orderby) && 'term_order' !== $orderby && !$force_menu_order) {
            return $clauses;
        }

        // Apply custom ordering if no orderby specified, orderby is term_order, or forced
        if ('term_order' === $orderby || empty($orderby) || $force_menu_order) {
            global $wpdb;
            $meta_key = \WpCptOrdering\TERM_META_KEY;

            // Add JOIN for term meta
            $clauses['join'] .= " LEFT JOIN {$wpdb->termmeta} AS tm ON t.term_id = tm.term_id AND tm.meta_key = '{$meta_key}'";
            // Order by menu_order (custom meta), defaulting to 0 for terms without order
            $clauses['orderby'] = 'ORDER BY COALESCE(CAST(tm.meta_value AS UNSIGNED), 0)';
            $clauses['order'] = 'ASC';
        }

        return $clauses;
    }
}
