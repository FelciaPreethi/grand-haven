import { useEffect, useState } from "react";
import axios from "axios";
import "./BookingsPage.scss";
import RoomData from "../../components/RoomData/RoomData.jsx";
import * as utils from "../../utils/utils.js";

function BookingPage({ date, guestCount }) {
  const [roomsData, setRoomsData] = useState(null);
  const backendurl = import.meta.env.VITE_BACKEND_URL;

  async function getBookingDate() {
    const checkin = utils.formatDate(date[0]);
    const checkout =
      date[1] !== null ? utils.formatDate(date[1]) : utils.formatDate(date[0]);
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
    getBookingDate();
  }, []);

  if (roomsData === null) {
    return <div>Loading!!</div>;
  }

  return (
    <div className="available__data">
      {roomsData.map((room, index) => {
        return <RoomData roomdata={room} key={index} />;
      })}
    </div>
  );
}

export default BookingPage;
