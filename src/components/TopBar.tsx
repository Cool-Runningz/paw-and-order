import { PiDetectiveDuotone, PiGearDuotone } from "react-icons/pi";
import SolveClueModal from "./SolveClueModal";
import { useState } from "react";
import { useGameStore } from "../store/useGameStore";
import { generateScene, getNextRoomId } from "../utils/helpers";


type TopBarProps = {
    title: string
}

export default function TopBar({title}: TopBarProps) {
	const [solveModelOpen, setSolveModalOpen] = useState(false)
	   const scene =  useGameStore((state) => state.scene) 
		  	   const cats = scene.cats
	     const setStatus = useGameStore((state) => state.setStatus);
	   const submitGuess = useGameStore((state) => state.submitGuess)
	      const currentRoomId = useGameStore((state) => state.currentRoomId)
  
		  const setScene = useGameStore((state) => state.setScene);
		  const setRoomId = useGameStore((state) => state.setRoomId);

	return (
		<>
		<header className="absolute inset-x-0 top-0 z-50 bg-[#7e5991] text-white">
			<nav className="flex items-center justify-between p-3 lg:px-8">
				<div className="flex lg:flex-1">
						<span className="-m-1.5 p-1.5 text-base sm:text-xl font-semibold flex items-center gap-x-2 max-w-fit truncate">
						{title}
						</span>
				</div>
				<div className="flex justify-end gap-x-4 md:gap-x-8">
					<button onClick={() => setSolveModalOpen(true)} className="cursor-pointer shrink-0 inline-flex items-center gap-x-1.5 rounded-md bg-[#a8d0d2] px-3 py-2 text-sm font-semibold text-black shadow-xs hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a8d0d2]"><PiDetectiveDuotone size={20} />Solve Case</button>
{/* 				   <button className="cursor-pointer"><span className="sr-only">View game Instructions</span><PiGearDuotone size={24}/></button>
 */}				</div>
			</nav>
		</header>
		<SolveClueModal isOpen={solveModelOpen} onClose={() => setSolveModalOpen(false)} culprits={cats} 
		onNextRound={() => {
			const nextRoomId = getNextRoomId(currentRoomId)
			if(nextRoomId === -100){
				setStatus('GAME_OVER')
				return
			}
			const nextScene = generateScene(nextRoomId)
			setScene(nextScene)
			setRoomId(nextRoomId)
		}}
		onClick={(selectedCatId) => {
			console.log('You selected: ', selectedCatId)
			submitGuess(currentRoomId, selectedCatId)
		}}/>
		</>
	);
}