import { create } from 'zustand'
import type { GameStore } from './types'

export const useGameStore = create<GameStore>((set) => ({
  status: "START",
  currentSceneIndex: 0,
  setStatus: (status) => set({ status }),
}))