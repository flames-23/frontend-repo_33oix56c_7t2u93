import { motion } from 'framer-motion'
import { Shield, Network, Cpu, Loop, Play } from 'lucide-react'

const roles = [
  {
    company: 'Adobe',
    summary: 'Auto-edit for video; ML + UX for creators',
    accent: 'from-pink-500/20 to-purple-500/20',
    icon: Play,
  },
  {
    company: 'Bosch',
    summary: 'Anomaly detection; attacks blocked at the edge',
    accent: 'from-red-500/20 to-blue-500/20',
    icon: Shield,
  },
  {
    company: 'IIT Bombay - SysAdmin',
    summary: 'Servers, networks, terminals — upgraded and humming',
    accent: 'from-sky-500/20 to-emerald-500/20',
    icon: Network,
  },
  {
    company: 'senzcraft',
    summary: 'Human-in-the-loop vision systems for manufacturing',
    accent: 'from-indigo-500/20 to-cyan-500/20',
    icon: Loop,
  },
]

export default function Experience() {
  return (
    <section className="relative w-full bg-[#0b0b0f] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Experience</h2>
        <div className="relative mt-8 grid gap-6 md:grid-cols-2">
          {/* flowing line */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyan-500/30 via-purple-500/30 to-transparent md:block" />

          {roles.map((r, i) => (
            <motion.div
              key={r.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${r.accent} p-5`}
            >
              <div className="flex items-start gap-3">
                <r.icon className="mt-1 h-5 w-5 text-cyan-300" />
                <div>
                  <h3 className="text-lg font-semibold">{r.company}</h3>
                  <p className="mt-1 text-sm text-white/80">{r.summary}</p>
                </div>
              </div>
              {/* hover overlay animation */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.18),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.18),transparent_50%)]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
