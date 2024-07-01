import Navbar from './components/navbar'
import "./style.css"
import Home from './components/home'
import Contact from './components/contact'
import About from './components/about'
import Educations from './components/educations'
import Example from './components/skills'

function App() {

  return (
    <div className='bg-stone-50 h-auto'>
      <Contact />
      <Navbar />
      <Home />
      <About />
      <Example />
      <Educations />
    </div>
  )
}

export default App