import React from 'react';
import './gallery.css';
import women from '../assets/women.png';
import kids from '../assets/kids.jpg';
import men from '../assets/men.jpg';

class Gallery extends React.Component {
  render() {
    return (
      <div className="gallery">
        <img src={women} alt="picture 1" className="gallery-item" />
        <img src={kids} alt="picture 2" className="gallery-item" />
        <img src={men} alt="picture 3" className="gallery-item" />
      </div>
    );
  }
}

export default Gallery;
