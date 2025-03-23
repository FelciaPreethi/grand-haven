import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import "./Bookings.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";

// Required for screen readers (accessibility)
Modal.setAppElement("#root");

function Bookings({ date, setDate, guestCount, setGuestCount, buttonName }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event) => {
    const newCount = event.target.value;
    if (newCount !== "" || !isNaN(newCount)) {
      setGuestCount(parseInt(newCount));
    }
  };

  return (
    <div className={`delete ${isOpen ? "blurred" : ""}`}>
      <div onClick={() => setIsOpen(true)} className="open-modal">
        {buttonName}
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className="bookings__modal"
        overlayClassName="overlay"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="close__icon"
          onClick={() => setIsOpen(false)}
        >
          <path
            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            fill="#13182C"
          />
        </svg>
        <h1 className="bookings__title">Enter Booking Details</h1>
        <div className="bookings-input">
          <h3 className="bookings-input__title">CHECK-IN / CHECK-OUT</h3>
          <Calendar
            onChange={setDate}
            value={date}
            allowPartialRange={true}
            selectRange={true}
            minDate={new Date()}
          />
        </div>
        <div className="bookings-input">
          <h3 className="bookings-input__title">GUESTS</h3>
          <button
            onClick={() => setGuestCount(guestCount - 1)}
            className="bookings-input__button"
          >
            -
          </button>
          <input
            type="number"
            value={guestCount}
            onChange={handleChange}
            className="bookings-input__guests"
          />
          <button
            onClick={() => setGuestCount(guestCount + 1)}
            className="bookings-input__button"
          >
            +
          </button>
        </div>
        <div onClick={() => setIsOpen(false)}>
          <Link to="/booking" className="bookings__button-link">
            <div className="bookings__button-item">Check Availability</div>
          </Link>
        </div>
      </Modal>
    </div>
  );
}

export default Bookings;
