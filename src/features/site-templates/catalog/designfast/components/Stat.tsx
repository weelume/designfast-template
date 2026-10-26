'use client'
import {asset} from '../config/brand'
import {Reveal} from './Primitives'
export function Stat({value,label,icon}:{value:string;label:string;icon:string}){return <Reveal className="df-stat"><span className="df-stat-icon"><img src={asset(icon)} width="50" height="50" alt=""/></span><div><strong>{value}</strong><p>{label}</p></div></Reveal>}
