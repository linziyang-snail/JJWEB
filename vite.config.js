import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';  // 确保重新导入 Vue 插件
import seoPrerender from 'vite-plugin-seo-prerender'; // 假设这是正确的插件名

export default defineConfig({
  plugins: [
    vue(),
    seoPrerender({
      // 使用你定义的路由路径
      routes: ['/', '/about', '/project', '/services', '/contact'],
      // 可能需要其他的配置参数，具体根据插件文档
    })
  ],
  base: '/JJWEB/', // 调整 base 为正确的路径
});
