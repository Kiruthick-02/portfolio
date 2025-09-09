import React from 'react';
import { ThemeProvider } from './hooks/useTheme';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--text)' }}>
        <Navbar />
        <main>
          <Home />
          <About />
          <Skills />
          <Projects />
        </main>
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;