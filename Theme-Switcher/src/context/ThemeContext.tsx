import  { createContext, useState, useContext, type ReactNode, useEffect } from 'react';

// ThemeContext manages the current theme and provides a way to update it throughout the app.

// Supported theme values
export type Theme = 'theme1' | 'theme2' | 'theme3';

// Context type for theme and its setter
interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

// Create the ThemeContext with undefined as default
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Get initial theme from localStorage, fallback to 'theme1' if not set
const getInitialTheme = (): Theme => {
  const storedTheme = localStorage.getItem('app-theme') as Theme | null;
  return storedTheme || 'theme1';
};

// ThemeProvider wraps the app and provides theme state and setter
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // State for current theme, initialized from localStorage
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Setting theme in  localStorage
  useEffect(() => {
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  // Provide theme and setter to children, and apply theme class to wrapper
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`app-wrapper ${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

// Custom hook to access theme context safely
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
