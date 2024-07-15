import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';

import NavBar from './components/Navbar/NavBar';
import ParallaxSection from './components/Selection/ParallaxSection';
import LoginForm from './components/LoginForm/LoginForm';
import LandingPage from './components/LandingPage/LandingPage';
import DonationSection from './components/DonationSection/DonationSection';
import ProgressTracker from './components/ProgressTracker/ProgressTracker';
import Footer from './components/Footer/Footer';
import ContactUs from './components/ContactUs/ContactUs';
import PressInquiries from './components/PressInquiries/PressInquiries';
import FAQ from './components/FAQ/FAQ';
import HowItWorks from './components/Selection/HowItWorks';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';
import UserPage from './components/UserPage/UserPage';
import SignUpForm from './components/SignUpForm/SignUpForm';
import Shop from './components/Shop/Shop';
import Leaderboard from './components/Leaderboard/Leaderboard';
import Chatbot from './components/Chatbot/chatbot'; // Import Chatbot component

import './App.css';
import './components/FAQ/FAQ.css';

const App = () => {
  const [showFAQ, setShowFAQ] = useState(false);

  const toggleFAQ = () => {
    setShowFAQ(!showFAQ);
  };
  const scrollToHowItWorks = () => {
    let heightV = document.getElementById('how-it-works').getClientRects()[0].height;
    scroll.scrollTo(heightV, {
      duration: 800,
      smooth: 'easeInOutQuart',
    });
  };
  return (
    <div className='home-page'>
      <div className='home-page-container'>
        <Router>
          <div>
            <NavBar scrollToHowItWorks={scrollToHowItWorks} toggleFAQ={toggleFAQ} />
            <div className='my-5'></div>
            <Routes>
              {/* <Route path="/" element={<ParallaxSection title="" imageUrl="nightsea.gif" />} /> */}
              <Route path="/login" element={<LoginForm title="" imageUrl="dolph.jpg" />} />
              <Route path="/" element={<LandingPage />} />
              <Route path="/donate" element={<DonationSection />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/inquiries" element={<PressInquiries />} />
              <Route path="/faq" element={<FAQ showFAQ={showFAQ} toggleFAQ={toggleFAQ} />} /> { }
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/user" element={<UserPage />} />
              <Route path="/signup" element={<SignUpForm />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/chatbot" element={<Chatbot />} />
            </Routes>
            {/* <ProgressTracker goal={1000000} current={500000} /> */}
            {/* <Footer /> */}
            <div><HamburgerMenu /></div>
          </div>
        </Router>

      </div>
    </div>
  );
};

export default App;
