import { motion } from 'framer-motion'
import { Search, Code2, Rocket, BarChart3 } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Discovery Call',
    description: 'I audit your current operations, identify the highest-ROI automation opportunities, and map your exact customer journey.',
    duration: '1 hour',
  },
  {
    icon: Code2,
    title: 'Build & Train',
    description: 'I design, build, and train your AI systems using your actual data, processes, and business logic — nothing generic.',
    duration: '2–6 weeks',
  },
  {
    icon: Rocket,
    title: 'Launch & Test',
    description: 'I go live carefully — testing edge cases, training ymy, and refining until everything runs exactly as expected.',
    duration: '1 week',
  },
  {
    icon: BarChart3,
    title: 'Measure & Improve',
    description: 'You get a live dashboard showing leads captured, hours saved, and ROI. I iterate based on real data, not guesses.',
    duration: 'Ongoing',
  },
]

export function HowItWorks() {
  return (
    <section className="section bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="text-eyebrow mb-3">My process</p>
          <h2 className="text-display text-3xl lg:text-5xl text-foreground mb-4 text-balance">
            From discovery to results
            <br />
            in weeks, not months
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A clear, proven process that gets you live fast and delivers measurable ROI from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="relative text-center"
              >
                {/* Step number + icon */}
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 rounded-2xl border border-border bg-card flex items-center justify-center shadow-card dark:shadow-card-dark">
                    <Icon className="w-8 h-8 text-brand-500" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center text-white text-xs font-bold shadow-glow-sm">
                    {i + 1}
                  </div>
                </div>

                <div className="inline-block mb-3 px-2.5 py-1 rounded-full bg-secondary text-muted-foreground text-xs font-medium">
                  {step.duration}
                </div>

                <h3 className="font-semibold text-foreground mb-2 text-lg">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
