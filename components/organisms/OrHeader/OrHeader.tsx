import Link from 'next/link'
import { RiMenuFill } from 'react-icons/ri'
import { useState } from 'react'

import { AtButtonIcon, AtLogo } from '@/components/atoms'
import { OrNavigationMenu } from '@/components/organisms'
import { menuOptions } from '@/utils/commons'
import type { Theme } from '@/types/index'
import { useRouter } from 'next/router'
import useAuth from 'hooks/useAuth'

interface OrHeaderProps {
  theme?: Theme
}

export const OrHeader = ({ theme = 'dark' }: OrHeaderProps) => {

  const { user } = useAuth()

  const { pathname } = useRouter()

  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)

  return (
    <header
      className={`bg-transparent absolute w-full flex justify-between px-8 lg:px-16 py-5 align-middle ${
        theme === 'dark' ? 'text-white' : 'text-neutral-600'
      }`}
    >
      <AtLogo />
      <div className="flex justify-center items-center">
        <div className="flex md:hidden">
          <AtButtonIcon
            onClick={() => setShowMobileMenu(true)}
            icon={<RiMenuFill className="h-6 w-6" />}
          />
          <OrNavigationMenu
            show={showMobileMenu}
            onClose={() => setShowMobileMenu(false)}
          />
        </div>
        <div className="hidden md:flex divide-x divide-neutral-400 items-center">
          <ul className="flex">
            {menuOptions.map(({ name, path }) => (
              <li key={path}>
                <Link
                  href={path}
                  aria-current="page"
                  className={`flex w-full items-center px-4 text-sm uppercase tracking-wide hover:underline hover:underline-offset-2`}
                >
                  <span className="block w-full">{name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center uppercase px-4">
            {user ? (
              <div>{user.name}</div>
            ) : (
              <div className="flex items-center space-x-4">
                {pathname !== '/login' && (
                  <Link
                    href={'/login'}
                    aria-current="page"
                    className={`flex w-full items-center text-sm uppercase tracking-wide hover:text-pink-500 hover:underline hover:underline-offset-2`}
                  >
                    <span className="block w-full">Login</span>
                  </Link>
                )}
                {pathname !== '/signup' && (
                  <Link
                    href={'/signup'}
                    aria-current="page"
                    className={`flex w-full items-center text-sm uppercase tracking-wide hover:text-pink-500 hover:underline hover:underline-offset-2`}
                  >
                    <span className="block w-full">Signup</span>
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
