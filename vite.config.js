import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    testMatch: ['./tests/**/*.test.jsx'],
    setupFiles: './src/tests/setup.js'
  }
})
