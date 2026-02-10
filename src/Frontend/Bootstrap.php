<?php
/**
 * Frontend bootstrap.
 *
 * @package WpCptOrdering
 */

declare(strict_types=1);

namespace WpCptOrdering\Frontend;

/**
 * Initializes all frontend-specific functionality.
 */
class Bootstrap
{
    /**
     * Initialize frontend components.
     * Modifies WP_Query to respect custom ordering.
     *
     * @return void
     */
    public static function init(): void
    {
        // Load query modifier to apply custom ordering to frontend queries.
        if (\class_exists('\\WpCptOrdering\\Frontend\\QueryModifier')) {
            $query_modifier = new QueryModifier();
            $query_modifier->init();
        }

        // Load term order modifier to apply custom ordering to term queries.
        if (\class_exists('\\WpCptOrdering\\Frontend\\TermOrderModifier')) {
            $term_order_modifier = new TermOrderModifier();
            $term_order_modifier->init();
        }
    }
}
