import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, MessageSquare, Workflow, Users, CalendarCheck, Building2, HeartPulse, GraduationCap, Utensils, ShoppingCart, Dumbbell, Scale } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { CTASection } from '@/components/sections/CTASection'
import { usePageMetadata } from '@/hooks/usePageMetadata'
import NotFoundPage from './NotFoundPage'

const industries = {
  'real-estate': {
    name: 'Real Estate',
    title: 'Real Estate Lead Automation & WhatsApp Follow-Up | Page2Lead',
    description: 'Organise property enquiries, qualify buyers by budget and location, coordinate site-visit requests and follow up with prospects using tailored real estate automation.',
    canonical: 'https://page2lead.in/industries/real-estate',
    eyebrow: 'Real estate automation',
    h1: 'Respond to property enquiries faster and follow up consistently',
    intro: 'Property leads can arrive from listing portals, landing pages, social media and WhatsApp. A practical automation workflow helps your team capture the enquiry, collect the details needed to respond and keep the next step visible.',
    problems: ['Enquiries scattered across WhatsApp, forms and listing channels', 'Slow first response when agents are busy or off-hours', 'Missing buyer details such as budget, preferred area and purchase timeline', 'Follow-ups and site-visit requests difficult to track'],
    workflows: [
      { title: 'Capture and organise enquiries', text: 'Route website forms and supported channels into one agreed lead record with source and timestamp.' },
      { title: 'Qualify the property requirement', text: 'Ask for budget, preferred location, property type and timeline, then pass the summary to an agent.' },
      { title: 'Coordinate the next step', text: 'Collect site-visit preferences or callback requests. Confirm appointments only when calendar availability is connected.' },
      { title: 'Keep follow-ups visible', text: 'Create reminders or configured messages for leads who have opted in, with human handoff when needed.' },
    ],
    outcomes: ['Fewer enquiries lost between channels', 'Clearer lead context for agents', 'More consistent follow-up process', 'A trackable path from enquiry to site visit'],
    faqs: [
      ['Can it work with WhatsApp?', 'Yes, where the required WhatsApp Business Platform/API access and approved setup are available. Client messaging and API costs are separate.'],
      ['Will it automatically book site visits?', 'It can collect preferred times and automate booking when a supported calendar and availability rules are connected. Otherwise it can send a request to the agent for confirmation.'],
      ['Does this replace real estate agents?', 'No. It handles repeatable intake and coordination; agents remain responsible for property advice, negotiations and important decisions.'],
    ],
    icon: Building2,
  },
  'clinics-healthcare': {
    name: 'Clinics & Healthcare',
    title: 'Clinic Appointment & WhatsApp Automation | Page2Lead',
    description: 'Help clinics manage appointment enquiries, routine FAQs, reminders and staff handoffs with a carefully scoped patient communication workflow.',
    canonical: 'https://page2lead.in/industries/clinics-healthcare',
    eyebrow: 'Clinic workflow automation',
    h1: 'Make appointment enquiries easier for patients and staff',
    intro: 'Clinics often handle repeated questions about timings, services, location and appointment availability. A well-scoped workflow can organise routine enquiries while leaving clinical decisions to qualified staff.',
    problems: ['Reception staff answering the same routine questions repeatedly', 'Appointment requests arriving outside working hours', 'Manual reminders and rescheduling messages', 'Important questions needing a clear handoff to staff'],
    workflows: [
      { title: 'Answer approved FAQs', text: 'Share clinic-approved information about hours, location, services and how to prepare for a visit.' },
      { title: 'Collect appointment requests', text: 'Capture requested service, preferred time and callback details, then route them to reception or a connected calendar.' },
      { title: 'Send configured reminders', text: 'Use an approved channel and consent-aware reminder flow to reduce manual follow-up.' },
      { title: 'Escalate sensitive questions', text: 'Route symptoms, urgent concerns, treatment questions and uncertain requests to qualified clinic staff rather than generating medical advice.' },
    ],
    outcomes: ['More organised appointment requests', 'Less repetitive administrative messaging', 'Clearer staff handoff for sensitive questions', 'Consistent clinic information across supported channels'],
    faqs: [
      ['Can the automation diagnose patients?', 'No. It should not diagnose or replace clinical judgement. Medical concerns must be routed to qualified healthcare professionals.'],
      ['Can it send WhatsApp reminders?', 'Potentially, with the clinic’s approved WhatsApp Business setup, appropriate consent and compliant message templates.'],
      ['Can it connect to our booking software?', 'That depends on whether the booking system provides a supported integration or API. We would confirm this during scoping.'],
    ],
    icon: HeartPulse,
  },
  'education-coaching': {
    name: 'Education & Coaching',
    title: 'Coaching Institute Lead Follow-Up Automation | Page2Lead',
    description: 'Organise course enquiries, answer approved course FAQs, capture student intent and coordinate counselling callbacks with education lead automation.',
    canonical: 'https://page2lead.in/industries/education-coaching',
    eyebrow: 'Education and coaching automation',
    h1: 'Turn course enquiries into organised counselling follow-ups',
    intro: 'Coaching teams receive questions about courses, batches, fees, eligibility and schedules. An enquiry workflow can answer approved FAQs, collect the student’s requirements and make the next follow-up easier to manage.',
    problems: ['Course enquiries spread across calls, forms and WhatsApp', 'Repeated questions about fees, batches and course details', 'Counselling callbacks not consistently recorded', 'No simple view of which prospects need a follow-up'],
    workflows: [
      { title: 'Respond with approved course information', text: 'Use the institute’s verified course, batch, schedule and fee information rather than inventing answers.' },
      { title: 'Capture student intent', text: 'Collect course interest, preferred batch, location or online preference and a suitable callback time.' },
      { title: 'Route counselling requests', text: 'Send qualified enquiries to the right counsellor or team queue.' },
      { title: 'Track next steps', text: 'Create follow-up tasks or consent-based messages based on the institute’s chosen process.' },
    ],
    outcomes: ['More complete student enquiry records', 'Faster access to approved course information', 'Clearer counsellor ownership', 'More consistent follow-up'],
    faqs: [
      ['Can it answer fee and batch questions?', 'Yes, when the institute supplies accurate, current information and defines what should be escalated to a counsellor.'],
      ['Can it integrate with our CRM?', 'We can assess supported integrations or APIs during discovery; compatibility is not assumed before checking.'],
      ['Will it guarantee more admissions?', 'No system can guarantee admissions. The aim is to improve response consistency and enquiry handling, then measure actual results.'],
    ],
    icon: GraduationCap,
  },
  'restaurants': {
    name: 'Restaurants & Food Businesses',
    title: 'Restaurant WhatsApp Ordering & Enquiry Automation | Page2Lead',
    description: 'Structure restaurant enquiries, menu questions, catering requests and order-intake workflows with practical WhatsApp and customer communication automation.',
    canonical: 'https://page2lead.in/industries/restaurants',
    eyebrow: 'Restaurant automation',
    h1: 'Handle menu questions, orders and catering enquiries more consistently',
    intro: 'Restaurants and cloud kitchens can receive menu questions, takeaway requests, booking enquiries and catering leads across multiple channels. Automation can organise routine intake without promising an order is accepted until the business confirms it.',
    problems: ['Staff repeatedly answering menu, timing and delivery-area questions', 'Orders arriving in inconsistent message formats', 'Catering enquiries missing guest count or date details', 'Manual order summaries and confirmation messages'],
    workflows: [
      { title: 'Answer menu and timing FAQs', text: 'Share current menu, opening hours, service areas and policies from information the restaurant maintains.' },
      { title: 'Structure order requests', text: 'Collect items, quantities, pickup or delivery preference and relevant details in a consistent summary.' },
      { title: 'Confirm with the team', text: 'Send the order request for acceptance or connect a supported ordering system before stating that an order is confirmed.' },
      { title: 'Capture catering enquiries', text: 'Collect event date, guest count, location and contact details so staff can prepare a quote.' },
    ],
    outcomes: ['Clearer order requests for staff', 'Fewer repeated routine questions', 'More complete catering enquiry details', 'Consistent customer updates when configured'],
    faqs: [
      ['Can customers order through WhatsApp?', 'A WhatsApp workflow can collect order details. Payment, inventory, delivery and final confirmation depend on the connected systems and agreed process.'],
      ['Can it support a cloud kitchen?', 'Yes, if its menu, service area, operating hours and order-confirmation rules are documented.'],
      ['Does it work with delivery apps?', 'Only if a supported integration is available. We check the specific platform before promising a connection.'],
    ],
    icon: Utensils,
  },
  'ecommerce': {
    name: 'Ecommerce',
    title: 'Ecommerce Customer Support & Order Update Automation | Page2Lead',
    description: 'Organise common ecommerce support requests such as order-status questions, return intake and customer updates using supported store integrations.',
    canonical: 'https://page2lead.in/industries/ecommerce',
    eyebrow: 'Ecommerce automation',
    h1: 'Make common order and support questions easier to handle',
    intro: 'Online stores often answer repeated questions about delivery status, returns, product details and order changes. A connected workflow can retrieve available order information, collect a request and route exceptions to a person.',
    problems: ['Repeated “where is my order?” messages', 'Support requests arriving across multiple channels', 'Manual collection of return or exchange details', 'Complex cases mixed with routine questions'],
    workflows: [
      { title: 'Answer product and policy FAQs', text: 'Use approved product, shipping, return and refund policy information.' },
      { title: 'Retrieve order status', text: 'Show order-specific information only when a supported store or fulfilment integration securely provides it.' },
      { title: 'Collect return requests', text: 'Capture order reference and reason, then apply the store’s actual policy and approval workflow.' },
      { title: 'Escalate exceptions', text: 'Route missing data, payment disputes, damaged goods and other non-standard cases to support staff.' },
    ],
    outcomes: ['More consistent answers to common questions', 'Better structured support requests', 'Clearer escalation for exceptions', 'Less manual copying between connected systems'],
    faqs: [
      ['Can it access order data?', 'Only through a supported, authorised store or fulfilment integration. We will not claim order lookup works until the connection is verified.'],
      ['Can it automatically approve refunds?', 'Refund decisions should follow the store’s rules and permissions. Sensitive or unusual cases can require human approval.'],
      ['Which platforms are supported?', 'That depends on the specific platform and available API or connector; we confirm compatibility during discovery.'],
    ],
    icon: ShoppingCart,
  },
  'gym-fitness': {
    name: 'Gyms & Fitness',
    title: 'Gym Lead Follow-Up & Membership Automation | Page2Lead',
    description: 'Organise gym membership enquiries, trial-session requests, class questions and follow-ups with practical fitness business automation.',
    canonical: 'https://page2lead.in/industries/gym-fitness',
    eyebrow: 'Gym and fitness automation',
    h1: 'Organise gym enquiries, trial sessions and membership follow-ups',
    intro: 'Gyms and fitness studios receive questions about membership plans, class timings, trainers and trial sessions. A clearly scoped workflow can answer approved FAQs, collect a prospect’s preferences and help staff follow up without losing track of enquiries.',
    problems: ['Membership enquiries spread across calls, social messages and WhatsApp', 'Repeated questions about fees, opening hours and class schedules', 'Trial-session requests not consistently recorded', 'Staff unsure which interested prospects need a callback'],
    workflows: [
      { title: 'Answer approved membership FAQs', text: 'Share current membership options, opening hours, class schedules and facility information supplied by the gym.' },
      { title: 'Capture trial and tour requests', text: 'Collect preferred date, time, fitness programme and contact details, then send the request to staff or a connected booking calendar.' },
      { title: 'Route enquiries to the right team', text: 'Direct personal-training, group-class and membership questions to the relevant staff member or queue.' },
      { title: 'Coordinate follow-ups', text: 'Create reminders or configured, consent-based messages for prospects who ask for more information.' },
    ],
    outcomes: ['More complete membership enquiry records', 'Clearer trial-session request handling', 'Less repetitive answering of routine questions', 'A visible process for follow-up ownership'],
    faqs: [
      ['Can it book a free trial automatically?', 'It can collect trial preferences and book through a supported calendar when availability and booking rules are connected. Otherwise, it can send the request to staff for confirmation.'],
      ['Can it answer membership price questions?', 'Yes, when the gym provides accurate, up-to-date membership pricing and defines which offers or exceptions need staff approval.'],
      ['Will it guarantee more memberships?', 'No. Automation cannot guarantee sales. The goal is to organise enquiries and follow-ups; the gym should measure actual outcomes after launch.'],
    ],
    icon: Dumbbell,
  },
  'law-firms': {
    name: 'Law Firms',
    title: 'Law Firm Client Intake & Legal Workflow Automation | Page2Lead',
    description: 'Structure law firm enquiry intake, consultation requests, document checklists and administrative follow-ups with carefully scoped workflow automation.',
    canonical: 'https://page2lead.in/industries/law-firms',
    eyebrow: 'Law firm workflow automation',
    h1: 'Organise new client enquiries and administrative follow-ups',
    intro: 'Law firms may receive consultation requests and document-related questions through forms, email and messaging channels. A carefully designed intake workflow can collect basic administrative details and route them for staff review while keeping legal judgement with qualified professionals.',
    problems: ['New enquiries arriving through disconnected channels', 'Staff repeatedly collecting the same basic intake details', 'Consultation requests and callback tasks difficult to track', 'Document checklists and next steps communicated manually'],
    workflows: [
      { title: 'Capture initial enquiries', text: 'Collect contact details, preferred callback time and a high-level matter category without promising legal advice or accepting a case automatically.' },
      { title: 'Route requests for conflict checks', text: 'Send intake details through the firm’s approved conflict-check process; do not treat automated collection as a completed legal conflict check.' },
      { title: 'Coordinate consultations', text: 'Collect preferred consultation times and route them to staff or a connected calendar for confirmation.' },
      { title: 'Organise document requests', text: 'Share firm-approved checklists and track receipt status through authorised systems, with staff review for sensitive matters.' },
    ],
    outcomes: ['More structured initial enquiry records', 'Clearer ownership of consultation requests', 'Consistent administrative document checklists', 'Better visibility into pending follow-ups'],
    faqs: [
      ['Can the chatbot give legal advice?', 'The workflow should provide approved administrative information only and route legal questions to a qualified lawyer. It should not replace professional legal judgement.'],
      ['Can it handle confidential client information?', 'Any deployment must be designed around the firm’s confidentiality, access-control, retention and applicable legal requirements. We would confirm the requirements before selecting tools or integrations.'],
      ['Can it complete conflict checks automatically?', 'It can route information into a firm-approved process only where a supported, authorised system is available. A conflict check must not be represented as complete until the firm’s process confirms it.'],
    ],
    icon: Scale,
  },
} as const

type IndustrySlug = keyof typeof industries

export default function IndustryLandingPage() {
  const { industrySlug } = useParams<{ industrySlug: string }>()
  const industry = industrySlug ? industries[industrySlug as IndustrySlug] : undefined

  usePageMetadata({
    title: industry?.title ?? 'Industry page not found | Page2Lead',
    description: industry?.description ?? 'Explore Page2Lead business automation services.',
    canonical: industry?.canonical,
    ogTitle: industry?.title,
    ogDescription: industry?.description,
    robots: industry ? 'index, follow' : 'noindex, follow',
  })

  if (!industry) return <NotFoundPage />

  const Icon = industry.icon
  const services = [
    { icon: MessageSquare, title: 'Customer conversations', text: 'Give routine enquiries a consistent first response using approved business information.' },
    { icon: Users, title: 'Lead and request capture', text: 'Collect the details your team needs and pass a structured summary to the right person.' },
    { icon: Workflow, title: 'Connected workflows', text: 'Reduce repetitive copying and hand-offs where supported integrations are available.' },
    { icon: CalendarCheck, title: 'Follow-up coordination', text: 'Create reminders, requests or consent-based messages using your agreed business rules.' },
  ]

  return (
    <>
      <section className="pt-32 pb-20 bg-surface-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot opacity-20" />
        <div className="container-wide relative z-10">
          <Link to="/industries" className="text-sm text-brand-300 hover:text-brand-200">← All industries</Link>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mt-8">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-11 h-11 rounded-xl bg-brand-500/15 flex items-center justify-center"><Icon className="w-6 h-6 text-brand-300" /></span>
              <p className="text-eyebrow">{industry.eyebrow}</p>
            </div>
            <h1 className="text-display text-4xl lg:text-6xl text-white mb-6 text-balance">{industry.h1}</h1>
            <p className="text-white/65 text-lg leading-8 max-w-3xl mb-8">{industry.intro}</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact"><Button size="xl" className="gap-2">Discuss your workflow <ArrowRight className="w-4 h-4" /></Button></Link>
              <Link to="/services/whatsapp-automation" className="inline-flex items-center rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/5">Explore WhatsApp automation</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container-wide grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-eyebrow mb-3">Common operational challenges</p>
            <h2 className="text-display text-3xl text-foreground mb-6">Where automation may help</h2>
            <ul className="space-y-4">
              {industry.problems.map((problem) => <li key={problem} className="flex gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" /><span>{problem}</span></li>)}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-7 lg:p-9">
            <p className="text-eyebrow mb-3">Practical outcomes</p>
            <h2 className="text-display text-2xl text-foreground mb-5">Designed around your real process</h2>
            <ul className="space-y-3">{industry.outcomes.map((outcome) => <li key={outcome} className="flex gap-3 text-foreground"><CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" /><span>{outcome}</span></li>)}</ul>
            <p className="text-xs text-muted-foreground mt-5">Actual outcomes depend on your tools, process, data quality and implementation scope. No specific result is guaranteed.</p>
          </div>
        </div>
      </section>

      <section className="section bg-surface-50 dark:bg-surface-900/30">
        <div className="container-wide">
          <div className="max-w-2xl mb-10"><p className="text-eyebrow mb-3">Possible workflows</p><h2 className="text-display text-3xl lg:text-4xl text-foreground mb-4">Start with one repetitive task</h2><p className="text-muted-foreground">The right first workflow is the one that solves a real bottleneck and can be tested safely with your current tools.</p></div>
          <div className="grid sm:grid-cols-2 gap-5">
            {industry.workflows.map((workflow, index) => <article key={workflow.title} className="rounded-2xl border border-border bg-card p-6"><p className="text-xs text-brand-500 font-semibold mb-3">WORKFLOW 0{index + 1}</p><h3 className="text-lg font-semibold text-foreground mb-2">{workflow.title}</h3><p className="text-sm text-muted-foreground leading-6">{workflow.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container-wide">
          <div className="max-w-2xl mb-10"><p className="text-eyebrow mb-3">What can be connected</p><h2 className="text-display text-3xl text-foreground mb-4">A practical automation setup</h2><p className="text-muted-foreground">Integrations are confirmed before implementation; no tool is described as connected until it has been tested.</p></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{services.map((service) => { const ServiceIcon = service.icon; return <article key={service.title} className="rounded-2xl border border-border bg-card p-5"><ServiceIcon className="w-6 h-6 text-brand-500 mb-4" /><h3 className="font-semibold text-foreground mb-2">{service.title}</h3><p className="text-sm text-muted-foreground leading-6">{service.text}</p></article> })}</div>
        </div>
      </section>

      <section className="section bg-surface-50 dark:bg-surface-900/30">
        <div className="container-wide max-w-4xl"><p className="text-eyebrow mb-3">Frequently asked questions</p><h2 className="text-display text-3xl text-foreground mb-8">Questions about {industry.name.toLowerCase()} automation</h2><div className="space-y-4">{industry.faqs.map(([question, answer]) => <article key={question} className="rounded-xl border border-border bg-card p-5"><h3 className="font-semibold text-foreground mb-2">{question}</h3><p className="text-sm leading-6 text-muted-foreground">{answer}</p></article>)}</div></div>
      </section>
      <CTASection />
    </>
  )
}
