import Link from 'next/link'

import { AtButton, AtInput } from '@/components/atoms'
import { useState } from 'react'

interface MlSignupFormProps {
  SignupAction: (
    name: string,
    phone: string,
    email: string,
    password: string
  ) => void
}

export const MlSignupForm = ({ SignupAction }: MlSignupFormProps) => {
  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <form>
      <AtInput
        className="mb-4"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <AtInput
        className="mb-4"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
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

      <div className="text-center lg:text-left">
        <AtButton
          className="w-full bg-pink-400 text-white hover:bg-pink-500 uppercase rounded shadow-md"
          onClick={() => {
            SignupAction(name, phone, email, password)
          }}
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
