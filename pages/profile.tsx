import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { MlUpdateForm } from 'components/molecules/'
import { Layout, Seo, WithPrivateRoute } from 'components/templates'
import useAuth from 'hooks/useAuth'
import { updateUser } from 'services/users'
import { UpdateDataUser } from 'types/user'
import { errorAlert, successAlert } from 'utils/alerts'

import profileImg from '/public/images/profile.png'

export default function Profile() {
  const { user, setInfoUser, setLoading } = useAuth()
  const { push: redirect } = useRouter()

  if (!user) {
    redirect('/')
    return
  }

  async function update(data: UpdateDataUser) {
    setLoading(true)
    const response = user && (await updateUser({ ...data, email: user.email }))

    if (!response?.data) {
      setLoading(false)
      response.message && errorAlert(response.message)
      return
    }
    setInfoUser(response.data)
    setLoading(false)
    successAlert('Data updated successfully.')
  }

  return (
    <Layout theme="light" withoutFooter>
      <Seo templateTitle='Profile' />
      <main className="h-screen pt-28 pb-10 mx-auto px-10 flex flex-col items-center md:px-28 bg-gray-100">
        <h1 className="flex text-2xl text-pink-500 font-bold">¡Welcome!</h1>
        <div className="relative rounded-full w-28 h-28 my-10">
          <Image sizes='default' src={profileImg} alt="profile-img" fill />
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
