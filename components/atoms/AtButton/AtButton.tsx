import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react'

export type ButtonTheme = 'primary'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  className?: string
  sizeClass?: string
  fontSize?: string
  loading?: boolean
  theme?: ButtonTheme
  onClick?: () => void
}

export const AtButton: FC<ButtonProps> = ({
  className = '',
  sizeClass = 'px-4 py-3 sm:px-6',
  fontSize = 'text-sm sm:text-base font-medium',
  disabled = false,
  children,
  type,
  loading,
  theme,
  onClick,
  ...rest
}) => {
  const renderLoading = () => {
    return (
      <svg
        className="-ml-1 mr-3 h-5 w-5 animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    )
  }

  return (
    <button
      disabled={disabled || loading}
      className={`relative inline-flex h-auto items-center justify-center rounded-full transition-colors disabled:bg-opacity-70 ${fontSize} ${sizeClass} ${
        theme === 'primary'
          ? `bg-pink-500 text-white ${!disabled ? 'hover:bg-pink-600' : ''}`
          : ''
      } ${className} `}
      onClick={() => onClick?.()}
      type={type}
      {...rest}
    >
      {loading && renderLoading()}
      {children || `This is a Button`}
    </button>
  )
}
