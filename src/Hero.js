import React from 'react';
import heroImage from '../src/assets/17.png'; // Ensure the image path is correct

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Electricity Demand Projection</h1>
        <p>The website aims to develop an Artificial Intelligence (AI) based model for electricity demand projection.</p>
        <br />
        <a href="/#" className="btn">Explore Now</a>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Powerlines" />
      </div>
    </section>
  );
};

export default Hero;
