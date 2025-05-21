import { create } from 'zustand'
import type { GameStore } from './types'
import catsData from '../data/cats'
import { getShuffledCats, generateRound } from '../utils/helpers'
import type { Scene } from './types'

export const useGameStore = create<GameStore>((set) => ({
  status: "START",
  setStatus: (status) => set({ status }),
  currentRoomId: 'living_room',
  setRoomId: (id) => set({ currentRoomId: id}),
  cats: [],
  setCats: (cats) => set({ cats }),
  scenes: [],
  setScenes: (scenes: Scene[]) => set({ scenes }),
  score: 0,
  startGame: () => {
    const cats = getShuffledCats(catsData)
    const scenes = generateRound(cats)
    set({
      cats,
      scenes,
      currentRoomId: scenes[0].roomId,
      status: "PLAYING",
      score: 0,
    })
  }
}))