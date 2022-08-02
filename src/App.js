import { BrowserRouter } from 'react-router-dom'

// Components
// import Body from './components/Body'
import Navigation from './components/Navigation'

import Home from './components/pages/Home'
import About from './components/pages/About'
import Experience from './components/pages/Experience'
import Skills from './components/pages/Skills'
import Portfolio from './components/pages/Portfolio'
import Contact from './components/pages/Contact'

const App = () => {
  return (
      <BrowserRouter>
      {/* <main className='site-wrapper'> */}
      <Navigation />
          <div className='outer-wrapper'>
            <div className='wrapper'>
              <Home />
              <About />
              <Experience />
              <Skills />
              <Portfolio />
              <Contact />
            </div>
          </div>
        {/* </main> */}
      </BrowserRouter>
  )
}

export default App
