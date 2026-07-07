import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { pricingPlans } from '@/data/pricing'
import { Button } from '@/components/ui/Button'
import { formatPrice } from '@/lib/utils'
import { cn } from '@/lib/utils'

export function PricingPreview() {
  return (
    <section className="section bg-surface-50 dark:bg-surface-900/30">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="text-eyebrow mb-3">Pricing</p>
          <h2 className="text-display text-3xl lg:text-5xl text-foreground mb-4 text-balance">
            Transparent pricing.
            <br />
            No surprises.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Fixed-price projects with clear deliverables. You know exactly what you're getting before I start.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={cn(
                'relative rounded-2xl border p-7',
                plan.popular
                  ? 'border-brand-500 bg-brand-500/5 shadow-glow-sm'
                  : 'border-border bg-card shadow-card dark:shadow-card-dark',
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex px-3 py-1 rounded-full bg-brand-500 text-white text-xs font-semibold shadow-glow-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-5">
                <h3 className="font-bold text-lg text-foreground mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mb-6">
                {plan.price > 0 ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-foreground tracking-tight">
                      {formatPrice(plan.price)}
                    </span>
                    <span className="text-sm text-muted-foreground">/ {plan.period}</span>
                  </div>
                ) : (
                  <span className="text-3xl font-bold text-foreground tracking-tight">Custom</span>
                )}
              </div>

              <ul className="space-y-2.5 mb-7">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contact">
                <Button
                  className="w-full"
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.cta} <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Not sure which plan is right for you?{' '}
          <Link to="/contact" className="text-brand-500 hover:underline font-medium">
            Book a free 30-min call
          </Link>{' '}
          and I'll tell you exactly what you need.
        </p>
      </div>
    </section>
  )
}
