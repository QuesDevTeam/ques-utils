import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      name: '@ques-utils',
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: (format) => `index.${format}.js`,
    },
    minify: 'esbuild',
  },
  plugins: [dts()],
});
