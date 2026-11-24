import { useOutletContext } from 'react-router-dom'
import Button from './Button.jsx'

function ConsultationButton({ children, service = '', ...props }) {
  const openConsultation = useOutletContext()?.openConsultation

  return (
    <Button
      {...props}
      to={openConsultation ? undefined : '/contact'}
      onClick={openConsultation ? () => openConsultation(service) : undefined}
    >
      {children}
    </Button>
  )
}

export default ConsultationButton