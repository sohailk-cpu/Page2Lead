import { motion } from 'framer-motion'
import { XCircle } from 'lucide-react'

const problems = [
  {
    title: 'Leads slip through the cracks',
    description: 'Every missed call, slow reply, or ignored form submission is a paying customer gone to your competitor.',
  },
  {
    title: 'Ymy drowns in repetitive tasks',
    description: 'Sending reminders, updating spreadsheets, copying data between tools — ymy is too expensive for this work.',
  },
  {
    title: 'No-shows kill your revenue',
    description: 'Appointments booked but never attended waste slots, frustrate staff, and directly cut your monthly income.',
  },
  {
    title: 'Customer support never sleeps — but you do',
    description: 'Customers ask questions at midnight. Without instant answers, they choose the business that responds first.',
  },
  {
    title: 'You\'re paying for tools that don\'t talk to each other',
    description: 'CRM in one tab, booking system in another, WhatsApp on your phone — zero integration, double work.',
  },
  {
    title: 'Growth is stuck because you\'re the bottleneck',
    description: 'If scaling means hiring more people for the same manual tasks, your margins will never improve.',
  },
]

export function Problems() {
  return (
    <section className="section bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="text-eyebrow mb-3">Sound familiar?</p>
          <h2 className="text-display text-3xl lg:text-5xl text-foreground mb-4 text-balance">
            The problems costing you
            <br />
            <span className="text-destructive">time and money every day</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Many businesses lose 20–40% of their potential revenue to problems that AI can solve in days — not months.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group relative p-6 rounded-2xl border border-border bg-card hover:border-destructive/30 hover:bg-destructive/3 transition-all duration-200"
            >
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-destructive/60 group-hover:text-destructive shrink-0 mt-0.5 transition-colors" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">{problem.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
