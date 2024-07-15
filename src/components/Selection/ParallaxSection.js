import React, { useEffect } from 'react';
import './ParallaxSection.css';
import HowItWorksParallax from './HowItWorksParallax';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'bootstrap';
import car1 from '../assets/car-1.jpg'
import car2 from '../assets/car-2.jpg'
import car3 from '../assets/car-3.jpg'

const ParallaxSection = ({ title, imageUrl }) => {
  useEffect(() => {
    const carouselElement = document.getElementById('carouselExampleAutoplaying');
    const carousel = new Carousel(carouselElement, {
      interval: 2000,
    });
    return () => {
      carousel.dispose();
    };
  }, []);

  return (
    <div className='whole-page'>
      <div id="home-parallax-section" className="parallax-section" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="parallax-content">
          <h2>Save Our Marine Life</h2>
          {/* Content sections */}
          <section id="how-it-works">
            <h3>How It Works</h3>
            {/* Add your content for 'How It Works' section */}
          </section>
          <section id="leaderboard">
            <h3>Leader Board</h3>
            {/* Add your content for 'Leaderboard' section */}
          </section>
          <section id="progress">
            <h3>Progress</h3>
            {/* Add your content for 'Progress' section */}
          </section>
          <section id="donate">
            <h3>Donate</h3>
            {/* Add your content for 'Donate' section */}
          </section>
          {/* Add more sections as needed */}
        </div>
        {/* Parallax effect for 'How It Works' section */}
        <HowItWorksParallax imageUrl="your-image-url-for-how-it-works" />
      </div>
      <div className='home-container'>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
          <div className="carousel-inner-home">
            <div className="carousel-item active-home">
              <img src={car1} className="d-block w-80" alt="..." />
            </div>
            <div className="carousel-item-home">
              <img src={car2} className="d-block w-80" alt="..." />
            </div>
            <div className="carousel-item-home">
              <img src={car3} className="d-block w-80" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParallaxSection;