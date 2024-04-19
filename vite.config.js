import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import seoPrerender from 'vite-plugin-seo-prerender';

export default defineConfig({
  plugins: [
    vue(),
    seoPrerender({
      routes: ['/', '/about', '/project', '/services', '/contact', '/product'],
    })
  ],
  base: '/JJWEB/',
});
