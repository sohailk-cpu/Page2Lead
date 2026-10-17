import { motion } from 'framer-motion'
import { Search, Code2, Rocket, BarChart3 } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Discuss the Project',
    description: 'We discuss your goals, existing tools, constraints and what a successful first version should do.',
    duration: 'Scope first',
  },
  {
    icon: Code2,
    title: 'Build & Train',
    description: 'I implement the agreed features and integrations. Timeline depends on scope, access and testing requirements.',
    duration: 'Agreed timeline',
  },
  {
    icon: Rocket,
    title: 'Launch & Test',
    description: 'We test the agreed flows, handle edge cases and document any known limitations before launch.',
    duration: 'Testing included in scope',
  },
  {
    icon: BarChart3,
    title: 'Measure & Improve',
    description: 'If analytics or monitoring are included in the project, we review available data and agree any follow-up improvements separately.',
    duration: 'Optional support',
  },
]

export function HowItWorks() {
  return (
    <section className="section bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="text-eyebrow mb-3">My process</p>
          <h2 className="text-display text-3xl lg:text-5xl text-foreground mb-4 text-balance">
            From clear requirements
            <br />
            to a tested delivery
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A straightforward freelance process: agree the scope, build the required features, test them and confirm what is included before launch.
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
