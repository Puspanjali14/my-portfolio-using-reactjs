import React from 'react';
import '../styles/Portfolio.css';

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h2>My Work</h2>
      <div className="projects">
        <div className="project">
          <h3>Resume-Screening</h3>
          <a href="/projects/Resume-Screening">View Project</a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;