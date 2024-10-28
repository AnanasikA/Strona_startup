// src/components/Features.js
import React from 'react';

const features = [
  {
    title: 'Inteligentna Automatyzacja',
    description: 'Robotyka, która pracuje autonomicznie i efektywnie, oszczędzając czas i zasoby.',
    iconPath: '/images/automation.png',
    details: 'Nasze rozwiązania automatyzacyjne integrują AI i IoT, umożliwiając elastyczne i skalowalne procesy produkcyjne.',
  },
  {
    title: 'Analiza IoT',
    description: 'Dane w czasie rzeczywistym umożliwiające lepsze decyzje biznesowe.',
    iconPath: '/images/iot.png',
    details: 'Zbieramy i analizujemy dane IoT, które pomagają firmom w optymalizacji operacyjnej.',
  },
  {
    title: 'Zabezpieczenia Cybernetyczne',
    description: 'Zaawansowane zabezpieczenia, które chronią Twoje dane.',
    iconPath: '/images/cybersecurity.png',
    details: 'Nasze systemy zapewniają wysoką ochronę przed zagrożeniami cybernetycznymi i utrzymanie prywatności danych.',
  },
  {
    title: 'Optymalizacja AI',
    description: 'Sztuczna inteligencja podnosząca efektywność operacyjną.',
    iconPath: '/images/ai.png',
    details: 'Nasze algorytmy AI umożliwiają predykcyjne utrzymanie oraz optymalizację procesów.',
  },
];

const Features = () => (
  <section id="technologies" className="py-20 bg-gray-900 text-white text-center">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-semibold mb-10">Nasze Technologie</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 relative group overflow-hidden">
            {/* Wyświetlenie ikony PNG */}
            <img src={feature.iconPath} alt={feature.title} className="w-16 h-16 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-90 text-gray-100 opacity-0 group-hover:opacity-100 transition duration-300">
              <p className="p-4">{feature.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;



