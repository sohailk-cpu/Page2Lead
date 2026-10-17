import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Info } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { CTASection } from '@/components/sections/CTASection'

const projects = [
  {
    id: 'smilecare',
    title: 'Dental Clinic — AI Receptionist Demo',
    category: 'Healthcare',
    description: 'Concept demo showing how a clinic could collect appointment requests, answer approved FAQs and route WhatsApp follow-ups.',
    stack: ['AI Chatbot', 'WhatsApp API', 'Appointment Booking', 'CRM Integration'],
    demoUrl: 'https://smilepro-dental-alpha.vercel.app/',
    color: 'from-emerald-500/10 to-teal-500/5',
    accent: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  },
  {
    id: 'fitforge',
    title: 'Gym — Lead Capture Demo',
    category: 'Fitness',
    description: 'Concept demo showing how website and supported social enquiries could be organised into a lead record with follow-up tasks.',
    stack: ['Lead Generation', 'CRM Automation', 'Instagram DM Bot', 'Email Sequences'],
    demoUrl: 'https://fitforge-gray.vercel.app/',
    color: 'from-orange-500/10 to-amber-500/5',
    accent: 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
  },
  {
    id: 'legaledge',
    title: 'Law Firm — Client Intake Demo',
    category: 'Legal',
    description: 'Concept demo for structured client intake, document checklists and staff review. Legal decisions and conflict checks require appropriate human oversight.',
    stack: ['Workflow Automation', 'Document Collection', 'CRM Setup', 'E-signature'],
    demoUrl: 'https://legaledge-eight.vercel.app/',
    color: 'from-blue-500/10 to-indigo-500/5',
    accent: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  },
  {
    id: 'buildfast',
    title: 'Ecommerce Store — AI Support Demo',
    category: 'Ecommerce',
    description: 'Concept demo illustrating how approved product FAQs and store policies could be used to answer routine questions and route exceptions to staff.',
    stack: ['AI Customer Support', 'Ticket Classification', 'Knowledge Base AI', 'Escalation Routing'],
    demoUrl: 'https://buildfast-pi.vercel.app/',
    color: 'from-purple-500/10 to-violet-500/5',
    accent: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
  },
  {
    id: 'kapoor-academy',
    title: 'Coaching Institute — Enquiry Funnel Demo',
    category: 'Education',
    description: 'Concept demo showing a WhatsApp-first flow for approved course FAQs, enquiry capture and counselling callback requests.',
    stack: ['WhatsApp Automation', 'Lead Nurturing', 'Appointment Booking', 'Follow-up Sequences'],
    demoUrl: 'https://kapoor-academy.vercel.app/',
    color: 'from-pink-500/10 to-rose-500/5',
    accent: 'bg-pink-500/10 text-pink-600 dark:text-pink-400',
  },
  {
    id: 'sharma-realty',
    title: 'Real Estate — Lead Qualification Demo',
    category: 'Real Estate',
    description: 'Concept demo for collecting property budget, preferred area and timeline, then sending a structured enquiry summary to an agent.',
    stack: ['AI Chatbot', 'Lead Qualification', 'WhatsApp Bot', 'CRM Integration'],
    demoUrl: 'https://sharma-realty.vercel.app/',
    color: 'from-brand-500/10 to-indigo-500/5',
    accent: 'bg-brand-500/10 text-brand-600 dark:text-brand-400',
  },
]

import { usePageMetadata } from '@/hooks/usePageMetadata'
import { pageMetadata } from '@/data/pageMetadata'

export default function PortfolioPage() {
  usePageMetadata(pageMetadata.portfolio)
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
              Web and automation demos.<br />
              <span className="gradient-text">Illustrative builds.</span>
            </h1>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              A selection of concept demos and proof-of-concept builds showing possible approaches to web development and business automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Note */}
      <div className="container-wide pt-10">
        <div className="flex items-start gap-3 p-4 rounded-xl border border-brand-500/20 bg-brand-500/5 max-w-2xl">
          <Info className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            These are demo and proof-of-concept projects, not client case studies. Reach out to see live demos and discuss how a similar system could fit your business —{' '}
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
