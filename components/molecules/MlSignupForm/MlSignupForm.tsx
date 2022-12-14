import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { AtButton, AtInput } from '@/components/atoms'
import { SignUpFormSchema } from '@/schemas/index'
import type { SignUpFields } from '@/types/index'

interface MlSignupFormProps {
  signUp: (data: SignUpFields) => void
}

export const MlSignupForm = ({ signUp }: MlSignupFormProps) => {
  const formOptions = { resolver: yupResolver(SignUpFormSchema) }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpFields>(formOptions)

  const onSubmit: SubmitHandler<SignUpFields> = (data) => {
    console.log(data)
    signUp(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AtInput
        className="mb-4"
        placeholder="Name"
        {...register('name')}
        error={errors.name?.message}
      />

      <AtInput
        className="mb-4"
        placeholder="Phone"
        {...register('phone')}
        error={errors.phone?.message}
      />
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
      <AtInput
        type="password"
        className="mb-4"
        placeholder="Confirm Password"
        {...register('confirmPassword')}
        error={errors.confirmPassword?.message}
      />

      <div className="text-center lg:text-left">
        <AtButton
          type="submit"
          className="w-full bg-pink-400 text-white hover:bg-pink-500 uppercase rounded shadow-md"
        >
          Sign Up
        </AtButton>

        <p className="text-sm font-semibold mt-2 pt-1 mb-0 space-x-1 text-neutral-600">
          <span>Do you already have an account?</span>
          <Link
            href="/login"
            className="text-pink-500 hover:text-pink-600 transition duration-200 ease-in-out"
          >
            <span>Log In</span>
          </Link>
        </p>
      </div>
    </form>
  )
}
