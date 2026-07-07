import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Check, ArrowLeft, Zap, MessageSquare, Phone, Mic, TrendingUp, Database, Calendar, HeadphonesIcon, Globe, Cpu, BarChart3 } from 'lucide-react'
import { services } from '@/data/services'
import { Button } from '@/components/ui/Button'
import { CTASection } from '@/components/sections/CTASection'
import NotFoundPage from './NotFoundPage'

const iconMap: Record<string, React.ElementType> = {
  MessageSquare, Phone, Mic, TrendingUp, Zap,
  Database, Calendar, HeadphonesIcon, Globe, Cpu, BarChart3,
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
      <section className="pt-32 pb-20 bg-surface-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full bg-brand-500/10 blur-[100px]" />
        <div className="container-wide relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" /> All Services
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-brand-500/20 flex items-center justify-center">
                <Icon className="w-7 h-7 text-brand-400" />
              </div>
              <p className="text-eyebrow">Service</p>
            </div>

            <h1 className="text-display text-4xl lg:text-6xl text-white mb-5 max-w-3xl text-balance">
              {service.title}
            </h1>
            <p className="text-white/50 text-lg max-w-2xl leading-relaxed mb-8">
              {service.description}
            </p>

            <Link to="/contact">
              <Button size="xl" className="gap-2 group">
                Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

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
              <div className="space-y-4">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card">
                    <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0">
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
              <div className="p-7 rounded-2xl border border-border bg-card">
                <h3 className="font-bold text-lg text-foreground mb-4">Who this is for</h3>
                <p className="text-muted-foreground leading-relaxed">
                  This service is ideal for businesses that are currently handling this process manually,
                  losing leads due to slow response times, or spending staff hours on repetitive tasks that
                  could be fully automated. If you're growing and need your systems to scale without
                  scaling your headcount, this is where I start.
                </p>
              </div>

              {/* Book call CTA */}
              <div className="p-7 rounded-2xl border border-brand-500/20 bg-brand-500/5">
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
