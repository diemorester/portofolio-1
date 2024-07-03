import Navbar from './components/navbar'
import "./style.css"
import Home from './components/home'
import About from './components/about'
import Example from './components/skills'
import Experiences from './components/experiences'
import Services from './components/services'

function App() {

  return (
    <div className='bg-stone-50 h-auto'>
      <Navbar />
      <Home />
      <About />
      <Example />
      <Experiences />
      <Services />
    </div>
  )
}

export default App