import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Profile/', // Set to your repository name
  build: {
    outDir: 'dist',
  },
});
