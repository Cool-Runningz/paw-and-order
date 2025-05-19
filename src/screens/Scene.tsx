
import { useGameStore } from "../store/useGameStore";
import TopBar from "../components/TopBar"
import rooms from '../data/rooms'
import CatAvatar from "../components/CatAvatar";
import { CAT_POSITIONS } from "../utils/constants";
import { generateRound } from "../utils/helpers";

export default function Scene() {
   const room = useGameStore((state) => rooms.find((s) => s.id === state.currentRoomId)) 
   const cats =  useGameStore((state) => state.cats) 
   const roundInfo = generateRound(cats)
   const scene = roundInfo.find(r => r.roomId === room?.id)
  

   console.groupCollapsed("Scene")
   console.log("cats: ", cats)
    console.log('stuff: ', roundInfo)
   console.log('sene: ', scene)
   console.groupEnd()

  if (!room) return null; 
  
  return (
    <>  
    <TopBar title={scene?.shenanigan.caseName ?? ''} /> 
    <div className="min-h-screen h-screen min-w-full bg-cover bg-center relative"
     style={{ backgroundImage: `url(${room.backgroundImg})` }}
    >   
    {/**render cats */}
    {cats.map((cat, i) => {
        const position = CAT_POSITIONS[i];
    return (
      <div key={cat.id} className="absolute" style={{
          top: position.top,
          left: position.left
        }}>
      <CatAvatar cat={cat} />
      </div>
    );
  })}
    </div>
    </>
  )
}
