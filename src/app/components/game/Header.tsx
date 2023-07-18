'use client'

import { Context } from '@/contexts/application'
import { getClockAndStart } from '@/services/time'
import { FC, useContext, useEffect } from 'react'
import { Bomb, Flag, Clock } from 'lucide-react'

const Header: FC = () => {
  const { time, setTime, flagsNumber, bombsNumber } = useContext(Context)

  useEffect(() => {
    const interval = getClockAndStart(time, (time: number) => {
      setTime(time)
    })
    return () => {
      clearInterval(interval)
    }
  }, [setTime, time])

  const milliseconds = time / 1000
  const seconds = milliseconds % 60
  const minutes = parseInt(((milliseconds / 60) % 60).toString())
  const hours = parseInt(((milliseconds / 3600) % 60).toString())
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`

  return (
    <header className="flex w-full flex-row justify-evenly bg-gray-100 p-2">
      <div className="flex flex-row space-x-2">
        <Flag className="text-emerald-700" />
        <p className="text-black">{flagsNumber}</p>
      </div>
      <div className="flex flex-row space-x-2">
        <Clock className="text-black" />
        <p className="text-black">{formattedTime}</p>
      </div>
      <div className="flex flex-row space-x-2">
        <Bomb className="text-red-700" />
        <p className="text-black">{bombsNumber}</p>
      </div>
    </header>
  )
}

export default Header
