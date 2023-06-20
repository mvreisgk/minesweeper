import { FC } from 'react'
import Header from './Header'

const Wrapper: FC = () => (
  <main className="flex h-screen w-screen items-center justify-center bg-black p-2">
    <section className="flex h-full w-3/4 items-center justify-center bg-white">
      <Header />
    </section>
  </main>
)

export default Wrapper
