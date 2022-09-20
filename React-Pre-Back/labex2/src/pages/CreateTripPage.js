import React from 'react'
import { useNavigate } from 'react-router-dom'
import useProtectedPage from '../hook/useProtectedPage';
import { Button } from '@chakra-ui/react'
import { BackgroundContainer, FormContainer } from '../GlobalStyle';

const CreateTripPage = () => {
    useProtectedPage()

  const navigate = useNavigate();

  return (
    <BackgroundContainer>
      <FormContainer>
        <h1>Create Trip Page</h1>
        <Button variant='outline' onClick={() => navigate(-1)}> Voltar </Button>
        <Button variant='outline' onClick={() => navigate('/create')}> Criar </Button>
      </FormContainer>
    </BackgroundContainer>
  )
}

export default CreateTripPage