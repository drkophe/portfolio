import './App.css'
import Navbar from './components/Navigation/Navbar'
import Welcome from './sections/Welcome'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
function App() {

  return (
    <div className='dark'>
      <Navbar />
      <Welcome />
      <Projects />
      <Skills />
    </div>
  )
}

export default App
