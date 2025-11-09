import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    // In a full build, this would POST to the backend. For now, simulate success.
    setTimeout(() => setSent(true), 500)
  }

  return (
    <section className="relative w-full bg-[#0b0b0f] px-6 py-20 text-white">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Collaborate</h2>
        <p className="mt-2 text-white/70">Building something cool? Let’s collaborate.</p>

        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <TerminalInput label="> Name" name="name" value={form.name} onChange={onChange} />
          <TerminalInput label="> Email" name="email" value={form.email} onChange={onChange} />
          <TerminalTextarea label="> Message" name="message" value={form.message} onChange={onChange} />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:border-cyan-400/50 hover:bg-white/10"
          >
            <Send className="h-4 w-4" /> Send
          </motion.button>
          {sent && (
            <p className="text-emerald-400">Thanks! I’ll get back to you soon.</p>
          )}
        </form>
      </div>
    </section>
  )
}

function TerminalInput({ label, name, value, onChange }) {
  return (
    <label className="block">
      <span className="mb-1 block font-mono text-xs text-white/60">{label}</span>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white outline-none ring-1 ring-transparent transition placeholder:text-white/30 focus:border-cyan-500/50 focus:ring-cyan-500/20"
        placeholder=""
        autoComplete="off"
      />
    </label>
  )
}

function TerminalTextarea({ label, name, value, onChange }) {
  return (
    <label className="block">
      <span className="mb-1 block font-mono text-xs text-white/60">{label}</span>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={5}
        className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white outline-none ring-1 ring-transparent transition placeholder:text-white/30 focus:border-cyan-500/50 focus:ring-cyan-500/20"
      />
    </label>
  )
}
