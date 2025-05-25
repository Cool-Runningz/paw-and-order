import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { HiXMark } from 'react-icons/hi2'
import type { Shenanigan } from '../store/types'

export type ClueDrawerProps = {
    isOpen?: boolean
    onClose: () => void
    shenanigan?: Shenanigan 
}

export default function ClueDrawer({isOpen, onClose, shenanigan}: ClueDrawerProps) {
    if(!shenanigan) return null
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-100">
          <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
      />
      <div className="fixed inset-0" />
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="px-4 py-4 sm:px-4">
                  <div className="flex items-start justify-between">
                    <h2 id="slide-over-heading" className="text-base font-semibold text-gray-900">
                      Clues
                    </h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={onClose}
                         className="rounded-full cursor-pointer bg-[#744B93] p-1.5 text-white shadow-xs hover:brightness-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"                      >
                        <span className="sr-only">Close panel</span>
                        <HiXMark aria-hidden="true" className="size-5 fill-white" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Main */}
                <div>
                  <div className="pb-1 sm:pb-6">
                    <div>
                      <div className="relative h-40 sm:h-56">
                        <img
                          alt=""
                          src={shenanigan.clue.imgSrc}
                          className="absolute size-full object-cover"
                        />
                      </div>
                      <div className="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
                        <div className="sm:flex-1">
                          <div>
                            <div className="flex items-center">
                              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">{shenanigan.caseName}</h3>
                            </div>
                          </div>
                        
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 pt-5 pb-5 sm:px-0 sm:pt-0">
                    <dl className="space-y-8 px-4 sm:space-y-6 sm:px-6">
                      <div>
                        <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:shrink-0">Details</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                          <div>
                            {shenanigan.clue.details.map((clue, index) => (
        <p key={index} className="mb-2 text-sm italic text-gray-700">
          {clue}
        </p>
      ))}
                          </div>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
