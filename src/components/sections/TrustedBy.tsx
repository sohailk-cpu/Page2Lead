import { motion } from 'framer-motion'

const companies = [
  'SmilePro Clinics',
  'FitForge Gyms',
  'BuildFast Ecom',
  'Kapoor Academy',
  'LegalEdge LLP',
  'Sharma Realty',
  'NexGen Hotels',
  'PureFoods India',
]

export function TrustedBy() {
  return (
    <section className="py-12 border-y border-border bg-surface-50 dark:bg-surface-900/30">
      <div className="container-wide">
        <p className="text-center text-xs font-semibold uppercase tracking-caps text-muted-foreground mb-8">
          Trusted by growing businesses across India
        </p>
        <div className="relative overflow-hidden">
          {/* Fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-surface-50 dark:from-surface-900/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-surface-50 dark:from-surface-900/30 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            {[...companies, ...companies].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="shrink-0 text-sm font-semibold text-muted-foreground/60 whitespace-nowrap hover:text-muted-foreground transition-colors"
              >
                {name}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
