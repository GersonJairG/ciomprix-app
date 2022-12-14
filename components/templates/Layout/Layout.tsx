import { ReactNode } from 'react'

import { OrFooter, OrHeader } from '@/components/organisms'
import type { Theme } from '@/types/index'

interface LayoutProps {
  theme?: Theme
  withoutHeader?: boolean
  withoutFooter?: boolean
  children: ReactNode
}

export const Layout = ({
  theme = 'dark',
  withoutHeader = false,
  withoutFooter = false,
  children,
}: LayoutProps) => {
  return (
    <>
      {!withoutHeader && <OrHeader theme={theme} />}
      {children}
      {!withoutFooter && <OrFooter />}
    </>
  )
}
