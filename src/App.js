import React from 'react';
import './App.css'; // Assuming CSS is global

import Header from './Header';
import Hero from './Hero';
import Projection from './Projection';
import AboutModel from './AboutModel';
import FAQ from './FAQ';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Projection />
      <AboutModel />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
