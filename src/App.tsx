import { useGameStore } from "./store/useGameStore";
import  SplashScreen from './screens/SplashScreen'
import GameOverScreen from "./screens/GameOverScreen";
import Scene from './screens/Scene'

function App() {
   const status = useGameStore((state) => state.status)

  return (
    <div className="w-full min-h-screen bg-gray-900">
      {status === 'GAME_OVER' ?  <GameOverScreen /> : null}
      {status === 'START' ? <SplashScreen  /> : null}
      {status === 'PLAYING' ? <Scene  /> : null}
    </div>
  )
}

export default App
