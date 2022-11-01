import React from 'react'
import { useNavigate } from 'react-router-dom'

const ListTripsPage = () => {
  const navigate = useNavigate();

  const applicationFormPage = () => {
    navigate('/form-page')
  }

  return (
    <section>
      <h1>Lista de Viagem</h1>
      <button OnClick={ applicationFormPage }>Formulário de Inscrição</button>
    </section>
  )
}

export default ListTripsPage