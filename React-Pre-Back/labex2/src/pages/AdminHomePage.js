import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminHomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Admin Home Page</h1>
      <button onClick={() => navigate(-1)}>Area do Administrador</button>
      <button onClick={() => navigate('/create')}>Criar Viagem</button>
      <button onClick={() => navigate('/login')}> Logout </button>
    </div>
  )
}

export default AdminHomePage;