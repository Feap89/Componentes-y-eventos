import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/pizzeria-mammamia/",   // 👈 nombre exacto de tu repo en GitHub
  plugins: [react()],
})
