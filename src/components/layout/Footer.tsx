import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from 'lucide-react'

const footerLinks = {
  Services: [
    { label: 'AI Chatbots', href: '/services/ai-chatbots' },
    { label: 'WhatsApp Automation', href: '/services/whatsapp-automation' },
    { label: 'Voice AI Agents', href: '/services/voice-ai-agents' },
    { label: 'Lead Generation', href: '/services/lead-generation' },
    { label: 'CRM Automation', href: '/services/crm-automation' },
    { label: 'Workflow Automation', href: '/services/workflow-automation' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Blog', href: '/blog' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ],
  Industries: [
    { label: 'Real Estate', href: '/industries' },
    { label: 'Clinics & Healthcare', href: '/industries' },
    { label: 'Education & Coaching', href: '/industries' },
    { label: 'Ecommerce', href: '/industries' },
    { label: 'Gyms & Fitness', href: '/industries' },
    { label: 'Law Firms', href: '/industries' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'FAQ', href: '/faq' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-surface-950 text-white border-t border-white/5">
      {/* Main footer */}
      <div className="container-wide py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <img
                src="/assets/favicon-light.png"
                alt="Page2Lead"
                className="w-8 h-8"
              />
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Page<span className="text-brand-400">2</span>Lead
              </span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs mb-6">
              I build AI-powered business systems that generate leads, automate support, and save hundreds of hours every month.
            </p>
            {/* Contact info */}
            <div className="space-y-2.5">
              <a href="mailto:page2lead.contact@gmail.com" className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white/80 transition-colors">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                page2lead.contact@gmail.com
              </a>
              <a href="https://wa.me/917597256642" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white/80 transition-colors">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                +91 75972 56642
              </a>
              <div className="flex items-center gap-2.5 text-sm text-white/50">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0" />
                Ajmer, Rajasthan, India
              </div>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Instagram, href: '#', label: 'Instagram' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4 text-white/60" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold uppercase tracking-caps text-white/30 mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/50 hover:text-white/80 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-wide py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © 2026 Page2Lead by Sohail Khan. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Built with ❤️ in Ajmer, India — Automating businesses worldwide.
          </p>
        </div>
      </div>
    </footer>
  )
}
