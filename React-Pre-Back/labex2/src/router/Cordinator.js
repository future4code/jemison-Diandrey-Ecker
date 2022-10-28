import { useNavigate } from "react-router-dom";

export const Cordinator = () => {
    const navigate = useNavigate();

    const goToCreateTrip = () => {
      navigate("/admin/trips/create")
    }

    const goToTripDetails = (id) => {
      navigate(`/admin/trips/${id}`)
    }

    const goToLogin = () => {
      navigate("/login")
    }

    const goToHomePage = () => {
      navigate("/")
    }

    const goToListTripsPage = () => {
      navigate("/trips/list")
    }

    const goToAdminHome = () => {
      navigate("/admin/trips/list")
    }

    const goToApplicationFormPage = () => {
      navigate('/trips/application')
    }

    return {
        goToCreateTrip,
        goToTripDetails,
        goToLogin,
        goToHomePage,
        goToListTripsPage,
        goToAdminHome,
        goToApplicationFormPage,
    }
}