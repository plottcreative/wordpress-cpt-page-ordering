<script setup>
import { ref, computed, onMounted } from 'vue';

const loading   = ref(true);
const saving    = ref(false);
const postTypes = ref([]);
const form      = ref({ apply_on_archives: true, apply_on_search: false, enabled_types: [] });
const filter    = ref('');

const filteredTypes = computed(() =>
  postTypes.value.filter(pt =>
    (pt.label + pt.slug).toLowerCase().includes(filter.value.toLowerCase())
  )
);

function apiFetch(path, options = {}) {
  const { restUrl, nonce } = window.PLOTTOS_SETTINGS_BOOT;
  return window.wp.apiFetch({
    path: path.startsWith('/') ? path : `/${path}`,
    method: options.method || 'GET',
    data: options.data,
    headers: { 'X-WP-Nonce': nonce },
  });
}

onMounted(async () => {
  try {
    const res = await apiFetch('plottos/v1/settings');
    postTypes.value = res?.postTypes ?? [];
    form.value      = res?.settings ?? form.value;
  } catch (e) {
    console.error('[PLOTTOS] GET failed:', e);
  } finally {
    loading.value = false;
  } 
});

// Helper function to show notifications with fallback
function showNotice(message, type = 'success') {
  console.log(`[PLOTTOS] Showing ${type} notification:`, message);
  
  if (window.wp?.toast) {
    console.log('[PLOTTOS] WordPress toast API detected');
    const toastFn = window.wp.toast[type];
    if (typeof toastFn === 'function') {
      console.log(`[PLOTTOS] Using native WordPress toast.${type}()`);
      toastFn(message);
      return;
    }
    console.log(`[PLOTTOS] wp.toast.${type} is not a function, using fallback`);
  } else {
    console.log('[PLOTTOS] WordPress toast API not available, using custom fallback');
  }
  
  // Fallback: Create custom toast
  console.log('[PLOTTOS] Creating custom toast notification');
  createCustomToast(message, type);
}

function createCustomToast(message, type) {
  // Remove any existing toasts
  const existing = document.querySelector('.plottos-toast');
  if (existing) existing.remove();
  
  // Create toast element
  const toast = document.createElement('div');
  toast.className = `plottos-toast plottos-toast-${type}`;
  toast.innerHTML = `
    <span class="plottos-toast-icon">${type === 'success' ? '✓' : '✗'}</span>
    <span class="plottos-toast-message">${message}</span>
  `;
  
  // Style the toast
  Object.assign(toast.style, {
    position: 'fixed',
    top: '32px',
    right: '20px',
    padding: '12px 16px',
    borderRadius: '4px',
    backgroundColor: type === 'success' ? '#00a32a' : '#d63638',
    color: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
    zIndex: '999999',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    animation: 'plottos-slide-in 0.3s ease-out',
    maxWidth: '400px'
  });
  
  // Add animation keyframes if not already present
  if (!document.querySelector('#plottos-toast-style')) {
    const style = document.createElement('style');
    style.id = 'plottos-toast-style';
    style.textContent = `
      @keyframes plottos-slide-in {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes plottos-slide-out {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }
  
  // Add to page
  document.body.appendChild(toast);
  
  // Auto-remove after 3 seconds
  setTimeout(() => {
    toast.style.animation = 'plottos-slide-out 0.3s ease-in';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

async function save() {
  saving.value = true;
  try {
    const res = await apiFetch('plottos/v1/settings', { method: 'PUT', data: form.value });
    form.value = res.settings;
    console.log('[PLOTTOS] Save successful:', res);
    showNotice(window.PLOTTOS_SETTINGS_BOOT.i18n.saved, 'success');
  } catch (e) {
    console.error('[PLOTTOS] Save failed:', e);
    showNotice(window.PLOTTOS_SETTINGS_BOOT.i18n.error, 'error');
  } finally {
    setTimeout(() => saving.value = false, 200);
  }
}

function toggleType(slug) {
  const set = new Set(form.value.enabled_types);
  set.has(slug) ? set.delete(slug) : set.add(slug);
  form.value.enabled_types = Array.from(set);
}
</script>

<template>
  <div v-if="loading">Loading…</div>
  <div v-else class="plottos-settings">
    <div class="plottos-card">
      <div class="plottos-card-header">
        <h2>Apply Ordering</h2>
      </div>

      <div class="pt-grid">
        <label><input type="checkbox" v-model="form.apply_on_archives"> Apply on archives</label>
        <label class="ml-4" :class="{disabled: !form.apply_on_archives}">
          <input type="checkbox" v-model="form.apply_on_search" :disabled="!form.apply_on_archives">
          Include search results
        </label>
      </div>
    </div>

    <div class="plottos-card">
      <div class="plottos-card-header">
        <h2>Enabled Post Types</h2>
        <input type="search" v-model="filter" placeholder="Filter post types…" />
      </div>

      <div class="pt-grid">
        <label v-for="pt in filteredTypes" :key="pt.slug" class="pt-item">
          <input type="checkbox"
            :checked="form.enabled_types.includes(pt.slug)"
            @change="toggleType(pt.slug)">
          <span>{{ pt.label }} <small>({{ pt.slug }})</small></span>
        </label>
      </div>
    </div>

    <button class="button button-primary" :disabled="saving" @click="save">
      {{ saving ? 'Saving…' : 'Save settings' }}
    </button>
  </div>
</template>

<style scoped>
/* Optional local styles. Your global admin-src/settings/main.css still applies too. */
</style>
