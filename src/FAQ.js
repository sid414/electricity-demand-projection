import React from 'react';

const FAQ = () => {
  return (
    <section id="two" className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-item">
        <h3>What is the purpose of this AI-based model?</h3><br />
        <p>The model aims to accurately forecast electricity demand, including peak demand, for the Delhi power system. This will help optimize energy generation, distribution, and infrastructure management.</p>
      </div>
      <br /><br />
      <div className="faq-item">
        <h3>What role do external factors (like weather) play in demand projection?</h3><br />
        <p>External factors such as temperature, humidity, and economic activity significantly impact electricity demand. The AI model will factor in these variables for more accurate predictions.</p>
      </div>
      <div className="faq-item">
        <h3>What AI techniques will be used in the model?</h3><br />
        <p>The model may use machine learning techniques such as time series forecasting, regression analysis, and deep learning algorithms.</p>
      </div>
    </section>
  );
};

export default FAQ;
