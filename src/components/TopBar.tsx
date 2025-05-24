import { LuShieldQuestion } from "react-icons/lu";
import { PiDetectiveDuotone } from "react-icons/pi";
import {Button} from '../components/catalyst/button'
import SolveClueModal from "./SolveClueModal";
import { useState } from "react";
import { useGameStore } from "../store/useGameStore";
import { getNextRoomId } from "../utils/helpers";


type TopBarProps = {
    title: string
}

export default function TopBar({title}: TopBarProps) {
	const [solveModelOpen, setSolveModalOpen] = useState(false)
	   const cats =  useGameStore((state) => state.cats) 
	   const submitGuess = useGameStore((state) => state.submitGuess)
	      const currentRoomId = useGameStore((state) => state.currentRoomId)  
		  const setRoomId = useGameStore((state) => state.setRoomId);
		  const shuffleCats = useGameStore((state) => state.shuffleCats);

	return (
		<>
		<header className="absolute inset-x-0 top-0 z-50 bg-[#7e5991] text-white">
			<nav className="flex items-center justify-between p-3 lg:px-8">
				<div className="flex lg:flex-1">
						<span className="-m-1.5 p-1.5 text-xl font-semibold flex items-center gap-x-2">
						{title}
						</span>
				</div>
				<div className="flex flex-1 justify-end gap-x-4 md:gap-x-8">
					<Button onClick={() => setSolveModalOpen(true)} outline className="bg-[#a8d0d2] cursor-pointer flex items-center"><PiDetectiveDuotone size={20} />Solve Case</Button>
				   <button className="cursor-pointer"><span className="sr-only">View game Instructions</span><LuShieldQuestion size={25}/></button>
				</div>
			</nav>
		</header>
		<SolveClueModal isOpen={solveModelOpen} onClose={() => setSolveModalOpen(false)} culprits={cats} 
		onNextRound={() => {
			const nextRoomId = getNextRoomId(currentRoomId)
			setRoomId(nextRoomId)
			shuffleCats()
		}}
		onClick={(selectedCatId) => {
			console.log('You selected: ', selectedCatId)
			submitGuess(currentRoomId, selectedCatId)
		}}/>
		</>
	);
}