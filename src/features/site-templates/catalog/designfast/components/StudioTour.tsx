'use client'
import {ui} from '../content/ui'
import {useState} from 'react'
import type {TemplateLocale} from '../../../types'
import {asset} from '../config/brand'
/** 与参考站一致，点击封面后才加载 YouTube 播放器，不预先发起第三方请求。 */
export function StudioTour({locale}:{locale:TemplateLocale}){const[playing,setPlaying]=useState(false);return <div className="df-tour-player">{playing?<iframe src="https://www.youtube.com/embed/smPos0mJvh8?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=1&mute=1" title={ui.studiotour_studio_virtual_tour[locale]} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/>:<button type="button" onClick={()=>setPlaying(true)} aria-label={ui.studiotour_play_studio_tour_video_youtube[locale]}><img className="df-tour" src={asset('XOgTNGhNhIIdGFoazkqqnG9QmE.jpg')} alt="" width="1200" height="650" loading="lazy"/><span aria-hidden="true"><svg viewBox="0 0 32 32" fill="none"><path d="m11 7 14 9-14 9V7Z" stroke="currentColor" strokeWidth="2"/></svg></span></button>}</div>}
