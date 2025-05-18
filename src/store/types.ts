export type Status = "START" | "PLAYING" | "OVER"

export const ROOMS = ["kitchen", "living_room", "office", "bedroom"] as const;
export type Room = typeof ROOMS[number];

export type Scene = {
    id: "kitchen" | "living_room" | "office" | "bathroom",
    name: "Kitchen" | "Living Room" | "Office" | "Bathroom"
    backgroundImg: string
}

export type RoundScene = {
    caseName: string
    sceneId: Scene['id']
}

export type GameStore = {
    status: Status;
    currentSceneId: Scene['id'];
    setStatus: (status: Status) => void;
}