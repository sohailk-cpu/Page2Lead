import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Zap, HeartHandshake, Clock } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const stats = [
  { value: '1:1', label: 'Direct developer contact', icon: HeartHandshake },
  { value: 'Clear', label: 'Scope & deliverables', icon: Clock },
  { value: 'Custom', label: 'Built for your needs', icon: Zap },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-surface-950 pt-16">
      {/* Background grid */}
      <div className="absolute inset-0 bg-dot opacity-30" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-brand-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-indigo-600/8 blur-[100px] pointer-events-none" />

      <div className="container-wide relative z-10 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-4 py-1.5 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse2" />
            <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">
              Freelance Web Development & Automation
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-display text-4xl sm:text-5xl lg:text-7xl text-white mb-6 text-balance leading-[1.08]"
          >
            Websites, Web Apps
            <br />
            <span className="gradient-text">& Business Automation.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-lg lg:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed text-balance"
          >
            I build business websites, custom web apps, AI chatbots and WhatsApp workflows — with direct communication, clear scope and practical delivery.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16"
          >
            <Link to="/contact">
              <Button size="xl" className="gap-2 group">
                Discuss Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
            <a
                href="https://youtu.be/oRsbdbcOHes?si=jf8YF6g1ml0XQqcg"
                target="_blank"
                rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 text-base font-medium text-white/60 hover:text-white transition-colors"
            >
              <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-brand-500/50 transition-colors">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </div>
              Explore project demos
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="grid grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden max-w-2xl mx-auto"
          >
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="bg-surface-950 px-6 py-5 text-center">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <Icon className="w-4 h-4 text-brand-400" />
                  <span className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
                    {value}
                  </span>
                </div>
                <p className="text-xs text-white/40 leading-snug">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 relative max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl border border-white/8 bg-surface-900/60 backdrop-blur overflow-hidden shadow-2xl">
            {/* Fake browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-surface-900">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-amber-500/60" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
              <div className="ml-4 flex-1 h-6 rounded-md bg-white/5 flex items-center px-3">
                <span className="text-xs text-white/20">Concept preview · Page2Lead</span>
              </div>
            </div>

            {/* Dashboard content simulation */}
            <div className="p-6 grid grid-cols-3 gap-4">
              {/* Stat cards */}
              {[
                { label: 'Enquiry form', value: 'Form', change: 'Concept preview', color: 'text-emerald-400' },
                { label: 'Booking request', value: 'Request', change: 'Example state', color: 'text-emerald-400' },
                { label: 'Follow-up task', value: 'Task', change: 'Illustrative only', color: 'text-brand-400' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl border border-white/5 bg-white/3 p-4">
                  <p className="text-xs text-white/40 mb-2">{stat.label}</p>
                  <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                  <p className={`text-xs font-medium ${stat.color}`}>{stat.change}</p>
                </div>
              ))}

              {/* Chat widget preview */}
              <div className="col-span-2 rounded-xl border border-white/5 bg-white/3 p-4">
                <p className="text-xs text-white/40 mb-3">Sample chatbot conversation</p>
                <div className="space-y-2">
                  {[
                    { msg: "Hi! I'm interested in your dental packages. Can you tell me the pricing?", from: 'user' },
                    { msg: "Thanks for reaching out. I can share the available services and help you send an enquiry to the team.", from: 'ai' },
                    { msg: "Yes please! I'm free this Saturday.", from: 'user' },
                  ].map((m, i) => (
                    <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] rounded-xl px-3 py-2 text-xs ${
                        m.from === 'user'
                          ? 'bg-brand-500/20 text-brand-300'
                          : 'bg-white/5 text-white/60'
                      }`}>
                        {m.msg}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity feed */}
              <div className="rounded-xl border border-white/5 bg-white/3 p-4">
                <p className="text-xs text-white/40 mb-3">Example workflow activity</p>
                <div className="space-y-2.5">
                  {[
                    { action: 'Lead captured', source: 'WhatsApp', time: 'Example' },
                    { action: 'Appointment booked', source: 'Chatbot', time: 'Example' },
                    { action: 'Follow-up sent', source: 'CRM', time: 'Example' },
                    { action: 'Lead qualified', source: 'AI', time: '2Example' },
                  ].map((item) => (
                    <div key={item.action} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-white/60 truncate">{item.action}</p>
                        <p className="text-2xs text-white/30">{item.source} · {item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Glow under the card */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-brand-500/20 blur-3xl rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}
