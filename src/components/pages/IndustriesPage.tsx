import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Building2, Heart, GraduationCap, ShoppingBag,
  Dumbbell, Scale, UtensilsCrossed, Factory,
  ArrowRight,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { CTASection } from '@/components/sections/CTASection'

const industries = [
  {
    icon: Building2,
    label: 'Real Estate',
    headline: 'Respond to property enquiries faster',
    description: 'Capture property enquiries from supported channels, collect budget and location preferences, coordinate site-visit requests and keep follow-up tasks organised for agents.',
    results: ['Structured property enquiry capture', 'Site-visit requests and agent handoff', 'Consistent follow-up task tracking'],
  },
  {
    icon: Heart,
    label: 'Clinics & Healthcare',
    headline: 'Make appointment requests easier to manage',
    description: 'Patients may send questions outside clinic hours. A scoped workflow can collect appointment requests, share clinic-approved FAQs, send configured reminders and route clinical questions to staff.',
    results: ['Appointment request capture', 'Configured reminders', 'Staff handoff for clinical questions'],
  },
  {
    icon: GraduationCap,
    label: 'Education & Coaching',
    headline: 'Organise course enquiries and counselling follow-ups',
    description: 'Answer approved course FAQs, collect student preferences, route counselling requests and track follow-up tasks using the institute’s agreed process.',
    results: ['Approved course information', 'Counselling request routing', 'Follow-up task tracking'],
  },
  {
    icon: ShoppingBag,
    label: 'Ecommerce',
    headline: 'Organise common customer support requests',
    description: 'With an authorised store integration, a workflow can help organise order-status questions, return requests and shipping queries while routing exceptions to your team.',
    results: ['Common support requests automated', 'Faster first responses', 'Complex issues escalated to your team'],
  },
  {
    icon: Dumbbell,
    label: 'Gyms & Fitness',
    headline: 'Organise trial and membership enquiries',
    description: 'Capture trial enquiries, share approved programme information, collect preferred times and create follow-up tasks for your team.',
    results: ['Multi-channel lead capture', 'Automated trial booking', 'Follow-up sequences'],
  },
  {
    icon: Scale,
    label: 'Law Firms',
    headline: 'Structure client intake and document requests',
    description: 'A structured intake workflow can collect initial client details and document requests for staff review. Conflict checks and legal decisions must remain subject to the firm’s approved process.',
    results: ['Structured client intake', 'Automated document collection', 'Workflow-based conflict checks'],
  },
  {
    icon: UtensilsCrossed,
    label: 'Restaurants',
    headline: 'Organise reservations and catering enquiries',
    description: 'A WhatsApp workflow can collect reservation or catering details, send a request to staff and confirm bookings only when availability and acceptance are verified.',
    results: ['Reservation request capture', 'Catering enquiry details', 'Confirmation after staff approval'],
  },
  {
    icon: Factory,
    label: 'Manufacturing',
    headline: 'Organise B2B enquiries and quotation requests',
    description: 'Capture product requirements, volume, timeline and contact details, then route quotation requests to the appropriate team for review.',
    results: ['B2B enquiry qualification', 'Quotation request routing', 'Vendor follow-up automation'],
  },
]
import { usePageMetadata } from '@/hooks/usePageMetadata'
import { pageMetadata } from '@/data/pageMetadata'

export default function IndustriesPage() {
  usePageMetadata(pageMetadata.industries)
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-surface-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full bg-brand-500/10 blur-[100px]" />
        <div className="container-wide relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-eyebrow mb-4">Industries</p>
            <h1 className="text-display text-4xl lg:text-6xl text-white mb-5 text-balance">
              AI automation built<br />
              <span className="gradient-text">for your industry</span>
            </h1>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              I don't use generic templates. Every system is built around how your specific industry operates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="section bg-background">
        <div className="container-wide space-y-16">
          {industries.map((industry, i) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={industry.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
                style={{ direction: i % 2 === 1 ? 'rtl' : 'ltr' }}
              >
                <div style={{ direction: 'ltr' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-500" />
                    </div>
                    <span className="text-eyebrow">{industry.label}</span>
                  </div>
                  <h2 className="text-display text-2xl lg:text-3xl text-foreground mb-4">
                    {industry.headline}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{industry.description}</p>
                  <Link to={
                    industry.label === 'Real Estate' ? '/industries/real-estate' :
                    industry.label === 'Clinics & Healthcare' ? '/industries/clinics-healthcare' :
                    industry.label === 'Education & Coaching' ? '/industries/education-coaching' :
                    industry.label === 'Ecommerce' ? '/industries/ecommerce' :
                    industry.label === 'Restaurants' ? '/industries/restaurants' :
                    industry.label === 'Gyms & Fitness' ? '/industries/gym-fitness' :
                    industry.label === 'Law Firms' ? '/industries/law-firms' : '/contact'
                  }>
                    <Button className="gap-2">
                      Explore {industry.label} automation <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>

                <div style={{ direction: 'ltr' }} className="p-7 rounded-2xl border border-border bg-card">
                  <p className="text-sm font-semibold text-foreground mb-4">Typical automation opportunities</p>
                  <div className="space-y-3">
                    {industry.results.map((r) => (
                      <div key={r} className="flex items-center gap-3 p-3 rounded-xl bg-brand-500/5 border border-brand-500/10">
                        <div className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
                        <span className="text-sm text-foreground font-medium">{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      <CTASection />
    </>
  )
}
