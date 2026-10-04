import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'

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
    { label: 'AI Demos', href: '/case-studies' },
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
                Page<span className="text-purple-500">2</span>Lead
              </span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs mb-6">
              I build AI-powered business systems that help generate leads, automate support, and reduce repetitive manual work.
            </p>
            {/* Contact info */}
            <div className="space-y-2.5">
              <a href="mailto:hello@page2lead.in" className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white/80 transition-colors">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                hello@page2lead.in
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
                { type: 'x', href: 'https://x.com/page2lead/', label: 'X' },
                { type: 'linkedin', href: 'https://www.linkedin.com/company/page2lead/', label: 'LinkedIn' },
                { type: 'instagram', href: 'https://www.instagram.com/page2lead/', label: 'Instagram' },
              ].map(({ type, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                >
                  {type === 'linkedin' ? (
                    <Linkedin className="w-4 h-4 text-white/60" />
                  ) : type === 'instagram' ? (
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="w-4 h-4 fill-none stroke-white/60"
                      strokeWidth="1.8"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <circle cx="12" cy="12" r="4.2" />
                      <circle cx="17.4" cy="6.7" r="1" fill="currentColor" stroke="none" />
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="w-4 h-4 fill-white/60"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.964 6.817H1.684l7.73-8.835L1.254 2.25H8.05l4.713 6.231 5.481-6.231Z" />
                    </svg>
                  )}
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
