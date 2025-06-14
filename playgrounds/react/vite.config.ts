import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@grid/core': resolve(__dirname, '../../src/index.ts'),
      '@grid/react': resolve(__dirname, '../../src/react/index.ts'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
}) 
