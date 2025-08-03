import React from 'react';
import { useTheme, type Theme } from '../context/ThemeContext';

const ThemeSelector = ()=>{
const { theme, setTheme } = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as Theme);
  };

  return (
    <div className="theme-selector-container">
      <label htmlFor="theme-select" className="theme-selector-label">
        Select Theme:
      </label>
      <select id="theme-select" value={theme} onChange={handleChange} className="theme-select">
        <option value="theme1">Theme 1 - Light</option>
        <option value="theme2">Theme 2 - Dark</option>
        <option value="theme3">Theme 3 - Colorful</option>
      </select>
    </div>
  );
};
export default ThemeSelector;
