import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
    'process.env': {}, // safe shim
  },
  build: {
    lib: {
      entry: { 'admin-settings': path.resolve(process.cwd(), 'admin-src/settings/main.js') },
      formats: ['iife'],
      name: 'PlottosSettings',
      fileName: (_format, name) => `${name}.js`,
    },
    outDir: 'assets',
    emptyOutDir: false,
    sourcemap: true,
    target: 'es2019',
  },
});
