import { defineConfig } from 'vite'

export default defineConfig({
  root: './public',
  base: '/',
  build: {
    outDir: '../server/public',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './public/index.html',     
        photos: './public/photos.html',   
        about: './public/about.html',     
        notFound: './public/404.html' 
      },
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]', 
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
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