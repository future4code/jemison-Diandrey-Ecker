import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import { BackgroundContainer, FormContainer } from '../GlobalStyle';

function HomePage() {
  const navigate = useNavigate();

  return (

    <BackgroundContainer>
      <FormContainer>
        <form>
          <h1>Home Page</h1>
          <Button variant='outline' onClick={() => navigate('trips/list')}> Lista de Viagens </Button>
          <Button variant='outline' onClick={() => navigate('/login')}> Área do Administrador </Button>
        </form>
      </FormContainer>
    </BackgroundContainer>
  )
}

export default HomePage;