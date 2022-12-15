import { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/router'

import useAuth from 'hooks/useAuth'

interface WithPrivateRouteProps {
  children: ReactNode
}

export const WithPrivateRoute = ({ children }: WithPrivateRouteProps) => {
  const router = useRouter()
  const { user } = useAuth()

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [router, user])

  return <>{children}</>
}
