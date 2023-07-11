'use client'

import { Context } from '@/contexts/application'
import { getClockAndStart } from '@/services/time'
import { FC, useContext, useEffect } from 'react'

const Header: FC = () => {
  const { time, setTime, flags, remainingBombs } = useContext(Context)

  useEffect(() => {
    const interval = getClockAndStart(time, (time: number) => {
      setTime(time)
    })
    return () => {
      clearInterval(interval)
    }
  }, [setTime, time])

  return (
    <header className="flex h-8 w-full flex-row justify-evenly bg-gray-500">
      <div>{flags}</div>
      <div>{time}</div>
      <div>{remainingBombs}</div>
    </header>
  )
}

export default Header
