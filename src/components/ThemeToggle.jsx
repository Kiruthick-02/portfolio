import { useTheme } from '../hooks/useTheme';
import { FaSun, FaMoon } from 'react-icons/fa';
import React from 'react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-600 dark:bg-gray-300 text-white dark:text-black transition-colors duration-300"
    >
      {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
};

export default ThemeToggle;