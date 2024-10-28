// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'; // Importujemy Link z react-scroll

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-gray-900 to-black fixed top-0 left-0 right-0 z-50 shadow-lg backdrop-blur-md bg-opacity-80">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center text-white">
        
        {/* Logo with Link to Home */}
        <Link to="/" className="text-3xl font-extrabold tracking-wider text-blue-400 animate-fadeIn hover:text-blue-500 transition duration-300">
          TechWave
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          <svg
            className="w-8 h-8 text-white transition-transform transform hover:scale-110"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </div>

        {/* Navigation */}
        <nav
          className={`absolute top-16 left-0 w-full bg-black bg-opacity-90 md:static md:bg-transparent md:flex md:items-center md:justify-center space-y-4 md:space-y-0 md:space-x-8 text-lg transition-all duration-300 transform ${
            menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 md:opacity-100 md:translate-y-0'
          } md:block`}
        >
          <ScrollLink
            to="technologies" // Zmień na nazwę id sekcji
            smooth={true}
            duration={500}
            className="block py-2 px-4 text-gray-300 hover:text-blue-400 transition duration-200 md:inline cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Technologie
          </ScrollLink>
          <ScrollLink
            to="achievements"
            smooth={true}
            duration={500}
            className="block py-2 px-4 text-gray-300 hover:text-blue-400 transition duration-200 md:inline cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Osiągnięcia
          </ScrollLink>
          <ScrollLink
            to="partners"
            smooth={true}
            duration={500}
            className="block py-2 px-4 text-gray-300 hover:text-blue-400 transition duration-200 md:inline cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Partnerzy
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="block py-2 px-4 text-gray-300 hover:text-blue-400 transition duration-200 md:inline cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Kontakt
          </ScrollLink>
        </nav>

        {/* CTA Button */}
        <Link
          to="/discover"
          className="hidden md:inline-block bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition transform duration-300 hover:scale-105 shadow-lg"
        >
          Rozpocznij
        </Link>
      </div>
    </header>
  );
};

export default Header;




