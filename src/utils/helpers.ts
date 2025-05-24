import shuffle from 'just-shuffle';
import rooms from '../data/rooms';
import shenanigans from '../data/shenanigans';
import type { Cat, Room, Scene } from '../store/types';

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

    // Bias guilty cat selection toward those matching requiredTraits, if present
    //console.log('shenanigan: ', shenanigan)
    let matchingCats = eligibleCats;

    if (shenanigan.requiredTraits) {
      const traitWeights: Record<string, number> = {
        agility: 2,
        weight: 1,
        activityLevel: 3,
        personality: 2,
        ageGroup: 2,
        size: 1,
      };

      // Score each cat based on trait alignment
      const scoredCats = eligibleCats.map(cat => {
        let score = 0;
        for (const [key, required] of Object.entries(shenanigan.requiredTraits!)) {
          const catValue = cat.stats[key as keyof typeof cat.stats];

          if (typeof required === 'number') {
            if (typeof catValue === 'number') {
              const closeness = Math.max(0, catValue - required);
              score += closeness * (traitWeights[key] ?? 1);
            }
          } else {
            if (catValue === required) {
              score += traitWeights[key] ?? 1;
            }
          }
        }
        return { cat, score };
      });

      // Find highest score and filter cats that share it
      const maxScore = Math.max(...scoredCats.map(c => c.score));
      const topScorers = scoredCats.filter(c => c.score === maxScore).map(c => c.cat);

      if(room.name === 'Living Room'){
      console.groupCollapsed("output")
      console.log('scoredCats: ', scoredCats)
      console.log("maxScore: ", maxScore)
      console.log('topScorers: ', topScorers)
      console.groupEnd()
      }

      matchingCats = topScorers.length > 0 ? topScorers : eligibleCats;
    }
    const guiltyCat = matchingCats.length > 1 ? shuffle(matchingCats)[0] : matchingCats[0];
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

export function getNextRoomId(roomId: Room['id']): Room['id'] {
  const currentRoomIndex = rooms.findIndex(room => room.id === roomId)
  const lastIndex = rooms.length - 1
  let nextRoomIndex = 1
  if(currentRoomIndex + 1 <=lastIndex){
    nextRoomIndex = currentRoomIndex + 1
  } else {
    nextRoomIndex = 0
  }

  return rooms[nextRoomIndex].id
}
