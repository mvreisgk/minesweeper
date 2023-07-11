'use client'

import { Context } from '@/contexts/application'
import { FC, ReactNode, useState } from 'react'

const App: FC<{ children: ReactNode }> = ({ children }) => {
  const [time, setTime] = useState<number>(0)
  const [remainingBombs, setRemainingBombs] = useState<number>(0)
  const [flags, setFlags] = useState<number>(0)
  return (
    <Context.Provider
      value={{
        flags,
        remainingBombs,
        time,
        setFlags,
        setRemainingBombs,
        setTime,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default App
