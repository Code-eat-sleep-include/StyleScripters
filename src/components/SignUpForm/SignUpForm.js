import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importing useNavigate
import './SignUpForm.css'; // Assuming you have a CSS file for SignUpForm styling
import sharkImage from '../assets/signupbg.avif';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Using useNavigate for navigation

  const handleSignUp = () => {
    // Your sign-up logic here
    console.log(`Signing up with username: ${username} and password: ${password}`);
    // For simplicity, redirect to the login page after successful sign-up
    navigate('/login'); // Using navigate to redirect to login page
  };

  const backgroundImageStyle={
    backgroundImage: `url(${sharkImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
  };

  return (
    <div style={backgroundImageStyle}>
      <div className="container">
        <div className="sign-up-form">
          <h1>Sign Up</h1>
          <form>
            <label>
              Username:
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
            </label>
            <br />
            <label>
              Create Password:
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
            </label>
            <br />
            <button type="button" onClick={handleSignUp}>Sign Up</button>
          </form>
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>  
    </div>
  );
};

export default SignUpForm;
