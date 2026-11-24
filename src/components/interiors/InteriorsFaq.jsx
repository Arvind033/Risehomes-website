import { useId } from 'react'
import { Minus, Plus } from 'lucide-react'
import { interiorFaqs } from '../../data/interiors.js'

function InteriorsFaq() {
  const groupName = useId()

  return (
    <div className="interiors-faq__list">
      {interiorFaqs.map((faq) => (
        <details key={faq.question} name={groupName}>
          <summary>
            <span>{faq.question}</span>
            <span className="interiors-faq__toggle" aria-hidden="true">
              <Plus className="interiors-faq__expand" size={20} />
              <Minus className="interiors-faq__collapse" size={20} />
            </span>
          </summary>
          <div className="interiors-faq__answer"><p>{faq.answer}</p></div>
        </details>
      ))}
    </div>
  )
}

export default InteriorsFaq