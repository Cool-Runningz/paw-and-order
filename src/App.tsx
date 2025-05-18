import { useGameStore } from "./store/useGameStore";
import './App.css'
import  SplashScreen from './screens/SplashScreen'
import RoundScene from './screens/RoundScene'

function App() {
   const status = useGameStore((state) => state.status)

  return (
    <div className="w-full min-h-screen bg-gray-900">
      {status === 'START' ? <SplashScreen  /> : <RoundScene />}
    </div>
  )
}

export default App
