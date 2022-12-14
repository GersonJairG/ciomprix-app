import { ReactNode } from 'react'

import { OrFooter, OrHeader } from '@/components/organisms'
import { Theme } from '@/types/index'

interface LayoutProps {
  theme?: Theme
  children: ReactNode
}

export const Layout = ({ theme = 'dark', children }: LayoutProps) => {
  return (
    <>
      <OrHeader theme={theme} />
      {children}
      <OrFooter />
    </>
  )
}
