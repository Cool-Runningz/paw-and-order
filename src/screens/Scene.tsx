import { useGameStore } from "../store/useGameStore";
import TopBar from "../components/TopBar"
import rooms from '../data/rooms'
import type { Cat } from "../store/types";
import CatAvatar from "../components/CatAvatar";
import { CAT_POSITIONS } from "../utils/constants";
import Drawer from "../components/Drawer";
import { useState } from "react";

export default function Scene() {
    const [open, setOpen] = useState(false)
    const [selectedCat, setSelectedCat] = useState<Cat | null>(null)
   const room = useGameStore((state) => rooms.find((s) => s.id === state.currentRoomId)) 
   const currentRoomId = useGameStore((state) => state.currentRoomId)  
   const cats =  useGameStore((state) => state.cats) 
   const scenes = useGameStore((state) => state.scenes)
   const scene = scenes.find(r => r.roomId === room?.id)
  

  console.groupCollapsed("Scene")
  console.log('room: ', room)
   console.log("cats: ", cats)
   console.log('current: ', currentRoomId)
   console.log('sene: ', scene)
   console.groupEnd()

  if (!room) return null; 

  const handleAvatarClick = (cat: Cat) => {
   setOpen(prevState => !prevState) 
   setSelectedCat(cat)
  }

  return (
    <>  
    <TopBar title={scene?.shenanigan.caseName ?? ''} /> 
    <div className="min-h-screen h-screen min-w-full bg-cover bg-center relative"
     style={{ backgroundImage: `url(${room.backgroundImg})` }}
    >
      <Drawer cat={selectedCat} isOpen={open} onClose={() => setOpen(false)}  />   
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
    </div>
    </>
  )
}
