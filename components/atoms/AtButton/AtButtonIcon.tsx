import React, { ButtonHTMLAttributes, ReactElement } from 'react'
import { IconType } from 'react-icons'

export interface AtButtonIconProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  onClick?: () => void
  icon: ReactElement<IconType>
}

export const AtButtonIcon: React.FC<AtButtonIconProps> = ({
  className = '',
  onClick,
  icon,
  ...rest
}) => {
  return (
    <button
      className={`flex h-8 w-8 items-center justify-center rounded-full ${className} `}
      onClick={onClick}
      {...rest}
    >
      {icon}
    </button>
  )
}
