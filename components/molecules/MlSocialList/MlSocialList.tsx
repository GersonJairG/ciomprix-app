import Link from 'next/link'
import { RiFacebookFill, RiTwitterFill, RiSkypeFill } from 'react-icons/ri'
import { ImFlickr } from 'react-icons/im'

const socialList = [
  {
    href: '/',
    Icon: RiFacebookFill,
    name: 'Facebook',
  },
  {
    href: '/',
    Icon: ImFlickr,
    name: 'Flickr',
  },
  {
    href: '/',
    Icon: RiTwitterFill,
    name: 'Twitter',
  },
  {
    href: '/',
    Icon: RiSkypeFill,
    name: 'Skype',
  },
]

interface MlSocialListProps {
  className?: string
}

export const MlSocialList = ({ className = '' }: MlSocialListProps) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {socialList.map(({ href, Icon, name }) => (
        <Link
          key={name}
          href={href}
          target="_blank"
          className="group flex items-center space-x-2 text-2xl font-light leading-none bg-neutral-700 rounded-full p-1"
        >
          <Icon className="h-6 w-6 text-gray-100" />
        </Link>
      ))}
    </div>
  )
}
