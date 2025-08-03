import ThemeSelector from './ThemeSelector';

// ThemeSelector component for switching themes
const Header = () => {
  return (
    <header className="header">
      <div className="logo">🌍 <strong>Theme App</strong></div>
      <ThemeSelector />  
    </header>
  );
};

export default Header;
