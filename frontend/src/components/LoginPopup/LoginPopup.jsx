/* eslint-disable react/prop-types */
import { useState } from "react";
import "./LoginPopup.css";
import { IoMdClose } from "react-icons/io";

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign up");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <IoMdClose
            onClick={() => setShowLogin(false)}
            className="login-popup-close-icon"
          />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}

          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <div>
          <button>
            {currentState === "Sign up" ? "Create account" : "Login"}
          </button>
        </div>
        <div className="login-popup-condition">
          <input type="checkbox" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account? <span onClick={()=>setCurrentState("Sign up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?<span onClick={()=>setCurrentState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
