import React from 'react';

const FAQ = ({ showFAQ, toggleFAQ }) => {
  return (
    <div className={`faq-container show`}>
      <div className="faq-popup">
        {/* <button className="cancel-button" onClick={toggleFAQ}>
          X
        </button> */}
        <h2>About Our Imlementation</h2>
        <div className="faq-content">
          <p className='bold'>1. What is Myntra's AI-Powered Product Recommendation System?</p>
          <p>Our AI-powered product recommendation system allows customers to submit drawings of clothing items they have in mind. Our advanced AI algorithms analyze these drawings to provide personalized product recommendations based on shapes, colors, and styles.</p>
          <p className='bold'>2. How does the drawing-based search feature work?</p>
          <p>Customers can upload or draw images of clothing items on our site. Our system processes these drawings, extracting key features such as shapes, colors, and styles, to match them with products in our database, providing tailored recommendations.</p>
          <p className='bold'>3. Can I virtually try on clothes before purchasing?</p>
          <p>Yes, our website features augmented reality (AR) technology that lets you virtually try on clothes and accessories. This feature helps you get a better sense of how items will look and fit before making a purchase.</p>
          <p className='bold'>4. How does the AI analyze my drawing?</p>
          <p>Our AI uses image recognition to identify elements in your drawing and natural language processing (NLP) to interpret any associated text or tags. It then searches our product database to find the best matches for your drawing.</p>
          <p className='bold'>5. Can I provide feedback on the recommended products?</p>
          <p>Absolutely! We value your feedback to continually improve our recommendation system. You can provide feedback on the recommended products to help us enhance future suggestions.</p>
          <p className='bold'>6. How does Myntra ensure the privacy and security of my drawings?</p>
          <p>We prioritize your privacy and security. All customer drawings are handled securely and in compliance with privacy regulations to ensure your personal information remains protected.</p>
          <p className='bold'>7. What if my drawing is unclear or cannot be matched effectively?</p>
          <p>Our system is designed to handle various types of drawings, but if a drawing is unclear, we provide options to refine your input or suggest alternative methods to find what you're looking for.</p>
          <p className='bold'>8. What other features does Myntra's website offer?</p>
          <p>In addition to our AI-powered recommendations and AR technology, our website includes a dashboard, shop, login/signup, contact us, and search features to provide a seamless shopping experience.</p>
          <p className='bold'>9. How do I get started with using the drawing-based search feature?</p>
          <p>To use the drawing-based search, simply log in to your account, go to the search section, and upload or draw your image. Our AI will process your input and display the recommended products for you.</p>
          <p className='bold'>10. What is the benefit of using AI for product recommendations?</p>
          <p>Using AI for product recommendations ensures a more personalized shopping experience. It helps you find products that match your specific preferences and needs, making shopping more efficient and enjoyable.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
