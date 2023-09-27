// //import React from 'react'
// import './signup.css';
// import { useState } from 'react';

	import React, { useState } from 'react';
	import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
	import './signup.css';
	
	export default function Signup() {
	  // States for registration
	  const [name, setName] = useState('');
	  const [email, setEmail] = useState('');
	  const [password, setPassword] = useState('');
	
	  // States for checking the errors
	  const [submitted, setSubmitted] = useState(false);
	  const [error, setError] = useState(false);
	
	  // Access the navigate function for navigation
	  const navigate = useNavigate();
	
	  // Handling the name change
	  const handleName = (e) => {
		setName(e.target.value);
		setSubmitted(false);
	  };
	
	  // Handling the email change
	  const handleEmail = (e) => {
		setEmail(e.target.value);
		setSubmitted(false);
	  };
	
	  // Handling the password change
	  const handlePassword = (e) => {
		setPassword(e.target.value);
		setSubmitted(false);
	  };
	
	  // Handling the form submission
	  const handleSubmit = (e) => {
		e.preventDefault();
		if (name === '' || email === '' || password === '') {
		  setError(true);
		} else {
		  setSubmitted(true);
		  setError(false);
	
		  // Navigate to the login page after successful registration
		  navigate('/login');
		}
	  };
	
	  // Showing success message
	  const successMessage = () => {
		return (
		  <div
			className="success"
			style={{
			  display: submitted ? '' : 'none',
			}}
		  >
			<h1>User {name} successfully registered!!</h1>
		  </div>
		);
	  };
	
	  // Showing error message if error is true
	  const errorMessage = () => {
		return (
		  <div
			className="error"
			style={{
			  display: error ? '' : 'none',
			}}
		  >
			<h1>Please enter all the fields</h1>
		  </div>
		);
	  };
	
	  return (
		<div className="form">
		  <div>
			<h1>
			  <center>User Registration</center>
			</h1>
		  </div>
	
		  {/* Calling the methods */}
		  <div className="messages">
			{errorMessage()}
			{successMessage()}
		  </div>
	
		  <form id="formtag">
			{/* Labels and inputs for form data */}
			<label className="label">Name</label>
			<input onChange={handleName} className="input" value={name} type="text" />
	
			<label className="label">Email</label>
			<input onChange={handleEmail} className="input" value={email} type="email" />
	
			<label className="label">Password</label>
			<input onChange={handlePassword} className="input" value={password} type="password" />
	
			<button onClick={handleSubmit} className="btn" type="submit">
			  Submit
			</button>
		  </form>
		</div>
	  );
	}
	