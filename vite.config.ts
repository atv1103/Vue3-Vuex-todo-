import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000, // must be a port other than 5173
    host: true, 
    watch: {
      usePolling: true,
    },
  },
})

// Vite HoteReload trouble https://github.com/vitejs/vite/discussions/16102
