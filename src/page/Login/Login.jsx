import React from "react";
import "./Login.css";
import { FaEnvelope, FaLock, FaEye } from "react-icons/fa";
import phoneImg from "../../assets/figure-hero-image.webp";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      
      {/* <div className="login-left">
        <div className="image-wrapper">
          <img  src={phoneImg} alt="preview" />
        </div>
      </div> */}

      <div className="login-right">
        <div className="login-box">
          
          <h3>Welcome to</h3>
          
          <h1>
            <b>
              <span>PeTiK Book</span>
            </b>
          </h1>

      <div className="input-group">
          {/* <FaEnvelope className="icon" /> */}
        <input type="email" placeholder="contohh@gmail.com" />
      </div>


      <div className="input-group">
          {/* <FaLock className="icon" /> */}
        <input type="password" placeholder="sandimu...." />
          {/* <FaEye className="eye" /> */}
      </div>

          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>

          <button
            className="login-btn"
            onClick={() => navigate("/home")}
          >
            Login
          </button>

          <p className="footer-text">
            Don’t have an account? <span>Call Admin</span>
          </p>

        </div>
      </div>

    </div>
  );
}