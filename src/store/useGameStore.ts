import { create } from 'zustand'
import type { GameStore } from './types'
import catsData from '../data/cats'
import { getShuffledCats, generateRound } from '../utils/helpers'
import type { Scene, Guess } from './types'
import { CORRECT_GUESS_ROOM_SCORE } from '../utils/constants'

export const useGameStore = create<GameStore>((set) => ({
  status: "START",
  setStatus: (status) => set({ status }),
  currentRoomId: 'living_room',
  setRoomId: (id) => set({ currentRoomId: id}),
  cats: [],
  setCats: (cats) => set({ cats }),
  scenes: [],
  guesses: [],
  setScenes: (scenes: Scene[]) => set({ scenes }),
  score: 0,
  shuffleCats: () => {
    set({
      cats: getShuffledCats(catsData)
    })
  },
  startGame: () => {
    const cats = getShuffledCats(catsData)
    const scenes = generateRound(cats)
    set({
      cats,
      scenes,
      currentRoomId: scenes[0].roomId,
      status: "PLAYING",
      score: 0,
      guesses: []
    })
  },
  resetGame: () =>
  set({
    status: "START",
    cats: [],
    scenes: [],
    score: 0,
    //currentRoomId: 'living_room',
    guesses: []
  }),
  submitGuess: (roomId, selectedCatId) => {
  set((state) => {
    const scene = state.scenes.find((scene) => scene.roomId === roomId);
    if (!scene) return state;

    const isCorrect = scene.guiltyCatId === selectedCatId;
    const newGuess: Guess = { roomId, selectedCatId, isCorrect };

    return {
      guesses: [...state.guesses, newGuess],
      score: isCorrect ? state.score + CORRECT_GUESS_ROOM_SCORE : state.score
    };
  });
}
}))