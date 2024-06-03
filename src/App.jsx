import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>Introduce yourself here.</p>
        </section>
        <section id="projects">
          <h2>My Projects</h2>
          <p>Showcase your projects here.</p>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>Provide your contact details here.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Your Name</p>
      </footer>
    </div>
  );
}

export default App;
