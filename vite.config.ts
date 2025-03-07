import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import sitemap from 'vite-plugin-sitemap';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      viteStaticCopy({
        targets: [
          { src: 'public/.htaccess', dest: '' }, // Copie .htaccess dans dist/
          { src: 'public/robots.txt', dest: '' } // Copie .htaccess dans dist/
        ]
      }),
      sitemap({
        hostname: 'https://www.angotbaptiste.com',
        changefreq: 'weekly',
        lastmod: new Date(),
        priority: 1
      })
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    }
  }
});
