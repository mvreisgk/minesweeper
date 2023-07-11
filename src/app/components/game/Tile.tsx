import { Cell } from '@/lib/types'
import { FC, useState } from 'react'

const Tile: FC<{ info: Cell }> = ({ info }) => {
  const [cell] = useState(info)
  if (cell.haveBomb) {
    return <div className="col-span-1 flex bg-red-600"></div>
  } else {
    return <div className="col-span-1 flex bg-blue-400"></div>
  }
}

export default Tile
