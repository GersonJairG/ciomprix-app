import Image from 'next/image'
import { useRouter } from 'next/router'

import { MlSignupForm } from 'components/molecules'
import { Layout } from 'components/templates'
import useAlert from 'hooks/useAlert'
import useAuth from 'hooks/useAuth'
import type { SignUpFields } from 'types'
import { createUser } from 'services/users'

import SignupSvg from '/public/images/signup.svg'

export default function SignUp() {
  const { push: redirect } = useRouter()
  const { showErrorAlert, showSuccessAlert } = useAlert()
  const { setLoading } = useAuth()

  async function signUp(data: SignUpFields) {
    setLoading(true)
    const response = await createUser(data)
    if (!response?.data) {
      setLoading(false)
      response.message && showErrorAlert(response.message)
      return
    }
    setLoading(false)
    showSuccessAlert('Successful registration')
    redirect('/login')
  }

  return (
    <Layout theme="light" withoutFooter>
      <main className="h-screen pt-20 pb-10 mx-auto px-10 flex flex-col md:px-28 bg-gray-100">
        <div
          className={`flex justify-evenly w-full items-center flex-col lg:flex-row-reverse basis-full`}
        >
          <div className="flex items-center justify-center">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <Image sizes='default' alt="signup-img" src={SignupSvg} fill />
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
