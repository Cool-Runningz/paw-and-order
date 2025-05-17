import { useState } from 'react'
import './App.css'
import { SplashScreen } from './screens/SplashScreen'

function App() {
  const [gameStarted, setGameStarted] = useState(false)
  const startGame = () => {
    setGameStarted(true)
  }

  return (
    <div className="w-full min-h-screen bg-gray-900">
      {!gameStarted ? <SplashScreen onStartGame={startGame} /> : <h1>Game Screen</h1>}
    </div>
  )
}

export default App
