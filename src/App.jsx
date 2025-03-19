import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import SignupPage from "./pages/SignupPage/SignupPage.jsx";
import BookingPage from "./pages/BookingPage/BookingPage.jsx";
import Header from "./components/Header/Header.jsx";
import { useState } from "react";

function App() {
  const [guestCount, setGuestCount] = useState(2);
  const [date, setDate] = useState(new Date());

  return (
    <>
      <BrowserRouter>
        <Header
          date={date}
          setDate={setDate}
          guestCount={guestCount}
          setGuestCount={setGuestCount}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/booking"
            element={<BookingPage date={date} guestCount={guestCount} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
