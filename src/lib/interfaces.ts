import { Cell } from '@/lib/types'
import { GameState } from '@/lib/enums'

export interface IContext {
  gameState: GameState
  setGameState: (gameState: GameState) => void
  grid: Cell[][] | undefined
  setGrid: (grid: Cell[][] | undefined) => void
  time: number
  setTime: (time: number) => void
  flagsNumber: number
  setFlagsNumber: (flagsNumber: number) => void
  bombsNumber: number
  setBombsNumber: (bombsNumber: number) => void
}
