import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Siten doğrudan ana domainde (talhaozcan.github.io) çalışacağı için '/' olmalı
})