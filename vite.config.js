import { defineConfig } from 'vite'

export default defineConfig({
  root: '/',
  base: '/',
  build: {
    outDir: '../server/public',
    emptyOutDir: true
  },
  server: {
    proxy: {
      '/photos': {
        target: 'http://localhost:3001/',
        changeOrigin: true,
        secure: false
      },
      '/about': {
        target: 'http://localhost:3001/',
        changeOrigin: true,
        secure: false
      }
    }
  },
})