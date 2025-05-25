import { LuPawPrint } from "react-icons/lu";
import { useGameStore } from "../store/useGameStore";
import { Divider } from '../components/catalyst/divider'
import {CORRECT_GUESS_ROOM_SCORE} from '../utils/constants'
import rooms from '../data/rooms';

export default function GameOverScreen() {
  const setRoomId = useGameStore((state) => state.setRoomId);
  const score = useGameStore((state) => state.score);
  const startGame = useGameStore((state) => state.startGame);
  const resetGame = useGameStore((state) => state.resetGame);
  const guesses = useGameStore((state) => state.guesses);
  const totalCases = rooms.length
const correctGuesses = guesses.reduce((total, guess) => guess.isCorrect ? total + 1 : total, 0);
const incorrectGuesses  = totalCases - correctGuesses
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#A4D4D4] to-[#C889B5] flex flex-col items-center justify-start pt-12 px-4 overflow-hidden font-mono">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10"> 
      </div>
      {/* Floating paw prints */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${10 + Math.random() * 20}s`,
            }}
          >
            <LuPawPrint
              size={16 + Math.random() * 16}
              className="text-[#744B93] opacity-30"
            />
          </div>
        ))}
      </div>
      {/* Title Section */}
      <div className="z-10 text-center mb-12">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 pixel-title">
          <span className="text-[#744B93]">PAW</span>
          <span className="mx-2 text-[#ECA0B0]">&</span>
          <span className="text-[#744B93]">ORDER</span>
        </h1>
         <div className="whimsical-badge bg-[#C889B5] border-4 border-[#744B93] rounded-full px-6 py-2 inline-block">
          <p className="text-[#3f294f] font-bold">
           Detective Performance Report
          </p>
        </div>
      </div>
           {/* Stats Container */}
            <div className="w-full max-w-4xl mx-auto z-10 grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Case Summary Card */}
              <div className="whimsical-card bg-[#A4D4D4] border-[#744B93]">
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">🔍</span>
                    <h3 className="text-xl font-bold text-[#744B93]">
                      Case Summary
                    </h3>
                  </div>
                  <div className="space-y-3">
                      <div className="flex justify-between items-center">
                      <span className="text-[#744B93]">Correct guesses</span>
                      <span className="font-bold text-lg text-[#744B93]">
                        {correctGuesses}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-[#744B93]">Incorrect guesses</span>
                      <span className="font-bold text-lg text-[#744B93]">
                        {incorrectGuesses}
                      </span>
                    </div>
                     <Divider />
                    <div className="flex justify-between items-center">
                      <span className="text-[#744B93]">Total Cases</span>
                      <span className="font-bold text-lg text-[#744B93]">
                        {correctGuesses + incorrectGuesses}
                      </span>
                    </div>
                   
                  
                  </div>
                </div>
              </div>
              {/* Room Points Card */}
               <div className="whimsical-card bg-[#ECA0B0] border-[#744B93]">
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">🏠</span>
                    <h3 className="text-xl font-bold text-[#744B93]">
                      Room Points
                    </h3>
                  </div>
                   <div className="space-y-3">
                    {rooms.map((room, index) => { 
                        const guess = guesses.find(guess => guess.roomId === room.id)
                        return (<div key={index} className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="text-[#744B93]">{room.name}</span>
                          {guess?.isCorrect && <span>🏆</span>}
                        </div>
                        <span className="font-bold text-[#744B93]">
                          {guess?.isCorrect ? CORRECT_GUESS_ROOM_SCORE : 0}
                        </span>
                      </div>)})}
                  </div> 
                </div>
              </div> 
              {/* Detective Score Card */}
               <div className="whimsical-card bg-[#E0CDB2] border-[#744B93]">
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">🕵🏽‍♀️</span>
                    <h3 className="text-xl font-bold text-[#744B93]">
                      Detective Score
                    </h3>
                  </div>
                   <div className="text-center py-2">
                    <div className="text-4xl font-bold text-[#744B93] glow-text mb-2">
                      {score}
                    </div>
                    <p className="text-sm text-[#744B93] opacity-75">
                      Total Points
                    </p>
                  </div> 
                   <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#744B93]">Success Rate</span>
                      <span className="font-bold text-[#744B93]">
                        {Math.round(correctGuesses / (guesses.length) * 100)}
                        %
                      </span>
                    </div>
                    <div className="h-2 bg-[#744B93] bg-opacity-20 rounded-full overflow-hidden">
                      <div className="h-full bg-[#ECA0B0] transition-all duration-1000" style={{
                    width: `${correctGuesses / (guesses.length) * 100}%`
                  }} />
                    </div>
                  </div> 
                </div>
              </div> 
            </div>
      {/* Start Button */}
      <div className="flex flex-wrap gap-x-12">
        <button
        onClick={() => {
          resetGame()
        }}
        className="whimsical-button mb-12 sm:mb-8 cursor-pointer bg-[#744B93] hover:bg-[#5d3c76] text-white font-bold py-4 px-8 text-xl transform transition-transform hover:scale-105 flex items-center z-10"
      >
        <LuPawPrint size={24} className="mr-2" />
          Reset
      </button>
      <button
        onClick={() => {
          startGame();
          setRoomId(rooms[0].id)
        }}
        className="whimsical-button mb-12 sm:mb-8 cursor-pointer bg-[#744B93] hover:bg-[#5d3c76] text-white font-bold py-4 px-8 text-xl transform transition-transform hover:scale-105 flex items-center z-10"
      >
        <LuPawPrint size={24} className="mr-2" />
          Play again!
      </button>
      </div>
    </div>
  )
}
