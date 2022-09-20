import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import { BackgroundContainer, FormContainer } from '../GlobalStyle'

const ApplicationFormPage = () => {
  const navigate = useNavigate();

  return (
    <BackgroundContainer>
      <FormContainer>
        <h1>Application Form Page</h1>
        <Button variant='outline' onClick={() => navigate(-1)}> Voltar </Button>
        <Button variant='outline' onClick={() => navigate('/application')}> Enviar </Button>
      </FormContainer>
    </BackgroundContainer>
  )
}

export default ApplicationFormPage;