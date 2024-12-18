import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="profile-photo">
            <img src="/images/photo.JPG" alt="Puspanjali Neupane" />
          </div>
          <div className="bio">
            <p>I am a frontend developer and web designer dedicated to creating visually compelling and user-friendly websites...</p>
            <a href="/resume.pdf" download className="btn">Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;