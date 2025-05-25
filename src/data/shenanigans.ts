import type { Shenanigan } from "../store/types"
import { GiPorcelainVase } from "react-icons/gi";
import { GiFlour } from "react-icons/gi";
import { MdChair } from "react-icons/md";
import { IoPaw } from "react-icons/io5";
import { GiTheaterCurtains } from "react-icons/gi";
import { MdFastfood } from "react-icons/md";
import { BsFillLampFill } from "react-icons/bs";
import { FaCouch } from "react-icons/fa";


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
    },
   clue: {
    details: [
  "No crash too loud, no thump too great — a nimble cat escaped its fate.",
  "Climbed up high to take a peek, a curious sort who couldn't sneak.",
  "The vase was light, the pawprints slight — a featherweight feline took flight."
],
    icon: GiPorcelainVase,
    imgSrc: ''
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
    },
    clue: {
        details: [
  "Pawprints swirl in dusty white — a kitten’s joy, a baker’s fright.",
  "Clumps of flour, a toppled sack — someone small went on attack.",
  "Curious sniffing, mid-energy pace, no grown cat could leave such a trace."
],
        icon: GiFlour,
        imgSrc: ''
    }
  },
  {
    id: "shenanigan_03",
    roomId: "office",
    description: "An overturned chair lies on the floor.",
    caseName: "The Case of the Tipped Chair",
    requiredTraits: {
      weight: 12,
      activityLevel: "high",
      size: "large",
      personality: "bold"
    },
    clue: {
        details: [
  "The chair’s no match for fearless bulk — a bold brute struck in a joyful sulk.",
  "Heavy paws and hurried flight — this feline didn’t tread light.",
  "Large and loud, with no regrets, this cat makes moves it soon forgets."
],
        icon: MdChair,
        imgSrc:''
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
    },
    clue: {
        details: [
  "Only the brave would dare the sink, their wet trail gone before you blink.",
  "A calm and clever feline prowled — not too young, and not too wild.",
  "The puddle’s prints were neat and light — from paws not full of kitten fright."
],
        icon: IoPaw,
        imgSrc: ''
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
    },
    clue: {
        details: [
  "The rip is high, the threads are torn — mischief was awake this morn.",
  "Tiny claws and tricky bounds — someone small was leaping rounds.",
  "Restless paws with silent grace — the culprit dashed without a trace."
],
        icon: GiTheaterCurtains,
        imgSrc: ''
    }
  },
  {
    id: "shenanigan_06",
    roomId: "office",
    description: "Some food is missing from the plate on the table.",
    caseName: "The Case of the Vanishing Snacks",
    requiredTraits: {
      personality: "bold",
      weight: 8,
      activityLevel: "medium",
      ageGroup: "adult"
    },
    clue: {
        details: ["Snacks are gone, the plate askew — a daring thief just passed through.",
  "Heavy steps near crumbs remain — an adult feline with much to gain.",
  "Not too quick, not too slow, but bold enough to steal the show."],
        icon: MdFastfood,
        imgSrc: ''
    }
  },
  {
    id: "shenanigan_07",
    roomId: "office",
    description: "A lamp has been knocked over, with the bulb shattered.",
    caseName: "The Lamp That Couldn't Stand",
    requiredTraits: {
      activityLevel: "high",
      weight: 12,
      personality: "mischievous",
      size: "large"
    },
    clue: {
        details: ["The lamp was doomed from the start — knocked by a cat with a reckless heart.",
  "Big and brash, with bounds galore — this feline doesn’t tiptoe the floor.",
  "A loud kaboom, a broken glow — mischief charged the status quo."],
        icon: BsFillLampFill,
        imgSrc: ''
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
    },
    clue: {
        details: ["Claw marks fresh in cozy foam — a mid-sized rascal calls this home.",
  "High-strung and slick with crafty paws, no cushion survives those sneaky claws.",
  "This wasn't anger, rage, or fright — just pure feline delight at night."],
        icon: FaCouch,
        imgSrc: ''
    }
  }
]

export default shenanigans