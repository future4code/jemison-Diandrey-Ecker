import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './HomePage';
import AdminHomePage from './AdminHomePage'
import ApplicationFormPage from './ApplicationFormPage'
import CreateTripPage from './CreateTripPage'
import ListTripsPage from './ListTripsPage'
import LoginPage from './LoginPage'
import TripDetailsPage from './TripDetailsPage'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={ <HomePage />} />
            <Route path="/admin" element={ <AdminHomePage /> } />
            <Route path="/form-page" element ={ <ApplicationFormPage /> } />
            <Route path="/create-trip-page" element={ <CreateTripPage /> } />
            <Route path="/list-trip-page" element={ <ListTripsPage /> } />
            <Route path="/login-page" element={ <LoginPage /> } />
            <Route path="/trip-details-page" element={ <TripDetailsPage /> } />
        </Routes>
    </BrowserRouter>
  );
}

export default Router;