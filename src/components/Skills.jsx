import React from 'react';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';   // ✅ FIXED
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaFlask, FaPython } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiVercel, SiTailwindcss } from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const skillsData = {
  languages: [
    { name: 'HTML', icon: <FaHtml5 size={40} /> },
    { name: 'CSS', icon: <FaCss3Alt size={40} /> },
    { name: 'JavaScript', icon: <FaJs size={40} /> },
    { name: 'Python', icon: <FaPython size={40}/>},
  ],
  frameworks: [
    { name: 'React.js', icon: <FaReact size={40} /> },
    { name: 'Node.js', icon: <FaNodeJs size={40} /> },
    { name: 'Flask', icon: <FaFlask size={40}/>},
    { name: 'TailwindCSS', icon: <SiTailwindcss size={40} /> },
    { name: 'MongoDB', icon: <SiMongodb size={40} /> },
    { name: 'MySQL', icon: <SiMysql size={40} /> },
  ],
  services: [
    { name: 'Vercel', icon: <SiVercel size={40} /> },
    { name: 'Github', icon: <FaGithub size={40} /> },
  ],
};

const Skills = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from('.skill-card', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 50,
      stagger: 0.1,
      duration: 0.5,
    });
  }, { scope: container });

  return (
    <section id="skills" ref={container} className="py-20 px-8 bg-light-background dark:bg-dark-background">
      <h2 className="text-4xl font-bold text-center mb-12 text-light-text dark:text-dark-text">Skills</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Languages */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-light-primary dark:text-dark-primary">Languages</h3>
          {skillsData.languages.map(skill => (
            <div key={skill.name} className="skill-card flex items-center p-4 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md">
              <span className="text-light-accent dark:text-dark-accent">{skill.icon}</span>
              <p className="ml-4 text-lg font-medium text-light-text dark:text-dark-text">{skill.name}</p>
            </div>
          ))}
        </div>
        {/* Frameworks & DB */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-light-primary dark:text-dark-primary">Frameworks & DB</h3>
          {skillsData.frameworks.map(skill => (
            <div key={skill.name} className="skill-card flex items-center p-4 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md">
              <span className="text-light-accent dark:text-dark-accent">{skill.icon}</span>
              <p className="ml-4 text-lg font-medium text-light-text dark:text-dark-text">{skill.name}</p>
            </div>
          ))}
        </div>
        {/* Services */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-light-primary dark:text-dark-primary">Services</h3>
          {skillsData.services.map(skill => (
            <div key={skill.name} className="skill-card flex items-center p-4 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md">
              <span className="text-light-accent dark:text-dark-accent">{skill.icon}</span>
              <p className="ml-4 text-lg font-medium text-light-text dark:text-dark-text">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
