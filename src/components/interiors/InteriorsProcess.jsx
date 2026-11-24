import { useId, useRef, useState } from 'react'
import { Check } from 'lucide-react'
import Container from '../common/Container.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import { interiorProcess } from '../../data/interiors.js'

function InteriorsProcess() {
  const [activeStep, setActiveStep] = useState(0)
  const tabRefs = useRef([])
  const idPrefix = useId()

  function handleKeyDown(event, index) {
    const destinations = {
      ArrowRight: (index + 1) % interiorProcess.length,
      ArrowLeft: (index - 1 + interiorProcess.length) % interiorProcess.length,
      Home: 0,
      End: interiorProcess.length - 1,
    }
    const nextIndex = destinations[event.key]
    if (nextIndex === undefined) return
    event.preventDefault()
    setActiveStep(nextIndex)
    tabRefs.current[nextIndex]?.focus()
  }

  return (
    <section className="interiors-section interiors-process" aria-labelledby="interiors-process-heading">
      <Container>
        <div className="interiors-section-heading interiors-process__heading">
          <div>
            <p className="interiors-eyebrow">Our process</p>
            <SectionHeading id="interiors-process-heading" title="A clearer way to create your space." />
          </div>
          <p className="interiors-introduction">A considered journey, shaped around your space and agreed scope.</p>
        </div>
        <div className="interiors-process__tabs" role="tablist" aria-label="Our interiors process">
          {interiorProcess.map((step, index) => (
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
              <span className="interiors-process__number">{String(index + 1).padStart(2, '0')}</span>
              <span>{step.title}</span>
            </button>
          ))}
        </div>
        {interiorProcess.map((step, index) => (
          <div
            key={step.title}
            id={`${idPrefix}-panel-${index}`}
            role="tabpanel"
            aria-labelledby={`${idPrefix}-tab-${index}`}
            tabIndex={0}
            hidden={activeStep !== index}
            className="interiors-process__panel"
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

export default InteriorsProcess