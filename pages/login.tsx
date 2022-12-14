import loginSvg from '../public/images/login.svg'
import Image from 'next/image'
import { Layout } from '@/components/templates'
import { LoginForm } from '@/components/molecules'
import { AtAlert } from '@/components/atoms'
import { useEffect, useState } from 'react'

export default function Login() {
  const [showAlert, setShowAlert] = useState<boolean>(false)
  const [msgAlert, setMsgAlert] = useState<string>('')

  function login(email: string, password: string) {
    console.log('data: ', { email, password })
  }

  function forgotPassword() {
    console.log('This functionality will be available later.')
    setMsgAlert('This functionality will be available later.')
    setShowAlert(true)
  }

  useEffect(() => {
    !showAlert && setMsgAlert('')
  }, [showAlert])

  return (
    <Layout theme="light">
      <main className="h-screen pt-20 pb-10 mx-auto px-10 flex flex-col md:px-28">
        <AtAlert
          status="info"
          show={showAlert}
          onClose={() => setShowAlert(false)}
        >
          {msgAlert}
        </AtAlert>
        <div className="flex justify-evenly w-full items-center flex-col lg:flex-row basis-4/5">
          <div className="flex items-center justify-center">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <Image alt="login-img" src={loginSvg} fill />
            </div>
          </div>
          <div className="w-full sm:max-w-sm mx-5">
            <LoginForm loginAction={login} forgotPassword={forgotPassword} />
          </div>
        </div>
      </main>
    </Layout>
  )
}
