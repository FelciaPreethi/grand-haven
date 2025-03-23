import Bookings from "../Bookings/Bookings";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header({ date, setDate, guestCount, setGuestCount, isLoggedIn }) {
  return (
    <header className="header">
      <Link className="header__link" to="/">
        <img
          src="/src/assets/logo/hotel-logo.jpg"
          alt="Logo"
          className="header__logo"
        ></img>
      </Link>

      <nav className="header__nav">
        <Link
          className="header__nav-link"
          to={isLoggedIn ? "/membership" : "/user/login"}
        >
          <p className="nav__rooms">Membership</p>
        </Link>

        <Bookings
          date={date}
          setDate={setDate}
          guestCount={guestCount}
          setGuestCount={setGuestCount}
          buttonName={"Bookings"}
        />
      </nav>
    </header>
  );
}

export default Header;
