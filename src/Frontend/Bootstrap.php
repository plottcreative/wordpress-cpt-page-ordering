<?php
/**
 * Frontend bootstrap.
 *
 * @package PlottOs
 */

declare(strict_types=1);

namespace PlottOs\Frontend;

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
        if (\class_exists('\\PlottOs\\Frontend\\QueryModifier')) {
            $query_modifier = new QueryModifier();
            $query_modifier->init();
        }
    }
}
