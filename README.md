![Header](docs/header.png)

Drag-and-drop reordering for WordPress posts, pages, and custom post types with persistent storage.

![Version](https://img.shields.io/badge/version-0.4.0-blue)
![PHP](https://img.shields.io/badge/php-%3E%3D8.0-brightgreen)
![WordPress](https://img.shields.io/badge/wordpress-%3E%3D6.0-blue)
![License](https://img.shields.io/badge/license-GPL--2.0-orange)

---

## Features

- **Native WordPress Integration** - Works directly on edit.php pages
- **Auto-Save** - Changes saved automatically on drop
- **Universal Compatibility** - Works with all queries (main query & custom WP_Query)
- **Non-Intrusive** - Respects explicit `orderby` parameters
- **Security-First** - Nonce verification and capability checks
- **Zero Configuration** - Works out of the box with posts and pages
- **Modern Architecture** - PHP 8.0+, PSR-4 autoloading, strict types
- **Minimal VUE** - Settings Configuration

---

## Requirements

- **PHP:** 8.0 or higher
- **WordPress:** 6.0 or higher
- **User Role:** Editor or Administrator (for reordering)

---

## Installation

### Via Composer (Recommended)
_Use the token provided by PLOTT. If you don't have one, request one [here](mailto:ewan@plott.co.uk)_
```bash
composer config --global --auth http-basic.plottcreative.repo.repman.io token REPLACE_WITH_TOKEN
```


```bash
composer config repositories.plottcreative '{"type":"composer","url":"https://plottcreative.repo.repman.io"}'
```

```bash
composer require plottcreative/wordpress-cpt-page-ordering
```

### Via Git Clone

```bash
cd wp-content/plugins/
git clone https://github.com/ewanlockwood/wordpress-cpt-page-ordering.git
cd wordpress-cpt-page-ordering
composer install --no-dev --optimize-autoloader
```

### Via ZIP Upload

1. Download the latest release ZIP
2. Go to **Plugins → Add New → Upload Plugin**
3. Choose the ZIP file and click **Install Now**
4. Click **Activate Plugin**

---

## Quick Start

### 1. Activate the Plugin

Navigate to **Plugins** in your WordPress admin and activate **WP CPT Ordering**.

### 2. Configure Post Types

1. Go to **Settings → WP CPT Ordering**
2. Check the post types you want to enable ordering for
3. Click **Save Settings**

![Settings Page](docs/screenshots/settings.png)

### 3. Reorder Posts

1. Navigate to the post list page (e.g., **Posts → All Posts** or **edit.php?post_type=your_cpt**)
2. You'll see a notice: _"Drag and drop rows to reorder. Changes are saved automatically."_
3. Drag rows up or down using the **row-resize** cursor
4. Drop to save - changes persist immediately

![Drag-Drop Interface](docs/screenshots/drag-drop.png)

### 4. View on Frontend

Your custom order will automatically apply to:
- Archive pages
- Category/tag pages
- Custom post type archives
- Custom `WP_Query` without explicit `orderby`

---

## Configuration

### Settings Page

**Location:** `wp-admin/options-general.php?page=wp-cpt-ordering`

**Options:**

| Option | Default | Description |
|--------|---------|-------------|
| **Enable Ordering For** | Posts, Pages | Select which post types should have drag-drop ordering |

### Database Storage

Post order is stored in WordPress's native `menu_order` column in the `wp_posts` table. No custom tables required.

---

## Usage

### For End Users

Simply drag and drop rows on post list pages. Changes save automatically.

### For Developers

#### Manual Query with Custom Order

```php
$args = [
    'post_type' => 'faq',
    'orderby'   => 'menu_order',
    'order'     => 'ASC',
];
$query = new WP_Query($args);
```

#### Automatic Ordering

The plugin automatically applies `menu_order` to queries for enabled post types **unless** you specify an explicit `orderby`:

```php
// This will use custom order (automatic)
$query = new WP_Query(['post_type' => 'faq']);

// This will use date order (your explicit choice is respected)
$query = new WP_Query([
    'post_type' => 'faq',
    'orderby'   => 'date',
]);
```

#### Disable Automatic Ordering

To disable automatic frontend ordering while keeping admin drag-drop:

```php
add_filter('option_wp_cpt_ordering_options', function($options) {
    $options['orderby_default'] = false;
    return $options;
});
```

---

## How It Works

### Admin Area

1. **Settings Page** - Uses WordPress Settings API to store enabled post types
2. **Drag-Drop UI** - SortableJS library provides smooth drag-and-drop
3. **AJAX Save** - Order sent to backend via secure AJAX endpoint
4. **Database Update** - `menu_order` column updated for each post

### Frontend

1. **Query Modifier** - Hooks into `pre_get_posts`
2. **Smart Detection** - Only applies to enabled post types
3. **Non-Intrusive** - Respects explicit `orderby` parameters
4. **Universal** - Works with main query and custom WP_Query

---

## Security

The plugin implements multi-layer security:

- **Nonce Verification** - All AJAX requests verified
- **Capability Checks** - Only Editors+ can reorder
- **Input Sanitization** - All input sanitized (`sanitize_key`, `(int)` casting)
- **Output Escaping** - All output escaped (`esc_html`, `esc_attr`)
- **Post Validation** - Verifies post exists and matches type
- **No SQL Injection** - Uses WordPress functions (`wp_update_post`)

---

## Developer Notes

### Architecture

#### Directory Structure
```
wordpress-cpt-page-ordering/
├── wordpress-cpt-page-ordering.php  # Plugin entry point
├── composer.json                     # PSR-4 autoloading (WpCptOrdering namespace)
├── package.json                      # NPM dependencies (Vue, Vite)
├── vite.config.mjs                   # Vue build configuration
├── src/                              # PHP source files
│   ├── Activation.php                # Activation/deactivation hooks
│   ├── helpers.php                   # Helper functions
│   ├── Admin/
│   │   ├── Bootstrap.php             # Admin initialization
│   │   ├── Settings.php              # Settings page (legacy)
│   │   ├── Assets.php                # Asset loader
│   │   ├── DragDrop.php              # Drag-drop UI
│   │   ├── Ajax.php                  # AJAX handler for reordering
│   │   └── Rest/
│   │       └── Settings_Controller.php  # REST API for Vue settings
│   └── Frontend/
│       ├── Bootstrap.php             # Frontend initialization
│       └── QueryModifier.php         # Query modification (pre_get_posts)
├── admin-src/                        # Vue source files (development)
│   └── settings/
│       ├── App.vue                   # Main Vue component
│       ├── main.js                   # Vue app entry point
│       └── main.css                  # Settings page styles
├── assets/                           # Compiled assets (production)
│   ├── admin-settings.js             # Built Vue app (69KB)
│   ├── style.css                     # Built CSS
│   ├── js/
│   │   └── drag-drop.js              # SortableJS integration
│   └── css/
│       └── drag-drop.css             # Drag-drop UI styles
└── vendor/                           # Composer dependencies
```

#### PHP Namespace Structure

```php
WpCptOrdering\                        # Root namespace (v0.2.0+)
├── Activation                         # Activation/deactivation handler
├── Admin\Bootstrap                    # Admin area initialization
├── Admin\Settings                     # Settings page class
├── Admin\DragDrop                     # Drag-drop UI handler
├── Admin\Ajax                         # AJAX save handler
├── Admin\Rest\Settings_Controller     # REST API controller
├── Frontend\Bootstrap                 # Frontend initialization
└── Frontend\QueryModifier             # Query modification logic
```

**Note:** Prior to v0.2.0, the namespace was `PlottOs`. This was changed for consistency.

### Hooks & Filters

#### WordPress Actions

| Action | Description | Parameters |
|--------|-------------|------------|
| `plugins_loaded` | Plugin initialization | None |
| `admin_init` | Register settings | None |
| `admin_menu` | Add settings page | None |
| `admin_enqueue_scripts` | Load admin assets | `$hook` |
| `wp_ajax_wp_cpt_ordering_save` | Handle reorder AJAX | None |
| `rest_api_init` | Register REST routes | None |
| `pre_get_posts` | Modify queries | `WP_Query` |

**Example: Plugin Initialization**
```php
add_action('plugins_loaded', function() {
    // Plugin bootstraps here
    if (is_admin()) {
        WpCptOrdering\Admin\Bootstrap::init();
    }
    WpCptOrdering\Frontend\Bootstrap::init();
});
```

#### Custom Filters (Plugin-Specific)

##### 1. `wp_cpt_ordering_apply`
Control whether ordering should apply to a specific query.

**Parameters:**
- `$apply` (bool) - Whether to apply ordering (default: `true`)
- `$query` (WP_Query) - The query object

**Returns:** `bool`

**Examples:**
```php
// Disable ordering on search results
add_filter('wp_cpt_ordering_apply', function ($apply, $query) {
    if ($query->is_search()) {
        return false;
    }
    return $apply;
}, 10, 2);

// Only apply ordering on main query
add_filter('wp_cpt_ordering_apply', function ($apply, $query) {
    return $query->is_main_query();
}, 10, 2);

// Disable ordering for specific post type
add_filter('wp_cpt_ordering_apply', function ($apply, $query) {
    if ($query->get('post_type') === 'product') {
        return false; // Let WooCommerce handle product ordering
    }
    return $apply;
}, 10, 2);
```

##### 2. `wp_cpt_ordering_force_menu_order`
Force menu_order even when a query has explicit `orderby` set.

**Parameters:**
- `$force` (bool) - Whether to force (default: `false`)
- `$query` (WP_Query) - The query object

**Returns:** `bool`

**Examples:**
```php
// Always use menu_order on FAQ archives
add_filter('wp_cpt_ordering_force_menu_order', function ($force, $query) {
    return is_post_type_archive('faq');
}, 10, 2);

// Force on custom page template
add_filter('wp_cpt_ordering_force_menu_order', function ($force, $query) {
    return is_page_template('template-ordered-posts.php');
}, 10, 2);
```

##### 3. `option_wp_cpt_ordering_options`
Modify plugin options programmatically (WordPress core filter).

**Parameters:**
- `$options` (array) - Plugin options

**Returns:** `array`

**Examples:**
```php
// Disable automatic ordering globally
add_filter('option_wp_cpt_ordering_options', function($options) {
    $options['orderby_default'] = false;
    return $options;
});

// Programmatically enable post types
add_filter('option_wp_cpt_ordering_options', function($options) {
    $options['enabled_post_types'][] = 'portfolio';
    return $options;
});
```

### Constants

```php
WpCptOrdering\VERSION        // Plugin version (e.g., '0.2.0')
WpCptOrdering\FILE           // Plugin file path (__FILE__)
WpCptOrdering\DIR            // Plugin directory (__DIR__)
WpCptOrdering\NONCE_ACTION   // Nonce action: 'wp_cpt_ordering_action'
WpCptOrdering\NONCE_NAME     // Nonce field: 'wp_cpt_ordering_nonce'
```

**Usage:**
```php
// Check version
if (version_compare(WpCptOrdering\VERSION, '0.2.0', '>=')) {
    // Use new features
}

// Get plugin URL
$plugin_url = plugins_url('', WpCptOrdering\FILE);
```

### Helper Functions

```php
WpCptOrdering\get_basename()     // Plugin basename (for activation hooks)
WpCptOrdering\get_url()          // Plugin URL
WpCptOrdering\get_assets_url()   // Assets directory URL
```

**Usage:**
```php
// Enqueue custom script
wp_enqueue_script(
    'my-custom-script',
    WpCptOrdering\get_assets_url() . '/js/custom.js',
    [],
    WpCptOrdering\VERSION
);
```

### REST API Endpoints

#### `GET /wp-json/wp-cpt-ordering/v1/settings`
Get current settings and available post types.

**Response:**
```json
{
  "settings": {
    "apply_on_archives": true,
    "apply_on_search": false,
    "enabled_types": ["post", "page"]
  },
  "postTypes": [
    {"slug": "post", "label": "Post"},
    {"slug": "page", "label": "Page"}
  ]
}
```

#### `PUT /wp-json/wp-cpt-ordering/v1/settings`
Update plugin settings.

**Request Body:**
```json
{
  "apply_on_archives": true,
  "apply_on_search": false,
  "enabled_types": ["post", "page", "portfolio"]
}
```

**Response:**
```json
{
  "ok": true,
  "settings": {
    "apply_on_archives": true,
    "apply_on_search": false,
    "enabled_types": ["post", "page", "portfolio"]
  }
}
```

**cURL Example:**
```bash
curl -X PUT "https://yoursite.com/wp-json/wp-cpt-ordering/v1/settings" \
  -H "Content-Type: application/json" \
  -H "X-WP-Nonce: YOUR_NONCE" \
  --data '{"enabled_types":["post","page"]}'
```

---

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards

- PHP 8.0+ with strict types
- PSR-4 autoloading
- WordPress Coding Standards
- PHPDoc blocks on all methods
- Translatable strings

---

## Support

- **Issues:** [GitHub Issues](https://github.com/plottcreative/wordpress-cpt-page-ordering/issues)
- **Email:** ewan@plott.co.uk

---

## License

GPL v2 or later. See [LICENSE](LICENSE) for details.

---

## Credits

**Author:** Ewan Lockwood  
**Website:** https://plott.co.uk  
**Repository:** https://github.com/plottcreative/wordpress-cpt-page-ordering

**Built with:**
- [SortableJS](https://sortablejs.github.io/Sortable/) - Drag-and-drop library
- [Composer](https://getcomposer.org/) - Dependency management
