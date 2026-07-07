export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  href: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar: string
  rating: number
  industry: string
}

export interface CaseStudy {
  id: string
  client: string
  industry: string
  challenge: string
  solution: string
  results: { metric: string; value: string }[]
  image: string
  href: string
}

export interface PricingPlan {
  id: string
  name: string
  price: number
  period: string
  description: string
  features: string[]
  cta: string
  popular?: boolean
}

export interface FAQ {
  question: string
  answer: string
}

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface ContactForm {
  name: string
  email: string
  phone: string
  company: string
  service: string
  message: string
}

export interface Blog {
  id: string
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  image: string
  readTime: number
  content: string
}