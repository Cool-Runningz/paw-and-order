export type Status = "START" | "PLAYING" | "OVER"

export type Room = {
    id: "kitchen" | "living_room" | "office" | "bathroom",
    name: "Kitchen" | "Living Room" | "Office" | "Bathroom"
    backgroundImg: string
}

export type Scene = {
    roomId: Room['id']
    guiltyCatId: string;
    shenanigan: Shenanigan;
}

export type Shenanigan = {
  id: string
  roomId: Room['id']
  description: string
  caseName: string
}

export type GameStore = {
    status: Status;
    currentRoomId: Room['id'];
    setStatus: (status: Status) => void;
    setRoomId: (id: Room['id']) => void;
    cats: Cat[]
    setCats: (cats: Cat[]) => void;
}

export type Cat = {
    id: string;
    name: string;
      weight: number;
      agility: number;
      breed: string;
      size: string;
    alibi: string;
    imgSrc: string;
  };