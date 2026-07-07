import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Info } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { CTASection } from '@/components/sections/CTASection'

const projects = [
  {
    id: 'smilecare',
    title: 'SmilePro Dental — AI Receptionist',
    category: 'Healthcare',
    description: 'AI receptionist system handling appointment booking, patient FAQs, and WhatsApp follow-ups for a dental clinic.',
    stack: ['AI Chatbot', 'WhatsApp API', 'Appointment Booking', 'CRM Integration'],
    demoUrl: 'https://smilepro-dental-alpha.vercel.app/',
    color: 'from-emerald-500/10 to-teal-500/5',
    accent: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  },
  {
    id: 'fitforge',
    title: 'FitForge Gyms — Lead Machine',
    category: 'Fitness',
    description: 'Multi-channel lead capture system pulling from Instagram DMs, website, and Google — all funnelled into one CRM with automated nurture sequences.',
    stack: ['Lead Generation', 'CRM Automation', 'Instagram DM Bot', 'Email Sequences'],
    demoUrl: 'https://fitforge-gray.vercel.app/',
    color: 'from-orange-500/10 to-amber-500/5',
    accent: 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
  },
  {
    id: 'legaledge',
    title: 'LegalEdge LLP — Client Intake Automation',
    category: 'Legal',
    description: 'End-to-end client intake flow replacing a lengthy manual process with an automated pipeline — document collection, conflict checks, and CRM population included.',
    stack: ['Workflow Automation', 'Document Collection', 'CRM Setup', 'E-signature'],
    demoUrl: 'https://legaledge-eight.vercel.app/',
    color: 'from-blue-500/10 to-indigo-500/5',
    accent: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  },
  {
    id: 'buildfast',
    title: 'BuildFast Ecommerce — AI Support',
    category: 'Ecommerce',
    description: 'AI customer support system trained on product FAQs, order policies, and return workflows — resolving the majority of tickets without human involvement.',
    stack: ['AI Customer Support', 'Ticket Classification', 'Knowledge Base AI', 'Escalation Routing'],
    demoUrl: 'https://buildfast-pi.vercel.app/',
    color: 'from-purple-500/10 to-violet-500/5',
    accent: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
  },
  {
    id: 'kapoor-academy',
    title: 'Kapoor Coaching — Enrolment Funnel',
    category: 'Education',
    description: 'WhatsApp-first lead nurturing system that immediately engages course enquiries, answers questions, and books counselling calls automatically.',
    stack: ['WhatsApp Automation', 'Lead Nurturing', 'Appointment Booking', 'Follow-up Sequences'],
    demoUrl: 'https://kapoor-academy.vercel.app/',
    color: 'from-pink-500/10 to-rose-500/5',
    accent: 'bg-pink-500/10 text-pink-600 dark:text-pink-400',
  },
  {
    id: 'sharma-realty',
    title: 'Sharma Realty — Lead Qualification Bot',
    category: 'Real Estate',
    description: 'AI chatbot on website + WhatsApp that qualifies leads by budget, location preference, and timeline — passing only sales-ready leads to agents.',
    stack: ['AI Chatbot', 'Lead Qualification', 'WhatsApp Bot', 'CRM Integration'],
    demoUrl: 'https://sharma-realty.vercel.app/',
    color: 'from-brand-500/10 to-indigo-500/5',
    accent: 'bg-brand-500/10 text-brand-600 dark:text-brand-400',
  },
]

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-surface-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full bg-brand-500/10 blur-[100px]" />
        <div className="container-wide relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-eyebrow mb-4">My Work</p>
            <h1 className="text-display text-4xl lg:text-6xl text-white mb-5 text-balance">
              Real projects.<br />
              <span className="gradient-text">Real systems.</span>
            </h1>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              A sample of the AI automation systems I've built for businesses across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Note */}
      <div className="container-wide pt-10">
        <div className="flex items-start gap-3 p-4 rounded-xl border border-brand-500/20 bg-brand-500/5 max-w-2xl">
          <Info className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            More case studies coming soon. Reach out to see live demos and examples of my work directly —{' '}
            <a href="https://wa.me/917597256642" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:underline font-medium">
              WhatsApp me here
            </a>.
          </p>
        </div>
      </div>

      {/* Projects */}
      <section className="section bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group p-7 rounded-2xl border border-border bg-card hover:border-brand-500/30 hover:shadow-card-hover transition-all duration-200 flex flex-col"
              >
                {/* Category */}
                <div className="flex items-center justify-between mb-5">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${project.accent}`}>
                    {project.category}
                  </span>
                </div>

                {/* Gradient block */}
                <div className={`h-2 w-12 rounded-full bg-gradient-to-r ${project.color} mb-5`} />

                <h2 className="text-xl font-bold text-foreground mb-3">{project.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{project.description}</p>

                {project.demoUrl && (
                  <div className="mt-5">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      >
                      <Button variant="outline" className="w-full gap-2">
                        View Demo
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                )}

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5 pt-5 border-t border-border">
                  {project.stack.map((s) => (
                    <span key={s} className="text-xs px-2 py-1 rounded-lg bg-secondary text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Want to see a live demo or discuss your project?</p>
            <Link to="/contact">
              <Button size="lg" className="gap-2">
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
