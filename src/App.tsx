import { useEffect, useState } from 'react'
import Navbar from './navigator/Navbar'
import About from './screens/About'
import Aside from './navigator/Aside'
import Resume from './screens/Resume'
import { ActiveNav } from './types'
import Contact from './screens/Contact'
import Bookshelf from './screens/Bookshelf'
import Projects from './screens/Projects'

function App() {

  const [active, setActive] = useState<ActiveNav>("About")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [active])

  return (
    <main>
      <Aside />
      <div className="main-content">
        <Navbar active={active} setActive={setActive} />
        <About active={active} />
        <Resume active={active} />
        <Contact active={active} />
        <Bookshelf active={active} />
        <Projects active={active} />
      </div>
    </main>
  )
}

export default App
