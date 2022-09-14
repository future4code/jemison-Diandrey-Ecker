import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import AdminHomePage from './pages/AdminHomePage';
import ApplicationFormPage from './pages/ApplicationFormPage'
import CreateTripPage from './pages/CreateTripPage';
import ListTripsPage from './pages/ListTripsPage';
import LoginPage from './pages/LoginPage';
import TripDetailsPage from './pages/TripDetailsPage';
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminHomePage />} />
          <Route path="/application" element={<ApplicationFormPage />} />
          <Route path="/create" element={<CreateTripPage />} />
          <Route path="/list" element={<ListTripsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/trips" element={<TripDetailsPage />} />
        </Routes>
      </Router>
      <GlobalStyle />
    </div>
  );
}

export default App;