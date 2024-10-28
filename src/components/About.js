// src/components/Stats.js
import React, { useEffect, useState } from 'react';
import { FaProjectDiagram, FaUsers, FaShieldAlt } from 'react-icons/fa'; // Import ikon

const stats = [
  { label: 'Projekty', value: 250, icon: <FaProjectDiagram /> },
  { label: 'Klienci', value: 120, icon: <FaUsers /> },
  { label: 'Zaufanie', value: 99.9, icon: <FaShieldAlt /> },
];

const StatCounter = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (start === end) return;

    let totalDuration = duration;
    let incrementTime = (totalDuration / end) * 10;

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    
    return () => clearInterval(timer); // Wyczyszczenie interwału
  }, [value, duration]);

  return <span className="animate-pulse">{count}</span>;
};

const About = () => (
  <section id="achievements" className="py-20 bg-black text-white text-center">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-semibold mb-10" data-aos="fade-up">Nasze Osiągnięcia</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="p-6 rounded-lg shadow-lg bg-gray-800" data-aos="zoom-in" data-aos-delay={`${index * 100}`}>
            <div className="text-6xl text-blue-500 mb-4">
              {stat.icon}
            </div>
            <h3 className="text-6xl font-bold text-blue-400 animate-pulse">
              <StatCounter value={stat.value} />{stat.label === 'Zaufanie' && '%'}
            </h3>
            <p className="text-gray-300 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;




