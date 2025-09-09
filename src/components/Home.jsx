import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTheme } from '../hooks/useTheme';

// Remember to add your image in the `public/assets` folder
const YourImage = '/profile.jpg'; // Update with your image path

const Home = () => {
  const container = useRef();
  const { theme } = useTheme();

  useGSAP(() => {
    // Animate welcome text
    gsap.from('.welcome-text', {
      duration: 1,
      y: -100,
      opacity: 0,
      ease: 'power4.out',
      stagger: 0.2
    });

    // Animate image with a "pop"
    gsap.from('.profile-image', {
      duration: 1,
      scale: 0.5,
      opacity: 0,
      delay: 0.5,
      ease: 'elastic.out(1, 0.5)'
    });

    // Animate icon links
    gsap.from('.icon-link', {
      duration: 0.5,
      y: 20,
      opacity: 0,
      delay: 1,
      stagger: 0.1,
      ease: 'power2.out'
    });
  }, { scope: container });

  return (
    <section ref={container} className="min-h-screen flex items-center justify-center p-8">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side: Welcome Text and Links */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="welcome-text inline-block">Hi,</span>
            <span className="welcome-text inline-block ml-4">I’m</span>
            <span className="welcome-text inline-block text-light-accent dark:text-dark-primary ml-4">Kiruthick Ranganathan</span>
          </h1>
          <p className="mt-4 text-lg welcome-text">A Creative Developer Building Modern Web Experiences.</p>
          <div className="flex justify-center md:justify-start space-x-6 mt-8">
            {/* GitHub Icon with Link */}
            <a href="https://github.com/Kiruthick-02" target="_blank" rel="noopener noreferrer" className="icon-link text-3xl hover:text-light-accent dark:hover:text-dark-primary">
              <FaGithub style={{ color: theme === 'dark' ? '#e2e8f0' : '#2d3748' }} />
            </a>
            {/* LinkedIn Icon with Link */}
            <a href="https://www.linkedin.com/in/kiruthick-ranganathan-5941bb274/" target="_blank" rel="noopener noreferrer" className="icon-link text-3xl hover:text-light-accent dark:hover:text-dark-primary">
              <FaLinkedin style={{ color: theme === 'dark' ? '#e2e8f0' : '#2d3748' }} />
            </a>
            
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="profile-image w-80 h-[36rem] md:w-96 md:h-[40rem] bg-gray-300 dark:bg-dark-secondary rounded-xl overflow-hidden shadow-2xl">
              <img src={YourImage} alt="Kiruthick R" className="object-cover w-full h-full" />
            </div>

            {/* Animated background blobs (optional) */}
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-dark-accent/30 dark:bg-dark-primary/30 rounded-full filter blur-xl animate-blob"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-light-accent/30 dark:bg-dark-secondary/30 rounded-full filter blur-xl animate-blob animation-delay-4000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;