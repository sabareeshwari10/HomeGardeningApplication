

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate from react-router-dom
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [passw, setPassw] = useState('');
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(''); // State for error message

  const submitThis = (e) => {
    e.preventDefault(); // Prevent the form from submitting

    // Basic validation checks
    if (!email || !passw) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    // Your login logic here...

    // Assuming login is successful, navigate to the home page
    navigate('/home');
  };

  return (
    <div>
      <div id="main">
        <h1>
          <center>Login</center>
        </h1>
        <form onSubmit={submitThis}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              style={{ alignItems: 'center' }}
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="passw">Password</label>
            <input
              type="password"
              name="passw"
              id="passw"
              value={passw}
              onChange={(e) => setPassw(e.target.value)}
            />
          </div>
          <button id="btn" type="submit">
            Login
          </button>
        </form>

        {/* Display error message if there's one */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {/* Add a Link to Signup */}
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;