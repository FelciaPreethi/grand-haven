import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Membership.scss";
import { useNavigate } from "react-router-dom";
import "../../components/LogOutModal/LogOutModal.jsx";

function MembershipPage({ setIsLoggedIn, setSelectedPage }) {
  const backendurl = "http://localhost:8080";
  const token = localStorage.getItem("token");
  const [bookingDetails, setBookingDetails] = useState(null);
  const [rerender, setRerender] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {}, [rerender]);

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

  async function handleCancelBooking(details) {
    console.log(details);
    const response = await axios.delete(backendurl + "/user/cancelbooking/", {
      data: { booking_id: details.booking_id },
    });

    setRerender(!rerender);
  }

  async function handleLogOut() {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  }

  useEffect(() => {
    getBookingDetails();
    setSelectedPage("Membership");
  }, []);

  if (bookingDetails === null) {
    return <p>Loading..</p>;
  }

  return (
    <div className="membership-section">
      <header className="membership-header">
        <h1>Welcome {localStorage.getItem("Username")},</h1>
        <p className="logout-button" onClick={handleLogOut}>
          LogOut
        </p>
      </header>
      <div className="booking__display">
        {bookingDetails.map((details, index) => {
          return (
            <section className="booking-section">
              <ul className="booking__history" key={index}>
                {Object.entries(details).map(([key, value]) =>
                  key !== "booking_id" ? (
                    <li key={key} className="details__item">
                      <span>
                        <strong>{key}</strong>
                      </span>{" "}
                      <span>{value}</span>
                    </li>
                  ) : (
                    ""
                  )
                )}
                <li
                  className="cancel-button"
                  onClick={() => {
                    handleCancelBooking(details);
                  }}
                >
                  Cancel Booking
                </li>
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default MembershipPage;
