import { useState } from "react";
import "./LoginPage.scss";
import "../SignupPage/SignupPage.scss";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {}

  return (
    <main>
      <form className="loginform">
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
        <button
          type="submit"
          onSubmit={handleSubmit}
          className="loginform__button"
        >
          LOG IN
        </button>
      </form>
      <div>
        <p>Don't have an account yet.</p>
        <Link to="/signup">
          <p>SignUp</p>
        </Link>
      </div>
    </main>
  );
}

export default LoginPage;
