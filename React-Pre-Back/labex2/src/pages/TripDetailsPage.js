import React from 'react'
import { useNavigate } from 'react-router-dom';

const TripDetailsPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Trip Details Page</h1>
      <button onClick={() => navigate(-1)}> Voltar </button>
      <button onClick={() => navigate("/Application")}>Inscrever-se</button>
    </div>
  )
}

export default TripDetailsPage;