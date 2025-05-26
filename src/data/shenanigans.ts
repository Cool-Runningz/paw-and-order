import type { Shenanigan } from "../store/types"
import { GiPorcelainVase } from "react-icons/gi";
import { GiFlour } from "react-icons/gi";
import { MdChair } from "react-icons/md";
import { IoPaw } from "react-icons/io5";
import { GiTheaterCurtains } from "react-icons/gi";
import { MdFastfood } from "react-icons/md";
import { BsFillLampFill } from "react-icons/bs";
import { FaCouch } from "react-icons/fa";
import { SiWine } from "react-icons/si";
import { GiTvRemote } from "react-icons/gi";
import { BiSolidFridge } from "react-icons/bi";
import { GiNestEggs } from "react-icons/gi";
import { FaTrashAlt } from "react-icons/fa";
import { GiPapers } from "react-icons/gi";
import { BiPrinter } from "react-icons/bi";
import { GiToothbrush } from "react-icons/gi";
import { FaShower } from "react-icons/fa";
import { PiTowelFill } from "react-icons/pi";
import { GiSoap } from "react-icons/gi";
import { BiSolidBlanket } from "react-icons/bi";
import { FaUtensils } from "react-icons/fa";
import { FaRegStickyNote } from "react-icons/fa";
import { PiToiletPaperFill } from "react-icons/pi";

const shenanigans: Shenanigan[] = [
  {
    id: "shenanigan_01",
    roomId: "living_room",
    description: "A delicate vase lies shattered on the floor.",
    caseName: "The Case of the Broken Vase",
    requiredTraits: {
      agility: 5,
      activityLevel: "high",
      personality: "curious",
      weight: 4
    },
    clue: {
      details: [
        "No crash too loud, no thump too great — a nimble cat escaped its fate.",
        "Climbed up high to take a peek, a curious sort who couldn't sneak.",
        "The vase was light, the pawprints slight — a featherweight feline took flight."
      ],
      icon: GiPorcelainVase,
      imgSrc: 'images/shenanigans/flower-vase.jpg'
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
      agility: 4,
      ageGroup: "kitten"
    },
    clue: {
      details: [
        "Pawprints swirl in dusty white — a kitten’s joy, a baker’s fright.",
        "Clumps of flour, a toppled sack — someone small went on attack.",
        "Curious sniffing, mid-energy pace, no grown cat could leave such a trace."
      ],
      icon: GiFlour,
      imgSrc: 'images/shenanigans/flour-fiasco.png'
    }
  },
  {
    id: "shenanigan_03",
    roomId: "office",
    description: "An overturned chair lies on the floor.",
    caseName: "The Case of the Tipped Chair",
    requiredTraits: {
      weight: 13,
      activityLevel: "high",
      personality: "bold"
    },
    clue: {
      details: [
        "The chair’s no match for fearless bulk — a bold brute struck in a joyful sulk.",
        "Heavy paws and hurried flight — this feline didn’t tread light.",
        "Large and loud, with no regrets, this cat makes moves it soon forgets."
      ],
      icon: MdChair,
      imgSrc:'images/shenanigans/chairs.jpg'
    }
  },
  {
    id: "shenanigan_04",
    roomId: "bathroom",
    description: "A puddle of spilled water with wet paw prints nearby.",
    caseName: "The Mystery of the Wet Prints",
    requiredTraits: {
      agility: 4,
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
      imgSrc: 'images/shenanigans/cat-paw.png'
    }
  },
  {
    id: "shenanigan_05",
    roomId: "living_room",
    description: "A curtain has a small rip, dangling loose.",
    caseName: "The Curious Curtain Tear",
    requiredTraits: {
      agility: 5,
      personality: "mischievous",
      activityLevel: "high",
      ageGroup: 'kitten'
    },
    clue: {
      details: [
        "The rip is high, the threads are torn — mischief was awake this morn.",
        "Tiny claws and tricky bounds — someone small was leaping rounds.",
        "Restless paws with silent grace — the culprit dashed without a trace."
      ],
      icon: GiTheaterCurtains,
      imgSrc: 'images/shenanigans/curtains.jpg'
    }
  },
  {
    id: "shenanigan_06",
    roomId: "office",
    description: "Some food is missing from the plate on the table.",
    caseName: "The Case of the Vanishing Snacks",
    requiredTraits: {
      personality: "bold",
      weight: 10,
      activityLevel: "medium",
      ageGroup: "adult"
    },
    clue: {
      details: [
        "Snacks are gone, the plate askew — a daring thief just passed through.",
        "Heavy steps near crumbs remain — an adult feline with much to gain.",
        "Not too quick, not too slow, but bold enough to steal the show."
      ],
      icon: MdFastfood,
      imgSrc: 'images/shenanigans/food-snacks.jpg'
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
    },
    clue: {
      details: [
        "The lamp was doomed from the start — knocked by a cat with a reckless heart.",
        "Big and brash, with bounds galore — this feline doesn’t tiptoe the floor.",
        "A loud kaboom, a broken glow — mischief charged the status quo."
      ],
      icon: BsFillLampFill,
      imgSrc: 'images/shenanigans/retro-lampshade.jpg'
    }
  },
  {
    id: "shenanigan_08",
    roomId: "living_room",
    description: "Scratches and tears on the sofa cushion.",
    caseName: "The Sofa Scratch Scandal",
    requiredTraits: {
      personality: "mischievous",
      agility: 4,
      activityLevel: "high",
    },
    clue: {
      details: [
        "Claw marks fresh in cozy foam — a mid-sized rascal calls this home.",
        "High-strung and slick with crafty paws, no cushion survives those sneaky claws.",
        "This wasn't anger, rage, or fright — just pure feline delight at night."
      ],
      icon: FaCouch,
      imgSrc: 'images/shenanigans/couch-with-cat.jpg'
    }
  },
  {
  id: "shenanigan_09",
  roomId: "living_room",
  description: "The TV remote has mysteriously vanished from the coffee table.",
  caseName: "The Vanishing Remote",
  requiredTraits: {
    personality: "mischievous",
    agility: 3,
    activityLevel: "medium",
  },
  clue: {
    details: [
      "The remote’s gone, no sign of where — a sneaky cat with tricks to spare.",
      "A mid-energy rascal left the trace — gone from sight, a quick escape.",
      "Eyes alert and paws so light — the culprit vanished out of sight."
    ],
    icon: GiTvRemote,
    imgSrc: 'images/shenanigans/remote-control.jpg'
  }
},
{
  id: "shenanigan_10",
  roomId: "living_room",
  description: "A spilled drink stains the carpet near the armchair.",
  caseName: "The Spilled Secret",
  requiredTraits: {
    agility: 4,
    personality: "curious",
    weight: 3,
    activityLevel: "medium"
  },
  clue: {
    details: [
      "A splash and stain on soft ground — a curious cat was poking around.",
      "Light on feet but eager to explore — this feline caused a little uproar.",
      "Near the chair where drinks are poured, a paw left marks you can’t ignore."
    ],
    icon: SiWine,
    imgSrc: 'images/shenanigans/red-wine-spill.jpg'
  }
},
{
  id: "shenanigan_11",
  roomId: "kitchen",
  description: "The fruit bowl is emptied except for one lonely apple.",
  caseName: "The Fruit Bandit",
  requiredTraits: {
    personality: "bold",
    agility: 4,
    weight: 6,
    activityLevel: "medium",
  },
  clue: {
    details: [
      "Fruit disappeared with bold intent — a cat on mission, fully spent.",
      "Paws swift and claws not shy, this feline took what caught the eye.",
      "One apple left, the rest went missing — a daring act, no signs dismissing."
    ],
    icon: MdFastfood,
    imgSrc: 'images/shenanigans/fruit-bowl.jpg'
  }
},
{
  id: "shenanigan_12",
  roomId: "kitchen",
  description: "A trail of paw prints leads to the open fridge door.",
  caseName: "The Midnight Snack Thief",
  requiredTraits: {
    personality: "bold",
    agility: 5,
    activityLevel: "high",
    ageGroup: "adult",
  },
  clue: {
    details: [
      "Sneaking softly in the night — this cat’s hunger was a fright.",
      "Fridge left open, prints on floor — a clever cat came back for more.",
      "Bold and quick, a shadowy feat — the culprit’s paws were light and fleet."
    ],
    icon: BiSolidFridge,
    imgSrc: 'images/shenanigans/open-fridge.jpg'
  }
},
{
  id: "shenanigan_13",
  roomId: "kitchen",
  description: "Broken eggshells scattered across the floor.",
  caseName: "The Eggstravaganza",
  requiredTraits: {
    agility: 4,
    personality: "curious",
    weight: 3,
    activityLevel: "medium"
  },
  clue: {
    details: [
      "Eggs were crushed in playful paws — a small cat caused the cause.",
      "Light and quick, with curious nose — this feline brought the chaos close.",
      "Shells cracked near the stove and sink — a mess that makes you stop and think."
    ],
    icon: GiNestEggs,
    imgSrc: 'images/shenanigans/eggs.jpg'
  }
},
{
  id: "shenanigan_14",
  roomId: "kitchen",
  description: "A toppled trash can spills garbage all over the floor.",
  caseName: "The Garbage Guru",
  requiredTraits: {
    personality: "mischievous",
    weight: 5,
    activityLevel: "high",
    agility: 4,
  },
  clue: {
    details: [
      "Trash strewn wide with reckless glee — a troublemaker wild and free.",
      "Claws and paws left all the signs — this feline crossed all the lines.",
      "Mischief ruled the kitchen floor — a daring cat who wanted more."
    ],
    icon: FaTrashAlt,
    imgSrc: 'images/shenanigans/rubbish-bin.jpg'
  }
},
{
  id: "shenanigan_15",
  roomId: "office",
  description: "A stack of papers is scattered across the desk.",
  caseName: "The Paper Trail",
  requiredTraits: {
    personality: "curious",
    agility: 4,
    activityLevel: "medium",
    weight: 8
  },
  clue: {
    details: [
      "Papers tossed with playful paws — a cat with tricks and crafty claws.",
      "Desk disrupted, chaos made — a mid-sized feline led the raid.",
      "Curious spirit left the mark — a clever cat who loves the dark."
    ],
    icon: GiPapers,
    imgSrc: 'images/shenanigans/scattered-papers.jpg'
  }
},
{
  id: "shenanigan_16",
  roomId: "office",
  description: "The printer has been unplugged mysteriously.",
  caseName: "The Silent Saboteur",
  requiredTraits: {
    personality: "lazy",
    weight: 10,
    activityLevel: "low"
  },
  clue: {
    details: [
      "No noise heard, yet work is stalled — a silent cat with plans recalled.",
      "Strong paws that slipped the plug — a feline rogue who won’t be smug.",
      "Quiet but heavy, the culprit crept — the printer’s fate while others slept."
    ],
    icon: BiPrinter,
    imgSrc: 'images/shenanigans/printer.jpg'
  }
},
{
  id: "shenanigan_17",
  roomId: "bathroom",
  description: "Toothpaste is smeared all over the sink.",
  caseName: "The Minty Mess",
  requiredTraits: {
    personality: "curious",
    agility: 4,
    activityLevel: "medium",
    ageGroup: "adult"
  },
  clue: {
    details: [
      "Minty paste spread all around — a curious cat was bathroom bound.",
      "Paws and nose on slippery brink — a feline culprit on the blink.",
      "Bathroom chaos, fresh and wild — made by a curious, playful child."
    ],
    icon: GiToothbrush,
    imgSrc: 'images/shenanigans/smurf-toothbrush.jpg'
  }
},
{
  id: "shenanigan_18",
  roomId: "bathroom",
  description: "The shower curtain is mysteriously torn.",
  caseName: "The Shower Shredder",
  requiredTraits: {
    personality: "mischievous",
    agility: 5,
    activityLevel: "high",
  },
  clue: {
    details: [
      "Torn fabric swings with stealthy grace — a mischievous cat left the trace.",
      "High jumps and claws that swipe — this feline’s mischief took a hike.",
      "Bathroom battles, silent cries — the culprit’s pawprints tell no lies."
    ],
    icon: FaShower,
    imgSrc: 'images/shenanigans/shower-curtain.jpg'
  }
},
{
  id: "shenanigan_19",
  roomId: "bathroom",
  description: "Wet towels are tossed all over the floor.",
  caseName: "The Towel Toss",
  requiredTraits: {
    personality: "lazy",
    weight: 8,
    activityLevel: "medium",
    ageGroup: "adult"
  },
  clue: {
    details: [
      "Towels scattered in disarray — a lazy cat had its way.",
      "Heavy paws dragged them all — this feline made the bathroom fall.",
      "Noisy mess with splashes near — the culprit’s boldness is clear."
    ],
    icon: PiTowelFill,
    imgSrc: 'images/shenanigans/towels.jpg'
  }
},
{
  id: "shenanigan_20",
  roomId: "bathroom",
  description: "The soap dish has been knocked off the counter.",
  caseName: "The Soapy Slip",
  requiredTraits: {
    agility: 3,
    personality: "mischievous",
    activityLevel: "medium"
  },
  clue: {
    details: [
      "Soap fell down without a sound — a mischievous cat was around.",
      "Clumsy paws and curious eyes — this feline’s fault is no surprise.",
      "Bathroom chaos, soap afloat — the culprit left a slippery note."
    ],
    icon: GiSoap,
    imgSrc: 'images/shenanigans/soap-dish.jpg'
  },
},
{
  id: "shenanigan_21",
  roomId: "living_room",
  description: "A blanket from the couch has been dragged to the floor and rumpled.",
  caseName: "The Cozy Heist",
  requiredTraits: {
    personality: "lazy",
    weight: 10,
    ageGroup: "senior",
    activityLevel: "low"
  },
  clue: {
    details: [
      "No rush, no panic — just comfort undone.",
      "The blanket's shift was slow and sly, by a sleepy senior lounging nearby.",
      "Not mischief, not speed — just a quest for warmth, indeed."
    ],
    icon: BiSolidBlanket,
    imgSrc: 'images/shenanigans/blanket-on-couch.jpg'
  }
},
{
  id: "shenanigan_22",
  roomId: "kitchen",
  description: "A food bowl is mysteriously empty, but no mess surrounds it.",
  caseName: "The Silent Supper",
  requiredTraits: {
    personality: "lazy",
    weight: 12,
    ageGroup: "senior",
    activityLevel: "low"
  },
  clue: {
    details: [
      "No clatter, no chaos, but food is no more.",
      "The job was clean, the crime was neat — this slow cat sure knows how to eat.",
      "They didn’t run, they didn’t chase — just strolled up and cleared the place."
    ],
    icon: FaUtensils,
    imgSrc: 'images/shenanigans/plate-with-food.jpg'
  }
},
{
  id: "shenanigan_23",
  roomId: "office",
  description: "A single sticky note is stuck to the floor in a strange spot.",
  caseName: "The Note Migration",
  requiredTraits: {
    personality: "timid",
    weight: 8,
    ageGroup: "senior",
    activityLevel: "low"
  },
  clue: {
    details: [
      "A small change, but a curious one — that note was not undone by fun.",
      "Heavy steps and slow-paced paws dragged paper out of laws.",
      "No pounce, no leap — just one slow sweep."
    ],
    icon: FaRegStickyNote,
    imgSrc: 'images/shenanigans/sticky-note.jpg'
  }
},
{
  id: "shenanigan_24",
  roomId: "bathroom",
  description: "Toilet paper is shredded and strewn across the floor.",
  caseName: "The TP Tornado",
  requiredTraits: {
    personality: "timid",
    weight: 6,
    ageGroup: "kitten",
    activityLevel: "medium"
  },
  clue: {
    details: [
           "The paper trail winds far and wide — a senior prankster couldn't hide.",
      "Not fast, but full of flair — this feline left fluff everywhere.",
      "Years may slow their speed and spring, but shredding TP is still their thing."
    ],
    icon: PiToiletPaperFill,
    imgSrc: "images/shenanigans/toilet-paper.jpg"
  }
}
];

export default shenanigans;