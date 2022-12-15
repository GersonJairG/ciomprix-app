import { ReactNode } from 'react'

import { AtAlert, AtLoader } from 'components/atoms'
import { OrFooter, OrHeader } from 'components/organisms'
import useAlert from 'hooks/useAlert'
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
  const { msgAlert, showAlert, typeAlert, hiddenAlert } = useAlert()
  const { loading } = useAuth()

  return (
    <>
      {!withoutHeader && <OrHeader theme={theme} />}
      <AtLoader show={loading} />
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
