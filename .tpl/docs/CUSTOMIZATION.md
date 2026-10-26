# 修改指南

品牌：config/brand.ts 与 brand.svg；接入其他宿主时使用 DesignfastHostProvider。文案：content/ui.ts、content/data.ts 与 content/details.json，保持中英同步，数字与客户资料仅作演示。主题：theme.css 开头令牌；保持字号 clamp、三端断点、对比度、焦点样式和滚动条范围。

动效：Primitives.tsx 管理标题与滚动触发；HomeSections.tsx 管理循环、评价和 FAQ；StudioTour.tsx 管理按需视频。新增页面需要自己的 pages 模块，并同步 meta.ts 与 .tpl/template.json。常见入口的准确路径见 .tpl/customization.json。执行类型、lint、测试与构建，更新相关真实截图；业务源码变化后重新记录验收摘要，不把旧报告当作新结果。
