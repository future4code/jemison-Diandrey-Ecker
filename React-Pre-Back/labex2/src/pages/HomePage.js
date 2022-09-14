import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => navigate('/list')}> Lista de Viagens </button>
      <button onClick={() => navigate('/admin')}> Area do Administrador </button>
    </div>
  )
}

export default HomePage;