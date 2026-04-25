import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Componentes-y-eventos/',   // 👈 nombre exacto de tu repo en GitHub
})
