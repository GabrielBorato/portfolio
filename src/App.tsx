import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { MatrixRain } from './components/MatrixRain'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Experience } from './sections/Experience'
import { Skills } from './sections/Skills'
import { Contact } from './sections/Contact'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <MatrixRain />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
