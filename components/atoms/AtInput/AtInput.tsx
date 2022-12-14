import { FC, InputHTMLAttributes } from 'react'

export interface AtTextInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  id?: string
  className?: string
  error?: boolean
}

export const AtInput: FC<AtTextInputProps> = ({
  id,
  className = '',
  type = 'text',
  ...rest
}) => {
  return (
    <input
      id={id}
      className={`
      form-control block w-full px-4 py-2 text-neutral-600 bg-white bg-clip-padding border border-solid border-neutral-300 rounded transition ease-in-out m-0 focus:bg-white focus:border-pink-400 focus:ring-pink-400 focus:outline-none
        ${className}
      `}
      type={type}
      {...rest}
    />
  )
}
