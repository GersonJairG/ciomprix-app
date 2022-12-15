import { Fragment } from 'react'
import { RiArrowDownSLine, RiLogoutBoxFill } from 'react-icons/ri'
import Image from 'next/image'
import { Menu, Transition } from '@headlessui/react'

import profileImg from '/public/images/profile.png'

interface MlUserInfoProps {
  name: string
  email: string
  logOut?: () => void
  simple?: boolean
}

export const MlUserInfo = ({
  name,
  email,
  logOut,
  simple = false,
}: MlUserInfoProps) => {
  return simple ? (
    <div className="group flex w-full px-2 my-4 py-2 text-sm text-neutral-700 border border-pink-300 rounded-xl">
      <div className="relative rounded-full w-14 h-14 ml-2 mr-4">
        <Image sizes='default' src={profileImg} alt="photo-profile-mobile" fill />
      </div>
      <div className="flex flex-col justify-center">
        <span>{name}</span>
        <span className="text-pink-500">{email}</span>
      </div>
    </div>
  ) : (
    <div className="w-full text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Profile
            <RiArrowDownSLine
              className="ml-2 -mr-1 h-5 w-5 text-pink-500 hover:text-pink-400"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-72 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <div className="group flex w-full justify-around rounded-md px-2 py-2 text-sm text-neutral-700">
                    <div className="flex flex-col justify-center">
                      <span>{name}</span>
                      <span className="text-pink-500">{email}</span>
                    </div>
                    <div className="relative rounded-full w-16 h-16">
                      <Image sizes='default' src={profileImg} alt="photo-profile" fill />
                    </div>
                  </div>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={logOut}
                    className={`${
                      active ? 'bg-pink-500 text-white' : 'text-neutral-700'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <RiLogoutBoxFill
                      className={`mr-2 w-5 h-5 ${
                        active ? 'text-pink-200' : 'text-pink-500'
                      }`}
                    />
                    Log out
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
