import axios from "axios";
import { useEffect, useState } from "react";

function AdminView() {
  const backendurl = "http://localhost:8080";
  const [bookingData, setBookingData] = useState(null);

  async function loadAdmindata() {
    const response = await axios.get(backendurl + "/admin/view");
    setBookingData(response.data);
    console.log(response);
  }

  useEffect(() => {
    loadAdmindata();
  }, []);

  if (bookingData === null) {
    return <p>Loading!!!</p>;
  }

  return (
    <div>
      <div>
        <h1>Booking Details</h1>
        <div>
          {bookingData.map((booking) => (
            <div
              key={booking.booking_id}
              style={{
                border: "1px solid #ccc",
                margin: "10px 0",
                padding: "10px",
              }}
            >
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>
                  <strong>Room ID:</strong> {booking.room_id}
                </li>
                <li>
                  <strong>Check-In Date:</strong>{" "}
                  {new Date(booking.check_in_date).toLocaleString()}
                </li>
                <li>
                  <strong>Check-Out Date:</strong>{" "}
                  {new Date(booking.check_out_date).toLocaleString()}
                </li>
                <li>
                  <strong>Total Price:</strong> {booking.total_price}
                </li>
                <li>
                  <strong>Status:</strong> {booking.status}
                </li>
                <li>
                  <strong>Email:</strong> {booking.email}
                </li>
                <li>
                  <strong>Room Type:</strong> {booking.type_name}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminView;
