import Link from 'next/link'

interface AtLogoProps {
  simple?: boolean
  className?: string
}

export const AtLogo = ({ simple = false, className = '' }: AtLogoProps) => {
  return (
    <Link
      href={'/'}
      className={`flex space-x-1 items-end align-bottom ${className}`}
    >
      <p className="font-bold text-3xl">Achoo</p>
      {!simple && <p className="text-xs font-light">BETA</p>}
    </Link>
  )
}
