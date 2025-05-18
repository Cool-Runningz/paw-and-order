import { useGameStore } from "./store/useGameStore";
import './App.css'
import { SplashScreen } from './screens/SplashScreen'

function App() {
   const status = useGameStore((state) => state.status)

  return (
    <div className="w-full min-h-screen bg-gray-900">
      {status === 'START' ? <SplashScreen  /> : <h1 className="text-white">Game Screen</h1>}
    </div>
  )
}

export default App
