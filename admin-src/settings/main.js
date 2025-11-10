// admin-src/settings/main.js
import { createApp, ref, computed, onMounted } from 'vue';
import './main.css';

function apiFetch(path, options = {}) {
  const { restUrl, nonce } = window.PLOTTOS_SETTINGS_BOOT;
  return window.wp.apiFetch({
    path: path.startsWith('/') ? path : `/${path}`,
    method: options.method || 'GET',
    data: options.data,
    headers: { 'X-WP-Nonce': nonce },
  });
}

const App = {
  setup() {
    const loading = ref(true);
    const saving  = ref(false);
    const postTypes = ref([]);
    const form = ref({ apply_on_archives: true, apply_on_search: false, enabled_types: [] });
    const filter = ref('');

    const filteredTypes = computed(() =>
      postTypes.value.filter(pt =>
        (pt.label + pt.slug).toLowerCase().includes(filter.value.toLowerCase())
      )
    );

    const el = document.getElementById('plottos-cpt-ordering-settings-root');
    if (el) {
      console.log('[PLOTTOS] Mounting Vue settings app');
      createApp(App).mount(el);
    }


    onMounted(async () => {
      try {
        const res = await apiFetch('plottos/v1/settings');
        postTypes.value = res?.postTypes ?? [];
        form.value = res?.settings ?? form.value;
      } catch (e) {
        console.error('[PLOTTOS] Settings fetch failed:', e);
      } finally {
        loading.value = false; // always show UI
      }
    });

    async function save() {
      saving.value = true;
      try {
        const res = await apiFetch('plottos/v1/settings', {
          method: 'PUT',
          data: form.value,
        });
        form.value = res.settings;
        wp?.toast?.success?.(window.PLOTTOS_SETTINGS_BOOT.i18n.saved);
      } catch (e) {
        wp?.toast?.error?.(window.PLOTTOS_SETTINGS_BOOT.i18n.error);
      } finally {
        saving.value = false;
      }
    }

    function toggleType(slug) {
      const set = new Set(form.value.enabled_types);
      set.has(slug) ? set.delete(slug) : set.add(slug);
      form.value.enabled_types = Array.from(set);
    }

    return { loading, saving, form, postTypes, filteredTypes, filter, save, toggleType };
  },
  template: `
    <div v-if="loading">Loading…</div>
    <div v-else class="plottos-settings">
      <div class="plottos-card">
        <h2>Apply Ordering</h2>
        <label><input type="checkbox" v-model="form.apply_on_archives"> Apply on archives</label>
        <label class="ml-4" :class="{disabled: !form.apply_on_archives}">
          <input type="checkbox" v-model="form.apply_on_search" :disabled="!form.apply_on_archives">
          Include search results
        </label>
      </div>

      <div class="plottos-card">
        <h2>Enabled Post Types</h2>
        <input type="search" v-model="filter" placeholder="Filter post types…" />
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
  `
};

(function mount(){
  const el = document.getElementById('plottos-cpt-ordering-settings-root');
  if (!el) return;
  createApp(App).mount(el);
})();
