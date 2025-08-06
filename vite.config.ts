import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js'  // Explicit path
  },
  preview: {
    host: true, // Allow all hosts
    port: 3000,
    strictPort: true,
  },
  server: {
    port: 3000,
  }
})
