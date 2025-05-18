
import { useGameStore } from "../store/useGameStore";
import TopBar from "../components/TopBar"
import rooms from '../data/rooms'
import scenes from "../data/scenes";

export default function Scene() {
   const room = useGameStore((state) => rooms.find((s) => s.id === state.currentRoomId)) 
   const scene = scenes.find(s => s.roomId === room?.id)

  if (!room || !scene) return null;
  
  return (
    <>  
    <TopBar title={scene.caseName} /> 
    <div className="min-h-screen min-w-full bg-cover bg-center"
     style={{ backgroundImage: `url(${room.backgroundImg})` }}
    >   
    </div>
    </>
  )
}
