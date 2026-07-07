import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import HomePage from '@/components/pages/HomePage'
import ServicesPage from '@/components/pages/ServicesPage'
import ServiceDetailPage from '@/components/pages/ServiceDetailPage'
import IndustriesPage from '@/components/pages/IndustriesPage'
import PortfolioPage from '@/components/pages/PortfolioPage'
import CaseStudiesPage from '@/components/pages/CaseStudiesPage'
import PricingPage from '@/components/pages/PricingPage'
import AboutPage from '@/components/pages/AboutPage'
import ContactPage from '@/components/pages/ContactPage'
import FAQPage from '@/components/pages/FAQPage'
import PrivacyPage from '@/components/pages/PrivacyPage'
import TermsPage from '@/components/pages/TermsPage'
import NotFoundPage from '@/components/pages/NotFoundPage'
import BlogPage from '@/components/pages/BlogPage'
import BlogDetailPage from '@/components/pages/BlogDetailPage'


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />
      </Route>
    </Routes>
  )
}

export default App
