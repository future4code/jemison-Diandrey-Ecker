import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className='main-container'>
      <h1>Página de Login</h1>
      <form id='login-page'>
        <div className='fullbox'>
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" id="email" placeholder='Digite seu e-mail' />
        </div>
        <div className='fullbox'>
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" id="password" placeholder='Digite sua senha' />
        </div>
        <div className='fullbox'>
          <input type="submit" id='btn-submit' value='Entrar' />
          <input type="submit" id='btn-submit' value='Voltar' />
        </div>
      </form>
    </div>
  )
}

export default LoginPage