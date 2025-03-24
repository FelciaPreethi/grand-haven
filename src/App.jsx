import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import SignupPage from "./pages/SignupPage/SignupPage.jsx";
import BookingPage from "./pages/BookingPage/BookingPage.jsx";
import Header from "./components/Header/Header.jsx";
import { useState } from "react";
import Reservation from "./pages/ReservationPage/Reservation.jsx";
import MembershipPage from "./pages/MembershipPage/Membership.jsx";
import AdminLogin from "./pages/AdminLogin/AdminLogin.jsx";
import AdminView from "./pages/AdminView/AdminView.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const [guestCount, setGuestCount] = useState(2);
  const [date, setDate] = useState();
  const [bookingDetails, setBookingDetails] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedPage, setSelectedPage] = useState("Home");

  return (
    <>
      <BrowserRouter>
        <Header
          date={date}
          setDate={setDate}
          guestCount={guestCount}
          setGuestCount={setGuestCount}
          isLoggedIn={isLoggedIn}
          selectedPage={selectedPage}
        />
        <Routes>
          <Route
            path="/"
            element={<HomePage setSelectedPage={setSelectedPage} />}
          />
          <Route
            path="/user/login"
            element={
              <LoginPage
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setSelectedPage={setSelectedPage}
              />
            }
          />
          <Route
            path="/user/signup"
            element={<SignupPage setSelectedPage={setSelectedPage} />}
          />
          <Route
            path="/membership"
            element={
              <MembershipPage
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setSelectedPage={setSelectedPage}
              />
            }
          />
          <Route
            path="/booking"
            element={
              <BookingPage
                date={date}
                setDate={setDate}
                guestCount={guestCount}
                setGuestCount={setGuestCount}
                setBookingDetails={setBookingDetails}
                setSelectedPage={setSelectedPage}
              />
            }
          />
          <Route
            path="/reservation"
            element={
              <Reservation
                date={date}
                guestCount={guestCount}
                bookingDetails={bookingDetails}
                setSelectedPage={setSelectedPage}
              />
            }
          />
          <Route
            path="/admin/login"
            element={<AdminLogin />}
            setSelectedPage={setSelectedPage}
          />
          <Route
            path="/admin/viewdetails"
            element={<AdminView />}
            setSelectedPage={setSelectedPage}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
