import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  MessageSquare, Phone, Mic, TrendingUp, Zap, Calendar, Globe,
  ArrowRight,
} from 'lucide-react'
import { services } from '@/data/services'
import { Badge } from '@/components/ui/Badge'

const iconMap: Record<string, React.ElementType> = {
  MessageSquare, Phone, Mic, TrendingUp, Zap, Calendar, Globe,
}

export function ServicesGrid() {
  return (
    <section className="section bg-surface-50 dark:bg-surface-900/30">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="text-eyebrow mb-3">What I build</p>
          <h2 className="text-display text-3xl lg:text-5xl text-foreground mb-4 text-balance">
            Web development & automation built around
            <br />
            practical business needs
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore website, web app and automation services, with demos that illustrate possible approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Zap
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Link
                  to={service.href}
                  className="group block h-full p-6 rounded-xl border border-border bg-card hover:border-brand-500/40 transition-colors duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center mb-4 group-hover:bg-brand-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-brand-500" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.features.slice(0, 2).map((f) => (
                      <Badge key={f} variant="secondary" className="text-2xs">
                        {f}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-xs font-semibold text-brand-500 group-hover:gap-2 transition-all">
                    Explore demo <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
