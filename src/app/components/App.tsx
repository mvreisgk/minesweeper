'use client'

import { Context } from '@/contexts/application'
import { GameState } from '@/lib/enums'
import { Cell } from '@/lib/types'
import { FC, ReactNode, useState } from 'react'

const App: FC<{ children: ReactNode }> = ({ children }) => {
  const [gameState, setGameState] = useState<GameState>(GameState.IN_PROGRESS)
  const [grid, setGrid] = useState<Cell[][] | undefined>()
  const [time, setTime] = useState<number>(0)
  const [flagsNumber, setFlagsNumber] = useState<number>(0)
  const [bombsNumber, setBombsNumber] = useState<number>(0)
  return (
    <Context.Provider
      value={{
        gameState,
        grid,
        flagsNumber,
        bombsNumber,
        time,
        setGameState,
        setGrid,
        setFlagsNumber,
        setBombsNumber,
        setTime,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default App
