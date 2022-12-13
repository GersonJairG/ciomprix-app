import { Fragment, ReactNode } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { RiCloseFill } from 'react-icons/ri'

interface MlModalScreenProps {
  show: boolean
  onClose: () => void
  children: ReactNode
}

export const MlModalScreen = ({
  show,
  onClose,
  children,
}: MlModalScreenProps) => {
  return (
    <Transition show={show} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="transition duration-100 transform"
          enterFrom="opacity-0 -translate-x-14"
          enterTo="opacity-100 translate-x-0"
          leave="transition duration-150 transform"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo="opacity-0 -translate-x-14"
        >
          <Dialog.Panel className="sm:max-w-sm sm:w-full h-screen transform overflow-y-auto bg-gray-100 shadow-lg ring-1 ring-white transition p-8">
            <div className="w-full flex justify-end">
              <RiCloseFill
                className="h-7 w-7 cursor-pointer text-neutral-600"
                onClick={onClose}
              />
            </div>
            {children}
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}
