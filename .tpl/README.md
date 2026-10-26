# Designfast 模板使用规则

这是一个 React / Next.js 响应式设计机构网站，包含首页、服务列表与四个详情、案例列表与六个详情、关于、联系、法律入口与三项政策，共19个页面、38条中英文路径。默认中文，英文路径以 /en 开头。数据、价格、评价、团队与政策均为演示，不代表真实业务承诺。

## 环境与运行

Node 24.16.0、pnpm 9.15.4，版本见 .nvmrc 与 package.json。首次执行 pnpm install --frozen-lockfile；开发执行 pnpm dev，默认 http://127.0.0.1:43632，Ctrl+C 停止。生产先 pnpm build，再 pnpm start。使用 PORT 修改端口，TEMPLATE_HOST 修改监听地址；公开到局域网时明确设置为 0.0.0.0。没有数据库或秘密配置，不需要后端。

检查：pnpm typecheck、pnpm lint、pnpm test、pnpm build。打包：pnpm bundle，仅生成本地运行包，不上传或发布。保持锁文件由包管理器生成，不提交 node_modules、.next、.next-dev、日志或真实环境文件。

## 修改入口

src/features/site-templates/catalog/designfast/ 下 config/brand.ts 管理品牌，content/ 管理服务、案例、FAQ、评价及详情双语数据，theme.css 管理主题、字号、断点与滚动条，components/ 管理公共交互，pages/ 组合页面，meta.ts 注册页面。界面文案集中在 content/ui.ts，业务资料在 content/data.ts，详情在 content/details.json，详见 .tpl/customization.json；修改后同时检查双语与三端。

运行图片和字体位于 public/templates/designfast；来源与摘要在 asset-sources.json，字体另附来源及许可说明。参观区按原站使用 YouTube 嵌入，点击封面后才请求第三方播放器；它不是本地视频文件，离线不能播放，也没有静态替代或静默降级。

## 交互与限制

标题逐词入场，作品和工具图标循环滚动，业务卡片包含静态图表、通知和对话示意，评价支持分页、方向键与滑动，FAQ 支持展开收起。系统减少动态时关闭循环与过渡。联系表单只在浏览器本地校验，不发送、不保存；免费模板按钮保留原站公开链接。

功能可运行不等于所有原站动效参数已逐帧一致。当前精确时长、缓动、原站全部断点的逐项一致性以及真实触控设备未完成全面验证，见 .tpl/docs/MOTION.md。协议及实际检查结果分别记录，不把结构检查当成视觉验收。

## 源码与许可

Git：https://github.com/weelume/designfast-template 。模板协议为 git-template 0.2.0，首读 .tpl/README.md、.tpl/template.json、.tpl/project.json。设计参考 https://designfast-demo.framer.website/ 。源码、第三方设计、照片、图标、字体与视频的许可需分别核实；当前不声明第三方素材可商业再分发，listed=false。详见 .tpl/docs/LICENSE.md。
