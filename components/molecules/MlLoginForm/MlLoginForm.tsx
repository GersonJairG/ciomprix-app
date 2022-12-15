import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { AtButton, AtInput } from 'components/atoms'
import type { LoginFields } from 'types'
import { LoginFormSchema } from 'schemas'

interface MlLoginFormProps {
  login: (data: LoginFields) => void
}

export const MlLoginForm = ({ login }: MlLoginFormProps) => {
  const formOptions = { resolver: yupResolver(LoginFormSchema) }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFields>(formOptions)

  const onSubmit: SubmitHandler<LoginFields> = (data) => {
    login(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AtInput
        className="mb-4"
        placeholder="Email address"
        {...register('email')}
        error={errors.email?.message}
      />
      <AtInput
        type="password"
        className="mb-4"
        placeholder="Password"
        {...register('password')}
        error={errors.password?.message}
      />

      <Link
        href={'/recover-password'}
        className="text-neutral-600 hover:text-pink-400 flex text-sm w-full justify-center mb-6 md:justify-end"
      >
        <span>Forgot password?</span>
      </Link>

      <div className="text-center lg:text-left">
        <AtButton
          type="submit"
          className="w-full bg-pink-400 text-white hover:bg-pink-500 uppercase rounded shadow-md"
        >
          Login
        </AtButton>

        <p className="text-sm font-semibold mt-2 pt-1 mb-0 space-x-1 text-neutral-600">
          <span>Dont have an account?</span>
          <Link
            href="/signup"
            className="text-pink-500 hover:text-pink-600 transition duration-200 ease-in-out"
          >
            <span>Register</span>
          </Link>
        </p>
      </div>
    </form>
  )
}
