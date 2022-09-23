import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRequestData } from '../hook/useRequestData';
import { BASE_URL } from '../constants/Constants';
import { Button } from '@chakra-ui/react'
import { BackgroundContainer, FormContainer } from '../GlobalStyle';
import { Cordinator } from '../router/Cordinator';

export const ListTripsPage = () => {

  const { goToApplicationFormPage } = Cordinator();
  
  const navigate = useNavigate();

  const [data, isLoadingTrips, errorTrips] = useRequestData(`${BASE_URL}trips`)

  const listaDeData = data && data.trips && data.trips.map((viagem) => {
    return (
      <div key={viagem.id}>
        <p> {viagem.name} </p>
      </div>
   
    )
   
  })

  return (

    <BackgroundContainer>
      <FormContainer>
        {isLoadingTrips && <p> Carregando data</p>}
        {!isLoadingTrips && errorTrips && <p> Ocorreu um erro </p>}
        {!isLoadingTrips && data && data.trips && data.trips.length > 0 && listaDeData}
        {!isLoadingTrips && data && data.trips && data.trips.length === 0 && <p> Não há viagens </p>}
        <h1>List Trips Page</h1>
        <Button variant='outline' onClick={() => goToApplicationFormPage()}>Inscrever-se</Button>
        <Button variant='outline' onClick={() => navigate(-1)}>Voltar</Button>
      </FormContainer>
    </BackgroundContainer>
  )
}