import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'bootstrap';

const AutoplayCarousel = () => {
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
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="..." className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="..." className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="..." className="d-block w-100" alt="..."/>
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
  );
};

export default AutoplayCarousel;