import { useState } from "react";
import "./LoginPage.scss";
import "../SignupPage/SignupPage.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const backendurl = "http://localhost:8080";
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post(backendurl + "/user/login", {
        email: email,
        password: password,
      });
      if (response.status === 200) {
        console.log(response);
        localStorage.setItem("jwtToken", response.data.token);
        localStorage.setItem("Username", response.data.username);
        localStorage.setItem("email", response.data.email);

        alert("Login successful");
        setIsLoggedIn(true);
        navigate("/membership");
      } else {
        alert("Please try again");
      }
    } catch (err) {
      console.log(err);
      alert("Error Logging in. Please try after frew minutes!!");
    }
  }

  return (
    <main className="loginpage">
      <form className="loginform" onSubmit={handleSubmit}>
        <div class="input-group">
          <label htmlFor="email" class="input-group__label">
            EMAIL
          </label>
          <input
            type="email"
            name="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
            className="input-group__input"
          />
        </div>
        <div className="input-group">
          <label className="input-group__label">PASSWORD</label>
          <input
            type="password"
            name="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            value={password}
            className="input-group__input"
          />
        </div>

        <button type="submit" className="loginform__button">
          LOG IN
        </button>
      </form>

      <div className="signup">
        <p>Don't have an account yet.</p>
        <Link to="/user/signup">
          <p>SignUp</p>
        </Link>
      </div>
    </main>
  );
}

export default LoginPage;
