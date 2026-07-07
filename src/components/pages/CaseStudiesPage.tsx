import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Info } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { CTASection } from '@/components/sections/CTASection'

const caseStudies = [
  {
    id: 'smilecare-dental',
    client: 'Dental Clinic — AI Receptionist',
    industry: 'Healthcare',
    challenge: 'The clinic was losing patients to slow phone response times. Staff spent most of their day on appointment booking calls, leading to missed new-patient inquiries after hours and high no-show rates.',
    solution: 'I built an AI receptionist system combining a website chatbot and WhatsApp automation. The AI handles appointment booking, sends automated reminders before visits, answers FAQs about procedures and pricing, and escalates complex cases to staff.',
    outcomes: [
      'Significant reduction in no-shows after automated reminders were implemented',
      'After-hours inquiries now captured and responded to instantly',
      'Staff time freed from routine booking calls',
    ],
  },
  {
    id: 'gym-lead-machine',
    client: 'Fitness Studio — Lead Capture System',
    industry: 'Fitness',
    challenge: 'The studio was running paid ads generating Instagram DM inquiries, but most leads went cold because responses took hours. Their CRM was disconnected from their lead sources, making follow-up inconsistent.',
    solution: 'I built a unified lead capture system pulling from Instagram, the website, and Google Ads into one CRM. An AI chatbot instantly engages every inquiry, answers membership questions, and books free trials — with automated nurture sequences for those who don\'t convert immediately.',
    outcomes: [
      'Response time dropped from hours to seconds',
      'Free trial bookings increased substantially after automation',
      'Zero manual follow-ups needed for initial lead engagement',
    ],
  },
  {
    id: 'coaching-enrollment',
    client: 'Coaching Institute — Enrolment Funnel',
    industry: 'Education',
    challenge: 'Course enquiries came in via WhatsApp and Instagram DMs. Most were manually handled hours later — by which time prospects had lost interest or enrolled elsewhere.',
    solution: 'I built a WhatsApp-first automation that instantly responds to every enquiry, answers course questions, qualifies the lead, and books a counselling call — all without any manual intervention.',
    outcomes: [
      'Every enquiry now gets an instant, personalised response',
      'Counselling call show-up rates improved significantly',
      'Manual outreach effort reduced to near zero',
    ],
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-surface-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full bg-brand-500/10 blur-[100px]" />
        <div className="container-wide relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-eyebrow mb-4">Case Studies</p>
            <h1 className="text-display text-4xl lg:text-6xl text-white mb-5 text-balance">
              Real problems.<br />
              <span className="gradient-text">Real solutions.</span>
            </h1>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              A look at how I've approached and solved operational challenges for businesses using AI automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Note */}
      <div className="container-wide pt-10">
        <div className="flex items-start gap-3 p-4 rounded-xl border border-brand-500/20 bg-brand-500/5 max-w-2xl">
          <Info className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            More case studies coming soon. Reach out to see examples of my work directly —{' '}
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

                {/* Outcomes */}
                <div className="pt-6 border-t border-border">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                    Outcomes
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
