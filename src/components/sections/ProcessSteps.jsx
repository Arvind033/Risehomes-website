import { useId, useRef, useState } from 'react'
import Container from '../common/Container.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import { processSteps } from '../../data/home.js'

function ProcessSteps() {
  const [activeStep, setActiveStep] = useState(0)
  const tabRefs = useRef([])
  const idPrefix = useId()

  function handleKeyDown(event, index) {
    const destinations = {
      ArrowRight: (index + 1) % processSteps.length,
      ArrowLeft: (index - 1 + processSteps.length) % processSteps.length,
      Home: 0,
      End: processSteps.length - 1,
    }
    const nextIndex = destinations[event.key]
    if (nextIndex === undefined) return
    event.preventDefault()
    setActiveStep(nextIndex)
    tabRefs.current[nextIndex]?.focus()
  }

  return (
    <section id="our-process" className="home-section home-process" aria-labelledby="process-heading">
      <Container>
        <div className="home-section-heading process-heading">
          <div>
            <p className="eyebrow">A considered journey</p>
            <SectionHeading id="process-heading" title="From first thoughts to front-door keys." />
          </div>
          <p className="section-introduction">A clear path, with space for your questions and decisions along the way.</p>
        </div>
        <div className="process-tabs" role="tablist" aria-label="Our project process">
          {processSteps.map((step, index) => (
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
              <span className="process-tab__number">{String(index + 1).padStart(2, '0')}</span>
              <span>{step.title}</span>
            </button>
          ))}
        </div>
        {processSteps.map((step, index) => (
          <div
            key={step.title}
            id={`${idPrefix}-panel-${index}`}
            role="tabpanel"
            aria-labelledby={`${idPrefix}-tab-${index}`}
            tabIndex={0}
            hidden={activeStep !== index}
            className="process-panel"
          >
            <div>
              <h3>{step.heading}</h3>
              <p>{step.description}</p>
            </div>
            <ul role="list">
              {step.focus.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </Container>
    </section>
  )
}

export default ProcessSteps