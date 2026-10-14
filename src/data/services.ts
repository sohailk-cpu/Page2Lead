import type { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'ai-chatbots',
    title: 'AI Chatbots',
    description:
      'Turn website visitors into qualified enquiries with a business-aware assistant that answers pre-sales questions and guides prospects to the next step.',
    icon: 'MessageSquare',
    features: [
      'Answers based on approved business information',
      'Website chat widget integration',
      'Lead capture and pre-sales qualification',
      'Product, service, and pricing FAQs',
      'Handoff to a human when needed',
    ],
    href: '/services/ai-chatbots',
  },
  {
    id: 'whatsapp-automation',
    title: 'WhatsApp Automation',
    description:
      'Run reliable customer messaging workflows on WhatsApp for updates, opt-in campaigns, and routine conversations.',
    icon: 'Phone',
    features: [
      'WhatsApp Business Platform / Cloud API setup',
      'Approved template message workflows',
      'Order and status notifications',
      'Opt-in campaign messaging',
      'Message routing and delivery-status handling',
    ],
    href: '/services/whatsapp-automation',
  },
  {
    id: 'voice-ai-agents',
    title: 'Voice AI Agents',
    description:
      'Help manage inbound phone calls with an AI voice assistant for routine questions, call routing, and enquiry capture.',
    icon: 'Mic',
    features: [
      'Inbound call handling for agreed use cases',
      'Natural text-to-speech and speech recognition',
      'Call routing and IVR integration',
      'Call summaries and transcripts where supported',
      'Escalation to a human or callback request',
    ],
    href: '/services/voice-ai-agents',
  },
  {
    id: 'lead-generation',
    title: 'Lead Generation Automation',
    description:
      'Capture prospects from your selected channels, qualify them against agreed criteria, and route sales-ready enquiries to your team.',
    icon: 'TrendingUp',
    features: [
      'Lead capture from forms and connected channels',
      'Qualification questions and lead scoring rules',
      'Duplicate detection and lead-source tracking',
      'Automatic assignment or sales-team notifications',
      'Lead acquisition and conversion reporting',
    ],
    href: '/services/lead-generation',
  },
  {
    id: 'workflow-automation',
    title: 'Business Workflow Automation',
    description:
      'Connect business apps and automate repeatable operational processes across teams, from document handling to internal approvals.',
    icon: 'Zap',
    features: [
      'Current-process mapping',
      'App-to-app data transfer and integrations',
      'Document generation and processing workflows',
      'Internal approvals and task routing',
      'Exception alerts and workflow status notifications',
    ],
    href: '/services/workflow-automation',
  },
  {
    id: 'crm-automation',
    title: 'CRM Automation',
    description:
      'Keep customer records organised and make your sales process more consistent with automated CRM updates, deal stages, and sales tasks.',
    icon: 'Database',
    features: [
      'CRM configuration and data cleanup',
      'Contact and company record synchronisation',
      'Deal-stage rules and pipeline updates',
      'Sales task creation and ownership assignment',
      'CRM activity and pipeline reports',
    ],
    href: '/services/crm-automation',
  },
  {
    id: 'appointment-booking',
    title: 'Appointment Booking Automation',
    description:
      'Let customers choose available time slots and manage bookings, while your team gets accurate calendar updates and fewer manual scheduling tasks.',
    icon: 'Calendar',
    features: [
      'Booking page with available time slots',
      'Calendar availability synchronisation',
      'Reschedule and cancellation workflows',
      'Booking confirmations and reminder integrations',
      'No-show tracking and follow-up workflows',
    ],
    href: '/services/appointment-booking',
  },
  {
    id: 'ai-customer-support',
    title: 'AI Customer Support',
    description:
      'Help your support team process incoming issues faster with ticket triage, knowledge-based answers, and clear escalation paths.',
    icon: 'HeadphonesIcon',
    features: [
      'Support-ticket categorisation and prioritisation',
      'Answers grounded in an approved support knowledge base',
      'Suggested replies for support agents',
      'Escalation rules for unresolved or sensitive cases',
      'Support volume and resolution reporting',
    ],
    href: '/services/ai-customer-support',
  },
  {
    id: 'website-development',
    title: 'Website Development',
    description:
      'Build responsive business websites focused on clear messaging, accessibility, performance, and conversion.',
    icon: 'Globe',
    features: [
      'Responsive website design and development',
      'Landing pages and lead-capture forms',
      'Technical SEO foundations and metadata',
      'CMS integration where appropriate',
      'Analytics and conversion-event setup',
    ],
    href: '/services/website-development',
  },
  {
    id: 'custom-ai-solutions',
    title: 'Custom AI Solutions',
    description:
      'Develop tailored AI tools for clearly defined business problems when a standard chatbot or off-the-shelf workflow is not enough.',
    icon: 'Cpu',
    features: [
      'AI use-case discovery and feasibility review',
      'LLM and third-party AI API integration',
      'Document search and retrieval-augmented generation (RAG)',
      'Custom API and application development',
      'Evaluation, deployment, and maintenance options by agreement',
    ],
    href: '/services/custom-ai-solutions',
  },
  {
    id: 'automation-consulting',
    title: 'Automation Consulting',
    description:
      'Understand where automation is worth investing in and get a prioritised plan before committing to implementation.',
    icon: 'BarChart3',
    features: [
      'Operations and process review',
      'Automation opportunities ranked by impact and effort',
      'Cost, risk, and potential ROI estimates with assumptions',
      'Tool and integration recommendations',
      'Phased implementation roadmap',
    ],
    href: '/services/automation-consulting',
  },
]
