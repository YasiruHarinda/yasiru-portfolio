import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // "/" for Vercel or a <user>.github.io repo; the GitHub Pages workflow sets
  // "/<repo>/" when the site is served from a project repository.
  base: process.env.BASE_PATH || '/',
})
