
import { useGameStore } from "../store/useGameStore";
import TopBar from "../components/TopBar"
import scenes from '../data/scenes'

export default function RoundScene() {
   const scene = useGameStore((state) => scenes.find((s) => s.id === state.currentSceneId)) 

  if (!scene) return null;
  
  return (
    <>  
    <TopBar title={scene.name} /> 
    <div className="min-h-screen min-w-full bg-cover bg-center"
     style={{ backgroundImage: `url(${scene.backgroundImg})` }}
    >   
    </div>
    </>
  )
}
