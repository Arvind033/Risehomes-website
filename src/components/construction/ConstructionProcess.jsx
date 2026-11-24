import { useId, useRef, useState } from 'react'
import { Check } from 'lucide-react'
import Container from '../common/Container.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import { constructionProcess } from '../../data/construction.js'

function ConstructionProcess() {
  const [activeStep, setActiveStep] = useState(0)
  const tabRefs = useRef([])
  const idPrefix = useId()

  function handleKeyDown(event, index) {
    const destinations = {
      ArrowRight: (index + 1) % constructionProcess.length,
      ArrowLeft: (index - 1 + constructionProcess.length) % constructionProcess.length,
      Home: 0,
      End: constructionProcess.length - 1,
    }
    const nextIndex = destinations[event.key]
    if (nextIndex === undefined) return
    event.preventDefault()
    setActiveStep(nextIndex)
    tabRefs.current[nextIndex]?.focus()
  }

  return (
    <section className="construction-section construction-process" aria-labelledby="construction-process-heading">
      <Container>
        <div className="construction-section-heading construction-process__heading">
          <div>
            <p className="construction-eyebrow">Our process</p>
            <SectionHeading id="construction-process-heading" title="A clearer path from idea to home." />
          </div>
          <p className="construction-introduction">A considered journey, shaped around your site and agreed scope.</p>
        </div>
        <div className="construction-process__tabs" role="tablist" aria-label="Our construction process">
          {constructionProcess.map((step, index) => (
            <button
              key={step.title}
              type="button"
              role="tab"
              id={`${idPrefix}-tab-${index}`}
              aria-controls={`${idPrefix}-panel-${index}`}
              aria-selected={activeStep === index}
              tabIndex={activeStep === index ? 0 : -1}
              ref={(element) => { tabRefs.current[index] = element }}
              onClick={() => setActiveStep(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              <span className="construction-process__number">{String(index + 1).padStart(2, '0')}</span>
              <span>{step.title}</span>
            </button>
          ))}
        </div>
        {constructionProcess.map((step, index) => (
          <div
            key={step.title}
            id={`${idPrefix}-panel-${index}`}
            role="tabpanel"
            aria-labelledby={`${idPrefix}-tab-${index}`}
            tabIndex={0}
            hidden={activeStep !== index}
            className="construction-process__panel"
          >
            <div>
              <h3>{step.heading}</h3>
              <p>{step.description}</p>
            </div>
            <ul role="list">
              {step.focus.map((item) => <li key={item}><Check size={18} aria-hidden="true" /><span>{item}</span></li>)}
            </ul>
          </div>
        ))}
      </Container>
    </section>
  )
}

export default ConstructionProcess