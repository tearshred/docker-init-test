import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js'  // Explicit path
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    cors: {
      origin: '*',
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE']
    }
  },
  server: {
    host: true,
    port: 3000,
    fs: {
      strict: false
    }
  }
})
