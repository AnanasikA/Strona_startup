// src/pages/Start.js
import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section with Background Image and Overlay */}
      <div className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/tech_bg.jpg')" }}>
        <div className="bg-black bg-opacity-60 p-8 rounded-xl text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-6">Rozpocznij Przygodę z TechWave</h1>
          <p className="text-xl text-gray-300 mb-6">
            Dołącz do nas i odkryj moc technologii, która transformuje biznesy na całym świecie.
          </p>
          <Link to="/start-collaboration" className="mt-4 px-8 py-3 bg-blue-600 rounded-full text-white font-semibold hover:bg-blue-700 transition duration-300">
            Skontaktuj się z nami
          </Link>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold text-blue-400 mb-4">Dlaczego TechWave?</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
          TechWave oferuje kompleksowe wsparcie technologiczne i innowacyjne rozwiązania dopasowane do Twoich potrzeb.
        </p>
      </div>

      {/* Benefits Section with Icons */}
      <div className="container mx-auto px-4 mb-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 bg-gray-800 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300">
          <img src="/images/innovation.png" alt="Innowacyjność" className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-blue-400 mb-2">Innowacyjność</h3>
          <p className="text-gray-300">Najnowsze technologie wspierające dynamiczny rozwój Twojej firmy.</p>
        </div>
        <div className="p-8 bg-gray-800 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300">
          <img src="/images/support.png" alt="Wsparcie" className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-blue-400 mb-2">Pełne Wsparcie</h3>
          <p className="text-gray-300">Profesjonalna pomoc na każdym etapie współpracy.</p>
        </div>
        <div className="p-8 bg-gray-800 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300">
          <img src="/images/scalability.png" alt="Skalowalność" className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-blue-400 mb-2">Skalowalność</h3>
          <p className="text-gray-300">Elastyczne rozwiązania dopasowane do rozwoju Twojej firmy.</p>
        </div>
      </div>

      {/* How We Work Section with Steps */}
      <div className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-400 mb-8">Jak Rozpocząć Współpracę?</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
            <div className="p-8 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-2">1. Konsultacja</h3>
              <p className="text-gray-300">Indywidualne spotkanie, aby zrozumieć Twoje cele i potrzeby.</p>
            </div>
            <div className="p-8 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-2">2. Strategia</h3>
              <p className="text-gray-300">Przygotowanie szczegółowego planu działania, który dostosujemy do Twojego biznesu.</p>
            </div>
            <div className="p-8 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-2">3. Wdrożenie</h3>
              <p className="text-gray-300">Kompleksowe wdrożenie technologii i monitorowanie wyników.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Testimonial Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold text-blue-400 mb-6">Posłuchaj Naszych Klientów</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
          Zobacz, co mówią o nas nasi klienci i jakie korzyści przyniosła im współpraca z TechWave.
        </p>
        <div className="relative w-full h-96 mx-auto">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/qJ8aRl1UNgw"
            title="Testimonial Video"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Client Testimonials */}
      <div className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-400 mb-8">Opinie Klientów</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <p className="text-gray-300 italic mb-4">"TechWave pomogło nam zautomatyzować procesy i oszczędzić czas."</p>
              <p className="font-semibold">— Jan Nowak, CEO SmartTech</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <p className="text-gray-300 italic mb-4">"Dzięki TechWave, nasze zyski wzrosły o 25% w pierwszym roku."</p>
              <p className="font-semibold">— Anna Kowalska, Menedżer Operacyjny</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <p className="text-gray-300 italic mb-4">"Bezpieczeństwo i wsparcie TechWave to klucz do naszego sukcesu."</p>
              <p className="font-semibold">— Piotr Wiśniewski, CTO SoftLab</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Gotowy na Nową Technologiczną Przyszłość?</h2>
          <p className="text-gray-100 mb-6 max-w-lg mx-auto">
            Skontaktuj się z nami, aby dowiedzieć się, jak możemy wspólnie rozwijać Twój biznes.
          </p>
          <Link
            to="/start-collaboration"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300"
          >
            Rozpocznij współpracę
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Start;


