'use client'

import { IContext } from '@/lib/interfaces'
import { createContext } from 'react'

export const Context = createContext<IContext>({} as IContext)
