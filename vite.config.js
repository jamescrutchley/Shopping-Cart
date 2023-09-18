import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Shopping-Cart/', 
  build: {
    outDir: 'dist', 
    sourcemap: true, 

  }, 
  test: {
    globals: true,
    environment: 'jsdom',
    testMatch: ['./tests/**/*.test.jsx'],
    setupFiles: './src/tests/setup.js'
  }
})
