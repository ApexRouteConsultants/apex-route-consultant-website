import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
      // Proxy is for LOCAL DEV only
      proxy: {
        '/api': {
          target: 'http://localhost:3000', // Vercel Dev runs on 3000 by default
          changeOrigin: true,
          secure: false,
        },
      },
    },
    plugins: [
      react(), 
      tailwindcss()
    ],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    // Ensure build output goes to 'dist' (Vercel's default)
    build: {
      outDir: 'dist',
    }
  };
});