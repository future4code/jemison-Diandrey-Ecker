import React from 'react'
import { useNavigate } from 'react-router-dom'
import useProtectedPage from '../hook/useProtectedPage';
import { Button } from '@chakra-ui/react'
import { BackgroundContainer, FormContainer } from '../GlobalStyle';

const AdminHomePage = () => {
  const navigate = useNavigate();

  useProtectedPage()

  return (
    <BackgroundContainer>
      <FormContainer>
        <h1>Admin Home Page</h1>
        <Button variant='outline' onClick={() => navigate(-1)}>Area do Administrador</Button>
        <Button variant='outline' onClick={() => navigate('/create')}>Criar Viagem</Button>
        <Button variant='outline' onClick={() => navigate('/login')}> Logout </Button>
      </FormContainer>
    </BackgroundContainer>
  )
}

export default AdminHomePage;