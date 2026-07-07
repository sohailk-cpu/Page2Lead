import { motion } from 'framer-motion'

export default function TermsPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-surface-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot opacity-20" />
        <div className="container-wide relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-eyebrow mb-4">Legal</p>
            <h1 className="text-display text-4xl lg:text-5xl text-white mb-5">Terms of Service</h1>
            <p className="text-white/40 text-sm">Last updated: March 2025</p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container-tight">
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">1. Services</h2>
              <p>
                Page2Lead provides AI automation consulting, development, and implementation services.
                The scope of each project is defined in a separate Statement of Work (SOW) agreed upon
                before work begins. I do not commence work without written agreement on scope, price, and timeline.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">2. Payment Terms</h2>
              <p>
                All projects require a 50% deposit before work begins, with the remaining 50% due upon
                project completion and before final delivery of files and credentials. Monthly retainer
                agreements are billed on the 1st of each month and are payable within 7 days.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">3. Intellectual Property</h2>
              <p>
                Upon final payment, clients receive full ownership of all custom code, configurations,
                and assets created specifically for their project. Page2Lead retains the right to use
                general methodologies, frameworks, and non-client-specific tools developed during the project.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">4. Client Responsibilities</h2>
              <p>Clients are responsible for:</p>
              <ul className="list-disc pl-5 space-y-1 mt-3">
                <li>Providing accurate business information required for system training</li>
                <li>Timely review and approval of deliverables (within 5 business days)</li>
                <li>Ensuring all content and data provided to us is legally owned or licensed</li>
                <li>Maintaining API keys, credentials, and third-party subscriptions after handoff</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">5. Limitation of Liability</h2>
              <p>
                Page2Lead's liability is limited to the total fees paid for the specific project in question.
                I am not liable for indirect, consequential, or incidental damages arising from use or
                inability to use our systems. AI systems can make errors; critical decisions should always
                include human oversight.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">6. Termination</h2>
              <p>
                Either party may terminate a project with 14 days written notice. In such cases, the client
                pays for all work completed to date. Monthly retainers require 30 days notice to cancel.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">7. Governing Law</h2>
              <p>
                These terms are governed by the laws of India. Any disputes shall be resolved in the courts
                of Mumbai, Maharashtra.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">8. Contact</h2>
              <p>
                Questions about these terms?{' '}
                <a href="mailto:page2lead.contact@gmail.com" className="text-brand-500 hover:underline">
                  page2lead.contact@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
