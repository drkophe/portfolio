import './App.css'
import Navbar from './components/Navigation/Navbar'
import Welcome from './sections/Welcome'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
function App() {

  return (
    <div className='dark pb-14'>
      <Navbar />
      <Welcome />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
