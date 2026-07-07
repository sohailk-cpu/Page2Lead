import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { faqs } from '@/data/faqs'
import { cn } from '@/lib/utils'

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className={cn(
        'rounded-xl border transition-colors duration-200',
        open ? 'border-brand-500/30 bg-brand-500/3' : 'border-border bg-card',
      )}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus-ring rounded-xl"
        aria-expanded={open}
      >
        <span className="font-medium text-foreground">{faq.question}</span>
        <div className="shrink-0 w-6 h-6 rounded-full border border-border flex items-center justify-center">
          {open ? (
            <Minus className="w-3 h-3 text-brand-500" />
          ) : (
            <Plus className="w-3 h-3 text-muted-foreground" />
          )}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQSection() {
  return (
    <section className="section bg-background">
      <div className="container-tight">
        <div className="text-center mb-12">
          <p className="text-eyebrow mb-3">FAQ</p>
          <h2 className="text-display text-3xl lg:text-4xl text-foreground mb-4">
            Questions we always get
          </h2>
          <p className="text-muted-foreground">
            Can't find what you're looking for?{' '}
            <a href="/contact" className="text-brand-500 hover:underline">Ask us directly.</a>
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.question} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
