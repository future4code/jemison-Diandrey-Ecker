import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate();

  const listTripPage = () => {
    navigate("/list-trip-page")
  }

  const adminHomePage = () => {
    navigate('/admin')
  }

  return (
    <section>
      <h1>Home Page</h1>
      <button OnClick={ listTripPage }>Lista de Viagem</button>
      <button OnClick={ adminHomePage }>Pagina de Administrador</button>
    </section>
  )
}

export default HomePage