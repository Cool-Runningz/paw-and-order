
import { useGameStore } from "../store/useGameStore";
import TopBar from "../components/TopBar"
import rooms from '../data/rooms'
import scenes from "../data/scenes";
import { AvatarButton } from "../components/catalyst/avatar";
import { CAT_POSITIONS } from "../utils/constants";

export default function Scene() {
   const room = useGameStore((state) => rooms.find((s) => s.id === state.currentRoomId)) 
   const scene = scenes.find(s => s.roomId === room?.id)
   const cats =  useGameStore((state) => state.cats) 

  if (!room || !scene) return null;
  
  return (
    <>  
    <TopBar title={scene.caseName} /> 
    <div className="min-h-screen h-screen min-w-full bg-cover bg-center relative"
     style={{ backgroundImage: `url(${room.backgroundImg})` }}
    >   
    {cats.map((cat, i) => {
        const position = CAT_POSITIONS[i];
    return (
      <div className="absolute" style={{
          top: position.top,
          left: position.left
        }}>
      <AvatarButton
        key={cat.id}
        src={cat.imgSrc}
        alt={cat.name}
        className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 border-4 border-[#744B93] shadow-xl cursor-pointer"
        
      />
       <div className="cat-label">
          <span>{cat.name}</span>
        </div>
      </div>
    );
  })}
    </div>
    </>
  )
}
