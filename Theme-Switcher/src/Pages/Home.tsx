import { useTheme } from '../context/ThemeContext';
import Product from "../components/Home2.tsx";


export default function Home(){
  const { theme } = useTheme();

  return (
    // The main app container, which will apply theme-specific styles from ThemeProvider
    <div className="full-app-container">
      {/* Conditional rendering for layout based on theme */}
      {theme === 'theme2' ? (
        <div className="app-layout-main">
          <aside className="sidebar">
            <h3>Navigation</h3>
            <ul>
              <li><a href="#">Dashboard</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Orders</a></li>
              <li><a href="#">Settings</a></li>
            </ul>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Support</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </aside>
          <main className="main-content-area-wrapper">
            <Product/>
          </main>
        </div>
      ) : (
        <Product/>
      )}
    </div>
  );
};
