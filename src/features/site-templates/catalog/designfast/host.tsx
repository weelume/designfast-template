'use client'
import { createContext, useContext, type ReactNode } from 'react'
import { brand, type Bilingual } from './config/brand'
export interface DesignfastHostConfig { brandName: Bilingual; logo?: string; lightLogo?: string; marketplaceHref?: string; marketplaceLabel?: Bilingual; marketplaceAriaLabel?: Bilingual; filing?: ReactNode }
const Context = createContext<DesignfastHostConfig>({ brandName: brand.name, logo: brand.logo })
export function DesignfastHostProvider({ children, ...config }: DesignfastHostConfig & { children: ReactNode }) { return <Context.Provider value={config}>{children}</Context.Provider> }
export const useDesignfastHost = () => useContext(Context)
