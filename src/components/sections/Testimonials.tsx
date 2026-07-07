import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/testimonials'

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="p-6 rounded-2xl border border-border bg-card shadow-card dark:shadow-card-dark hover:border-brand-500/20 transition-colors duration-200">
      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
      </div>

      {/* Content */}
      <blockquote className="text-sm text-foreground leading-relaxed mb-5">
        "{t.content}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-brand-500/10 flex items-center justify-center text-sm font-bold text-brand-500">
          {t.avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{t.name}</p>
          <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
        </div>
        <div className="ml-auto">
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-secondary text-muted-foreground">
            {t.industry}
          </span>
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  const col1 = testimonials.slice(0, 3)
  const col2 = testimonials.slice(3, 6)

  return (
    <section className="section bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="text-eyebrow mb-3">Client results</p>
          <h2 className="text-display text-3xl lg:text-5xl text-foreground mb-4 text-balance">
            Real businesses.
            <br />
            Real results.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Don't just take my word for it — here's what my clients say after I've automated their operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          <div className="space-y-5">
            {col1.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <TestimonialCard t={t} />
              </motion.div>
            ))}
          </div>
          <div className="space-y-5 md:mt-10">
            {col2.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <TestimonialCard t={t} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
