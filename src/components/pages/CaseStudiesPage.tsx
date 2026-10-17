import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Info } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { CTASection } from '@/components/sections/CTASection'

const caseStudies = [
  {
    id: 'clinic-workflow-example',
    client: 'Example workflow — Clinic enquiries',
    industry: 'Healthcare',
    challenge: 'A clinic may receive appointment requests and common questions through several channels, making it difficult to keep requests organised.',
    solution: 'A possible solution is a website enquiry form or chatbot that collects contact details and preferred appointment times, then sends a structured request to staff for confirmation.',
    outcomes: [
      'Potentially clearer enquiry records and fewer missed details',
      'Staff remain responsible for clinical questions and confirming appointments',
      'Any time savings must be measured after a real implementation',
    ],
  },
  {
    id: 'gym-workflow-example',
    client: 'Example workflow — Gym trial enquiries',
    industry: 'Fitness',
    challenge: 'A gym may receive questions about fees, classes and trial sessions across its website and messaging channels.',
    solution: 'A scoped workflow could answer approved FAQs, collect a prospect’s preferences and create a follow-up task or trial request for the gym team.',
    outcomes: [
      'More structured enquiry details for staff to review',
      'Trial bookings should only be confirmed after availability is checked',
      'Lead conversion impact is unknown until measured with real data',
    ],
  },
  {
    id: 'coaching-workflow-example',
    client: 'Example workflow — Coaching course enquiries',
    industry: 'Education',
    challenge: 'A coaching institute may receive repeated questions about courses, timings, fees and demo classes.',
    solution: 'A workflow could share institute-approved information, collect course interest and route counselling or demo-class requests to staff.',
    outcomes: [
      'Consistent answers to approved, frequently asked questions',
      'Staff can review and respond to requests needing personal guidance',
      'Admissions and revenue outcomes are not guaranteed',
    ],
  },
]
import { usePageMetadata } from '@/hooks/usePageMetadata'
import { pageMetadata } from '@/data/pageMetadata'

export default function CaseStudiesPage() {
  usePageMetadata(pageMetadata.caseStudies)
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-surface-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full bg-brand-500/10 blur-[100px]" />
        <div className="container-wide relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-eyebrow mb-4">AI Automation Demos</p>
            <h1 className="text-display text-4xl lg:text-6xl text-white mb-5 text-balance">
              Illustrative workflows.<br />
              <span className="gradient-text">Possible approaches.</span>
            </h1>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              A look at how I've approached common operational challenges through AI automation demos and proof-of-concept builds.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Note */}
      <div className="container-wide pt-10">
        <div className="flex items-start gap-3 p-4 rounded-xl border border-brand-500/20 bg-brand-500/5 max-w-2xl">
          <Info className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            These are demo and proof-of-concept projects, not client case studies. Reach out to see examples of my work directly —{' '}
            <a
              href="https://wa.me/917597256642"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-500 hover:underline font-medium"
            >
              WhatsApp me here
            </a>.
          </p>
        </div>
      </div>

      {/* Case studies */}
      <section className="section bg-background">
        <div className="container-wide space-y-8">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card overflow-hidden"
            >
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-500/10 text-brand-500">
                    {study.industry}
                  </span>
                </div>

                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">{study.client}</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                      The Challenge
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                      My Solution
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                {/* Potential benefits (not measured results) */}
                <div className="pt-6 border-t border-border">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                    Potential benefits (not measured results)
                  </h3>
                  <ul className="space-y-2">
                    {study.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-2.5 text-sm text-foreground/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0 mt-1.5" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="text-center pt-6">
            <Link to="/contact">
              <Button size="lg" className="gap-2">
                Discuss Your Project <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
