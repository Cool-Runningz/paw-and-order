import { LuPawPrint } from "react-icons/lu";
import { useGameStore } from "../store/useGameStore";
import rooms from '../data/rooms';

export default function SplashScreen() {
  const setRoomId = useGameStore((state) => state.setRoomId);
  const startGame = useGameStore((state) => state.startGame);
  
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
        <div className="whimsical-badge bg-[#E0CDB2] border-4 border-[#744B93] rounded-full px-6 py-2 inline-block">
          <p className="text-[#744B93] font-bold">
            A Purr-fectly Puzzling Cat Detective Game!
          </p>
        </div>
      </div>
      {/* Feature Boxes */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl w-full mb-10 z-10">
        {[
          {
            title: 'Investigate Cases',
            icon: '🔍',
            description:
              'Search for clues in mysterious household incidents and interrogate suspicious cats.',
            color: '#A4D4D4',
          },
          {
            title: 'Interview Suspects',
            icon: '🐾',
            description:
              'Question a cast of feline characters, each with their own purr-sonality.',
            color: '#ECA0B0',
          },
          {
            title: 'Solve Shenanigans',
            icon: '📋',
            description:
              'Piece together evidence and determine which cat is the culprit.',
            color: '#C889B5',
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="whimsical-card p-6 text-center"
            style={{
              backgroundColor: feature.color,
              borderColor: '#744B93',
            }}
          >
            <div className="mb-4 flex justify-center">
              <span className="text-4xl">{feature.icon}</span>
            </div>
            <h2 className="text-xl text-[#744B93] mb-3 font-bold">
              {feature.title}
            </h2>
            <p className="text-[#744B93] leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      {/* Game Description */}
      <div className="whimsical-card bg-[#E0CDB2] border-[#744B93] p-6 max-w-4xl text-center mb-10 z-10">
        <p className="text-[#744B93] leading-relaxed">
          Welcome to Paw & Order, where you'll investigate a series of
          mysterious incidents around the house! As the lead detective, you'll
          examine crime scenes, collect evidence, and interview a cast of
          suspicious felines. But remember: cats never confess - you'll have to
          use your detective skills to solve each case!
        </p>
      </div>
      {/* Start Button */}
      <button
        onClick={() => {
          startGame();
          setRoomId(rooms[0].id)
        }}
        className="whimsical-button mb-12 sm:mb-8 cursor-pointer bg-[#744B93] hover:bg-[#5d3c76] text-white font-bold py-4 px-8 text-xl transform transition-transform hover:scale-105 flex items-center z-10"
      >
        <LuPawPrint size={24} className="mr-2" />
        Start Playing!
      </button>
      
    </div>
  )
}
