import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' keeps asset paths relative, so the build works on Netlify, Vercel,
// S3/CloudFront, or a GitHub Pages sub-path without changes.
export default defineConfig({
  base: './',
  plugins: [react()],
})
