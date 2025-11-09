import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">
      <Hero />
      <About />
      <Experience />
      <Contact />
      <footer className="border-t border-white/10 bg-black/40 px-6 py-10">
        <div className="mx-auto max-w-6xl font-mono text-sm text-white/70">
          <p>$ whoami</p>
          <p className="ml-4">→ Vidit Khazanchi</p>
          <p className="mt-3">$ system status: active</p>
        </div>
      </footer>
    </div>
  )
}

export default App
