import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hello, I'm <span className="highlight">Puspanjali Neupane</span></h1>
        <p>Frontend Developer and Web Designer</p>
      </div>
      <div className="hero-image">
        <img src="/images/photo.jpg" alt="Puspanjali Neupane" />
      </div>
    </section>
  );
}

export default Hero;