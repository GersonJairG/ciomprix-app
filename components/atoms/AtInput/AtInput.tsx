import { forwardRef, InputHTMLAttributes } from 'react'

export interface AtTextInputProps {
  id?: string
  className?: string
  error?: string
}

export const AtInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & AtTextInputProps
>(({ id, className = '', type = 'text', error = '', ...rest }, ref) => {
  return (
    <div className={`${className} flex flex-col`}>
      <input
        id={id}
        className={`form-control block w-full text-sm px-4 py-2 ${
          error !== ''
            ? 'text-red-400 border-red-300 focus:border-red-400 focus:ring-red-400'
            : 'text-neutral-600 border-neutral-300 focus:border-pink-400 focus:ring-pink-400'
        }  bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:bg-white focus:outline-none`}
        type={type}
        ref={ref}
        {...rest}
      />
      {error !== '' && <span className="w-full ml-1 mt-0.5 text-red-500 text-xs">{error}</span>}
    </div>
  )
})

AtInput.displayName = 'AtInput'
