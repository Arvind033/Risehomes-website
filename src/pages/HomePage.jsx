import { useEffect } from 'react'
import { MessageCircle } from 'lucide-react'
import FaqAccordion from '../components/sections/FaqAccordion.jsx'
import HomeHero from '../components/sections/HomeHero.jsx'
import HomeInspiration from '../components/sections/HomeInspiration.jsx'
import HomeServices from '../components/sections/HomeServices.jsx'
import { ConsultationCta, FinancingSection, QualitySection, WhyRiseHomes } from '../components/sections/HomeStorySections.jsx'
import ProcessSteps from '../components/sections/ProcessSteps.jsx'
import { business, serviceArea, whatsappHref } from '../data/business.js'
import '../styles/home.css'

function HomePage() {
  useEffect(() => {
    document.title = `${business.name} | Construction & Interiors in ${serviceArea}`
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      `${business.name}: thoughtfully planned home construction and interiors in ${serviceArea}. Discover our approach, explore design inspiration, and discuss your home.`,
    )
  }, [])

  return (
    <div className="home-page">
      <HomeHero />
      <HomeServices />
      <WhyRiseHomes />
      <ProcessSteps />
      <HomeInspiration />
      <QualitySection />
      <FinancingSection />
      <FaqAccordion />
      <ConsultationCta />
      {whatsappHref && (
        <a className="floating-whatsapp" href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label={`Chat with ${business.name} on WhatsApp`} title="WhatsApp">
          <MessageCircle size={22} aria-hidden="true" /><span>WhatsApp</span>
        </a>
      )}
    </div>
  )
}

export default HomePage