/// <reference types="vite-react-ssg" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  ssgOptions: {
    script: 'async',
    // nested: /services -> dist/services/index.html (crawler-friendly URLs,
    // and what FEAT verification asserts against).
    dirStyle: 'nested',
    entry: 'src/main.tsx',
  },
});
