import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRequestData } from '../hook/useRequestData';
import { BASE_URL } from '../constants/constants';

const ListTripsPage = () => {
  const navigate = useNavigate();

  const [data, isLoadingTrips, errorTrips] = useRequestData(`${BASE_URL}trips`)

  const listaDeData = data && data.trips && data.trips.map((viagem) => {
    return ( 
    <div key = {viagem.id}>
      <p> {viagem.name} </p>
    </div>
    
  )})

  return (
    
      <>
        {isLoadingTrips && <p> Carregando data</p>}
        {!isLoadingTrips && errorTrips && <p> Ocorreu um erro </p>}
        {!isLoadingTrips && data && data.trips && data.trips.length > 0 && listaDeData}
        {!isLoadingTrips && data && data.trips && data.trips.length === 0 && <p> Não há viagens </p>}

        <h1>List Trips Page</h1>
      <button onClick={() => navigate('/application')}>Inscrever-se</button>
      <button onClick={() => navigate(-1)}>Voltar</button>
      </>
  )
}

export default ListTripsPage