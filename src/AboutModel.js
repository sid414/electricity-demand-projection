import React from 'react';

const AboutModel = () => {
  return (
    <section id="one" className="about-ai-model">
      <h2>About the AI Model</h2>
      <div className="about-content">
        <div className="about-text">
          <h3>Innovative Approach to Demand Projection</h3>
          <p>Tailored for Delhi</p>
          <ul>
            <li>Model Development</li>
            <li>Training and Validation</li>
            <li>Deployment and Integration</li>
            <li>Key Advantages</li>
          </ul>
        </div>
        <div className="about-image-container">
          <div className="about-image">
            <lottie-player src="https://lottie.host/04d3eab4-7ade-4d03-afe4-388f5614c22f/UIPhrEhW31.json" background="transparent" speed="1" style={{width: '400px', height: '400px'}} loop autoplay></lottie-player>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutModel;
