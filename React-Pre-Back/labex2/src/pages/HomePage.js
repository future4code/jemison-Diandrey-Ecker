import React from 'react'
import { Button } from '@chakra-ui/react'
import { BackgroundContainer, FormContainer } from '../GlobalStyle';
import { Cordinator } from '../router/Cordinator';

export const HomePage = () => {
  const { goToListTripsPage } = Cordinator();
  const { goToLogin } = Cordinator();

  return (

    <BackgroundContainer>
      <FormContainer>
        <form>
          <h1>Home Page</h1>
          <Button variant='outline' onClick={() => goToListTripsPage()}> Lista de Viagens </Button>
          <Button variant='outline' onClick={() => goToLogin()}> Área do Administrador </Button>
        </form>
      </FormContainer>
    </BackgroundContainer>
  )
}