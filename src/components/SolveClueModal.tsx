import {useState} from 'react'
import { Divider } from '../components/catalyst/divider'
import { HiXMark, HiCheckCircle, HiCheck } from 'react-icons/hi2'
import { BiConfused } from "react-icons/bi";
import {Button} from '../components/catalyst/button'
import { Avatar } from './catalyst/avatar'
import type { Cat } from "../store/types";
import { Dialog, DialogActions, DialogBody } from '../components/catalyst/dialog'
import { Radio, RadioGroup } from '@headlessui/react'
import { useGameStore } from '../store/useGameStore'
import { getCatDetails } from '../utils/helpers';

export type SolveClueModalProps = {
    isOpen?: boolean
    onClose: () => void
    culprits: Cat[]
    onNextRound: () => void
    onClick: (selectedCulprit: Cat['id']) => void
}

export default function SolveClueModal({isOpen, onClose, culprits, onClick, onNextRound}: SolveClueModalProps) {
    const [selectedCulprit, setSelectedCulprit] = useState(culprits[0].id)
    const currentRoomId = useGameStore((state) => state.currentRoomId);
       const scenes = useGameStore((state) => state.scenes)
       const scene = scenes.find(r => r.roomId === currentRoomId)
    const score = useGameStore((state) => state.score); 
const guess = useGameStore((state) =>
  state.guesses.find((g) => g.roomId === currentRoomId)
);
const isCorrect = guess?.isCorrect;
const guiltyCat = getCatDetails(scene?.guiltyCatId ?? '')

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
       {!guess ? <fieldset>
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
    </fieldset> : null}

    {guess && isCorrect ?<div className='flex flex-col gap-y-4'>
          <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-green-100">
                <HiCheck aria-hidden="true" size={50} className="size-6 text-green-600" />
              </div>
              <p  className="text-base font-semibold text-gray-900 text-center">You solved the case and caught the culprit!!</p>
              <p className="text-base font-semibold text-gray-900 text-center">Current Score: {score} points</p>
              </div>: null}
    {guess && !isCorrect ? <div className='flex flex-col gap-y-4'>
          <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-red-100">
                <BiConfused aria-hidden="true" size={50} className="size-6 text-red-600" />
              </div>
              <p  className="text-base font-semibold text-gray-900 text-center">Not quite right...</p>
              <p className="text-base font-semibold text-gray-900 text-center">Current Score: {score} points</p>
              <div className='flex gap-x-2 justify-center'><p>The guilty cat was {guiltyCat?.name}</p><Avatar src={guiltyCat?.imgSrc} className="size-6" square /></div>

              </div>: null}
        </DialogBody>
        <DialogActions className='w-full'>
          {!guess && <Button className='w-full cursor-pointer' onClick={() => onClick(selectedCulprit)}>Submit Guess</Button>}
          {guess && <Button className='w-full cursor-pointer' onClick={() => {
            onClose()
            onNextRound()
            }}>Play Next Round ➡️</Button>}
        </DialogActions>
      </Dialog>
  )
}
