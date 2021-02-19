import React from 'react';
import './App.css';
import Canvas from './components/Canvas';
import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Canvas />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
