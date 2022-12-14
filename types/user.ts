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

export type NewUser = Omit<User, 'id' | 'created_at'>
export type ValidUser = Pick<User, 'email' | 'password'>
