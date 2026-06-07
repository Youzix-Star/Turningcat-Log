# Turningcat Log
喵喵喵 日志都在这里啦
> 纯AI项目 — Turningcat 频道日志归档前端

## 🐾 这是什么
一个基于 [Astro](https://astro.build) 的静态日志站点，用来自动归档和展示 Telegram 频道消息。

## 👀 在线预览
请移步 [log.youzix.top](https://log.youzix.top)
> 感谢 **Turningcat** 提供源源不断的日志内容喵

## 🛠 若您想**部署**此项目
1. Fork 本项目
2. 把这个项目整个文件夹喂给 DeepSeek
3. **询问**部署方法
> 或者……你也可以直接 `npm install && npm run dev` 试试运气 😺

## 📁 项目结构
```
src/
├── components/     # 组件（Header、Footer、LogCard 等）
├── content/logs/   # Markdown 日志文件放这里
├── layouts/        # 页面布局
└── pages/          # 路由页面
```

## 📝 添加新日志
在 `src/content/logs/` 下新建 `.md` 文件，格式参考已有的日志文件。
通过 Telegram Bot 转发频道消息即可自动生成喵~
