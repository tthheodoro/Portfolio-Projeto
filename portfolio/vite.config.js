import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Portfolio-Projeto/',
  plugins: [react(), tailwindcss()],
  resolve: {
    dedupe: ['react', 'react-dom']
  }
})