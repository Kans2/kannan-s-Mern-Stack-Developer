import ThemeSelector from './ThemeSelector';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">🌍 <strong>Theme App</strong></div>
      <ThemeSelector />
    </header>
  );
};

export default Header;
