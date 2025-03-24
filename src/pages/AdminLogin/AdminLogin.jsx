import React from "react";
import { useState } from "react";
import "../LoginPage/LoginPage.scss";
import "../SignupPage/SignupPage.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const backendurl = "http://localhost:8080";
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post(backendurl + "/admin/login", {
        email: email,
        password: password,
      });
      if (response.status === 200) {
        console.log(response);

        alert("Login successful");
        navigate("/admin/viewdetails");
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
    </main>
  );
}

export default AdminLogin;
