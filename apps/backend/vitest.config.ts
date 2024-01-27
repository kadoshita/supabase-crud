import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    dir: '__tests__',
    globals: true,
    watch: false,
    setupFiles: ['__tests__/setup.ts'],
  },
});
