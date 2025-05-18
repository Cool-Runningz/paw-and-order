export type Status = "START" | "PLAYING" | "OVER"

export type Room = {
    id: "kitchen" | "living_room" | "office" | "bathroom",
    name: "Kitchen" | "Living Room" | "Office" | "Bathroom"
    backgroundImg: string
}

export type Scene = {
    caseName: string
    roomId: Room['id']
}

export type GameStore = {
    status: Status;
    currentRoomId: Room['id'];
    setStatus: (status: Status) => void;
    setRoomId: (id: Room['id']) => void;
}