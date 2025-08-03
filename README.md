# 🌍 Multi-Theme Switcher App

Switcher is a responsive React + TypeScript application that fetches product data from a public API and supports **dynamic theming**, including light, dark, and colorful themes. The app demonstrates use of `Context`, `localStorage`, conditional layouts, and modular components.

## 🚀 Features

- ✅ 3 Unique Themes:
  - **Theme 1** – Minimalist Light Theme with clean UI
  - **Theme 2** – Dark Mode with sidebar layout and bold serif fonts
  - **Theme 3** – Colorful card-based layout with playful Google fonts
- ✅ Persistent theme selection via `localStorage`
- ✅ Dynamic product fetching via [Fake Store API](https://fakestoreapi.com/)
- ✅ Responsive layout (CSS grid + media queries)
- ✅ Components:
  - `Header` with logo and theme selector
  - `Product` grid with dynamic API data
  - `NotFound` fallback
- ✅ Pages: `Home`, `About`, `Contact`
- ✅ Clear code comments and documentation

---

## 🏗️ Project Structure
src/
├── components/
│ ├── Header.tsx
│ ├── Product.tsx
│ ├── ThemeSelector.tsx
│ └── NotFound.tsx
├── context/
│ └── ThemeContext.tsx
├── pages/
│ ├── Home.tsx
│ ├── About.tsx
│ └── Contact.tsx
├── App.tsx
├── index.tsx
└── App.css


---

## ⚙️ Setup Instructions

1. **Clone the repo**
```bash
git clone https://github.com/Kans2/kannan-s-Mern-Stack-Developer.git
cd Theme-Switcher


npm install
# or
yarn install


npm run dev
# or
yarn dev

Open your browser and visit: http://localhost:5173
 ```

##🧠 Theme Logic
Themes are handled through ThemeContext.tsx:

Theme values: 'theme1' | 'theme2' | 'theme3'

Context stores current theme and provides setTheme()

Theme persists using localStorage

Applied globally via CSS class on the root wrapper

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const getInitialTheme = (): Theme => localStorage.getItem('app-theme') as Theme || 'theme1';

---

##📄 Styling Notes
Styles are defined in App.css

Theme-specific classes like .theme1, .theme2, .theme3 are applied to the root <div className="app-wrapper">

Smooth transitions between themes using transition in CSS

Responsive product cards use grid layout

---
##📬 API Reference
All products are fetched from:

https://fakestoreapi.com/products

##🧾 Additional Notes
Built with React 18, TypeScript, Vite

No UI framework used (pure CSS)

Google Fonts used in Theme 3 (can be configured in index.html)

---
🙌 Credits
Built by Kannan as part of a themed React+TS showcase.









