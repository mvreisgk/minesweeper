export interface IContext {
  time: number
  setTime: (time: number) => void
  flags: number
  setFlags: (flags: number) => void
  remainingBombs: number
  setRemainingBombs: (remainingBombs: number) => void
}
