import React from "react";
import { useState } from "react";
import "../LoginPage/LoginPage.scss";
import { Link, useNavigate } from "react-router-dom";
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
    <main>
      <form className="loginform" onSubmit={handleSubmit}>
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
        <button type="submit" className="loginform__button">
          LOG IN
        </button>
      </form>
    </main>
  );
}

export default AdminLogin;
