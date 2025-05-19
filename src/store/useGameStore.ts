import { create } from 'zustand'
import type { GameStore } from './types'
import cats from '../data/cats'
import { getShuffledCats } from '../utils/helpers'

export const useGameStore = create<GameStore>((set) => ({
  status: "START",
  setStatus: (status) => set({ status }),
  currentRoomId: 'living_room',
  setRoomId: (id) => set({ currentRoomId: id}),
  cats: getShuffledCats(cats),
  setCats: (cats) => set({ cats }),
}))