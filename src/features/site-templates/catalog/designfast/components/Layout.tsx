'use client'
import {ui} from '../content/ui'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import type { SiteTemplatePageProps } from '../../../types'
import { useDesignfastHost } from '../host'
import { brand, socialProfiles } from '../config/brand'
import {tileTransition} from '../config/motion'
import { alternateLocalePath } from '../routing'
import { policies, navLinks } from '../content/data'
import { Availability, Button, Title } from './Primitives'
import '../theme.css'

export function Layout({ children, locale = 'zh', basePath }: SiteTemplatePageProps & { children: ReactNode }) {
  const host = useDesignfastHost(), pathname = usePathname(), router = useRouter(), reduced = useReducedMotion()
  const [open, setOpen] = useState(false), toggle = useRef<HTMLButtonElement>(null), menu = useRef<HTMLDivElement>(null)
  const href = (slug = '') => `${basePath}${slug ? `/${slug}` : ''}` || '/'
  const links=navLinks
  const logo = <><img src={host.lightLogo || host.logo || brand.logo} alt="" width="24" height="24" /><span>{host.brandName[locale]}</span></>
  // 菜单打开时锁定文档滚动，关闭后精确恢复宿主原来的内联样式。
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const first = menu.current?.querySelector<HTMLAnchorElement>('a')
    first?.focus()
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') { setOpen(false); toggle.current?.focus() }
      if (event.key !== 'Tab') return
      const items = Array.from(menu.current?.querySelectorAll<HTMLElement>('a,button') || [])
      const firstItem = items[0], last = items.at(-1)
      if (event.shiftKey && document.activeElement === firstItem) { event.preventDefault(); last?.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); firstItem?.focus() }
    }
    document.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = previous; document.removeEventListener('keydown', onKey) }
  }, [open])
  function switchLanguage() { return alternateLocalePath(basePath, locale, pathname) }
  return <div className="df-root" lang={locale === 'zh' ? 'zh-CN' : 'en'}>
    <a href="#df-main" className="df-skip">{ui.layout_skip_to_content[locale]}</a>
    <motion.header className="df-header df-glass" initial={reduced ? false : { y:-50,opacity:.001 }} animate={{y:0,opacity:1}} transition={reduced?{duration:0}:tileTransition}>
      <Link href={href()} className="df-brand">{logo}</Link>
      <nav aria-label={ui.layout_main_navigation[locale]}>{links.map(link => <Link key={link.slug} href={href(link.slug)} aria-current={pathname === href(link.slug) ? 'page' : undefined}>{link[locale]}</Link>)}</nav>
      <div className="df-header-actions"><Link className="df-language" href={switchLanguage()} onClick={event => { event.preventDefault(); const target = switchLanguage() + window.location.search + window.location.hash; router.push(target) }} aria-label={ui.layout_switch_to_chinese[locale]}>{ui.layout_copy[locale]}</Link><Button href={href('contact')}>{ui.layout_contact_us[locale]}</Button></div>
      <button ref={toggle} className="df-menu-toggle" aria-expanded={open} aria-controls="df-menu" aria-label={open?ui.layout_close_menu[locale]:ui.menu_open_menu[locale]} onClick={() => setOpen(!open)}><span /><span /></button>
    </motion.header>
    <AnimatePresence>{open && <motion.div ref={menu} id="df-menu" role="dialog" aria-modal="true" aria-label={ui.layout_navigation_menu[locale]} className="df-menu df-glass" initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}} exit={{opacity:0,height:0}} transition={{duration:reduced ? 0 : .3}}>{links.map(link=><Link key={link.slug} href={href(link.slug)} onClick={()=>setOpen(false)}>{link[locale]}</Link>)}<Link href={href('contact')} onClick={()=>setOpen(false)}>{ui.layout_contact_us[locale]}</Link><Link href={switchLanguage()} onClick={event=>{event.preventDefault();setOpen(false);router.push(switchLanguage()+window.location.search+window.location.hash)}}>{ui.layout_copy_2[locale]}</Link><button onClick={()=>{setOpen(false);toggle.current?.focus()}}>{ui.layout_close_menu[locale]}</button></motion.div>}</AnimatePresence>
    <main id="df-main">{children}</main>
    <footer className="df-container df-footer"><div><Link className="df-brand" href={href()}>{logo}</Link><p>© {brand.year}. {ui.layout_your_design_partner[locale]}</p>{host.filing}</div><div><h4>{ui.layout_company[locale]}</h4>{links.slice(1).map(link=><Link key={link.slug} href={href(link.slug)}>{link[locale]}</Link>)}</div><div><Link href={href('legal')}><h4>{ui.layout_legal[locale]}</h4></Link>{policies.map(policy=><Link key={policy.slug} href={href(`legal/${policy.slug}`)}>{policy.title[locale]}</Link>)}</div><div className="df-social"><a href={socialProfiles.x} target="_blank" rel="noreferrer" aria-label="X">X</a><a href={socialProfiles.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">Instagram</a><a href={socialProfiles.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">LinkedIn</a></div></footer>
    {host.marketplaceHref && <Link href={host.marketplaceHref} className="df-market" aria-label={host.marketplaceAriaLabel?.[locale]}><img src={host.lightLogo || host.logo || brand.logo} width="24" height="24" alt=""/><span>{host.brandName[locale]}</span></Link>}
  </div>
}
export function CallToAction({ locale='zh',basePath }: SiteTemplatePageProps) { return <section className="df-cta df-container"><Availability locale={locale}/><Title>{ui.calltoaction_let_s_work_together[locale]}</Title><p>{ui.calltoaction_join_our_subscription_service_and_get_your[locale]}</p><Button href={`${basePath}/contact`}>{ui.calltoaction_book_your_free_intro_call[locale]}</Button></section> }


