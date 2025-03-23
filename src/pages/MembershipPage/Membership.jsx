import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Membership.scss";
import { useNavigate } from "react-router-dom";
import "../../components/LogOutModal/LogOutModal.jsx";
import LogoutModal from "../../components/LogOutModal/LogOutModal.jsx";

function MembershipPage({ setIsLoggedIn }) {
  const backendurl = "http://localhost:8080";
  const token = localStorage.getItem("token");
  const [bookingDetails, setBookingDetails] = useState(null);
  const navigate = useNavigate();

  async function getBookingDetails() {
    const email = localStorage.getItem("email");
    const response = await axios.post(
      backendurl + "/user/getbookingdetails",
      { email: email },
      {
        headers: {
          Authorization: `Bearer ${token}`, // send token as auth header
        },
      }
    );
    setBookingDetails(response.data);
  }

  async function handleLogOut() {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  }

  useEffect(() => {
    getBookingDetails();
  }, []);

  if (bookingDetails === null) {
    return <p>Loading..</p>;
  }

  return (
    <div>
      <header className="membership-header">
        <h1>Welcome {localStorage.getItem("Username")},</h1>
        <p className="logout-button" onClick={handleLogOut}>
          LogOut
        </p>
      </header>
      {bookingDetails.map((details, index) => {
        return (
          <section className="bookings-sections">
            <ul className="booking__history" key={index}>
              {Object.entries(details).map(([key, value]) => (
                <li key={key} className="details__item">
                  <span>
                    <strong>{key}</strong>
                  </span>{" "}
                  <span>{value}</span>
                </li>
              ))}
              <li className="cancel-button">Cancel Booking</li>
            </ul>
          </section>
        );
      })}
    </div>
  );
}

export default MembershipPage;
