import { motion } from 'framer-motion'
import {
  Building2, Heart, GraduationCap, ShoppingBag,
  Dumbbell, Scale, UtensilsCrossed, Factory,
} from 'lucide-react'

const industries = [
  { icon: Building2, label: 'Real Estate' },
  { icon: Heart, label: 'Clinics & Healthcare' },
  { icon: GraduationCap, label: 'Education & Coaching' },
  { icon: ShoppingBag, label: 'Ecommerce' },
  { icon: Dumbbell, label: 'Gyms & Fitness' },
  { icon: Scale, label: 'Law Firms' },
  { icon: UtensilsCrossed, label: 'Restaurants' },
  { icon: Factory, label: 'Manufacturing' },
]

export function Industries() {
  return (
    <section className="section bg-surface-50 dark:bg-surface-900/30">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="text-eyebrow mb-3">Industries I serve</p>
          <h2 className="text-display text-3xl lg:text-5xl text-foreground mb-4 text-balance">
            AI automation works for
            <br />
            every type of business
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I've built AI systems for businesses across multiple industries. Your sector is next.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((industry, i) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={industry.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="group p-6 rounded-2xl border border-border bg-card hover:border-brand-500/30 hover:shadow-card-hover text-center cursor-default transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-brand-500" />
                </div>
                <h3 className="font-semibold text-sm text-foreground">{industry.label}</h3>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
