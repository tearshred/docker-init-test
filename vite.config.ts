import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js'  // Explicit path
  },
  preview: {
    host: true, // Listen on all interfaces
    port: 3000,
    strictPort: true,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'docker-init-test.onrender.com',
      '.onrender.com' // Allow all Render subdomains
    ]
  },
  server: {
    host: true, // Development mode
    port: 3000
  }
})
