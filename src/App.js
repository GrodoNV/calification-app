import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import './index.css';

function App() {
  return (
    <Router>
      {/* Estilos del nav */}
      <nav className="bg-gradient-to-r from-blue-500 to-blue-700 p-4 shadow-xl">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo (si deseas agregarlo) */}
          <div className="text-white text-2xl font-bold">
            <Link to="/">Tech Store</Link>
          </div>
          
          {/* Enlaces de navegación */}
          <div className="space-x-8">
            <Link 
              to="/" 
              className="text-white text-lg hover:text-yellow-400 transition-all duration-200"
            >
              Home
            </Link>
            <Link 
              to="/contact" 
              className="text-white text-lg hover:text-yellow-400 transition-all duration-200"
            >
              Contactos
            </Link>
            <Link 
              to="/about" 
              className="text-white text-lg hover:text-yellow-400 transition-all duration-200"
            >
              Nosotros
            </Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
