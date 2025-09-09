import React from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className="sticky top-0 z-50 py-4 px-8 flex justify-between items-center bg-light-background/80 dark:bg-dark-background/80 backdrop-blur-sm">
      <a href="#home" className="text-2xl font-bold text-light-primary dark:text-dark-primary">
        Kiruthick Ranganathan
      </a>
      <div className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-primary transition-colors duration-300"
          >
            {link}
          </a>
        ))}
      </div>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;