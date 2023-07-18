import { FC } from 'react'
import Grid from '@/app/components/game/Grid'
import Header from '@/app/components/game/Header'

const Wrapper: FC = () => (
  <main className="flex h-screen w-screen items-center justify-center bg-black p-2">
    <section className="flex aspect-square h-full flex-col items-center justify-start bg-sky-400">
      <Header />
      <Grid />
    </section>
  </main>
)

export default Wrapper
