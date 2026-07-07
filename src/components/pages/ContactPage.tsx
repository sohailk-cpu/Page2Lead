import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Phone, MapPin, CheckCircle2, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Select } from '@/components/ui/Select'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(10, 'Valid phone number required'),
  company: z.string().min(1, 'Company name is required'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Tell me a bit more (min 10 characters)'),
})

type FormData = z.infer<typeof schema>

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          subject: `New Enquiry from ${data.name} — Page2Lead`,
          from_name: 'Page2Lead Contact Form',
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company,
          service: data.service,
          message: data.message,
          botcheck: '',
        }),
      })
      const result = await response.json()
      if (result.success) {
        setSubmitted(true)
      } else {
        throw new Error('Submission failed')
      }
    } catch {
      alert('Something went wrong. Please WhatsApp me directly at +91 75972 56642')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-surface-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full bg-brand-500/10 blur-[100px]" />
        <div className="container-wide relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-eyebrow mb-4">Get in touch</p>
            <h1 className="text-display text-4xl lg:text-6xl text-white mb-5">
              Book your free<br />
              <span className="gradient-text">strategy call</span>
            </h1>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              30 minutes. No sales pitch. Just a clear picture of how AI can transform your specific business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="section bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Let's talk</h2>
                <p className="text-muted-foreground">
                  Fill in the form and I'll get back to you within 24 hours on WhatsApp.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Mail, label: 'Email', value: 'page2lead.contact@gmail.com', href: 'mailto:page2lead.contact@gmail.com' },
                  { icon: Phone, label: 'WhatsApp', value: '+91 75972 56642', href: 'https://wa.me/917597256642' },
                  { icon: MapPin, label: 'Location', value: 'Ajmer, Rajasthan, India', href: undefined },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-brand-500" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{label}</p>
                      {href ? (
                        <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-sm font-medium text-foreground hover:text-brand-500 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-foreground">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-brand-500/5 border border-brand-500/20">
                <p className="text-sm font-semibold text-foreground mb-1">What to expect</p>
                <ul className="space-y-1.5">
                  {[
                    'Response within 24 hours on WhatsApp',
                    'Free 30-min strategy call',
                    'Custom automation roadmap',
                    'Fixed-price quote — no surprises',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="h-full flex items-center justify-center text-center p-12 rounded-2xl border border-brand-500/20 bg-brand-500/5">
                  <div>
                    <div className="w-16 h-16 rounded-full bg-brand-500/10 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="w-8 h-8 text-brand-500" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Message received!</h3>
                    <p className="text-muted-foreground mb-4">
                      I'll get back to you within 24 hours on WhatsApp at +91 75972 56642
                    </p>
                    <a
                      href="https://wa.me/917597256642?text=Hi%20Sohail,%20I%20just%20filled%20your%20contact%20form"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-500 hover:underline"
                    >
                      Or message me on WhatsApp now →
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-7 rounded-2xl border border-border bg-card">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-1.5">Full Name *</label>
                      <Input {...register('name')} placeholder="Your name" />
                      {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-1.5">Email *</label>
                      <Input {...register('email')} type="email" placeholder="you@company.com" />
                      {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-1.5">Phone / WhatsApp *</label>
                      <Input {...register('phone')} placeholder="+91 98765 43210" />
                      {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone.message}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-1.5">Company Name *</label>
                      <Input {...register('company')} placeholder="Your business name" />
                      {errors.company && <p className="text-xs text-destructive mt-1">{errors.company.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1.5">What are you interested in? *</label>
                    <Select {...register('service')} defaultValue="">
                      <option value="" disabled>Select a service</option>
                      <option value="ai-chatbots">AI Chatbots</option>
                      <option value="whatsapp-automation">WhatsApp Automation</option>
                      <option value="voice-ai">Voice AI Agents</option>
                      <option value="lead-generation">Lead Generation Automation</option>
                      <option value="workflow-automation">Business Workflow Automation</option>
                      <option value="crm-automation">CRM Automation</option>
                      <option value="appointment-booking">Appointment Booking Automation</option>
                      <option value="ai-customer-support">AI Customer Support</option>
                      <option value="website-development">Website Development</option>
                      <option value="custom-ai">Custom AI Solutions</option>
                      <option value="consulting">Automation Consulting</option>
                      <option value="not-sure">Not sure yet — help me decide</option>
                    </Select>
                    {errors.service && <p className="text-xs text-destructive mt-1">{errors.service.message}</p>}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1.5">Tell me about your business *</label>
                    <Textarea
                      {...register('message')}
                      placeholder="What's your biggest operational challenge right now? What are you hoping automation can solve?"
                      rows={4}
                    />
                    {errors.message && <p className="text-xs text-destructive mt-1">{errors.message.message}</p>}
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={loading}>
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message & Book Call'
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you agree to our{' '}
                    <a href="/privacy" className="text-brand-500 hover:underline">Privacy Policy</a>.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
