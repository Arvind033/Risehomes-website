import { useId } from 'react'
import { Minus, Plus } from 'lucide-react'

function ConstructionAccordion({ items, numbered = false }) {
  const groupName = useId()

  return (
    <div className={`construction-accordion${numbered ? ' construction-accordion--numbered' : ''}`}>
      {items.map((item, index) => (
        <details key={item.title} name={groupName}>
          <summary>
            {numbered && <span className="construction-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>}
            <span>{item.title}</span>
            <span className="construction-accordion__toggle" aria-hidden="true">
              <Plus className="construction-accordion__expand" size={20} />
              <Minus className="construction-accordion__collapse" size={20} />
            </span>
          </summary>
          <div className="construction-accordion__answer"><p>{item.description}</p></div>
        </details>
      ))}
    </div>
  )
}

export default ConstructionAccordion