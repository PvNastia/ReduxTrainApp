import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="error-code">404</h1>
        <div className="error-icon">🧭</div>
        <h2>Oops! Page Not Found</h2>
        <p>
          The page you are looking for might have been removed, 
          had its name changed, or is temporarily unavailable.
        </p>
        <div className="notfound-actions">
          <button className="back-home-btn" onClick={() => navigate("/")}>
            Return to Home
          </button>
          <button className="back-prev-btn" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
