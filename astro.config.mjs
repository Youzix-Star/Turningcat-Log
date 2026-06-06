import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://log.youzix.top', // 部署后修改为你的域名
  output: 'static',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});