import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { pricingPlans } from '@/data/pricing'
import { Button } from '@/components/ui/Button'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { formatPrice } from '@/lib/utils'
import { cn } from '@/lib/utils'

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-surface-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full bg-brand-500/10 blur-[100px]" />
        <div className="container-wide relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-eyebrow mb-4">Pricing</p>
            <h1 className="text-display text-4xl lg:text-6xl text-white mb-5">
              Transparent pricing.<br />
              <span className="gradient-text">No surprises.</span>
            </h1>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Fixed-price projects. You know what you're paying and what you're getting before I start.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section className="section bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={cn(
                  'relative rounded-2xl border p-8',
                  plan.popular
                    ? 'border-brand-500 bg-brand-500/5 shadow-glow'
                    : 'border-border bg-card',
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex px-3 py-1 rounded-full bg-brand-500 text-white text-xs font-semibold shadow-glow-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
                <div className="mb-7">
                  {plan.price > 0 ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-foreground tracking-tight">
                        {formatPrice(plan.price)}
                      </span>
                      <span className="text-sm text-muted-foreground">/ {plan.period}</span>
                    </div>
                  ) : (
                    <span className="text-4xl font-bold text-foreground tracking-tight">Custom</span>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button variant={plan.popular ? 'default' : 'outline'} className="w-full gap-2">
                    {plan.cta} <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Add-ons note */}
          <div className="mt-12 p-6 rounded-2xl border border-border bg-secondary max-w-3xl mx-auto text-center">
            <h3 className="font-semibold text-foreground mb-2">Need ongoing support?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              All plans can be extended with a monthly maintenance retainer starting from ₹8,000/month — includes updates, improvements, monitoring, and priority support.
            </p>
            <Link to="/contact">
              <Button variant="outline" size="sm">Ask about retainers</Button>
            </Link>
          </div>
        </div>
      </section>

      <FAQSection />
      <CTASection />
    </>
  )
}
