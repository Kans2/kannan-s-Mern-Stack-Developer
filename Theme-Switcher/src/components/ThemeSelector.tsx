import React from 'react';
import { useTheme, type Theme } from '../context/ThemeContext';

// ThemeSelector component allows users to select a theme from a dropdown.
// It uses the ThemeContext to get and set the current theme.

const ThemeSelector = () => {
  // Access the current theme and the function to update it from context
  const { theme, setTheme } = useTheme();

  // Handle theme change from the dropdown
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as Theme);
  };

  return (
    <div className="theme-selector-container">
      {/* Label for the theme selector dropdown */}
      <label htmlFor="theme-select" className="theme-selector-label">
        Select Theme:
      </label>
      {/* Dropdown to select a theme */}
      <select
        id="theme-select"
        value={theme}
        onChange={handleChange}
        className="theme-select"
      >
        <option value="theme1">Theme 1 - Light</option>
        <option value="theme2">Theme 2 - Dark</option>
        <option value="theme3">Theme 3 - Colorful</option>
      </select>
    </div>
  );
};

// Export the ThemeSelector component as default
export default ThemeSelector;
