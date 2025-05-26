import { create } from 'zustand';

type AudioStore = {
  isAudioEnabled: boolean;
  toggleAudio: () => void;
};

export const useAudioStore = create<AudioStore>((set) => ({
  isAudioEnabled: true,
  toggleAudio: () =>
    set((state) => ({ isAudioEnabled: !state.isAudioEnabled })),
}));