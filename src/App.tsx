import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { MatrixRain } from './components/MatrixRain'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Experience } from './sections/Experience'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import { Certifications } from './sections/Certifications'
import { Contact } from './sections/Contact'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <MatrixRain />
      <div className="fixed inset-0 -z-10 bg-[color:var(--color-bg)]/70 pointer-events-none" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
