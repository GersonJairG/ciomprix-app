import { Status } from '@/types/index'

export function getColorByStatus(status: Status) {
  switch (status) {
    case 'success':
      return 'green'
    case 'error':
      return 'red'
    case 'warning':
      return 'yellow'
    case 'info':
      return 'blue'
  }
}
