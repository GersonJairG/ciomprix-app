import { MlUpdateForm } from '@/components/molecules/'
import { Layout, WithPrivateRoute } from '@/components/templates'
import { updateUser } from '@/services/users'
import useAlert from 'hooks/useAlert'
import useAuth from 'hooks/useAuth'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { UpdateFields } from '../types'

import profileImg from '/public/images/profile.png'

export default function Profile() {
  const { user, setInfoUser } = useAuth()
  const { push: redirect } = useRouter()
  const { showErrorAlert } = useAlert()

  if (!user) {
    redirect('/')
    return
  }

  async function update(data: UpdateFields) {
    const response = user && (await updateUser({ ...data, email: user.email }))

    if (!response?.data) {
      response.message && showErrorAlert(response.message)
      return
    }
    setInfoUser(response.data)
  }

  return (
    <Layout theme="light">
      <main className="h-screen pt-28 pb-10 mx-auto px-10 flex flex-col items-center md:px-28 bg-gray-100">
        <h1 className="flex text-2xl text-pink-500 font-bold">¡Welcome!</h1>
        <div className="relative rounded-full w-28 h-28 my-10">
          <Image src={profileImg} alt="profile" fill />
        </div>
        <h1 className="text-lg flex font-bold text-neutral-700">
          {user.email}
        </h1>
        <p className="text-sm flex text-center my-8 text-neutral-700">
          Do you want to modify any of your data?
        </p>
        <div className="w-full sm:max-w-sm mx-5 mb-10">
          <MlUpdateForm update={update} currentData={user} />
        </div>
        <Link
          href="/"
          className={`underline underline-offset-2 hover:text-pink-600 text-pink-400 inline-flex items-center rounded-full py-2 px-4 font-normal xl:px-5`}
        >
          Back to home
        </Link>
      </main>
    </Layout>
  )
}

Profile.Auth = WithPrivateRoute
