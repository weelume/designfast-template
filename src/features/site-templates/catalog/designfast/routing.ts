import type { TemplateLocale } from '../../types'
/** 在独立站和宿主子路径中切换语言，同时保留当前页面、查询参数及锚点。 */
export function alternateLocalePath(basePath:string,locale:TemplateLocale,pathname:string,search='',hash=''):string{
  const root=locale==='en'?basePath.replace(/\/en$/,''):basePath
  if(basePath && pathname!==basePath && !pathname.startsWith(basePath+'/'))throw new Error('当前页面不属于模板基础路径')
  const remainder=pathname.slice(basePath.length)
  const suffix=remainder==='/'?'':remainder
  return ((root+(locale==='zh'?'/en':'')+suffix)||'/')+search+hash
}
