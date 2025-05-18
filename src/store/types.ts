export type Status = "START" | "PLAYING" | "OVER"

export type GameStore = {
    status: Status
    currentSceneIndex: number
    setStatus: (status: Status) => void
}
