'use client'

import { Context } from '@/contexts/application'
import { ReactNode, FC } from 'react'

const App: FC<{ children: ReactNode }> = ({ children }) => (
  <Context.Provider value={{}}>{children}</Context.Provider>
)

export default App
