import type {Transition} from 'framer-motion'
/** 按参考站实际公开参数重建，避免用统一淡入或固定循环时长替代原效果。 */
export const titleMotion={distance:10,startDelay:.4,stagger:.075,threshold:.5}
export const titleTransition:Transition={type:'spring',duration:.4,bounce:0}
export const sectionTransition:Transition={type:'tween',duration:.8,delay:.2,ease:[.44,0,.56,1]}
export const tileTransition:Transition={type:'spring',duration:.6,bounce:.2}
export const interfaceSpring:Transition={type:'spring',damping:60,stiffness:500,mass:1}
export const tickerSpeed={gallery:20,services:20,logos:20,integrations:10}
