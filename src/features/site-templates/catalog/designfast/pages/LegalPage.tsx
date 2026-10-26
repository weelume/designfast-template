'use client'
import {ui} from '../content/ui'
import Link from 'next/link'
import type {SiteTemplatePageProps} from '../../../types'
import {policies} from '../content/data'
import {Layout} from '../components/Layout'
import {InteriorHero} from '../components/InteriorHero'
import {Reveal} from '../components/Primitives'
export default function LegalPage(props:SiteTemplatePageProps){const locale=props.locale||'zh';return <Layout {...props}><InteriorHero title={ui.policydetail_legal_pages[locale]} description={ui.legalpage_please_review_our_legal_policies_including_terms[locale]} image="0g1NFFzgEwVSVsRaGntwvAkeSIA.jpg"/><div className="df-container df-policy-links">{policies.map((policy,i)=><Reveal key={policy.slug} delay={i*.1}><Link className="df-glass" href={`${props.basePath}/legal/${policy.slug}`}>{policy.title[locale]}</Link></Reveal>)}</div></Layout>}
