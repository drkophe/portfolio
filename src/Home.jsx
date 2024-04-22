import Navbar from "./components/Navigation/Navbar";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Welcome from "./sections/Welcome";

export default function Home() {
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