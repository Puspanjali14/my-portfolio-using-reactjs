import React from 'react';
import './styles/About.css';
import './styles/Contact.css';
import './styles/Hero.css';
import './styles/Portfolio.css';
import './styles/Footer.css';
import './styles/Header.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;