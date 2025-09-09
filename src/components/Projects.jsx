// src/components/Projects.jsx
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from './ProjectCard.jsx';
import { useTheme } from '../hooks/useTheme';

// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Sample data for your projects - replace with your actual project details
const projectsData = [
  {
    title: 'Shortest Path for Ambulance Routing',
    description: "A full-stack web application for ambulance routing in Coimbatore, Tamil Nadu, using Flask, Leaflet.js, and OpenStreetMap. Features real-time routing to eight major hospitals with multiple shortest path algorithms TSP, MST Prim's, Kruskal's, Multistage Graph. Includes hospital priority, capacity, and emergency level selection. Interactive map visualization and algorithm comparison capabilities.Ensures faster emergency response with optimized hospital selection.Built with a scalable architecture to support future hospital additions and smart city integrations.",
    techStack: ['HTML', 'CSS', 'JavaScript','Leaflet.js','OSRM','Flask'],
    repoLink: '#', // Replace with actual link
  },
  {
    title: 'Resource Allocation and Scheduling System',
    description: "The Resource Allocation and Scheduling System is a web-based application that integrates optimization algorithms with real-time map routing. It uses the 8 Queens algorithm for employee-to-task scheduling without conflicts. The Fractional Knapsack algorithm optimizes machine usage to maximize profit across user-defined days. For deliveries, the system applies nearest-neighbor routing with the OSRM API to calculate shortest paths. Interactive maps allow users to add customers, view dynamic routes, and get turn-by-turn directions. This project demonstrates how AI algorithms and geospatial technologies can solve real-world allocation problems effectively.",
    techStack: ['HTML', 'CSS', 'JavaScript','Leaflet.js','OSRM','Flask'],
    liveLink: '#',
    repoLink: '#',
  },
  {
    title: 'Splitit-Smart bill Splitter',
    description: "SplitIt is a modern, full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application designed to simplify expense management for groups. It provides a seamless and intuitive platform for users to track shared costs, calculate splits, and settle debts, eliminating the confusion and manual calculations often associated with shared finances.",
    techStack: ['ReactJS', 'NodeJS', 'MongoDB','ExpressJS','JWT',],
    liveLink: '#',
    repoLink: '#',
  },
  {
    title: 'Stock Market Analysis',
    description: "This project provides a full pipeline for analyzing stock market data using time series models. ARIMA predicts price trends, while GARCH models volatility. The modular structure makes it easy to adapt to other datasets or integrate additional models.",
    techStack: ['Python', 'JupyterNB', 'MongoDB','Matplotlib',],
    liveLink: '#',
    repoLink: '#',
  },
  
];

const Projects = () => {
  const container = useRef(null);
  const { theme } = useTheme();

  const isHorizontal = projectsData.length >= 4;
  const slideFrom = isHorizontal ? -700 : -700;

  useGSAP(() => {
    const cards = gsap.utils.toArray('.project-card');
    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        x: slideFrom,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: index * 0.2,
      });
    });
  }, { scope: container });

  return (
    <section id="projects" ref={container} className="py-24 px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Other Projects</h2>
        <div
          dir="ltr"
          className={isHorizontal ? 'flex flex-row overflow-x-auto gap-6 pb-4' : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'}
        >
          {projectsData.map((project, index) => (
            <div key={index} className={`project-card ${isHorizontal ? 'flex-shrink-0 w-80' : ''}`}>
              <ProjectCard
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                liveLink={project.liveLink}
                repoLink={project.repoLink}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;