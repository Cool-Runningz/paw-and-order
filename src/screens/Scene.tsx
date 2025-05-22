import { useGameStore } from "../store/useGameStore";
import TopBar from "../components/TopBar"
import rooms from '../data/rooms'
import type { Cat } from "../store/types";
import CatAvatar from "../components/CatAvatar";
import { CAT_POSITIONS } from "../utils/constants";
import CatProfileDrawer from "../components/CatProfileDrawer";
import ClueDrawer from "../components/ClueDrawer";
import ClueButton from "../components/ClueAvatar";
import { useState } from "react";

export default function Scene() {
    const [openCatDrawer, setOpenCatDrawer] = useState(false)
    const [openClueDrawer, setOpenClueDrawer] = useState(false)
    const [selectedCat, setSelectedCat] = useState<Cat | null>(null)
   const room = useGameStore((state) => rooms.find((s) => s.id === state.currentRoomId)) 
   const currentRoomId = useGameStore((state) => state.currentRoomId)  
   const cats =  useGameStore((state) => state.cats) 
   const scenes = useGameStore((state) => state.scenes)
   const scene = scenes.find(r => r.roomId === room?.id)
  const Icon = scene?.shenanigan.clue.icon 

  console.groupCollapsed("Scene")
  console.log('room: ', room)
   console.log("cats: ", cats)
   console.log('current: ', currentRoomId)
   console.log('sene: ', scene)
   console.groupEnd()

  if (!room) return null; 

  const handleAvatarClick = (cat: Cat) => {
   setOpenCatDrawer(prevState => !prevState) 
   setSelectedCat(cat)
  }

  return (
    <>  
    <TopBar title={scene?.shenanigan.caseName ?? ''} /> 
    <div className="min-h-screen h-screen min-w-full bg-cover bg-center relative"
     style={{ backgroundImage: `url(${room.backgroundImg})` }}
    >
      <CatProfileDrawer cat={selectedCat} isOpen={openCatDrawer} onClose={() => setOpenCatDrawer(false)}  />   
         <ClueDrawer shenanigan={scene?.shenanigan} isOpen={openClueDrawer} onClose={() => setOpenClueDrawer(false)} /> 
    {/**render cats */}
    {cats.map((cat, i) => {
        const position = CAT_POSITIONS[i];
    return (
      <div key={cat.id} className="absolute" style={{
          top: position.top,
          left: position.left
        }}>
      <CatAvatar cat={cat} onClick={() => handleAvatarClick(cat)} />
      </div>
    );
  })}
   <div className="absolute bottom-4 left-2">
   <ClueButton onClick={() => setOpenClueDrawer(prevState => !prevState)} >
    {Icon && <Icon size={75} /> }
   </ClueButton>
   </div>
    </div>
    </>
  )
}
