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
      const response = await axios.post(backendurl + "/admin/signup", {
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
    <main>
      <form className="loginform" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="NAME"
          onChange={(event) => {
            setName(event.target.value);
          }}
          value={name}
          className="loginform__input"
        />
        <input
          type="email"
          name="email"
          placeholder="EMAIL"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email}
          className="loginform__input"
        />
        <input
          type="password"
          name="password"
          placeholder="PASSWORD"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          value={password}
          className="loginform__input"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="CONFIRM PASSWORD"
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
          value={confirmPassword}
          className="loginform__input"
        />
        <button type="submit" className="loginform__button">
          SIGN UP
        </button>
      </form>
    </main>
  );
}

export default SignupPage;
