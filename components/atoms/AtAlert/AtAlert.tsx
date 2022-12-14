import {
  RiCheckboxCircleFill,
  RiInformationFill,
  RiAlertFill,
  RiNotification3Fill,
  RiCloseLine,
} from 'react-icons/ri'

import type { Status } from '@/types/index'

interface AtAlertProps {
  show?: boolean
  onClose: () => void
  msg: string
  status?: Status
}

export const AtAlert = ({
  show = false,
  onClose,
  msg,
  status = 'success',
}: AtAlertProps) => {
  return (
    <>
      {show && (
        <div
          className={`rounded-lg py-4 px-6 text-sm inline-flex items-center justify-between w-full
          ${
            status === 'success'
              ? 'bg-green-100 text-green-700'
              : status === 'error'
              ? 'bg-red-100 text-red-700'
              : status === 'info'
              ? 'bg-blue-100 text-blue-700'
              : status === 'warning'
              ? 'bg-yellow-100 text-yellow-700'
              : ''
          }
          `}
          role="alert"
        >
          <div className="flex space-x-3 items-center">
            {status === 'success' && (
              <RiCheckboxCircleFill className="w-5 h-5" />
            )}
            {status === 'error' && <RiAlertFill className="w-5 h-5" />}
            {status === 'warning' && (
              <RiNotification3Fill className="w-5 h-5" />
            )}
            {status === 'info' && <RiInformationFill className="w-5 h-5" />}
            <span>{msg}</span>
          </div>
          <RiCloseLine onClick={onClose} className="w-5 h-5 cursor-pointer" />
        </div>
      )}
    </>
  )
}
