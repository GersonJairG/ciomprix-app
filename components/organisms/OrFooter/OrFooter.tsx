import Link from 'next/link'
import { MenuOption } from 'types'
import { MlSocialList } from '@/components/molecules'
import { AtLogo } from '@/components/atoms'

const homeSection: MenuOption[] = [
  { name: 'Home', path: '/' },
  { name: 'Features', path: '/features' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'About us', path: '/about' },
]

const supportSection: MenuOption[] = [
  { name: 'Help & Support', path: '/support' },
  { name: 'Privacy Policy', path: '/privacy' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Sign Up', path: '/signup' },
  { name: 'Log in', path: '/login' },
]

export const OrFooter = () => {
  return (
    <footer className="relative mx-auto py-10 bg-gray-100 w-full px-10 md:px-28 lg:py-15 hidden md:block">
      <div className="grid grid-cols-2 gap-y-6 gap-x-4 sm:grid-cols-3 lg:grid-cols-4">
        <div className="text-sm flex-col">
          <h2 className="text-sm font-semibold text-neutral-600">Achoo</h2>
          <ul className="mt-5 space-y-4">
            {homeSection.map(({ name, path }) => (
              <li key={path}>
                <Link
                  className="font-medium text-neutral-500 hover:text-neutral-600"
                  href={path}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-sm flex-col">
          <h2 className="text-sm font-semibold text-neutral-600">Support</h2>
          <ul className="mt-5 space-y-4">
            {supportSection.map(({ name, path }) => (
              <li key={path}>
                <Link
                  className="font-medium text-neutral-500 hover:text-neutral-600"
                  href={path}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-sm flex-col">
          <h2 className="text-sm font-semibold text-neutral-600">Contact Us</h2>
          <ul className="mt-5 space-y-4">
            <li className="font-medium text-neutral-500">Achoo ApS</li>
            <li className="font-medium text-neutral-500">
              Danneskiold-Samsoes Alle 41 1434 Copenhagen K Denmark
            </li>
            <li className="font-medium text-neutral-500">
              Tel: +45 24 47 48 78
            </li>
          </ul>
          <MlSocialList className="mt-6" />
        </div>
      </div>
      <div className="flex mt-8 py-4 border-t border-t-neutral-300 justify-between items-center">
        <AtLogo simple className="text-neutral-700" />
        <p className="text-sm text-neutral-500">Achoo ApS @ 2015</p>
      </div>
    </footer>
  )
}
