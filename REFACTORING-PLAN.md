# 🔄 Namespace Refactoring Plan: PlottOs → WpCptOrdering

## Executive Summary

**Current Problem:** Mixed naming across codebase
- PHP uses `PlottOs`
- Repo uses `wordpress-cpt-page-ordering`  
- Text domain uses `wp-cpt-ordering`

**Solution:** Standardize everything to `WpCptOrdering`

**Estimated Time:** 30-45 minutes  
**Risk Level:** Medium (requires database migration)  
**Breaking Changes:** Yes (for existing installations)

---

## 📋 Complete Change List

### 1. PHP Namespace
**Current:** `PlottOs`  
**New:** `WpCptOrdering`

**Files to change:**
```
composer.json
wordpress-cpt-page-ordering.php
src/Activation.php
src/helpers.php
src/Admin/Ajax.php
src/Admin/Assets.php
src/Admin/Bootstrap.php
src/Admin/DragDrop.php
src/Admin/Settings.php
src/Admin/Rest/Settings_Controller.php
src/Frontend/Bootstrap.php
src/Frontend/QueryModifier.php
```

**Find & Replace:**
```bash
PlottOs → WpCptOrdering
```

---

### 2. REST API Namespace
**Current:** `plottos/v1`  
**New:** `wpcptordering/v1`

**Files to change:**
```
src/Admin/Rest/Settings_Controller.php (line 11)
admin-src/settings/App.vue (line 28)
src/Admin/Settings.php (line 64)
src/Admin/Assets.php (line 35)
```

**Find & Replace:**
```bash
plottos/v1 → wpcptordering/v1
```

---

### 3. JavaScript Global Variables
**Current:** `PLOTTOS_SETTINGS_BOOT`  
**New:** `WPCPTORDERING_SETTINGS_BOOT`

**Files to change:**
```
admin-src/settings/App.vue (lines 17, 120, 123)
src/Admin/Settings.php (line 63)
src/Admin/Assets.php (line 34)
```

**Find & Replace:**
```bash
PLOTTOS_SETTINGS_BOOT → WPCPTORDERING_SETTINGS_BOOT
```

---

### 4. JavaScript Console Logs
**Current:** `[PLOTTOS]`  
**New:** `[WPCPTORDERING]`

**Files to change:**
```
admin-src/settings/App.vue (lines 32, 40, 43, etc.)
assets/js/drag-drop.js
wordpress-cpt-page-ordering.php (lines 70-72)
```

**Find & Replace:**
```bash
[PLOTTOS] → [WPCPTORDERING]
PLOTTOS] → WPCPTORDERING]  # For log messages
```

---

### 5. CSS Classes
**Current:** `.plottos-*`  
**New:** `.wpcptordering-*`

**Files to change:**
```
admin-src/settings/main.css
admin-src/settings/App.vue (custom toast classes)
assets/css/drag-drop.css
```

**Find & Replace:**
```bash
plottos- → wpcptordering-
.plottos → .wpcptordering
```

---

### 6. HTML IDs
**Current:** `plottos-cpt-ordering-settings-root`  
**New:** `wpcptordering-settings-root`

**Files to change:**
```
src/Admin/Settings.php (line 118)
admin-src/settings/main.js (line 6)
```

---

### 7. WordPress Script/Style Handles
**Current:** `plottos-admin-settings`  
**New:** `wpcptordering-admin-settings`

**Files to change:**
```
src/Admin/Settings.php (lines 51, 54, 62, 71)
src/Admin/Assets.php (lines 16, 24, 33, 45)
src/Admin/DragDrop.php
```

---

### 8. WordPress Filters/Hooks
**Current:** `plottos_ordering_apply`, `plottos_force_menu_order`  
**New:** `wpcptordering_apply`, `wpcptordering_force_menu_order`

**Files to change:**
```
src/Frontend/QueryModifier.php (lines 99, 104)
README.md (examples)
```

---

### 9. Database Options (CRITICAL)
**Current:** `wp_cpt_ordering_options`  
**Recommendation:** Keep as-is OR create migration

**Options:**
- **Option A:** Keep `wp_cpt_ordering_options` (less breaking)
- **Option B:** Rename to `wpcptordering_options` + add migration

**Migration code (if Option B):**
```php
// Add to Activation.php
public static function migrate_options(): void {
    $old_option = 'wp_cpt_ordering_options';
    $new_option = 'wpcptordering_options';
    
    if (get_option($old_option) !== false && get_option($new_option) === false) {
        update_option($new_option, get_option($old_option));
        // Optionally delete old option after migration
        // delete_option($old_option);
    }
}
```

---

### 10. Text Domain
**Current:** Various (`plottos`, `wp-cpt-ordering`)  
**New:** `wpcptordering`

**Files to change:**
```
All __() and _e() calls
wordpress-cpt-page-ordering.php (line 18)
```

---

## 🛠️ Step-by-Step Execution Plan

### Phase 1: Preparation (5 mins)
1. ✅ Create Git branch: `git checkout -b refactor/namespace-consistency`
2. ✅ Backup database (if running on live site)
3. ✅ Document current REST API endpoint for testing

### Phase 2: PHP Namespace (10 mins)
```bash
# Update composer.json
sed -i '' 's/PlottOs/WpCptOrdering/g' composer.json

# Update all PHP files
find src -type f -name "*.php" -exec sed -i '' 's/PlottOs/WpCptOrdering/g' {} +
sed -i '' 's/PlottOs/WpCptOrdering/g' wordpress-cpt-page-ordering.php

# Regenerate autoloader
composer dump-autoload
```

### Phase 3: REST API (5 mins)
```bash
# Update REST namespace
find . -type f \( -name "*.php" -o -name "*.vue" -o -name "*.js" \) \
  -exec sed -i '' 's/plottos\/v1/wpcptordering\/v1/g' {} +
```

### Phase 4: JavaScript (10 mins)
```bash
# Update global variables
find admin-src -type f -name "*.vue" -o -name "*.js" \
  -exec sed -i '' 's/PLOTTOS_SETTINGS_BOOT/WPCPTORDERING_SETTINGS_BOOT/g' {} +

# Update console logs
find . -type f \( -name "*.vue" -o -name "*.js" -o -name "*.php" \) \
  -exec sed -i '' 's/\[PLOTTOS\]/[WPCPTORDERING]/g' {} +

# Rebuild Vue app
npm run build
```

### Phase 5: CSS (5 mins)
```bash
# Update CSS classes
find admin-src -type f -name "*.css" -exec sed -i '' 's/plottos-/wpcptordering-/g' {} +
find admin-src -type f -name "*.vue" -exec sed -i '' 's/plottos-/wpcptordering-/g' {} +
```

### Phase 6: WordPress Assets (5 mins)
```bash
# Update script/style handles
find src/Admin -type f -name "*.php" \
  -exec sed -i '' "s/'plottos-/'wpcptordering-/g" {} +
```

### Phase 7: Text Domain (5 mins)
```bash
# Update translation calls (conservative approach - only in strings)
find . -type f -name "*.php" \
  -exec sed -i '' "s/, 'plottos')/, 'wpcptordering')/g" {} +
```

### Phase 8: Testing (10 mins)
1. ✅ Clear WordPress object cache
2. ✅ Test REST API: `/wp-json/wpcptordering/v1/settings`
3. ✅ Test settings page loads
4. ✅ Test save functionality
5. ✅ Check console for errors
6. ✅ Verify CSS styles apply
7. ✅ Test drag-drop ordering

### Phase 9: Documentation (5 mins)
```bash
# Update README
sed -i '' 's/plottos/wpcptordering/g' README.md
sed -i '' 's/PlottOs/WpCptOrdering/g' README.md
```

---

## 🚨 Breaking Changes

### For Existing Users:
1. **REST API endpoint changes** (custom integrations will break)
2. **JavaScript global variable** (custom scripts will break)
3. **CSS classes** (custom styles will break)
4. **Filter hooks** (custom filters will break)

### Migration Path:
Add backward compatibility shims:

```php
// In wordpress-cpt-page-ordering.php
add_action('rest_api_init', function() {
    // Alias old endpoint to new
    register_rest_route('plottos/v1', '/settings', [
        'methods' => ['GET', 'PUT'],
        'callback' => function($request) {
            return rest_do_request(
                new WP_REST_Request($request->get_method(), '/wpcptordering/v1/settings')
            );
        },
        'permission_callback' => '__return_true'
    ]);
});

// Alias old filters
add_filter('wpcptordering_apply', function($apply, $query) {
    return apply_filters('plottos_ordering_apply', $apply, $query);
}, 10, 2);
```

---

## ✅ Verification Checklist

After refactoring, verify:

- [ ] `composer dump-autoload` succeeds
- [ ] No PHP fatal errors
- [ ] REST API responds: `GET /wp-json/wpcptordering/v1/settings`
- [ ] Settings page loads
- [ ] Vue app mounts (check for `#wpcptordering-settings-root`)
- [ ] Save button works
- [ ] Toast notifications appear
- [ ] CSS styles apply correctly
- [ ] Console shows `[WPCPTORDERING]` logs
- [ ] Drag-drop ordering works
- [ ] Frontend ordering applies

---

## 📊 Estimated Impact

| File Category | Files Changed | Lines Changed |
|---------------|---------------|---------------|
| PHP | ~15 files | ~200 lines |
| Vue/JS | ~5 files | ~50 lines |
| CSS | ~3 files | ~20 lines |
| Config | 2 files | ~5 lines |
| Docs | 1 file | ~50 lines |
| **Total** | **~26 files** | **~325 lines** |

---

## 🎯 Alternative: Minimal Refactoring

If you want to minimize changes, only fix the most critical inconsistencies:

1. ✅ Keep PHP namespace as `PlottOs` (it works)
2. ✅ Keep REST API as `plottos/v1` (users might rely on it)
3. ✅ Only update text domain to match (consistency)
4. ✅ Update documentation to reflect actual naming

This requires ~10 minutes and changes ~3 files.

---

## 🤔 My Recommendation

**Go with full refactoring to `WpCptOrdering`** because:
1. Plugin is still in early versions (0.1.x)
2. Better to fix now than later
3. More professional naming
4. Matches WordPress conventions
5. Better for long-term maintenance

**When to do it:**
- Before 1.0 release
- During a major version bump (0.1.x → 0.2.0)
- With clear migration guide

---

## 📝 Changelog Entry

```markdown
## [0.2.0] - 2025-XX-XX

### BREAKING CHANGES
- **Namespace:** PHP namespace changed from `PlottOs` to `WpCptOrdering`
- **REST API:** Endpoint changed from `/plottos/v1/*` to `/wpcptordering/v1/*`
- **JavaScript:** Global variable changed from `PLOTTOS_SETTINGS_BOOT` to `WPCPTORDERING_SETTINGS_BOOT`
- **CSS:** Class prefix changed from `.plottos-` to `.wpcptordering-`
- **Filters:** Hook names changed from `plottos_*` to `wpcptordering_*`

### Migration Guide
For backward compatibility, old endpoints and filters are aliased to new ones.
No user action required for standard installations.
```

---

## Need Help?

Want me to execute this refactoring automatically? I can:
1. Run all sed commands
2. Update composer.json
3. Regenerate autoloader
4. Rebuild Vue assets
5. Create migration code
6. Update documentation

Just say the word! 🚀
