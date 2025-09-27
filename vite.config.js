import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/meshalnayim.github.io/', // <-- Use your GitHub repo name here
});
