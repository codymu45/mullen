import React from 'react';
import './App.css';
import Canvas from './components/Canvas';
import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
// import * as Scroll from 'react-scroll';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Canvas />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
