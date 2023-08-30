
import React from 'react';
import './index.css'; 
import './App.css'; 
import ResponsiveNavbar from './Navbar';
import Footer from './Footer';
import Headers from './Header';
import About from './About';
import Features from './Features';


function App({ children }) {
  return (
    <div className="layout">
      <header className="header">
        <ResponsiveNavbar />
      </header>

      <main className="main">
        <Headers />
          <About />
          <Features />

          {children}
      </main>
      
      <footer className="footer">
       <Footer />
      </footer>
    </div>
  );
}

export default App;
