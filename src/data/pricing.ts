import type { PricingPlan } from '@/types'

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 14999,
    period: 'one-time',
    description:
      'A practical starting point for businesses that want to automate one important process without a large upfront investment.',
    features: [
      'One core automation system',
      'WhatsApp automation or AI chatbot',
      'Up to 2 integrations',
      'Business-specific AI setup',
      'Lead, booking, or customer workflow',
      'Deployment & testing',
      '14-day post-launch support',
      'Basic documentation',
    ],
    cta: 'Get Started',
  },

  {
    id: 'growth',
    name: 'Growth',
    price: 29999,
    period: 'one-time',
    description:
      'For businesses ready to connect multiple processes and build a complete customer automation system.',
    features: [
      'WhatsApp automation + AI chatbot',
      'Lead, order, or booking automation',
      'Up to 4 integrations',
      'CRM integration & automation',
      'Automated customer follow-ups',
      'AI knowledge base setup',
      'Lead and customer data management',
      'Deployment & testing',
      '30-day post-launch support',
      'Documentation & handover',
    ],
    cta: 'Most Popular',
    popular: true,
  },

  {
    id: 'business',
    name: 'Business',
    price: 49999,
    period: 'one-time',
    description:
      'For growing businesses that need multiple connected workflows and more advanced automation.',
    features: [
      'Multiple automation workflows',
      'WhatsApp + AI chatbot',
      'CRM & workflow automation',
      'AI lead qualification',
      'Automated follow-ups',
      'Order, booking, or customer workflows',
      'Multiple integrations',
      'Custom business logic',
      'Custom dashboard',
      'Analytics & reporting',
      '60-day post-launch support',
      'Priority support',
      'Full documentation & training',
    ],
    cta: 'Build My System',
  },

  {
    id: 'enterprise',
    name: 'Custom',
    price: 0,
    period: 'custom',
    description:
      'For complex operations that require a tailored AI automation architecture built around specific business requirements.',
    features: [
      'Custom AI automation systems',
      'AI agents & advanced workflows',
      'Voice AI agents',
      'Advanced CRM automation',
      'Custom API integrations',
      'AI knowledge bases & RAG',
      'Multi-workflow business systems',
      'Advanced dashboards & analytics',
      'Custom architecture',
      'Dedicated support',
      'Team training & documentation',
      'Custom delivery & support plan',
    ],
    cta: 'Book a Call',
  },
]
