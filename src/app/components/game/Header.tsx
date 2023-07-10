'use client'

import { getClockAndStart } from '@/services/time'
import { FC, useState } from 'react'

const Header: FC = () => {
  const [time, setTime] = useState<number>(0)
  const updateTime = (time: number) => {
    setTime(time)
  }
  getClockAndStart(time, updateTime)
  return (
    <header className="flex h-8 w-full flex-row justify-evenly bg-gray-500">
      <div>0</div>
      <div>{time}</div>
      <div>10</div>
    </header>
  )
}

export default Header
