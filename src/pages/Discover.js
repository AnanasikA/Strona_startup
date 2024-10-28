// src/pages/Discover.js
import React from 'react';
import { Link } from 'react-router-dom';

const Discover = () => {
  return (
    <section className="bg-gray-900 text-white">
      {/* Hero Section with Background Image */}
      <div className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/tech_background.jpg')" }}>
        <div className="bg-black bg-opacity-60 p-8 rounded-xl text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Odkryj Możliwości z TechWave</h1>
          <p className="text-xl text-gray-300 mb-6">
            Zaufaj naszym innowacyjnym rozwiązaniom, które przekształcą Twój biznes i pozwolą wyprzedzić konkurencję.
          </p>
          <Link to="/start-collaboration" className="mt-4 px-6 py-3 bg-blue-600 rounded-full text-white font-semibold hover:bg-blue-700 transition">
            Skontaktuj się z nami
          </Link>
        </div>
      </div>

      {/* Video Introduction Section */}
      <div className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-400 mb-6">Poznaj Nasze Technologie</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            Zobacz, jak nasze technologie mogą zrewolucjonizować Twoją firmę. Zapraszamy do obejrzenia krótkiego filmu prezentującego nasze rozwiązania.
          </p>
          <div className="relative w-full h-96 mx-auto">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/IPukuYb9xWw"
              title="TechWave Intro Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">Nasze Wartości</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            W TechWave cenimy innowację, zaufanie i jakość. Naszym celem jest wspieranie firm w osiąganiu sukcesów, dostarczając technologie, które naprawdę działają.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-400 mb-2">Innowacyjność</h3>
              <p className="text-gray-300">Zawsze na bieżąco z technologią, tworzymy rozwiązania z myślą o przyszłości.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-400 mb-2">Jakość</h3>
              <p className="text-gray-300">Nasze technologie są sprawdzone, przetestowane i gotowe do działania.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-400 mb-2">Zaufanie</h3>
              <p className="text-gray-300">Budujemy relacje oparte na zaufaniu, aby wspólnie osiągać cele.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">Nasze Usługi</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            Poznaj technologie, które mogą odmienić Twój biznes – od automatyzacji po sztuczną inteligencję i analizę IoT.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-900 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">Automatyzacja</h3>
              <p className="text-gray-300">Optymalizacja procesów produkcyjnych i operacyjnych poprzez najnowsze technologie.</p>
            </div>
            <div className="p-8 bg-gray-900 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">Analiza IoT</h3>
              <p className="text-gray-300">Real-time dane, które pomogą Ci podejmować lepsze decyzje.</p>
            </div>
            <div className="p-8 bg-gray-900 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">Sztuczna Inteligencja</h3>
              <p className="text-gray-300">Zwiększ efektywność dzięki inteligentnym systemom i automatyzacji zadań.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Collaboration Process Section */}
      <div className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-400 mb-8">Jak Pracujemy</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            Współpraca z TechWave to prosty i efektywny proces, dzięki któremu Twoja firma osiągnie zamierzone cele.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-8 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">1. Analiza</h3>
              <p className="text-gray-300">Rozpoczynamy od zrozumienia Twoich potrzeb i analizujemy aktualny stan Twojej firmy.</p>
            </div>
            <div className="p-8 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">2. Planowanie</h3>
              <p className="text-gray-300">Tworzymy dokładny plan, który pozwala zminimalizować ryzyko i zoptymalizować działania.</p>
            </div>
            <div className="p-8 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">3. Implementacja</h3>
              <p className="text-gray-300">Wdrażamy nasze technologie, dostosowując je do potrzeb Twojej firmy.</p>
            </div>
            <div className="p-8 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">4. Wsparcie</h3>
              <p className="text-gray-300">Oferujemy stałe wsparcie techniczne, aby Twoja firma mogła korzystać z pełni możliwości naszych rozwiązań.</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">Najczęściej Zadawane Pytania</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Czy oferujecie wsparcie techniczne?</h3>
              <p className="text-gray-300">Tak, zapewniamy pełne wsparcie techniczne dla wszystkich wdrożonych przez nas rozwiązań.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Jakie są korzyści z analizy IoT?</h3>
              <p className="text-gray-300">Analiza IoT umożliwia bieżące monitorowanie danych i szybsze podejmowanie decyzji biznesowych.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Czy usługi TechWave są dostosowane do różnych branż?</h3>
              <p className="text-gray-300">Tak, nasze rozwiązania można dostosować do specyficznych potrzeb różnych sektorów.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Jakie technologie stosujecie w automatyzacji?</h3>
              <p className="text-gray-300">Stosujemy najnowsze technologie, takie jak robotyka, AI i analiza danych, aby zautomatyzować procesy.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-blue-600 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Przygotuj Swój Biznes na Przyszłość</h2>
          <p className="text-gray-100 mb-6 max-w-lg mx-auto">
            Zainwestuj w technologie, które przyniosą Ci zyski i przyciągną klientów. Z TechWave Twoje cele są na wyciągnięcie ręki.
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

export default Discover;


