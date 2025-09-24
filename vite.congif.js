import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ Replace "your-username" with your GitHub username & repo name
export default defineConfig({
  plugins: [react()],
  base: "/meshalnayim.github.io/"
})
