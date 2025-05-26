import { useCallback, useEffect, useRef } from "react";
import { Howl } from "howler";
import { useAudioStore } from '../store/useAudioStore';

export function useAudio() {
  const bgMusicRef = useRef<Howl | null>(null);
  const correctRef = useRef<Howl | null>(null);
  const wrongRef = useRef<Howl | null>(null);
  const isAudioEnabled = useAudioStore((state) => state.isAudioEnabled);

  // Initialize sounds only once
  useEffect(() => {
    if (!bgMusicRef.current) {
      bgMusicRef.current = new Howl({
        src: ["/audio/The_Enigma_Unfolds.mp3"],
        loop: true,
        volume: 0.5,
      });
    }
    if (!correctRef.current) {
      correctRef.current = new Howl({
        src: ["/audio/yay.mp3"],
        volume: 1.0,
      });
    }
    if (!wrongRef.current) {
      wrongRef.current = new Howl({
        src: ["/audio/sad-trombone.mp3"],
        volume: 1.0,
        rate: 2.0
      });
    }
    // Cleanup on unmount
    return () => {
      bgMusicRef.current?.stop();
      bgMusicRef.current?.unload();
      correctRef.current?.unload();
      wrongRef.current?.unload();
      bgMusicRef.current = null;
      correctRef.current = null;
      wrongRef.current = null;
    };
  }, []);

  // Play/pause background music when isAudioEnabled changes
  useEffect(() => {
    if (bgMusicRef.current) {
      if (isAudioEnabled) {
        if (!bgMusicRef.current.playing()) {
          bgMusicRef.current.play();
        }
      } else {
        bgMusicRef.current.pause();
      }
    }
  }, [isAudioEnabled]);

  // Functions to play sound effects
  const playCorrectSound = useCallback(() => {
    if (isAudioEnabled) correctRef.current?.play();
  }, [isAudioEnabled]);

  const playWrongSound = useCallback(() => {
    if (isAudioEnabled) wrongRef.current?.play();
  }, [isAudioEnabled]);

  return { playCorrectSound, playWrongSound };
}