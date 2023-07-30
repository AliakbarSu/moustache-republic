/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/types': 'src/types',
      '@/context': 'src/context',
      '@/components': 'src/components'
    }
  },
  test: {
    globals: true,
    environment: 'happy-dom'
  }
})
