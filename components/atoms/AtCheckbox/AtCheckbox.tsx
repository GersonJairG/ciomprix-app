import { FC, InputHTMLAttributes } from 'react'

export interface AtCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string
  className?: string
  error?: boolean
  textLabel?: string
}

export const AtCheckbox: FC<AtCheckboxProps> = ({
  className = '',
  textLabel,
}: AtCheckboxProps) => {
  return (
    <div
      className={`form-group form-check flex w-full justify-center items-center space-x-2 ${className}`}
    >
      <input
        type="checkbox"
        className="form-check-input appearance-none h-4 w-4 border border-neutral-300 rounded-sm bg-white text-pink-400 focus:ring-pink-400 checked:bg-pink-400 checked:border-pink-400 focus:outline-none transition duration-200 bg-no-repeat bg-center bg-contain float-left cursor-pointer"
        id="exampleCheck2"
      />
      {textLabel && (
        <label
          className="form-check-label inline-block text-neutral-600 cursor-pointer text-sm"
          htmlFor="exampleCheck2"
        >
          {textLabel}
        </label>
      )}
    </div>
  )
}
