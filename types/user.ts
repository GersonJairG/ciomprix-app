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
export type ValidUser = Pick<User, 'email' | 'password'>
export type UpdateUser = Pick<User, 'name' | 'phone' | 'email'>
