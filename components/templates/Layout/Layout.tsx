import { ReactNode } from 'react'

import { OrFooter, OrHeader } from '@/components/organisms'

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <OrHeader />
      {children}
      <OrFooter />
    </>
  )
}
