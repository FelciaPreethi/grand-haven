import Bookings from "../Bookings/Bookings";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header({ date, setDate, guestCount, setGuestCount }) {
  return (
    <header className="header">
      <img
        src="/src/assets/logo/hotel-logo.jpg"
        alt="Logo"
        className="header__logo"
      ></img>
      <nav className="header__nav">
        <p className="nav__rooms">Rooms</p>
        <Bookings
          date={date}
          setDate={setDate}
          guestCount={guestCount}
          setGuestCount={setGuestCount}
        />
      </nav>
      {/* <Link to="/login">
        <div className="login">
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            className="login__icon"
          >
            <path
              d="m 8 1 c -1.65625 0 -3 1.34375 -3 3 s 1.34375 3 3 3 s 3 -1.34375 3 -3 s -1.34375 -3 -3 -3 z m -1.5 7 c -2.492188 0 -4.5 2.007812 -4.5 4.5 v 0.5 c 0 1.109375 0.890625 2 2 2 h 8 c 1.109375 0 2 -0.890625 2 -2 v -0.5 c 0 -2.492188 -2.007812 -4.5 -4.5 -4.5 z m 0 0"
              fill="#2e3436"
            />
          </svg>
        </div>
      </Link> */}
    </header>
  );
}

export default Header;
