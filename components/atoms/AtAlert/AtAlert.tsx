import { ReactNode } from 'react'
import {
  RiCheckboxCircleFill,
  RiInformationFill,
  RiAlertFill,
  RiNotification3Fill,
  RiCloseLine
} from 'react-icons/ri'

import { Status } from '@/types/index'
import { getColorByStatus } from '@/utils/helpers'

interface AtAlertProps {
  show?: boolean
  onClose: () => void
  children: ReactNode
  status?: Status
}

export const AtAlert = ({
  show = false,
  onClose,
  children,
  status = 'success',
}: AtAlertProps) => {
  let color = getColorByStatus(status)

  return (
    <>
      {show && (
        <div
          className={`bg-${color}-100 text-${color}-700 rounded-lg py-4 px-6 text-sm inline-flex items-center justify-between w-full`}
          role="alert"
        >
          <div className='flex space-x-3 items-center'>
            {status === 'success' && (
              <RiCheckboxCircleFill className="w-5 h-5" />
            )}
            {status === 'error' && <RiAlertFill className="w-5 h-5" />}
            {status === 'warning' && (
              <RiNotification3Fill className="w-5 h-5" />
            )}
            {status === 'info' && <RiInformationFill className="w-5 h-5" />}
            <span>{children}</span>
          </div>
          <RiCloseLine onClick={onClose} className='w-5 h-5 cursor-pointer' />
        </div>
      )}
    </>
  )
}
