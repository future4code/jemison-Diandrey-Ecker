import React from 'react'
import { useProtectedPage } from '../hook/useProtectedPage';
import { Button } from '@chakra-ui/react'
import { BackgroundContainer, FormContainer } from '../GlobalStyle';
import { Cordinator } from '../router/Cordinator';

export const AdminHomePage = () => {
  const { goToCreateTrip } = Cordinator();
  const { goToLogin } = Cordinator();

  useProtectedPage()

  return (
    <BackgroundContainer>
      <FormContainer>
        <h1>Admin Home Page</h1>
        {/* <Button variant='outline' onClick={() => navigate(-1)}>Area do Administrador</Button> */}
        <Button variant='outline' onClick={() => goToCreateTrip()}>Criar Viagem</Button>
        <Button variant='outline' onClick={() => goToLogin()}> Logout </Button>
      </FormContainer>
    </BackgroundContainer>
  )
}