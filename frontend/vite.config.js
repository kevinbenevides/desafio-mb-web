import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist', // Pasta de saída do build
    emptyOutDir: true, // Limpa a pasta de saída antes de construir
  },
})
