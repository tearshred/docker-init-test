import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import type { UserConfig } from 'vite'

export default defineConfig(({ mode }: { mode: string }): UserConfig => {
  // Load env variables based on mode (development/production)
  const env = loadEnv(mode, process.cwd(), 'VITE_')

  return {
    plugins: [react()],
    preview: {
      host: true,
      port: 3000,
      strictPort: true,
      // To Be used after .env file is fixed
      // allowedHosts: env.VITE_ALLOWED_HOSTS?.split(',') || []
      allowedHosts: [
      'localhost',
      '127.0.0.1',
      'docker-init-test.onrender.com',
      '.onrender.com' // Allow all Render subdomains
    ]
    },
    server: {
      host: true,
      port: 3000
    }
  }
}
);