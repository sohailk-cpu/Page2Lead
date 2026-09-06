import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Zap, Target, Shield, Heart, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { CTASection } from '@/components/sections/CTASection'

const values = [
  {
    icon: Target,
    title: 'Results first, always',
    description: "I only build what actually moves the needle. Vanity features don't interest me — ROI does.",
  },
  {
    icon: Shield,
    title: 'Honest about limitations',
    description: "AI isn't magic. I'll tell you upfront what automation can and can't do for your specific situation.",
  },
  {
    icon: Zap,
    title: 'Speed without cutting corners',
    description: "Most AI projects go live in 2–6 weeks. I move fast and build right — they're not mutually exclusive.",
  },
  {
    icon: Heart,
    title: 'Long-term relationships',
    description: "I don't disappear after delivery. Most clients work with me for years, not just a single project.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-surface-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full bg-brand-500/10 blur-[100px]" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-eyebrow mb-4">About Page2Lead</p>
              <h1 className="text-display text-4xl lg:text-6xl text-white mb-6 text-balance">
                I'm a builder who thinks like a business owner
              </h1>
              <p className="text-white/50 text-lg leading-relaxed">
                Page2Lead was started with a simple belief: most businesses are sitting on enormous untapped potential that AI can unlock — if it's implemented by someone who understands both technology and real operations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-display text-3xl lg:text-4xl text-foreground mb-6">
                Why I started Page2Lead
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hi, I'm <strong className="text-foreground">Sohail Khan</strong> — a self-taught developer and digital marketer from Ajmer, Rajasthan.
                </p>
                <p>
                  I watched local business owners and coaching institutes burn out managing the same repetitive tasks month after month — chasing leads that went cold, manually sending reminders, updating spreadsheets instead of serving customers.
                </p>
                <p>
                  The technology to fix all of this existed. But most AI agencies either built toy demos that didn't work in the real world, or charged enterprise prices that small businesses couldn't afford.
                </p>
                <p>
                  So I started Page2Lead to fill that gap: production-ready AI systems built specifically for Indian businesses — at prices that make the ROI obvious from month one.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/contact">
                  <Button className="gap-2">
                    Work with me <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-2xl border border-border bg-card"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-brand-500/10 flex items-center justify-center text-2xl font-bold text-brand-500">
                  SK
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">Sohail Khan</p>
                  <p className="text-muted-foreground text-sm">Founder, Page2Lead</p>
                  <p className="text-muted-foreground text-xs mt-0.5">Ajmer, Rajasthan 🇮🇳</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>Self-taught developer & digital marketer</p>
                <p>Specialising in AI automation systems for Indian businesses</p>
                <p>Focused on real results, not demos</p>
                <p>Working with clients across India — remotely</p>
              </div>
              <div className="mt-6 pt-5 border-t border-border">
                <a
                  href="https://wa.me/917597256642?text=Hi%20Sohail,%20I%20want%20to%20book%20a%20strategy%20call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-brand-500 hover:underline"
                >
                  WhatsApp me directly → +91 75972 56642
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-surface-50 dark:bg-surface-900/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-eyebrow mb-3">How I work</p>
            <h2 className="text-display text-3xl lg:text-4xl text-foreground mb-4">My values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="p-6 rounded-2xl border border-border bg-card"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-brand-500" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
