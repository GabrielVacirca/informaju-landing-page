import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/',
  build: {
    target: ['safari15', 'ios15'],
    cssTarget: 'safari15',
  },
});
