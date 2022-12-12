import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import EsLint from 'vite-plugin-linter'
import tsConfigPaths from 'vite-tsconfig-paths'

import * as packageJSON from './package.json'

const { EsLinter, linterPlugin } = EsLint

export default defineConfig((configEnv) => ({
  plugins: [
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ['./src/**/*.{ts,tsx}'],
      linters: [new EsLinter({ configEnv })],
    }),
    dts({
      include: ['src/component'],
    }),
  ],
  build: {
    lib: {
      entry: resolve('src', 'component/index.ts'),
      name: 'Counter',
      formats: ['es', 'umd'],
      fileName: (format) => `@andres/counter.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJSON.peerDependencies)],
    },
  },
}))
