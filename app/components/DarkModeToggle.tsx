"use client";
import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialMode = savedTheme === 'dark' || (!savedTheme && prefersDarkMode);
    
    document.documentElement.classList.toggle('dark', initialMode);
    setIsDarkMode(initialMode);
    setIsMounted(true);
  }, []);

  // Toggle theme function
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Prevent rendering until client-side mount
  if (!isMounted) {
    return null;
  }

  return (
    <button 
      onClick={toggleDarkMode} 
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 
                 transition-colors duration-300 flex items-center justify-center"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        <Sun className="text-yellow-500" size={24} />
      ) : (
        <Moon className="text-blue-600" size={24} />
      )}
    </button>
  );
}