// src/components/Partners.js
import React from 'react';

const partners = [
  { name: 'Partner 1', logo: '/images/partner1.png' },
  { name: 'Partner 2', logo: '/images/partner2.png' },
  { name: 'Partner 3', logo: '/images/partner3.png' },
  { name: 'Partner 4', logo: '/images/partner4.png' },
];

const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-gray-900 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold mb-10">Nasi Partnerzy</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Współpracujemy z liderami branży, aby dostarczać najnowocześniejsze technologie i innowacyjne rozwiązania.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
