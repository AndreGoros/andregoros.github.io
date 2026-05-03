import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Sitio de usuario `username.github.io`: raíz `/` en Pages.
  base: '/',
})
