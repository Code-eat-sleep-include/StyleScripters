import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.css';
import dolphinImage from '../assets/loginbg.jpeg';
import Gallery from '../Gallery/gallery';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log(`Logging in with username: ${username} and password: ${password}`);
    navigate('/user');
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${dolphinImage})`,
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
    <div style={backgroundImageStyle} className='xyz'>
      <h1 className='mb-5'>Welcome Back Fashionista</h1>
      <div className='container-outer'>
        <div className='login-outer'>
          <h2 className='mb-4'>Login</h2>
          <form>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
              <label for="floatingPassword">Password</label>
            </div>
            <div><span className='span-text'>Don't have an account? </span><Link to="/signup">Sign Up</Link></div>
            <br />
            <button className='btn btn-primary' type="button" onClick={handleLogin}>Login</button>
          </form>
        </div>
        <div className='gallery-container'>
          <Gallery />
        </div>
      </div>

    </div>
  );
};

export default LoginForm;
