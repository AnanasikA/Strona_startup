// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">

        {/* Sekcja z prawami autorskimi */}
        <div className="mt-8 text-center text-gray-400">
          &copy; {new Date().getFullYear()} TechWave. Wszelkie prawa zastrzeżone.
        </div>
    </footer>
  );
};

export default Footer;
