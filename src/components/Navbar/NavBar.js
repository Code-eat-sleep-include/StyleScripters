import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logoImage from '../assets/logo.png';

const NavBar = ({ scrollToHowItWorks, toggleFAQ }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <span className="navbar-logo">
            <img src={logoImage} alt="OceanGuardiansLogo" />
          </span>
          <span className="cursive-text">StyleScripters</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLightNavbar" aria-controls="offcanvasLightNavbar" aria-label="Toggle navigation" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`offcanvas offcanvas-end text-bg-light ${isOpen ? 'show' : ''}`} tabIndex="-1" id="offcanvasLightNavbar" aria-labelledby="offcanvasLightNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasLightNavbarLabel">Style Scripters</h5>
            <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close" onClick={toggleMenu}></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className='nav-links mb-2'><Link className='nav-links' to="/shop">Shop</Link></li>
              <li className='nav-links mb-2'><Link className='nav-links' to="/contact">Contact Us</Link></li>
              <li className='nav-links mb-2'><Link className='nav-links' to="/inquiries">Post your Reviews</Link></li>
              <li className='nav-links mb-2'><Link className='nav-links' to="/faq" onClick={toggleFAQ}>About Us</Link></li>
              <li className='nav-links mb-2'><Link className='nav-links' to="/leaderboard">Try our AI</Link></li>
              <li className='nav-links mb-2'><Link className='nav-links' to="/how-it-works" onClick={scrollToHowItWorks}>Search</Link></li>
            </ul>
            <div className='outer-container mt-2'>
              <Link to="/login"><button className='btn btn-success'>Login</button></Link>
              <Link to="/signup"><button className='btn btn-primary'>Sign Up</button></Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
