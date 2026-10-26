'use client'
import {ui} from '../content/ui'
import type { SiteTemplatePageProps } from '../../../types'
import { Layout, CallToAction } from '../components/Layout'
import { Availability, Button, Title } from '../components/Primitives'
import {founderRating} from '../content/data'
import { ClientLogos, Benefits, FAQ, Pricing, ServiceStrip, Testimonials, WhyUs, WorkStrip } from '../components/HomeSections'
export default function HomePage(props:SiteTemplatePageProps) {const zh=props.locale!=='en',locale=props.locale||'zh';return <Layout {...props}><section className="df-hero"><div className="df-grid-floor" aria-hidden="true"/><div className="df-container"><Availability locale={locale}/><Title level={1}>{ui.homepage_websites_that_convert_visitors_into_buyers[zh?'zh':'en']}</Title><p>{ui.homepage_get_a_high_performing_website_designed_to[zh?'zh':'en']}</p><div className="df-hero-actions"><Button href="https://framer.link/LPrypvt">{ui.homepage_get_template_for_free[zh?'zh':'en']}</Button><div><span className="df-stars" aria-label={founderRating.label[locale]}>{'★'.repeat(founderRating.count)}</span><p>{ui.homepage_300_founders_trust_us[zh?'zh':'en']}</p></div></div></div></section><WorkStrip {...props}/><Benefits {...props}/><WhyUs {...props}/><ServiceStrip {...props}/><Testimonials {...props}/><ClientLogos/><Pricing {...props}/><FAQ {...props}/><CallToAction {...props}/></Layout>}

