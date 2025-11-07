import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: {
        'admin-settings': path.resolve(process.cwd(), 'admin-src/settings/main.js'),
      },
      formats: ['es'],
      fileName: (_format, name) => `${name}.js`,
    },
    outDir: 'assets',
    emptyOutDir: false,
    sourcemap: true,
    target: 'es2019',
  },
});
