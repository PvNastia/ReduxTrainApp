import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

function About() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/teor");
  };

  return (
    <section className="about-container">
      <h1>About Redux</h1>
      <p>
        <strong>Redux</strong> is a predictable state container for JavaScript apps. 
        It helps you write applications that behave consistently across different environments.
      </p>

      <h3>Why use Redux?</h3>
      <ul>
        <li><strong>Predictability:</strong> State changes are strictly defined through actions.</li>
        <li><strong>Centralization:</strong> Your entire application state is kept in one Store.</li>
        <li><strong>Debugging:</strong> Redux DevTools let you track when, where, and why your state changed.</li>
      </ul>

      <div className="concepts-card">
        <h4>Core Concepts:</h4>
        <ol>
          <li><strong>Store:</strong> The single source of truth that holds the state.</li>
          <li><strong>Actions:</strong> Plain objects that describe what happened.</li>
          <li><strong>Reducers:</strong> Functions that handle how the state changes.</li>
        </ol>
      </div>
      
      <button className="start-btn" onClick={handleSubmit}>
        Start Learning
      </button>
    </section>
  );
}

export default About;
