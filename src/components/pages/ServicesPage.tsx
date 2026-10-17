import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  MessageSquare, Phone, Mic, TrendingUp, Zap, Calendar, Globe,
  ArrowRight, Check,
} from 'lucide-react'
import { services } from '@/data/services'
import { CTASection } from '@/components/sections/CTASection'
import { Button } from '@/components/ui/Button'

const iconMap: Record<string, React.ElementType> = {
  MessageSquare, Phone, Mic, TrendingUp, Zap, Calendar, Globe,
}

import { usePageMetadata } from '@/hooks/usePageMetadata'
import { pageMetadata } from '@/data/pageMetadata'

export default function ServicesPage() {
  usePageMetadata(pageMetadata.services)
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-surface-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot opacity-10" />
        <div className="container-wide relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-eyebrow mb-4">My Services</p>
            <h1 className="text-display text-4xl lg:text-6xl text-white mb-5 text-balance">
              Web development & automation<br />
              <span className="gradient-text">for practical business needs</span>
            </h1>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Websites, web apps and automation projects. Explore concept demos, then discuss your requirements and scope directly with me.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services list */}
      <section className="section bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] ?? Zap
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="group h-full p-6 sm:p-7 rounded-xl border border-border bg-card hover:border-brand-500/40 transition-colors duration-200"
                >
                  <div className="flex h-full flex-col gap-4">
                    <div className="w-11 h-11 rounded-lg border border-brand-500/15 bg-brand-500/5 flex items-center justify-center shrink-0 group-hover:bg-brand-500/10 transition-colors">
                      <Icon className="w-5 h-5 text-brand-500" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold tracking-tight text-foreground mb-2">{service.title}</h2>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {service.features.slice(0, 4).map((f) => (
                          <li key={f} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />{f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-auto pt-2">
                      <Link to={service.href}>
                        <Button variant="outline" className="gap-2">
                          View service <ArrowRight className="w-4 h-4" />
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
