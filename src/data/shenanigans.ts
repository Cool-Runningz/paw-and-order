import type { Shenanigan } from "../store/types"

const shenanigans: Shenanigan[] = [
  {
    id: "shenanigan_01",
    roomId: "living_room",
    description: "A delicate vase lies shattered on the floor.",
    caseName: "The Case of the Broken Vase",
    requiredTraits: {
      agility: 4,
      activityLevel: "high",
      personality: "curious",
      weight: 2
    }
  },
  {
    id: "shenanigan_02",
    roomId: "kitchen",
    description: "Flour scattered all over the kitchen counter.",
    caseName: "The Great Flour Fiasco",
    requiredTraits: {
      personality: "curious",
      activityLevel: "medium",
      agility: 3,
      ageGroup: "kitten"
    }
  },
  {
    id: "shenanigan_03",
    roomId: "office",
    description: "An overturned chair lies on the floor.",
    caseName: "The Case of the Tipped Chair",
    requiredTraits: {
      weight: 4,
      activityLevel: "high",
      size: "large",
      personality: "bold"
    }
  },
  {
    id: "shenanigan_04",
    roomId: "bathroom",
    description: "A puddle of spilled water with wet paw prints nearby.",
    caseName: "The Mystery of the Wet Prints",
    requiredTraits: {
      agility: 3,
      personality: "bold",
      activityLevel: "medium",
      ageGroup: "adult"
    }
  },
  {
    id: "shenanigan_05",
    roomId: "living_room",
    description: "A curtain has a small rip, dangling loose.",
    caseName: "The Curious Curtain Tear",
    requiredTraits: {
      agility: 4,
      personality: "mischievous",
      activityLevel: "high",
      size: "small"
    }
  },
  {
    id: "shenanigan_06",
    roomId: "office",
    description: "Some food is missing from the plate on the table.",
    caseName: "The Case of the Vanishing Snacks",
    requiredTraits: {
      personality: "bold",
      weight: 4,
      activityLevel: "medium",
      ageGroup: "adult"
    }
  },
  {
    id: "shenanigan_07",
    roomId: "office",
    description: "A lamp has been knocked over, with the bulb shattered.",
    caseName: "The Lamp That Couldn't Stand",
    requiredTraits: {
      activityLevel: "high",
      weight: 5,
      personality: "mischievous",
      size: "large"
    }
  },
  {
    id: "shenanigan_08",
    roomId: "living_room",
    description: "Scratches and tears on the sofa cushion.",
    caseName: "The Sofa Scratch Scandal",
    requiredTraits: {
      personality: "mischievous",
      agility: 3,
      activityLevel: "high",
      size: "medium"
    }
  }
]

export default shenanigans