'use client'
import {ui} from '../content/ui'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import {useEffect,useRef,type ReactNode} from 'react'
import type { TemplateLocale } from '../../../types'
import type { Bilingual } from '../config/brand'
import {sectionTransition,tileTransition,titleMotion,titleTransition} from '../config/motion'

export const pick = (value: Bilingual, locale: TemplateLocale) => value[locale]
function AnimatedWords({children,tag='h2',startDelay=titleMotion.startDelay,className='df-title'}:{children:string;tag?:'h1'|'h2'|'blockquote';startDelay?:number;className?:string}){
  const reduced = useReducedMotion()
  const Tag=tag==='h1'?motion.h1:tag==='blockquote'?motion.blockquote:motion.h2
  // 原站为10px逐词弹簧入场，不添加模糊；与区块淡入分别处理。
  return <Tag className={className+' df-words'} initial="hidden" whileInView="visible" viewport={{once:true,amount:titleMotion.threshold}} transition={{delayChildren:reduced?0:startDelay,staggerChildren:reduced?0:titleMotion.stagger}}>{children.split(/(\s+|\n)/).map((word,i)=>word==='\n'?<br key={i}/>: /^\s+$/.test(word)?' ':<motion.span key={i} variants={{hidden:{opacity:reduced?1:.001,y:reduced?0:titleMotion.distance},visible:{opacity:1,y:0,transition:reduced?{duration:0}:titleTransition}}}>{word}</motion.span>)}</Tag>
}
export function Title({children,level=2}:{children:string;level?:1|2}){return <AnimatedWords tag={level===1?'h1':'h2'}>{children}</AnimatedWords>}
export function Quote({children}:{children:string}){return <AnimatedWords tag="blockquote" startDelay={.2} className="df-quote-copy">{children}</AnimatedWords>}
export function Reveal({ children, className = '', delay,kind='section' }: { children: ReactNode; className?: string; delay?: number;kind?:'section'|'tile' }) {
  const reduced = useReducedMotion()
  return <motion.div className={className} initial={reduced?false:{opacity:.001}} whileInView={{opacity:1}} viewport={{once:true,amount:.15}} transition={reduced?{duration:0}:{...(kind==='tile'?tileTransition:sectionTransition),...(delay===undefined?{}:{delay})}}>{children}</motion.div>
}
export function Button({ href, children, secondary = false }: { href: string; children: ReactNode; secondary?: boolean }) { return <Link className={`df-button${secondary ? ' df-secondary' : ''}`} href={href}>{children}</Link> }
export function SectionHead({ title, description }: { title: string; description?: string }) { return <div className="df-section-head"><Title>{title}</Title>{description && <p>{description}</p>}</div> }
export function Availability({ locale }: { locale: TemplateLocale }) { return <span className="df-availability"><i />{ui.availability_3_spots_left_for_q2[locale]}</span> }
export function LoopTrack({children,className,speed}:{children:ReactNode;className?:string;speed:number}){
  const element=useRef<HTMLDivElement>(null)
  useEffect(()=>{const track=element.current,group=track?.firstElementChild;if(!track||!group)return;function measure(){if(!track||!group)return;const rect=group.getBoundingClientRect(),vertical=getComputedStyle(track).getPropertyValue('--df-axis').trim()==='y',distance=vertical?rect.height:rect.width;track.style.animationDuration=(distance>0?distance/speed:0)+'s'}const observer=new ResizeObserver(measure);observer.observe(group);observer.observe(track);measure();return()=>observer.disconnect()},[speed])
  return <div ref={element} className={className}>{children}</div>
}
