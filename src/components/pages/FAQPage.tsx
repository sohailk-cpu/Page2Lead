import { motion } from 'framer-motion'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-surface-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full bg-brand-500/10 blur-[100px]" />
        <div className="container-wide relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-eyebrow mb-4">FAQ</p>
            <h1 className="text-display text-4xl lg:text-5xl text-white mb-5">
              Questions we always get
            </h1>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Honest answers to the questions every business owner asks before getting started with AI automation.
            </p>
          </motion.div>
        </div>
      </section>

      <FAQSection />
      <CTASection />
    </>
  )
}
