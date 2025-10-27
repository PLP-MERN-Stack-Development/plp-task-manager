import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Button from './Button';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white">
      <h1 className="text-lg font-semibold">Task Manager</h1>

      <Button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'}
      </Button>
    </nav>
  );
};

export default Navbar;
