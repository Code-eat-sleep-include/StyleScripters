import React from 'react';
import './LandingPage.css';
import user1 from '../assets/user1.png'
import user2 from '../assets/user2.png'
import user3 from '../assets/user3.jpg'

const LandingPage = () => {
  return (
    <div className="landing-page" id="lp">
      <h1>Style That Demands Attention</h1>
      <p className='bolder'>Unleash your inner fashionista</p>
      <h2 className='vol mb-2'>Hear reviews from our customers</h2>
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className='blog-container'>
              <div className='user-container'>
                <div className='user-img'>
                  <img src={user1}></img>
                </div>
                <div className='user-name'>Tiffany Case</div>
              </div>
              <div className='blog-content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac pellentesque velit. Mauris fermentum felis ac luctus suscipit. Phasellus lectus erat, scelerisque eu eleifend quis, viverra et risus. 
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className='blog-container'>
              <div className='user-container'>
                <div className='user-img'>
                  <img src={user2}></img>
                </div>
                <div className='user-name'>Sylvia Trench</div>
              </div>
              <div className='blog-content'>
                Duis sed enim varius diam lacinia pharetra. Vivamus tristique suscipit rhoncus. Curabitur quis lorem vitae nisi pretium luctus. Donec elementum felis sit amet orci aliquet, in euismod libero scelerisque. Quisque eget vehicula turpis. 
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className='blog-container'>
              <div className='user-container'>
                <div className='user-img'>
                  <img src={user3}></img>
                </div>
                <div className='user-name'>Chris Bacon</div>
              </div>
              <div className='blog-content'>
                Donec elementum felis sit amet orci aliquet, in euismod libero scelerisque. Quisque eget vehicula turpis. Praesent suscipit commodo ex sed ultricies. Phasellus velit dui, ullamcorper eget lobortis sit amet, accumsan auctor erat.
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;