import { createApp } from 'vue';
import App from './App.vue';
import './main.css';

(function mount() {
  const el = document.getElementById('plottos-cpt-ordering-settings-root');
  if (!el) return;
  createApp(App).mount(el);
})();
