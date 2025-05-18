import { create } from 'zustand'
import type { GameStore } from './types'

export const useGameStore = create<GameStore>((set) => ({
  status: "START",
  setStatus: (status) => set({ status }),
  currentRoomId: 'living_room',
  setRoomId: (id) => set({ currentRoomId: id})
}))