import { ReactNode } from 'react'

import { OrFooter, OrHeader } from '@/components/organisms'
import type { Theme } from '@/types/index'
import useAlert from 'hooks/useAlert'
import { AtAlert } from '@/components/atoms'

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
  const { msgAlert, showAlert, typeAlert, hiddenAlert } = useAlert()

  return (
    <>
      {!withoutHeader && <OrHeader theme={theme} />}
      <AtAlert
        show={showAlert}
        onClose={hiddenAlert}
        msg={msgAlert}
        status={typeAlert}
      />
      {children}
      {!withoutFooter && <OrFooter />}
    </>
  )
}
