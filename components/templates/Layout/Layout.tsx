import { ReactNode } from 'react'

import { OrFooter, OrHeader } from '@/components/organisms'
import { Theme } from '@/types/index'

interface LayoutProps {
  theme?: Theme
  withoutFooter?: boolean
  children: ReactNode
}

export const Layout = ({
  theme = 'dark',
  withoutFooter = false,
  children,
}: LayoutProps) => {
  return (
    <>
      <OrHeader theme={theme} />
      {children}
      {!withoutFooter && <OrFooter />}
    </>
  )
}
