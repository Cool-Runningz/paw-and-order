import shuffle from 'just-shuffle';
import rooms from '../data/rooms';
import shenanigans from '../data/shenanigans';
import cats from '../data/cats';
import type { Cat, Room, Scene } from '../store/types';
import { TRAIT_WEIGHTS } from './constants';

export function generateScene(roomId: Room['id']): Scene{
 // 1. Filter shenanigans for this room
  const eligibleShenanigans = shenanigans.filter(s => s.roomId === roomId);
  const shenanigan = shuffle(eligibleShenanigans)[0];
  
  // 2. Score all cats for best guilty cat
  let bestMatchCats: Cat[] = cats;
  if(shenanigan.requiredTraits){
    const scoredCats = cats.map(cat => {
      let score = 0
      for (const [key, required] of Object.entries(shenanigan.requiredTraits!)) {
        const catValue = cat.stats[key as keyof typeof cat.stats];
        if (typeof required === 'number' && typeof catValue === 'number') {
          // The closer the value, the higher the score
          score -= Math.abs(catValue - required) * (TRAIT_WEIGHTS[key] ?? 1);
        } else if (catValue === required) {
          score += TRAIT_WEIGHTS[key] ?? 1;
        }
      }
      return { cat, score };
    })
    const maxScore = Math.max(...scoredCats.map(c => c.score));
    bestMatchCats = scoredCats.filter(c => c.score === maxScore).map(c => c.cat);

    //TESTING - Eventually remove this
   /*  console.groupCollapsed("the cats")
    console.log('scoredCats: ', scoredCats)
    console.log("maxScore: ", maxScore)
    console.log('bestMatchCats: ', bestMatchCats)
    console.groupEnd() */
  }

    // 3. Pick the guilty cat randomly from best matches
  const guiltyCat = shuffle(bestMatchCats)[0];
  
  // 4. Pick 4 other random (non-guilty) cats as suspects
  const otherCats = cats.filter(cat => cat.id !== guiltyCat.id);
  const suspects = shuffle([guiltyCat, ...shuffle(otherCats).slice(0, 4)]);

  //TESTING - Eventually remove this
  /* console.groupCollapsed("more cats")
  console.log("guilty cat: ", guiltyCat)
  console.log('other cats: ', otherCats)
  console.log('suspects: ', suspects)
  console.groupEnd() */

   // 5. Return the scene object
  return {
    roomId,
    shenanigan,
    guiltyCatId: guiltyCat.id,
    cats: suspects,
  } 
}

export function getShuffledCats(cats: Cat[],count = 5): Cat[] {
  return shuffle([...cats]).slice(0, count)
}

export function getNextRoomId(roomId: Room['id']): Room['id'] | -100 {
  const currentRoomIndex = rooms.findIndex(room => room.id === roomId)
  const lastIndex = rooms.length - 1
  let nextRoomIndex = 1
  if(currentRoomIndex + 1 <=lastIndex){
    nextRoomIndex = currentRoomIndex + 1
  } else {
    nextRoomIndex = 0
    return -100
  }

  return rooms[nextRoomIndex].id
}

export function getCatDetails(id: Cat['id']): Cat | undefined {
  return cats.find(cat => cat.id === id)
}