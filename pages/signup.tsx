import { useEffect, useState } from 'react'
import Image from 'next/image'

import SignupSvg from '/public/images/signup.svg'
import { Layout } from '@/components/templates'
import { MlSignupForm } from '@/components/molecules'
import { AtAlert } from '@/components/atoms'
import type { SignUpFields, Status } from '@/types/index'

export default function SignUp() {
  const [showAlert, setShowAlert] = useState<boolean>(false)
  const [msgAlert, setMsgAlert] = useState<string>('')
  const [typeAlert, setTypeAlert] = useState<Status>('success')

  function signUp(data: SignUpFields) {
    console.log('data sign up: ', data)
  }

  useEffect(() => {
    if (!showAlert) {
      setMsgAlert('')
      setTypeAlert('success')
    }
  }, [showAlert])

  return (
    <Layout theme="light" withoutFooter>
      <main className="h-screen pt-20 pb-10 mx-auto px-10 flex flex-col md:px-28 bg-gray-100">
        <AtAlert
          status={typeAlert}
          show={showAlert}
          onClose={() => setShowAlert(false)}
          msg={msgAlert}
        />
        <div
          className={`flex justify-evenly w-full items-center flex-col lg:flex-row-reverse ${
            showAlert ? 'basis-11/12' : 'basis-full'
          }`}
        >
          <div className="flex items-center justify-center">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <Image alt="login-img" src={SignupSvg} fill />
            </div>
          </div>
          <div className="w-full sm:max-w-sm mx-5">
            <MlSignupForm signUp={signUp} />
          </div>
        </div>
      </main>
    </Layout>
  )
}
