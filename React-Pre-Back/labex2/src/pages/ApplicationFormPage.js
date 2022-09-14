import React from 'react'
import { useNavigate } from 'react-router-dom'

const ApplicationFormPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Application Form Page</h1>
      <button onClick={() => navigate(-1)}> Voltar </button>
      <button onClick={() => navigate('/application')}> Enviar </button>

    </div>
  )
}

export default ApplicationFormPage