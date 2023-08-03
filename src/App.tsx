import { useState } from 'react'
import Navbar from './navigator/Navbar'
import About from './screens/About'
import Aside from './navigator/Aside'
import Resume from './screens/Resume'
import { ActiveNav } from './types'
import Contact from './screens/Contact'
import Bookshelf from './screens/Bookshelf'
import Portfolio from './screens/Portfolio'

function App() {

  const [active, setActive] = useState<ActiveNav>("About")

  return (
    <main>
      <Aside />
      <div className="main-content">
        <Navbar active={active} setActive={setActive} />
        <About active={active} />
        <Resume active={active} />
        <Contact active={active} />
        <Bookshelf active={active} />
        <Portfolio active={active} />
      </div>
    </main>
  )
}

export default App
