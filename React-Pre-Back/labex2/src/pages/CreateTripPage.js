import React from 'react'
import { useNavigate } from 'react-router-dom'
import useProtectedPage from '../hook/useProtectedPage';

const CreateTripPage = () => {
  useProtectedPage()

  const navigate = useNavigate();
  return (
    <div>
      <h1>Create Trip Page</h1>
      <button onClick={() => navigate(-1)}> Voltar </button>
      <button onClick={() => navigate('/create')}> Criar </button>
    </div>
  )
}

export default CreateTripPage