import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Check, ArrowLeft, Zap, MessageSquare, Phone, Mic, TrendingUp, Calendar, Globe } from 'lucide-react'
import { services } from '@/data/services'
import { Button } from '@/components/ui/Button'
import { CTASection } from '@/components/sections/CTASection'
import ServiceDemo from './ServiceDemo'
import NotFoundPage from './NotFoundPage'

const iconMap: Record<string, React.ElementType> = {
  MessageSquare, Phone, Mic, TrendingUp, Zap, Calendar, Globe,
}

export default function ServiceDetailPage() {
  const { serviceId } = useParams()
  const service = services.find((s) => s.id === serviceId)

  if (!service) return <NotFoundPage />

  const Icon = iconMap[service.icon] ?? Zap

  const otherServices = services.filter((s) => s.id !== service.id).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-surface-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot opacity-10" />
        <div className="container-wide relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" /> All Services
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Icon className="w-6 h-6 text-brand-400" />
              </div>
              <p className="text-eyebrow">Service</p>
            </div>

            <h1 className="text-display text-4xl lg:text-5xl text-white mb-5 max-w-3xl text-balance tracking-tight">
              {service.title}
            </h1>
            <p className="text-white/65 text-base sm:text-lg max-w-2xl leading-8 mb-8">
              {service.description}
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#live-demo" className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600">Try live demo <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" /></a>
              <Link to="/contact"><Button size="xl" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10">Discuss your project</Button></Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ServiceDemo service={service} />

      {/* Features + CTA */}
      <section className="section bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-display text-2xl lg:text-3xl text-foreground mb-6">
                What's included
              </h2>
              <div className="space-y-3">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card">
                    <div className="w-7 h-7 rounded-md bg-brand-500/10 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-brand-500" />
                    </div>
                    <span className="font-medium text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              {/* Why this service */}
              <div className="p-6 sm:p-7 rounded-xl border border-border bg-card">
                <h3 className="font-bold text-lg text-foreground mb-4">Who this is for</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Best for teams that want a more consistent way to handle {service.title.toLowerCase()}, reduce repetitive work and make the next step clearer for customers or staff. The exact scope is agreed around your process, tools and budget.
                </p>
              </div>

              {/* Book call CTA */}
              <div className="p-6 sm:p-7 rounded-xl border border-brand-500/20 bg-brand-500/5">
                <h3 className="font-bold text-lg text-foreground mb-2">Ready to get started?</h3>
                <p className="text-muted-foreground text-sm mb-5">
                  Book a free 30-minute call. I'll map out exactly how this would work for your specific business — no fluff, no obligation.
                </p>
                <Link to="/contact">
                  <Button className="w-full gap-2">
                    Book Free Strategy Call <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="section bg-surface-50 dark:bg-surface-900/30">
        <div className="container-wide">
          <h2 className="text-display text-2xl lg:text-3xl text-foreground mb-8">Other services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {otherServices.map((s) => {
              const OtherIcon = iconMap[s.icon] ?? Zap
              return (
                <Link
                  key={s.id}
                  to={s.href}
                  className="group p-6 rounded-2xl border border-border bg-card hover:border-brand-500/30 hover:shadow-card-hover transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center mb-3 group-hover:bg-brand-500/20 transition-colors">
                    <OtherIcon className="w-5 h-5 text-brand-500" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1.5">{s.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{s.description}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
