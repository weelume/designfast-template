'use client'
import { asset } from '../config/brand'
import { Title } from './Primitives'
export function InteriorHero({title,description,image}:{title:string;description?:string;image?:string}) {return <section className="df-interior-hero">{image&&<img src={asset(image)} alt="" width="1440" height="700"/>}<div className="df-container"><Title level={1}>{title}</Title>{description&&<p>{description}</p>}</div></section>}
