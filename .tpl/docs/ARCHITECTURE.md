# 架构

Next.js App Router 的 [[...slug]] 入口选择语言和页面，meta.ts 只注册路由与展示元数据。页面位于 src/features/site-templates/catalog/designfast/pages/；公共布局、渐进入场、动态演示、FAQ、评价、详情和视频分别位于 components/。host.tsx 通过上下文接收可选品牌和扩展页脚，不依赖特定宿主。types.ts 是共享边界。

60节详情保存在 content/details.json，中英文对齐；服务、案例、评价和团队在 content/data.ts。所有运行图片与字体在模板专属 public 子目录，YouTube 是用户点击后才加载的唯一外部运行媒体。主题以 df 前缀隔离，文档滚动条用 html:has(.df-root) 限定，离开模板后自动恢复。没有数据库、缓存、异步任务或业务后端。
