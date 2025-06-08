import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import "../styles/Login.css";
import GoogleIcon from "../assets/images/google-img.jpg"; // Use any Google icon image

const Login = () => {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Logged in as:", user.displayName, user.email);

      // Optionally send user data to backend
      // await axios.post("/api/user", { uid: user.uid, email: user.email });
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Welcome to FinWise</h1>
        <p className="login-subtitle">Manage your finances with ease</p>
        <button className="google-login-btn" onClick={handleLogin}>
          <img src={GoogleIcon} alt="Google" className="google-icon" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
