import React from 'react';
import graphImage from '../src/assets/po1.gif'; // Add the correct image path

const Projection = () => {
  return (
    <section className="projection">
      <h2>AI Based Electricity Demand Projection</h2>
      <img src={graphImage} alt="Demand projection graph" className="graph-image" />
    </section>
  );
};

export default Projection;
