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
    headline: 'Never miss a property inquiry again',
    description: 'Real estate moves fast. My AI captures inquiries 24/7, qualifies leads by budget and timeline, schedules site visits automatically, and follows up until they convert — or politely disqualify.',
    results: ['3x more qualified leads', 'Site visits booked automatically', 'Follow-up sequences that close'],
  },
  {
    icon: Heart,
    label: 'Clinics & Healthcare',
    headline: 'Fill your calendar without lifting a phone',
    description: 'Patients book at midnight. My AI handles appointment scheduling, sends WhatsApp reminders, handles prescription refill requests, and answers FAQs — so your staff focuses on care, not admin.',
    results: ['58% fewer no-shows', '24/7 appointment booking', 'Auto-reminders via WhatsApp'],
  },
  {
    icon: GraduationCap,
    label: 'Education & Coaching',
    headline: 'Convert more enquiries into enrolled students',
    description: 'From first message to paid enrollment — my AI answers course queries, qualifies intent, books counselling calls, and follows up with prospects who didn\'t convert immediately.',
    results: ['78% show-up rate on calls', '3x more enrolments', 'Zero cold enquiries wasted'],
  },
  {
    icon: ShoppingBag,
    label: 'Ecommerce',
    headline: 'Resolve 70% of support tickets automatically',
    description: 'Order status, return requests, refund updates, tracking queries — your AI handles all of it instantly, escalating only complex issues to ymy.',
    results: ['72% tickets auto-resolved', 'CSAT scores up 23%', 'Support team refocused on complex issues'],
  },
  {
    icon: Dumbbell,
    label: 'Gyms & Fitness',
    headline: 'Fill your trial slots without paid ads',
    description: 'Instagram DM to booked trial in under 2 minutes. My AI captures leads across all channels, sends programme information, books free trials, and follows up until they join.',
    results: ['20 → 90 trials per month', 'Multi-channel lead capture', 'Auto follow-up sequences'],
  },
  {
    icon: Scale,
    label: 'Law Firms',
    headline: 'Automate client intake and focus on casework',
    description: 'Complex intake processes that took 2 hours of staff time now take 10 minutes — fully automated. Clients complete everything online, documents are collected, and ymy just reviews.',
    results: ['2hr → 10min intake', 'Automated document collection', 'Instant conflict checking'],
  },
  {
    icon: UtensilsCrossed,
    label: 'Restaurants',
    headline: 'Never miss a reservation or catering inquiry',
    description: 'WhatsApp-based reservation system, automated table confirmations, catering inquiry qualification, and event booking — all without a phone call.',
    results: ['Zero missed reservations', 'Catering leads auto-qualified', 'WhatsApp-native booking'],
  },
  {
    icon: Factory,
    label: 'Manufacturing',
    headline: 'Automate your B2B inquiry and quotation process',
    description: 'B2B inquiries qualified by volume, product type, and timeline. Quotation request routing, vendor follow-up, and procurement automation to cut cycle times.',
    results: ['40% faster quotation cycles', 'Vendor follow-up automated', 'B2B inquiry qualification'],
  },
]

export default function IndustriesPage() {
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
                  <Link to="/contact">
                    <Button className="gap-2">
                      Talk to me about {industry.label} <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>

                <div style={{ direction: 'ltr' }} className="p-7 rounded-2xl border border-border bg-card">
                  <p className="text-sm font-semibold text-foreground mb-4">Typical results</p>
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
