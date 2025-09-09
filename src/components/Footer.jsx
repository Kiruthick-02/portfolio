import React from 'react';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const container = useRef(null);

  useGSAP(() => {
    // Animate the footer content fading up
    gsap.from('.footer-item', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 95%', // Starts when the top of the footer is 95% from the top of the viewport
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 30,
      stagger: 0.2, // Animate items one after another
      duration: 0.8,
    });
  }, { scope: container });

  return (
    <footer id="contact" ref={container} className="w-full py-16 px-8 bg-light-primary dark:bg-dark-background border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-light-accent dark:text-dark-primary mb-8 footer-item">
          Get In Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone */}
          <div className="footer-item">
            <div className="flex justify-center items-center mb-2">
              <FaPhone size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-1">Phone</h3>
            <p className="text-gray-300 dark:text-gray-400">+1 (123) 456-7890</p>
          </div>

          {/* Email */}
          <div className="footer-item">
            <div className="flex justify-center items-center mb-2">
              <FaEnvelope size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-1">Email</h3>
            <a href="mailto:your.email@example.com" className="text-gray-300 dark:text-gray-400 hover:text-dark-primary transition-colors">
              your.email@example.com
            </a>
          </div>

          {/* Social Links */}
          <div className="footer-item">
            <h3 className="text-xl font-semibold text-white mb-3">Find Me On</h3>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-white hover:text-dark-primary transition-colors">
                <FaGithub size={28} />
              </a>
              <a href="#" className="text-white hover:text-dark-primary transition-colors">
                <FaLinkedin size={28} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 footer-item">
          <p className="text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} Your Name. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;