import { ReactNode } from 'react'

import { AtLoader } from 'components/atoms'
import { OrFooter, OrHeader } from 'components/organisms'
import useAuth from 'hooks/useAuth'
import type { Theme } from 'types'

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
  const { loading } = useAuth()

  return (
    <>
      {!withoutHeader && <OrHeader theme={theme} />}
      <AtLoader show={loading} />
      {children}
      {!withoutFooter && <OrFooter />}
    </>
  )
}
