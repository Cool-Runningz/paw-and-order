import shuffle from 'just-shuffle';
import rooms from '../data/rooms';
import shenanigans from '../data/shenanigans';
import type { Cat, Scene } from '../store/types';

export function generateRound(cats: Cat[]): Scene[] {
  const usedShenaniganIds = new Set<string>();
  const catAssignmentCount = new Map<string, number>();

  return rooms.map((room) => {
    const availableShenanigans = shenanigans.filter(
      (s) => s.roomId === room.id && !usedShenaniganIds.has(s.id)
    );

    const shenanigan = shuffle(availableShenanigans)[0];
    usedShenaniganIds.add(shenanigan.id);

    const eligibleCats = cats.filter(cat => {
      const count = catAssignmentCount.get(cat.id) ?? 0;
      return count < 2;
    });

    const guiltyCat = shuffle(eligibleCats)[0];
    catAssignmentCount.set(
      guiltyCat.id,
      (catAssignmentCount.get(guiltyCat.id) ?? 0) + 1
    );

    return {
      roomId: room.id,
      caseName: shenanigan.caseName,
      shenanigan,
      guiltyCatId: guiltyCat.id,
      clues: []
    };
  });
}

export function getShuffledCats(cats: Cat[],count = 5): Cat[] {
  return shuffle([...cats]).slice(0, count)
}
