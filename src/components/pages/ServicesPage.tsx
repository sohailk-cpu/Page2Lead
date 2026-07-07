import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  MessageSquare, Phone, Mic, TrendingUp, Zap,
  Database, Calendar, HeadphonesIcon, Globe, Cpu, BarChart3,
  ArrowRight, Check,
} from 'lucide-react'
import { services } from '@/data/services'
import { CTASection } from '@/components/sections/CTASection'
import { Button } from '@/components/ui/Button'

const iconMap: Record<string, React.ElementType> = {
  MessageSquare, Phone, Mic, TrendingUp, Zap,
  Database, Calendar, HeadphonesIcon, Globe, Cpu, BarChart3,
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-surface-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full bg-brand-500/10 blur-[100px]" />
        <div className="container-wide relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-eyebrow mb-4">My Services</p>
            <h1 className="text-display text-4xl lg:text-6xl text-white mb-5 text-balance">
              AI systems for every part<br />
              <span className="gradient-text">of your business</span>
            </h1>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              From lead capture to customer support — I automate the work that's costing you time and money.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services list */}
      <section className="section bg-background">
        <div className="container-wide">
          <div className="space-y-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] ?? Zap
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="group p-7 rounded-2xl border border-border bg-card hover:border-brand-500/30 hover:shadow-card-hover transition-all duration-200"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand-500/10 flex items-center justify-center shrink-0 group-hover:bg-brand-500/20 transition-colors">
                      <Icon className="w-7 h-7 text-brand-500" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-foreground mb-2">{service.title}</h2>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((f) => (
                          <span key={f} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Check className="w-3.5 h-3.5 text-brand-500" />
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="shrink-0">
                      <Link to={service.href}>
                        <Button variant="outline" className="gap-2">
                          Learn More <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
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
