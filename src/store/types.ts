import type { IconType } from "react-icons";

export type Status = "START" | "PLAYING" | "GAME_OVER"

export type Room = {
    id: "kitchen" | "living_room" | "office" | "bathroom",
    name: "Kitchen" | "Living Room" | "Office" | "Bathroom"
    backgroundImg: string
}

export type Scene = {
    roomId: Room['id']
    guiltyCatId: string;
    shenanigan: Shenanigan;
}

export type Shenanigan = {
  id: string
  roomId: Room['id']
  description: string
  caseName: string
  requiredTraits?: Partial<Cat['stats']>;
  clue: Clue
}

export type Clue = {
  details: string[]
  icon: IconType
  imgSrc: string
}

export type GameStore = {
    status: Status;
    currentRoomId: Room['id'];
    setStatus: (status: Status) => void;
    setRoomId: (id: Room['id']) => void;
    shuffleCats: () => void;
    cats: Cat[]
    setCats: (cats: Cat[]) => void;
    scenes: Scene[];
    setScenes: (scenes: Scene[]) => void;
    startGame: () => void;
    resetGame: () => void;
    score: number;
    guesses: Guess[]
    submitGuess: (roomId: Room['id'], selectedCatId: string) => void;
}

export type Cat = {
    id: string;
    name: string;
    breed: string;
    stats: {
         personality: 'curious' | 'timid' | 'bold' | 'lazy' | 'mischievous';
        weight: number;
        agility: number;
        activityLevel: 'low' | 'medium' | 'high';
        ageGroup: 'kitten' | 'adult' | 'senior';
        size: 'small' | 'medium' | 'large';
    };
    alibi: string;
    imgSrc: string;
};

export type Guess = {
  roomId: string;
  selectedCatId: string;
  isCorrect?: boolean;
};
