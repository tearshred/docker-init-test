import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js'  // Explicit path
  },
  preview: {
    host: '0.0.0.0', // Explicitly allow all hosts
    port: 3000,
    strictPort: true,
    cors: true,
    // Alternative if you want strict security:
    // allowedHosts: ['docker-init-test.onrender.com']
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  }
})
