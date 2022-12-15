export interface ResponseType {
  message: string
  data?: any
}

export interface User {
  id: string
  created_at: Date
  name: string
  phone: string
  email: string
  password: string
}

export type UserPublic = Pick<User, 'name' | 'email' | 'phone'>

export type NewUser = Omit<User, 'id' | 'created_at'>
export type CredentialsUser = Pick<User, 'email' | 'password'>
export type UpdateDataUser = Pick<User, 'name' | 'phone'>

export interface SignUpDataUser extends NewUser {
  confirmPassword: string
}