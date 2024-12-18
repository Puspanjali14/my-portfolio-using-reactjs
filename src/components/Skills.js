// Skills.js
import React from 'react';
import '../styles/Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skill-set">
          <div className="skill">
            <i className="fab fa-html5"></i>
            <h3>HTML</h3>
          </div>
          <div className="skill">
            <i className="fab fa-css3-alt"></i>
            <h3>CSS</h3>
          </div>
          <div className="skill">
            <i className="fab fa-js"></i>
            <h3>JavaScript</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;