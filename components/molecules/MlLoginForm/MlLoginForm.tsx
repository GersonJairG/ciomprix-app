import Link from 'next/link'

import { AtButton, AtCheckbox, AtInput } from '@/components/atoms'
import { useState } from 'react'

interface LoginFormProps {
  loginAction: (email: string, password: string) => void
  forgotPassword: () => void
}

export const LoginForm = ({ loginAction, forgotPassword }: LoginFormProps) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <form>
      <AtInput
        className="mb-4"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <AtInput
        type={'password'}
        className="mb-4"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="flex justify-between items-center mb-6 flex-col sm:flex-row space-y-3 sm:space-y-0">
        <AtCheckbox textLabel="Remember me" />
        <Link
          href={''}
          className="text-neutral-600 hover:text-pink-400 flex text-sm w-full justify-center"
          onClick={forgotPassword}
        >
          <span>Forgot password?</span>
        </Link>
      </div>

      <div className="text-center lg:text-left">
        <AtButton
          className="w-full bg-pink-400 text-white hover:bg-pink-500 uppercase rounded shadow-md"
          onClick={() => {
            loginAction(email, password)
          }}
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
