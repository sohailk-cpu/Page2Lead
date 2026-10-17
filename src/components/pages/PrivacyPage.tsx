import { motion } from 'framer-motion'
import { usePageMetadata } from '@/hooks/usePageMetadata'
import { pageMetadata } from '@/data/pageMetadata'

export default function PrivacyPage() {
  usePageMetadata(pageMetadata.privacy)
  return (
    <>
      <section className="pt-32 pb-20 bg-surface-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot opacity-20" />
        <div className="container-wide relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-eyebrow mb-4">Legal</p>
            <h1 className="text-display text-4xl lg:text-5xl text-white mb-5">Privacy Policy</h1>
            <p className="text-white/40 text-sm">Last updated: October 17, 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container-tight">
          <div className="prose prose-sm dark:prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">1. Information We Collect</h2>
              <p>When you use this website or contact me about a project, the following information may be collected depending on the feature you use:</p>
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
                I do not intend to sell your personal information. Information may be processed by service providers used by this website or by a communication channel you choose (for example, analytics, form delivery or WhatsApp). Their own privacy terms also apply. Information may be disclosed where required by law.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">4. Client Data</h2>
              <p>
                If a project involves business or customer data, the data flows, hosting provider, third-party APIs, access permissions, retention period and deletion process should be agreed before implementation. The handling of data by third-party providers is also subject to their own terms and policies. Avoid sending sensitive personal or health information unless the project has been specifically assessed and configured for it.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">5. Cookies</h2>
              <p>
                This site includes Google Analytics. Analytics technologies may collect usage and device information according to Google’s settings and policies. You can use browser controls or available Google opt-out controls to limit analytics collection.
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
                  hello@page2lead.in
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
