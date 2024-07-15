import React from 'react';
import './ContactUs.css';

const ContactSection = () => {
  return (
    <div className='outer-contact-us mt-5 p-5'>
      <div className='heading mb-5 mx-5'>Contact Us</div>
      <div className='outer-container-contact-us'>
        <div className='map-container mx-5'>
          <iframe
            className='map-frame'
            title="Save the Oceans"
            src="https://www.youtube.com/embed/N60_oXI3wtQ"
            data-aos="fade-left" data-aos-duration="3000"
          ></iframe>
        </div>
        <div className='form-container mx-5'>
          <form>
            <div class="my-3">
              <label for="exampleFormControlInput1" class="form-label">Name</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="John Doe"></input>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="johndoe@email.com"></input>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Message</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button className='btn btn-success mb-4'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
