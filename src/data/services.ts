import type { Service } from '@/types'

// Seven clearly differentiated offers. Support, consulting and custom AI capabilities
// are presented inside the service where they belong rather than as duplicate offers.
export const services: Service[] = [
  {
    id: 'ai-chatbots', title: 'AI Chatbots', icon: 'MessageSquare',
    description: 'A website assistant that answers questions from your approved business information, guides visitors and captures qualified enquiries.',
    features: ['Business knowledge and FAQs', 'Website chat experience', 'Lead capture and qualification', 'Human handoff for complex questions', 'Optional support-answer workflows'],
    href: '/services/ai-chatbots',
  },
  {
    id: 'whatsapp-automation', title: 'WhatsApp Automation', icon: 'Phone',
    description: 'Turn routine WhatsApp conversations into structured workflows for orders, confirmations, customer updates and opted-in messages.',
    features: ['Order and enquiry intake', 'Product and quantity extraction', 'Order summaries and confirmations', 'Opt-in notifications and templates', 'Message routing and status updates'],
    href: '/services/whatsapp-automation',
  },
  {
    id: 'voice-ai-agents', title: 'Voice AI Agents', icon: 'Mic',
    description: 'An AI phone assistant for routine inbound calls, enquiry collection, call routing and callback requests.',
    features: ['Inbound call handling', 'Speech recognition and text-to-speech', 'Call routing and IVR connections', 'Call summaries and transcripts where supported', 'Human escalation and callback capture'],
    href: '/services/voice-ai-agents',
  },
  {
    id: 'lead-crm-automation', title: 'Lead Generation & CRM', icon: 'TrendingUp',
    description: 'Capture leads, qualify them against your criteria and keep every promising opportunity organised through your sales pipeline.',
    features: ['Forms and connected-channel lead capture', 'Lead scoring and qualification', 'Duplicate detection and source tracking', 'CRM records, owners and deal stages', 'Follow-up tasks and pipeline reporting'],
    href: '/services/lead-crm-automation',
  },
  {
    id: 'workflow-automation', title: 'Business Workflow Automation', icon: 'Zap',
    description: 'Map repetitive operations and connect your apps so routine hand-offs, approvals and document tasks happen with less manual effort.',
    features: ['Process review and prioritisation', 'App-to-app data transfer', 'Document and approval workflows', 'Task routing and exception alerts', 'Tool selection and phased implementation planning'],
    href: '/services/workflow-automation',
  },
  {
    id: 'appointment-booking', title: 'Appointment Booking Automation', icon: 'Calendar',
    description: 'Let customers select a time, book appointments and manage changes while your team keeps calendars and reminders organised.',
    features: ['Available time-slot selection', 'Calendar synchronisation where configured', 'Booking confirmations and reminders', 'Rescheduling and cancellation flows', 'No-show follow-up options'],
    href: '/services/appointment-booking',
  },
  {
    id: 'website-custom-ai', title: 'Website & Custom AI Solutions', icon: 'Globe',
    description: 'Build conversion-focused business websites and tailored AI applications when a standard tool is not enough for the problem.',
    features: ['Responsive websites and landing pages', 'Lead forms, analytics and SEO foundations', 'AI API and custom application integration', 'Document search and knowledge assistants', 'Feasibility review, evaluation and deployment planning'],
    href: '/services/website-custom-ai',
  },
]
