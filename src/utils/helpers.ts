import shuffle from 'just-shuffle';
import type { Cat } from '../store/types';

export function generateRound(
  cats: Cat[],
  //allShenanigans: Shenanigan[]
) {
     // Shuffle cats and select one guilty cat per scene
  const shuffledCats = shuffle(cats);

  console.groupCollapsed("generateRound")
  console.log("shuffledCats: ", shuffledCats)
  console.groupEnd()
}

export function getShuffledCats(cats: Cat[],count = 5): Cat[] {
  return shuffle([...cats]).slice(0, count)
}