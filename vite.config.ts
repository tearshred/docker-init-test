import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',           // Output folder for production build
    emptyOutDir: true,        // Clear the directory before building
    assetsDir: 'assets',      // Nest assets in /assets subdirectory
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',  // Cache-busting filenames
        entryFileNames: 'assets/[name]-[hash].js'         // Hashed JS files
      }
    }
  },
  server: {
    host: true,               // Allow LAN access during development
    port: 3000                // Dev server port
  }
})