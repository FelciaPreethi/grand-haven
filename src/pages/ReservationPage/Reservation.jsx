import { useEffect, useState } from "react";
import axios from "axios";
import BookingForm from "../../components/BookingForm/BookingForm";
import "./Reservation.scss";

function ReservationPage({ bookingDetails }) {
  const [reservationDetails, setReservationDetails] = useState(null);
  const backendurl = import.meta.env.VITE_BACKEND_URL;

  async function updateReservationDetails() {
    const requestObj = {
      inDate: bookingDetails.Arrival,
      outDate: bookingDetails.Departure,
      roomtype: bookingDetails.Suite,
      details: reservationDetails,
    };

    const response = await axios.post(
      backendurl + "/guest/bookrooms",
      requestObj
    );
  }

  useEffect(() => {
    if (reservationDetails === null) {
      return;
    }

    updateReservationDetails();
  }, [reservationDetails]);

  return (
    <div className="reservation">
      <article className="summary">
        <header className="summary__header">
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 10H21M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
              stroke="#000000"
            />
          </svg>
          SUMMARY
        </header>
        <div className="summary__content">
          <h3>GRAND HAVEN</h3>
          <ul className="summary__list">
            {Object.entries(bookingDetails).map(([key, value]) => (
              <li key={key} className="summary__item">
                <span>
                  <strong>{key}</strong>
                </span>{" "}
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
      <BookingForm setReservationDetails={setReservationDetails} />
    </div>
  );
}

export default ReservationPage;
