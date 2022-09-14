import React from 'react'
import { useNavigate } from 'react-router-dom'

const ListTripsPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>List Trips Page</h1>
      <button onClick={() => navigate('/application')}>Inscrever-se</button>
      <button onClick={() => navigate(-1)}>Voltar</button>
    </div>
  )
}

export default ListTripsPage