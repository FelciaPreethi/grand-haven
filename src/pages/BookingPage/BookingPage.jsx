import { useEffect, useState } from "react";
import axios from "axios";
import "./BookingsPage.scss";
import RoomData from "../../components/RoomData/RoomData.jsx";
import * as utils from "../../utils/utils.js";
import Bookings from "../../components/Bookings/Bookings.jsx";

function BookingPage({
  setDate,
  date,
  guestCount,
  setGuestCount,
  setBookingDetails,
  setSelectedPage,
}) {
  const [roomsData, setRoomsData] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const backendurl = import.meta.env.VITE_BACKEND_URL;

  if (!date) {
    date = [new Date()];
  }
  const checkin = utils.formatDate(date[0]);
  const checkout =
    date[1] !== null ? utils.formatDate(date[1]) : utils.formatDate(date[0]);

  async function getBookingDate() {
    const requestObj = {
      inDate: checkin,
      outDate: checkout,
      guestCount: guestCount,
    };

    const response = await axios.post(
      backendurl + "/guest/checkavailability",
      requestObj
    );
    setRoomsData(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    setSelectedPage("Bookings");
    getBookingDate();
  }, []);

  useEffect(() => {
    if (roomsData != null) {
      const nights =
        utils.getDaysBetween(checkin, checkout) === 0
          ? 1
          : utils.getDaysBetween(checkin, checkout);

      function getPrice() {
        let result = 0;
        roomsData.forEach((rooms) => {
          if (rooms.type_name === selectedRoom) {
            result = rooms.price_per_night;
          }
        });
        return parseInt(result);
      }

      const bookingDetails = {
        Arrival: checkin,
        Departure: checkout,
        Nights: nights,
        Rooms: 1,
        Guests: guestCount,
        Suite: selectedRoom,
        "Reservation Total": nights * getPrice(),
      };

      setBookingDetails(bookingDetails);
    }
  }, [selectedRoom]);

  if (roomsData === null) {
    return <div>Loading!!</div>;
  }

  return (
    <>
      <div className="available__header">
        <p className="available__header-title">Showing Availability for</p>
        <div className="available__info">
          <p>{utils.formatDateInWords(checkin)}</p>
          <svg
            width="24px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="available__header-icon"
          >
            <path
              d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
              fill="#0097b2"
            />
          </svg>
          <p>{utils.formatDateInWords(checkout)}</p>
          <Bookings
            date={date[0]}
            setDate={setDate}
            guestCount={guestCount}
            setGuestCount={setGuestCount}
            buttonName={"change"}
          />
        </div>
      </div>
      <div className="available__data">
        {roomsData.map((room, index) => {
          return (
            <RoomData
              roomdata={room}
              key={index}
              setSelectedRoom={setSelectedRoom}
            />
          );
        })}
      </div>
    </>
  );
}

export default BookingPage;
