import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { saveToStorage } from "../utils/storage";
import "./Login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    saveToStorage("isAuthenticated", true);
    navigate("/dashboard");
  };

  return (
    <div className="login">
      <div className="login__left">
        <img src="/logo.svg" alt="Lendsqr" className="login__logo" />
        <img
          src="/login-illustration.svg"
          alt="Login"
          className="login__illustration"
        />
      </div>
      <div className="login__right">
        <div className="login__form-container">
          <h1 className="login__title">Welcome!</h1>
          <p className="login__subtitle">Enter details to login.</p>
          <form onSubmit={handleSubmit} className="login__form">
            {error && <div className="login__error">{error}</div>}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login__input"
            />
            <div className="login__password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login__input"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="login__show-password"
              >
                {showPassword ? "HIDE" : "SHOW"}
              </button>
            </div>
            <a href="#" className="login__forgot">
              FORGOT PASSWORD?
            </a>
            <button type="submit" className="login__button">
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
