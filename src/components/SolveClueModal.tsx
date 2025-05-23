import {useState} from 'react'
import { Divider } from '../components/catalyst/divider'
import { HiXMark, HiCheckCircle } from 'react-icons/hi2'
import {Button} from '../components/catalyst/button'
import { Avatar } from './catalyst/avatar'
import type { Cat } from "../store/types";
import { Dialog, DialogActions, DialogBody } from '../components/catalyst/dialog'
import { Radio, RadioGroup } from '@headlessui/react'

export type SolveClueModalProps = {
    isOpen?: boolean
    onClose: () => void
    culprits: Cat[]
}

export default function SolveClueModal({isOpen, onClose, culprits}: SolveClueModalProps) {
    const [selectedCulprit, setSelectedCulprit] = useState(culprits[0])
    console.log('culprits: ', culprits)

  return (
     <Dialog open={isOpen} onClose={onClose} size='xl'>
      <div className='flex justify-between items-center'>
        <h2  className="text-2xl font-bold text-[#744B93]">Solve the Case</h2>
         <button
        type="button"
        onClick={onClose}
        className="rounded-full cursor-pointer bg-indigo-600 p-1.5 text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <HiXMark aria-hidden="true" className="size-5" />
      </button>
        </div>
        <Divider className='mt-2' />
       
        <DialogBody>
       <fieldset>
      <legend className="font-bold text-[#744B93]">Select the Culprit</legend>
      <RadioGroup
        value={selectedCulprit}
        onChange={setSelectedCulprit}
         className="mt-6 grid grid-cols-1 gap-y-6  sm:grid-cols-2 sm:gap-4 " 
      >
        {culprits.map((culprit) => (
          <Radio
            key={culprit.id}
            value={culprit.id}
            aria-label={culprit.name}
            className=" group relative flex cursor-pointer rounded-lg border border-gray-300 bg-white p-4 shadow-xs focus:outline-hidden data-focus:border-indigo-600 data-focus:ring-2 data-focus:ring-indigo-600"
          >
            <span className="flex flex-1">
              <span className="flex items-center gap-x-2">
                <Avatar className="size-10" src={culprit.imgSrc} /> 
                <span className="block text-sm font-medium text-gray-900">{culprit.name}</span>
                 
              </span>
            </span>
            <HiCheckCircle aria-hidden="true" className="size-5 text-indigo-600 group-not-data-checked:invisible" />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-checked:border-indigo-600 group-data-focus:border"
            />
          </Radio>
        ))}
      </RadioGroup>
    </fieldset>

        </DialogBody>
        <DialogActions className='w-full'>
          <Button className='w-full' onClick={() => console.log('clse')}>Submit Guess</Button>
        </DialogActions>
      </Dialog>
  )
}
