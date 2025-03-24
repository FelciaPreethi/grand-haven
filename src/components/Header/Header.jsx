import Bookings from "../Bookings/Bookings";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header({
  date,
  setDate,
  guestCount,
  setGuestCount,
  isLoggedIn,
  selectedPage,
}) {
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
        <div
          className={`header__nav-link${
            selectedPage === "Bookings" ? "--active" : ""
          }`}
        >
          <Bookings
            date={date}
            setDate={setDate}
            guestCount={guestCount}
            setGuestCount={setGuestCount}
            buttonName={"Bookings"}
          />
        </div>

        <Link
          className={`header__nav-link${
            selectedPage === "Membership" ? "--active" : ""
          }`}
          to={isLoggedIn ? "/membership" : "/user/login"}
        >
          <p className="nav__rooms">Membership</p>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
