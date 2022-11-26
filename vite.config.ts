import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      '@common': path.resolve(__dirname, './src/common'),
      '@common/*': path.resolve(__dirname, './src/common'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils/contexts': path.resolve(__dirname, './src/utils/contexts'),
      '@utils/hooks': path.resolve(__dirname, './src/utils/hooks'),
      '@assets': path.resolve(__dirname, './src/assets')
    }
  }
});