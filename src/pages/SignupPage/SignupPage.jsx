import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../LoginPage/LoginPage.scss";

function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const backendurl = "http://localhost:8080";

  async function handleSubmit(event) {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const response = await axios.post(backendurl + "/user/signup", {
        username: name,
        email: email,
        password: password,
      });
      if (response.status !== 200) {
        alert("Registeration successful");
        navigate("/");
      } else {
        alert("Please try again");
      }
    } catch (err) {
      alert("Error in signing up. Please try after frew minutes!!");
    }
  }

  return (
    <main className="loginpage">
      <form className="loginform signupform" onSubmit={handleSubmit}>
        <div class="input-group">
          <label htmlFor="username" class="input-group__label">
            USERNAME
          </label>
          <input
            type="text"
            name="name"
            onChange={(event) => {
              setName(event.target.value);
            }}
            value={name}
            className="input-group__input"
          />
        </div>
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
        <div class="input-group">
          <label htmlFor="password" class="input-group__label">
            PASSWORD
          </label>
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
        <div class="input-group">
          <label htmlFor="confirmpassword" class="input-group__label">
            CONFIRM PASSWORD
          </label>
          <input
            type="password"
            name="confirmPassword"
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}
            value={confirmPassword}
            className="input-group__input"
          />
        </div>
        <button type="submit" className="loginform__button">
          SIGN UP
        </button>
      </form>
    </main>
  );
}

export default SignupPage;
