import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { BASE_URL } from '../constants/constants'
import useProtectedPage from '../hook/useProtectedPage'
import { BackgroundContainer, FormContainer } from '../GlobalStyle'

const TripDetailsPage = () => {

  useProtectedPage()

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get(`${BASE_URL}trip/NoIFVcOiSgTKTIPVZwXS`,
      {
        headers: {
          Authorization: token
        }
      }).then((response) => {
        console.log(response.data)
      }).catch((error) => {
        console.log("Deu erro:", error.response)
      })
  }, [])

  return (
    <BackgroundContainer>
      <FormContainer>
          <h1>Trip Details Page</h1>
      </FormContainer>
    </BackgroundContainer>
  )
}

export default TripDetailsPage;