import { spawnSync } from 'child_process';
import { defineConfig } from 'cypress';
import vitePreprocessor from 'cypress-vite';
import { fileURLToPath, URL } from 'node:url';

const width = 1920;
const height = 1080;

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: ['cypress/**/*.*', '**/config.ts'],
    },
  },
  experimentalMemoryManagement: true,
  projectId: 'pkoegu',
  defaultCommandTimeout: 10000,
  retries: {
    openMode: 0,
    runMode: 2,
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      on('file:preprocessor', vitePreprocessor(fileURLToPath(new URL('./cypress.config.vite.mts', import.meta.url))));
      on('after:run', () => {
        spawnSync('nyc', ['report', '--reporter=html', '--reporter=lcov']);
      });
      return config;
    },
    specPattern: ['./cypress/spec/**/*.cy.ts'],
    viewportHeight: height,
    viewportWidth: width,
    waitForAnimations: false,
  },
  component: {
    specPattern: ['./src/**/*.spec.ts'],
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    setupNodeEvents(on, config) {
      on('after:run', () => {
        spawnSync('nyc', ['report', '--reporter=html', '--reporter=lcov']);
      });
      return config;
    },
  },
});
