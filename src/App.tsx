import { useGameStore } from "./store/useGameStore";
import './App.css'
import  SplashScreen from './screens/SplashScreen'
import Scene from './screens/Scene'

function App() {
   const status = useGameStore((state) => state.status)

  return (
    <div className="w-full min-h-screen bg-gray-900">
      {status === 'START' ? <SplashScreen  /> : <Scene />}
    </div>
  )
}

export default App
