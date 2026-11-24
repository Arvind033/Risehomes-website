import { ArrowUpRight, Minus, Plus } from 'lucide-react'
import ConsultationButton from '../common/ConsultationButton.jsx'
import Container from '../common/Container.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import { homeFaqs } from '../../data/home.js'

function FaqAccordion() {
  return (
    <section className="home-section home-faq" aria-labelledby="faq-heading">
      <Container className="faq-layout">
        <div className="home-section-heading">
          <p className="eyebrow">A little more clarity</p>
          <SectionHeading id="faq-heading" title="Good questions. A useful place to start." />
          <p className="section-introduction">Every project is different. Here are a few things you might be wondering.</p>
          <ConsultationButton variant="text">Ask us a question <ArrowUpRight size={18} aria-hidden="true" /></ConsultationButton>
        </div>
        <div className="faq-list">
          {homeFaqs.map((faq) => (
            <details name="home-faq" key={faq.question}>
              <summary>
                <span>{faq.question}</span>
                <span className="faq-toggle" aria-hidden="true">
                  <Plus className="faq-toggle__expand" size={20} />
                  <Minus className="faq-toggle__collapse" size={20} />
                </span>
              </summary>
              <div className="faq-answer"><p>{faq.answer}</p></div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FaqAccordion