import { motion } from 'framer-motion'

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-surface-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot opacity-20" />
        <div className="container-wide relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-eyebrow mb-4">Legal</p>
            <h1 className="text-display text-4xl lg:text-5xl text-white mb-5">Privacy Policy</h1>
            <p className="text-white/40 text-sm">Last updated: March 2025</p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container-tight">
          <div className="prose prose-sm dark:prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">1. Information We Collect</h2>
              <p>When you use our website or services, we may collect the following types of information:</p>
              <ul className="list-disc pl-5 space-y-1 mt-3">
                <li>Name, email address, phone number, and company name when you submit a contact form</li>
                <li>Usage data such as pages visited, time spent, and referral source</li>
                <li>Technical data such as IP address, browser type, and device information</li>
                <li>Any information you voluntarily provide when communicating with us via email or WhatsApp</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">2. How We Use Your Information</h2>
              <p>I use the information I collect to:</p>
              <ul className="list-disc pl-5 space-y-1 mt-3">
                <li>Respond to your enquiries and provide the services you've requested</li>
                <li>Send you relevant information about my services (only with your consent)</li>
                <li>Improve our website and service offerings</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">3. Data Sharing</h2>
              <p>
                I do not sell, trade, or rent your personal information to third parties. I may share data
                with trusted service providers (such as email platforms or CRM tools) who assist in our operations,
                under strict confidentiality agreements. I may disclose information if required by law.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">4. Client Data</h2>
              <p>
                For clients whose AI systems we build and manage: all business data used to train AI models
                remains your property. I do not use your data to train models for other clients. Data is
                stored securely with access controls limited to ymy and authorised Page2Lead personnel.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">5. Cookies</h2>
              <p>
                I use essential cookies to ensure the website functions correctly, and analytics cookies
                to understand how visitors use our site. You can disable non-essential cookies in your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-5 space-y-1 mt-3">
                <li>Access the personal data I hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt out of marketing communications at any time</li>
              </ul>
              <p className="mt-3">To exercise these rights, email us at hello@page2lead.in.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">7. Contact</h2>
              <p>
                For any privacy-related questions, contact me at{' '}
                <a href="mailto:hello@page2lead.in" className="text-brand-500 hover:underline">
                  privacy@page2lead
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
