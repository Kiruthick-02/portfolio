import React from 'react';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef(null);
  const aboutBox = useRef(null);

  useGSAP(() => {
    // Fade-in animation for the about box
    gsap.from(aboutBox.current, {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%', // Animation starts when the top of the container is 80% from the top of the viewport
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 50, // Starts 50px below its final position
      duration: 1,
      ease: 'power3.out',
    });
  }, { scope: container });

  return (
    <section id="about" ref={container} className="py-24 px-8 bg-gray-100 dark:bg-gray-900 flex justify-center items-center">
      <div
        ref={aboutBox}
        className="max-w-3xl p-8 md:p-12 bg-light-background dark:bg-dark-background rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 transition-transform duration-300 hover:scale-105"
      >
        <h2 className="text-4xl font-bold text-center mb-6 text-light-text dark:text-dark-text">
          About Me
        </h2>
        <p className="text-lg text-center text-gray-700 dark:text-gray-300 leading-relaxed">
          Hi, I'm Kiruthick Ranganathan, a dedicated Decision and Computing Sciences student at Coimbatore Institute of Technology. I'm passionate about technology and constantly seeking opportunities to expand my knowledge and skills. As a third-year student, I've had the privilege of studying and working on various aspects of computer science, including software development, web design, and data analysis. I'm excited to apply what I've learned to real-world projects and make a positive impact in the field. I'm always open to new challenges and opportunities, so feel free to reach out if you'd like to connect or collaborate. Thank you for visiting my portfolio, and I look forward to sharing my journey and experiences with you.
        </p>

      </div>
    </section>
  );
};

export default About;