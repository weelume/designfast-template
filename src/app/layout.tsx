import type { ReactNode } from 'react'
import './globals.css'
export const metadata={title:'Designfast · 订阅式设计机构',description:'专业设计团队，为品牌、网站和业务增长提供持续支持。'}
export default function Layout({children}:{children:ReactNode}){return <html lang="zh-CN"><body>{children}</body></html>}
