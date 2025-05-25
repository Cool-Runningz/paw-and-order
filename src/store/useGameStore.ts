import { create } from 'zustand'
import type { GameStore } from './types'
import rooms from '../data/rooms'
import {  generateScene } from '../utils/helpers'
import type { Scene, Guess } from './types'
import { CORRECT_GUESS_ROOM_SCORE } from '../utils/constants'

export const useGameStore = create<GameStore>((set) => ({
  status: "START",
  setStatus: (status) => set({ status }),
  currentRoomId: 'living_room',
  setRoomId: (id) => set({ currentRoomId: id}),
  scene: generateScene(rooms[0].id),
  guesses: [],
  setScene: (scene: Scene) => set({ scene }),
  score: 0,
  startGame: () => {
    const scene = generateScene(rooms[0].id)
    set({
      scene,
      currentRoomId: scene.roomId,
      status: "PLAYING",
      score: 0,
      guesses: []
    })
  },
  resetGame: () =>
  set({
    status: "START",
    scene: generateScene(rooms[0].id),
    score: 0,
    //currentRoomId: 'living_room',
    guesses: []
  }),
  submitGuess: (roomId, selectedCatId) => {
  set((state) => {
    const scene = state.scene
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