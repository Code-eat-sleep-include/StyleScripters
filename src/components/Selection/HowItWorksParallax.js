import React from 'react';
const HowItWorksParallax = ({ imageUrl }) => {
  return (
    <div className="how-it-works-parallax" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="parallax-content">
        <h2></h2>
        {}
      </div>
    </div>
  );
};

export default HowItWorksParallax;
