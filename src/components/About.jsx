import { motion } from 'framer-motion'
import { Cpu, Code, Bug, PlayCircle } from 'lucide-react'

export default function About() {
  return (
    <section className="relative w-full bg-[#0b0b0f] px-6 py-20 text-white">
      <div className="mx-auto grid max-w-6xl items-start gap-10 md:grid-cols-2">
        {/* Left: narrative */}
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">About</h2>
          <p className="mt-4 text-white/80">
            I like building intelligent systems that people actually use. IIT Bombay gave me the fundamentals, startups gave me the shippable mindset, and places like Adobe honed the craft.
          </p>
          <div className="mt-6 space-y-3 text-sm text-white/70">
            <HoverLine icon={<Bug className="h-4 w-4" />} text="debugging things at 3AM" hoverLines={["Error: no one admitted to breaking it", "Fix: shipped anyway", "Status: green (somehow)"]} />
            <HoverLine icon={<PlayCircle className="h-4 w-4" />} text="Adobe Express" hoverLines={["Auto-edit timeline", "Scene detection", "Snappy UX"]} />
            <HoverLine icon={<Code className="h-4 w-4" />} text="ResoBin" hoverLines={["retrieval → ranking → LLM", "notes + reviews + structure"]} />
          </div>
        </div>

        {/* Right: evolving visual */}
        <div className="relative h-72 md:h-96">
          <EvolvingVisual />
        </div>
      </div>
    </section>
  )
}

function HoverLine({ icon, text, hoverLines }) {
  return (
    <div className="group relative inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2">
      <span className="text-white/80">{icon}</span>
      <span className="font-mono">{text}</span>
      <div className="pointer-events-none absolute left-0 top-full z-10 hidden w-[22rem] origin-top-left rounded-md border border-emerald-400/20 bg-black/80 p-3 font-mono text-xs text-emerald-200 shadow-2xl ring-1 ring-emerald-400/20 backdrop-blur-md group-hover:block">
        <ul className="space-y-1">
          {hoverLines.map((l, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
              <span className="opacity-90">{l}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function EvolvingVisual() {
  return (
    <div className="absolute inset-0">
      {/* Stage 1: code */}
      <motion.div
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        className="absolute inset-0 rounded-xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 p-4"
      >
        <CodeBlock />
      </motion.div>
      {/* Stage 2: neurons overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0"
      >
        <NeuralNet />
      </motion.div>
      {/* Stage 3: system diagram */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.6 }}
        className="absolute inset-0"
      >
        <SystemDiagram />
      </motion.div>
    </div>
  )
}

function CodeBlock() {
  const lines = [
    'def serve(frame):',
    '    feats = encoder(frame)',
    '    pred = model(feats)',
    "    return pred['action']",
  ]
  return (
    <div className="font-mono text-xs text-white/80">
      {lines.map((l, i) => (
        <div key={i} className="flex items-center gap-3">
          <span className="text-white/30">{String(i + 1).padStart(2, '0')}</span>
          <span className="opacity-90">{l}</span>
        </div>
      ))}
    </div>
  )
}

function NeuralNet() {
  const nodes = Array.from({ length: 14 }, (_, i) => i)
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full">
      {nodes.map((i) => (
        <circle key={i} cx={(i * 27) % 380 + 10} cy={((i * 53) % 260) + 20} r="3" fill="#22d3ee" opacity="0.7" />
      ))}
      {nodes.map((i) => (
        <line key={`l-${i}`} x1={(i * 27) % 380 + 10} y1={((i * 53) % 260) + 20} x2={((i + 4) * 31) % 380 + 10} y2={((i + 6) * 47) % 260 + 20} stroke="#7c3aed" strokeOpacity="0.3" />
      ))}
    </svg>
  )
}

function SystemDiagram() {
  const items = [
    { label: 'Client', x: 30, y: 40 },
    { label: 'API', x: 160, y: 40 },
    { label: 'Worker', x: 290, y: 40 },
    { label: 'Vector DB', x: 160, y: 160 },
  ]
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full">
      {items.map((n) => (
        <g key={n.label}>
          <rect x={n.x} y={n.y} width="90" height="40" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(56,189,248,0.6)" />
          <text x={n.x + 45} y={n.y + 24} textAnchor="middle" fontSize="10" fill="#e5e7eb">{n.label}</text>
        </g>
      ))}
      {/* connections */}
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L6,3 z" fill="#22d3ee" />
        </marker>
      </defs>
      <line x1="120" y1="60" x2="160" y2="60" stroke="#22d3ee" markerEnd="url(#arrow)" />
      <line x1="250" y1="60" x2="290" y2="60" stroke="#22d3ee" markerEnd="url(#arrow)" />
      <line x1="205" y1="80" x2="205" y2="160" stroke="#7c3aed" markerEnd="url(#arrow)" />
    </svg>
  )
}
