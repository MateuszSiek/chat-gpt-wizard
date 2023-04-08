import { defineConfig } from 'vite'
import { crx } from '@crxjs/vite-plugin'
import react from '@vitejs/plugin-react'

import manifest from './src/manifest'
//@ts-ignore
import {config} from './src/read_pages_folder'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    define: {
      '__APP_VERSION__': JSON.stringify(process.env.npm_package_version),
    },
    build: {
      emptyOutDir: true,
      outDir: 'build',
      rollupOptions: {
        input: config,
        output: {
          chunkFileNames: 'assets/chunk-[hash].js',
        },
      },
    },

    plugins: [crx({ manifest }), react()],
  }
})
