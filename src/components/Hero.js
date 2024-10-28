// src/components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-white text-center bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Animowane tło SVG */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 400"
          style={{
            backgroundColor: '#0a0a14',
            opacity: 0.6,
          }}
        >
          <g fill="none" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.3">
            {[...Array(40)].map((_, x) =>
              [...Array(20)].map((_, y) => (
                <circle key={`${x}-${y}`} cx={x * 25} cy={y * 25} r="2" className="animate-pulse" />
              ))
            )}
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4" data-aos="fade-up">
          Witaj w <span className="text-blue-400">TechWave</span>
        </h1>
        <p className="text-2xl md:text-3xl mb-8 max-w-2xl" data-aos="fade-up" data-aos-delay="200">
          Nasza technologia automatyzacji i inteligentnych rozwiązań pomaga firmom na całym świecie osiągać nowe szczyty.
        </p>
        <div className="flex justify-center space-x-4" data-aos="fade-up" data-aos-delay="400">
          <a
            href="/start"
            className="px-8 py-4 bg-blue-500 rounded-lg font-semibold text-white transition transform duration-300 hover:bg-blue-600 hover:scale-105"
          >
            Odkryj możliwości
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent border-2 border-blue-500 rounded-lg font-semibold text-white transition transform duration-300 hover:bg-blue-500 hover:text-white hover:scale-105"
          >
            Skontaktuj się z nami
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;









