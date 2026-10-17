import type { FAQ } from '@/types'

export const faqs: FAQ[] = [
  {
    question: 'How long does it take to build and launch an AI system?',
    answer: 'Timelines depend on the requirements, third-party access, integrations and testing. I provide an estimate after reviewing the scope; no fixed timeline is promised before that review.',
  },
  {
    question: 'Do I need technical knowledge to use the systems you build?',
    answer: "The handover depends on the project. We agree whether it includes a dashboard, documentation, a walkthrough or instructions for routine updates before work begins.", 
  },
  {
    question: 'What happens if the AI gives a wrong answer to a customer?',
    answer: "The system can be configured to use approved information and route uncertain or sensitive questions to a person. Accuracy, logging and escalation behaviour must be tested for the specific build; AI answers cannot be guaranteed error-free.", 
  },
  {
    question: 'Will this work for my industry specifically?',
    answer: "I can assess a project for your industry and define a suitable scope. The right solution depends on your process, budget, data and available integrations; I confirm feasibility before promising specific functionality.", 
  },
  {
    question: 'How much does it cost?',
    answer: "Pricing depends on scope, integrations, hosting and third-party API costs. After discussing requirements, I can propose a written estimate with deliverables and exclusions. Any ongoing support is agreed separately.", 
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer: "Post-launch support and maintenance depend on the written project agreement. Any included support period, response expectations and ongoing fees should be confirmed before the project starts.", 
  },
  {
    question: 'Can the AI integrate with software I already use?',
    answer: "Integration depends on the specific product, API or connector, permissions and plan limits. Tell me what you use and I will check compatibility before confirming the scope. Third-party subscriptions or usage charges may be separate.", 
  },
  {
    question: 'Is my business data safe?',
    answer: "Data handling depends on the hosting, APIs and third-party services selected for the project. Before implementation, we should identify what data is sent to each provider, review its terms and permissions, and agree access, retention and deletion practices. I do not promise absolute security.", 
  },
]
