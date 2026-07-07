import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Link } from 'react-router-dom'

const WA_LINK = 'https://wa.me/917597256642?text=Hi%20Sohail,%20I%20want%20to%20book%20a%20strategy%20call'

export function CTASection() {
  return (
    <section className="section-lg bg-surface-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dot opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-brand-500/15 blur-[100px] pointer-events-none" />

      <div className="container-tight relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-eyebrow mb-5">Ready to automate?</p>
          <h2 className="text-display text-4xl lg:text-6xl text-white mb-6 text-balance leading-tight">
            Stop losing leads.
            <br />
            <span className="gradient-text">Start automating.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            Book a free 30-minute strategy call. I'll analyse your business, identify your top automation opportunities, and give you a clear plan — no sales pitch.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="xl" className="gap-2 group">
                <Calendar className="w-5 h-5" />
                Book Free Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </a>
            <Link to="/services">
              <Button size="xl" variant="ghost" className="text-white/60 hover:text-black">
                Explore Services
              </Button>
            </Link>
          </div>

          <p className="mt-6 text-sm text-white/30">
            Free call · No commitment · Results-focused
          </p>
        </motion.div>
      </div>
    </section>
  )
}
