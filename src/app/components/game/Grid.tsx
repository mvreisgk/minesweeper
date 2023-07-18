'use client'

import { Cell } from '@/lib/types'
import { FC, useContext, useEffect } from 'react'
import Tile from '@/app/components/game/Tile'
import { Context } from '@/contexts/application'

const Grid: FC = () => {
  const { grid, setGrid, bombsNumber, setBombsNumber } = useContext(Context)

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
            flagged: false,
            revealed: false,
          }
        }
      }
      setGrid(dummy)
    }
    if (grid && !bombsNumber) {
      setBombsNumber(
        grid
          .map((line) => {
            return line.map((cell) => {
              return cell.haveBomb
            })
          })
          .flat()
          .filter((e) => e).length
      )
      grid.forEach((line, li) => {
        line.forEach((cell, ci) => {
          const x = ci
          const y = li
          const bombs: boolean[] = [] as boolean[]
          if (x - 1 >= 0) {
            bombs.push(grid[y][x - 1].haveBomb)
            if (y - 1 >= 0) {
              bombs.push(grid[y - 1][x - 1].haveBomb)
            }
            if (y + 1 < 10) {
              bombs.push(grid[y + 1][x - 1].haveBomb)
            }
          }
          if (y - 1 >= 0) {
            bombs.push(grid[y - 1][x].haveBomb)
          }
          if (y + 1 < 10) {
            bombs.push(grid[y + 1][x].haveBomb)
          }
          if (x + 1 < 10) {
            bombs.push(grid[y][x + 1].haveBomb)
            if (y - 1 >= 0) {
              bombs.push(grid[y - 1][x + 1].haveBomb)
            }
            if (y + 1 < 10) {
              bombs.push(grid[y + 1][x + 1].haveBomb)
            }
          }
          cell.bombsAround = bombs.flat().filter((b) => b).length
          bombs.splice(0, bombs.length)
        })
      })
    }
  })

  if (!grid) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="grid-rows-10 grid h-full w-full grid-cols-10 divide-x-2 divide-y-2 divide-gray-500">
      {grid.map((line, gi) =>
        line.map((cell, li) => <Tile cell={cell} key={`${gi}+${li}`} />)
      )}
    </div>
  )
}

export default Grid
