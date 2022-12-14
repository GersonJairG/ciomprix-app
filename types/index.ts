export type Theme = 'dark' | 'light'

export type Status = 'success' | 'error' | 'warning' | 'info'
export interface PersonData {
  id: number | string
  img: string
  name: string
  position: string
  functions: string
  user: string
}

export interface MenuOption {
  name: string
  path: string
}

export interface SignUpFields {
  name: string
  phone: string
  email: string
  password: string
  confirmPassword: string
}

export interface LoginFields {
  email: string
  password: string
}