import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, FileText, BookOpen } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const rotatingWords = [
  'systems',
  'platforms',
  'models',
  'features',
  'tools',
  'things that actually ship',
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % rotatingWords.length), 2400)
    return () => clearInterval(id)
  }, [])

  const current = rotatingWords[index]

  const buttons = useMemo(
    () => [
      {
        label: 'Resume',
        href: 'https://drive.google.com',
        Icon: FileText,
      },
      {
        label: 'GitHub',
        href: 'https://github.com/vidit-khazanchi',
        Icon: Github,
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/viditkhazanchi',
        Icon: Linkedin,
      },
      {
        label: 'Scholar',
        href: 'https://scholar.google.com',
        Icon: BookOpen,
      },
      {
        label: 'Email',
        href: 'mailto:vidit@example.com',
        Icon: Mail,
      },
    ],
    []
  )

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0b0f] text-white">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient veil to improve text contrast, does not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0b0f]/60 via-[#0b0b0f]/40 to-[#0b0b0f]" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 pb-24 pt-28 sm:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-[1px]"
        >
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            system status: active
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-6xl">
            Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400">Vidit Khazanchi</span> — I build
            <br className="hidden sm:block" />
            intelligent <span className="text-cyan-300">{''}</span>
            <span className="relative inline-block">
              <AnimatePresence mode="wait">
                <motion.span
                  key={current}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                  className="text-cyan-300"
                >
                  {current}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">
            A product-minded engineer blending ML, systems, and design. Think GenAI dashboard meets developer terminal — built to ship.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-wrap items-center gap-3"
        >
          {buttons.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:border-cyan-400/50 hover:bg-white/10"
            >
              <Icon className="h-4 w-4 text-white/70 transition group-hover:text-cyan-300" />
              <span>{label}</span>
            </a>
          ))}
        </motion.div>

        {/* Micro system pings near cursor (subtle) */}
        <PingField />
      </div>
    </section>
  )
}

function PingField() {
  const [pings, setPings] = useState([])

  useEffect(() => {
    const onMove = (e) => {
      const x = e.clientX
      const y = e.clientY
      const id = Math.random().toString(36).slice(2)
      setPings((prev) => [...prev.slice(-8), { id, x, y }])
      setTimeout(() => {
        setPings((prev) => prev.filter((p) => p.id !== id))
      }, 900)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0">
      {pings.map((p) => (
        <span
          key={p.id}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ left: p.x, top: p.y }}
        >
          <span className="block h-2 w-2 animate-ping rounded-full bg-cyan-300/60" />
          <span className="absolute left-0 top-0 block h-2 w-2 rounded-full bg-cyan-300/80" />
        </span>
      ))}
    </div>
  )
}
