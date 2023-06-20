import { FC, ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: 'Minesweeper',
  description: 'Minesweeper app',
}

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <html lang="en">
    <body className="min-w-screen min-h-screen">{children}</body>
  </html>
)

export default RootLayout
