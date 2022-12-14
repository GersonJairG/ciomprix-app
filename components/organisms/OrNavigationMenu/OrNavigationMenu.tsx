import Link from 'next/link'
import { RiLogoutBoxFill } from 'react-icons/ri'

import { AtLogo } from 'components/atoms'
import { MlModalScreen, MlSocialList, MlUserInfo } from 'components/molecules'
import useAuth from 'hooks/useAuth'
import { menuOptions } from 'utils/commons'


interface OrNavigationMenuProps {
  show: boolean
  onClose: () => void
}

export const OrNavigationMenu = ({ show, onClose }: OrNavigationMenuProps) => {
  const { user, logOut } = useAuth()

  return (
    <MlModalScreen show={show} onClose={onClose}>
      <div className="flex-col">
        <div className="bg-pink-500 rounded-xl p-4 mt-4 text-white">
          <AtLogo />
          <span className="text-sm text-neutral-100">
            A Powerfull Influencer Marketing Platform for Advertisers
          </span>

          {!user && (
            <div className="mt-12 flex items-center uppercase justify-end">
              <div className="flex items-center space-x-4">
                <Link
                  href={'/login'}
                  aria-current="page"
                  className={`flex w-full items-center text-sm uppercase tracking-wide  hover:underline hover:underline-offset-2`}
                >
                  <span className="block w-full font-bold">Login</span>
                </Link>
                <Link
                  href={'/signup'}
                  aria-current="page"
                  className={`flex w-full items-center text-sm uppercase tracking-wide  hover:underline hover:underline-offset-2`}
                >
                  <span className="block w-full">Signup</span>
                </Link>
              </div>
            </div>
          )}
        </div>
        {user && <MlUserInfo simple {...user} />}
        <ul className="mt-4 mb-20 px-4 flex-col">
          {menuOptions.map(({ name, path }) => (
            <li key={path}>
              <Link
                href={path}
                aria-current="page"
                className={`flex w-full items-center py-4 text-neutral-500 hover:text-neutral-600 text-sm uppercase tracking-wide hover:underline hover:underline-offset-2`}
              >
                <span className="block w-full">{name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-end px-4">
          <MlSocialList />
        </div>
        {user && (
          <div className="flex border-t my-6 pt-4 border-t-pink-300 justify-end">
            <button className="flex items-center" onClick={logOut}>
              <RiLogoutBoxFill className="w-5 h-5 text-pink-500" />
              <span className="hover:text-pink-500 hover:underline underline-offset-2">
                Log out
              </span>
            </button>
          </div>
        )}
      </div>
    </MlModalScreen>
  )
}
