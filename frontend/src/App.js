import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Tools from './Components/Tools';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Services from './Components/Services';
import Contacts from './Components/Contacts';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="tools">
          <Tools />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contacts">
          <Contacts />
        </section>
      </div>
    </div>
  );
};

export default App;
