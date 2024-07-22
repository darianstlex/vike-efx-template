import { fileURLToPath, URL } from 'node:url';
import { visualizer } from 'rollup-plugin-visualizer';
import { telefunc } from 'telefunc/vite';
import vike from 'vike/plugin';
import { defineConfig } from 'vite';
import istanbul from 'vite-plugin-istanbul';

import mdx from '@mdx-js/rollup';
import svgr from '@svgr/rollup';
import react from '@vitejs/plugin-react';

const config = defineConfig(() => ({
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'SOURCEMAP_ERROR') {
          return;
        }
        warn(warning);
      },
    },
    sourcemap: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "sass:math";',
      },
    },
  },
  ssr: {
    noExternal: ['react-use'],
  },
  optimizeDeps: {
    include: ['react-use'],
  },
  plugins: [
    vike({ prerender: true }),
    svgr({
      dimensions: false,
      svgoConfig: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
          },
        ],
      },
    }),
    mdx(),
    telefunc(),
    react(),
    ...(process.env.USE_BABEL_PLUGIN_ISTANBUL
      ? [
          istanbul({
            include: 'src/*',
            exclude: ['node_modules', 'tests/'],
            extension: ['.js', '.ts', '.tsx'],
          }),
        ]
      : []),
    visualizer({
      filename: 'visualizer.html',
      template: 'flamegraph',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@engine': fileURLToPath(new URL('./src/renderer', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@features': fileURLToPath(new URL('./src/features', import.meta.url)),
      '@services': fileURLToPath(new URL('./src/services', import.meta.url)),
      '@utilities': fileURLToPath(new URL('./src/utilities', import.meta.url)),
    },
  },
  server: {
    watch: {
      ignored: ['**/coverage/**', '**/cypress/**', '**/node_modules/**'],
    },
  },
}));

export default config;
