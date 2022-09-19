import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { BASE_URL } from '../constants/constants'
import useProtectedPage from '../hook/useProtectedPage'

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
    <div>

    </div>
  )
}

export default TripDetailsPage;