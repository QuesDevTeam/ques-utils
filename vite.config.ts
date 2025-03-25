import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import packageJson from './package.json';

export default defineConfig({
  build: {
    lib: {
      name: '@ques-utils',
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      fileName: (format) => {
        if (format === 'cjs') {
          return 'index.cjs';
        }

        return 'index.js';
      },
    },
    minify: 'esbuild',
  },
  plugins: [
    dts({
      outDir: 'dist',
      include: ['src/**/*'],
    }),
  ],
  test: {
    name: packageJson.name,
    coverage: {
      provider: 'istanbul',
      include: ['src/**/*.test.ts'],
    },
  },
});
