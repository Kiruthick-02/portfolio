// src/components/ProjectCard.jsx
import React from 'react';
import { useTheme } from '../hooks/useTheme';

const ProjectCard = ({ title, description, techStack, liveLink, repoLink }) => {
  const { theme } = useTheme();

  return (
    <div className="bg-blue rounded-lg shadow-md p-6 flex flex-col h-96 border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-white-800">{title}</h3>
        <div className="flex space-x-2">
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              <span role="img" aria-label="live">🌐</span>
            </a>
          )}
          {repoLink && (
            <a href={repoLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:underline">
              <span role="img" aria-label="repo">📂</span>
            </a>
          )}
          <button className="text-white-500 hover:text-gray-700">
            <span role="img" aria-label="options">⋮</span>
          </button>
        </div>
      </div>
      <p className="text-white-600 flex-1 overflow-y-auto mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="bg-indigo-900 text-white px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;