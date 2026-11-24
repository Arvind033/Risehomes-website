import { useEffect, useRef, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { business } from '../../data/business.js'
import ConsultationModal from '../common/ConsultationModal.jsx'
import Footer from './Footer.jsx'
import Header from './Header.jsx'

function SiteLayout() {
  const { pathname, hash, key } = useLocation()
  const [consultationService, setConsultationService] = useState(null)
  const previousLocationKey = useRef(key)
  const mainRef = useRef(null)
  const isHome = pathname === '/'
  const isBlog = pathname === '/blog' || pathname.startsWith('/blog/')
  const hasConsultation = isHome || pathname === '/construction' || pathname === '/interiors' || pathname === '/projects' || pathname === '/about' || isBlog || pathname === '/contact'

  function openConsultation(service = '') {
    setConsultationService(service)
  }

  useEffect(() => {
    const pageUrl = new URL(pathname, business.siteUrl).href
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', pageUrl)
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', pageUrl)
  }, [pathname])

  useEffect(() => {
    if (previousLocationKey.current !== key && !hash) {
      mainRef.current?.querySelector('h1')?.focus({ preventScroll: true })
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
    previousLocationKey.current = key
  }, [hash, key])

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header key={pathname} onConsultation={hasConsultation ? openConsultation : undefined} />
      <main id="main-content" className="site-main" ref={mainRef} tabIndex={-1}>
        <Outlet context={{ openConsultation: hasConsultation ? openConsultation : undefined }} />
      </main>
      <Footer />
      <ConsultationModal
        open={hasConsultation && consultationService !== null}
        initialService={consultationService || ''}
        onClose={() => setConsultationService(null)}
      />
    </>
  )
}

export default SiteLayout