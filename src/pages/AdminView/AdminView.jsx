import axios from "axios";
import { useEffect, useState } from "react";
import "./AdminView.scss";
import * as utils from "../../utils/utils.js";

function AdminView() {
  const backendurl = "http://localhost:8080";
  const [bookingData, setBookingData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const [filters, setFilters] = useState({
    room_id: "",
    check_in_date: "",
    email: "",
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  async function loadAdmindata() {
    const response = await axios.get(backendurl + "/admin/view");
    const data = response.data.sort((a, b) => {
      return a.room_id - b.room_id;
    });
    setBookingData(data);
    setFilteredData(data);
  }

  useEffect(() => {
    loadAdmindata();
  }, []);

  function handleFilter() {
    const filteredBookings = bookingData.filter(
      (booking) =>
        (!filters.room_id ||
          booking.room_id.toString().includes(filters.room_id)) &&
        (!filters.check_in_date ||
          utils.formatDate(new Date(booking.check_in_date)) ===
            filters.check_in_date) &&
        (!filters.email ||
          booking.email.toLowerCase().includes(filters.email.toLowerCase()))
    );
    setFilteredData(filteredBookings);
  }

  function handleClear() {
    setFilteredData(bookingData);
  }

  if (bookingData === null) {
    return <p>Loading!!!</p>;
  }

  return (
    <div className="admin-view">
      <h1 className="admin__title">Booking Details</h1>
      <div className="filters">
        <h2 className="filters__title">Filter Bookings</h2>

        <input
          type="text"
          name="room_id"
          placeholder="Room Number"
          className="filters__input"
          onChange={handleFilterChange}
        />
        <input
          type="date"
          name="check_in_date"
          className="filters__input"
          onChange={handleFilterChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="filters__input"
          onChange={handleFilterChange}
        />
        <p className="filters__button" onClick={handleFilter}>
          Filter
        </p>
        <p className="filters__button" onClick={handleClear}>
          Clear
        </p>
      </div>
      <div className="admin-view__content">
        {filteredData.map((booking) => (
          <div key={booking.booking_id}>
            <ul
              className="admin__list"
              onClick={() => setSelectedBooking(booking)}
            >
              <li className="admin__item">
                <span>Room ID:</span> {booking.room_id}
              </li>
              <li>
                <span>Check-In Date:</span>{" "}
                {new Date(booking.check_in_date).toDateString()}
              </li>
              <li>
                <span>Check-Out Date:</span>{" "}
                {new Date(booking.check_out_date).toDateString()}
              </li>
              <li>
                <span>Total Price:</span> {booking.total_price}
              </li>
              <li>
                <span>Status:</span> {booking.status}
              </li>
              <li>
                <span>Email:</span> {booking.email}
              </li>
              <li>
                <span>Room Type:</span> {booking.type_name}
              </li>
            </ul>
            {selectedBooking && (
              <div
                className="modal-overlay"
                onClick={() => setSelectedBooking(null)}
              >
                <div
                  className="modal-dialog"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3>Booking Details</h3>
                  <p>
                    <span>Booking ID:</span> {selectedBooking.booking_id}
                  </p>
                  <p>
                    <span>Room ID:</span> {selectedBooking.room_id}
                  </p>
                  <p>
                    <span>Check-in Date:</span>{" "}
                    {utils.formatDateInWords(selectedBooking.check_in_date)}
                  </p>
                  <p>
                    <span>Check-out Date:</span>{" "}
                    {utils.formatDateInWords(selectedBooking.check_out_date)}
                  </p>
                  <p>
                    <span>Status:</span> {selectedBooking.status}
                  </p>
                  <p>
                    <span>Email:</span> {selectedBooking.email}
                  </p>
                  <p>
                    <span>Total Price:</span> {selectedBooking.total_price}
                  </p>
                  <p>
                    <span>Type Name:</span> {selectedBooking.type_name}
                  </p>
                  <p>
                    <span>Created At:</span> {selectedBooking.created_at}
                  </p>
                  <p>
                    <span>Updated At:</span> {selectedBooking.updated_at}
                  </p>
                  <div className="details-container">
                    {Object.entries(selectedBooking.details).map(
                      ([key, value]) =>
                        key !== "additionalGuest" ? (
                          <p key={key}>
                            <span>{key}:</span> {value}
                          </p>
                        ) : (
                          ""
                        )
                    )}
                  </div>
                  <button
                    onClick={() => setSelectedBooking(null)}
                    className="admin__close-button"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminView;
