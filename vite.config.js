import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://ezeedev.github.io/rick-and-morty-app/',
  plugins: [react()]
})
