'use client'

import { Cell } from '@/lib/types'
import { FC, useEffect, useState } from 'react'
import Tile from './Tile'

const Grid: FC = () => {
  const [grid, setGrid] = useState<Cell[][] | undefined>()

  useEffect(() => {
    if (!grid) {
      const dummy: Cell[][] = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
      ] as Cell[][]
      for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
          dummy[y][x] = {
            bombsAround: 0,
            haveBomb: Math.random() > 0.9,
          }
        }
      }
      setGrid(dummy)
    }
  }, [grid])

  if (!grid) {
    return <>Loading...</>
  }

  return (
    <section className="flex h-full w-full bg-emerald-500">
      <div className="grid h-full w-full grid-cols-10 divide-x divide-y divide-gray-500">
        {grid.map((line, gi) =>
          line.map((cell, li) => <Tile info={cell} key={`${gi}+${li}`} />),
        )}
      </div>
    </section>
  )
}

export default Grid
