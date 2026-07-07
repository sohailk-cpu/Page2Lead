import { Hero } from '@/components/sections/Hero'
import { TrustedBy } from '@/components/sections/TrustedBy'
import { Problems } from '@/components/sections/Problems'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Industries } from '@/components/sections/Industries'
import { Testimonials } from '@/components/sections/Testimonials'
import { PricingPreview } from '@/components/sections/PricingPreview'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Problems />
      <ServicesGrid />
      <HowItWorks />
      <Industries />
      <Testimonials />
      <PricingPreview />
      <FAQSection />
      <CTASection />
    </>
  )
}
