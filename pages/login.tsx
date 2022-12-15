import Image from 'next/image'
import { useRouter } from 'next/router'

import loginSvg from '/public/images/login.svg'
import { Layout } from '@/components/templates'
import { MlLoginForm } from '@/components/molecules'
import type { LoginFields } from '@/types/index'
import useAuth from 'hooks/useAuth'
import { validateUser } from '@/services/users'
import useAlert from 'hooks/useAlert'

export default function Login() {
  const { push: redirect } = useRouter()
  const { setInfoUser, user, setLoading } = useAuth()
  const { showErrorAlert } = useAlert()

  if (user) {
    redirect('/')
    return
  }

  async function login(data: LoginFields) {
    setLoading(true)
    const response = await validateUser(data)

    if (!response?.data) {
      setLoading(false)
      response.message && showErrorAlert(response.message)
      return
    }
    setInfoUser(response.data)
    setLoading(false)
  }

  function forgotPassword() {
    console.log('This functionality will be available later.')
  }

  return (
    <Layout theme="light" withoutFooter>
      <main className="h-screen pt-20 pb-10 mx-auto px-10 flex flex-col md:px-28 bg-gray-100">
        <div
          className={`flex justify-evenly w-full items-center flex-col lg:flex-row basis-full`}
        >
          <div className="flex items-center justify-center">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <Image alt="login-img" src={loginSvg} fill />
            </div>
          </div>
          <div className="w-full sm:max-w-sm mx-5">
            <MlLoginForm login={login} />
          </div>
        </div>
      </main>
    </Layout>
  )
}
