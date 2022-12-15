import { toast, ToastOptions } from 'react-toastify'

const error: ToastOptions = {
  type: 'error',
  style: { color: 'red' },
}

const success: ToastOptions = {
  type: 'success',
  style: { color: 'green' },
}

export const errorAlert = (msg: string) => toast(msg, error)
export const successAlert = (msg: string) => toast(msg, success)
