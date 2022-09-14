import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={() => navigate('/')}> Voltar </button>
      <button onClick={() => navigate('/admin')}> Entrar </button>
    </div>
  )
}

export default LoginPage