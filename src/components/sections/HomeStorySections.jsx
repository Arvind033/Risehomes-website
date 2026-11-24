import { ArrowUpRight, Check } from 'lucide-react'
import ConsultationButton from '../common/ConsultationButton.jsx'
import Container from '../common/Container.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import { serviceArea } from '../../data/business.js'
import { homePrinciples, homePrinciplesIntro, qualityDetails } from '../../data/home.js'

export function WhyRiseHomes() {
  return (
    <section className="home-section home-values" aria-labelledby="values-eyebrow values-heading">
      <Container className="values-layout">
        <div className="home-section-heading">
          <p className="eyebrow" id="values-eyebrow">{homePrinciplesIntro.eyebrow}</p>
          <SectionHeading id="values-heading" title={homePrinciplesIntro.title} />
          <p className="section-introduction">{homePrinciplesIntro.description}</p>
        </div>
        <ol className="values-list" role="list">
          {homePrinciples.map((principle, index) => (
            <li className="value-item" key={principle.title}>
              <span className="value-item__number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <div className="value-item__content">
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}

export function QualitySection() {
  return (
    <section className="home-section home-quality" aria-labelledby="quality-heading">
      <Container className="quality-layout">
        <div className="home-section-heading">
          <p className="eyebrow">Quality, considered</p>
          <SectionHeading id="quality-heading" title="Quality is in the details." />
          <p className="section-introduction">Not just what you see on the first day. The choices behind a home matter just as much as the finish.</p>
        </div>
        <dl className="quality-list">
          {qualityDetails.map((detail) => (
            <div key={detail.title}>
              <dt><Check size={20} aria-hidden="true" />{detail.title}</dt>
              <dd>{detail.description}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}

export function FinancingSection() {
  return (
    <section className="home-section home-financing" aria-labelledby="financing-heading">
      <Container className="financing-layout">
        <div className="home-section-heading">
          <p className="eyebrow">Home loan assistance</p>
          <SectionHeading id="financing-heading" title="A considered home. A considered financial plan." />
        </div>
        <div className="financing-copy">
          <p>Financing is part of the bigger picture. Discuss your construction plans alongside your budget, lender requirements, and the sequence of work.</p>
          <ul>
            <li>Understand the overall project budget.</li>
            <li>Discuss lender documentation requirements.</li>
            <li>Consider stage-wise funding and payments.</li>
          </ul>
          <ConsultationButton service="Home Construction" variant="text">Discuss financing support <ArrowUpRight size={18} aria-hidden="true" /></ConsultationButton>
          <p className="financing-disclaimer">Loan approval, eligibility, and lending terms are decided by your lender. No banking partnership is implied.</p>
        </div>
      </Container>
    </section>
  )
}

export function ConsultationCta() {
  return (
    <section className="home-contact" aria-labelledby="home-contact-heading">
      <Container className="home-contact__inner">
        <div>
          <p className="eyebrow">Your next chapter</p>
          <h2 id="home-contact-heading">Every home starts with a conversation.</h2>
          <p>Tell us what you have in mind. Let's explore what comes next.</p>
        </div>
        <div className="home-contact__actions">
          <ConsultationButton className="button--light">Get a Free Consultation <ArrowUpRight size={18} aria-hidden="true" /></ConsultationButton>
          <p>Construction &amp; interiors in {serviceArea}</p>
        </div>
      </Container>
    </section>
  )
}