import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

export default function LandingPage() {
  const router = useNavigate();

  return (
    <div className="landingPageContainer">
      {/* Glass Navbar */}
      <nav className="navbar glass">
        <div className="navHeader">
          <h2>Connectly</h2>
        </div>
        <div className="navList">
          <button onClick={() => router("/aljk23")}>Join as Guest</button>
          <button onClick={() => router("/auth")}>Register</button>
          <button onClick={() => router("/auth")}>Login</button>
        </div>
      </nav>

      {/* Main Hero Section */}
      <div className="landingMainContainer">
        <div className="leftSection">
          <h1>
            <span className="highlight">Connect</span> with your loved ones
          </h1>
          <p className="subtitle">
            Bridge the distance through meaningful video conversations
          </p>
          <Link to="/auth" className="getStartedBtn">
            Get Started
          </Link>
        </div>

        <div className="rightSection">
         <img src="/video-call.svg" alt="Video call illustration" className='heroImage' />

        </div>
      </div>
    </div>
  );
}
