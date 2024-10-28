// src/pages/StartCollaboration.js
import React from 'react';

const StartCollaboration = () => {
  return (
    <section className="bg-gray-900 text-white py-16 mt-16"> {/* Zwiększony odstęp od góry */}
      {/* Sekcja Hero */}
      <div className="text-center container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6 text-blue-400">Rozpocznij Współpracę z TechWave</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
          Dołącz do naszych partnerów i odkryj, jak nasze rozwiązania mogą przekształcić Twój biznes. Skontaktuj się z nami, a my pomożemy Ci na każdym kroku.
        </p>
      </div>

      {/* Sekcja Korzyści */}
      <div className="container mx-auto px-4 mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-blue-400 mb-2">Innowacyjne Technologie</h3>
          <p className="text-gray-300">Wdrażamy najnowsze technologie, które wspierają rozwój Twojego biznesu.</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-blue-400 mb-2">Kompleksowe Wsparcie</h3>
          <p className="text-gray-300">Nasza ekipa oferuje profesjonalną pomoc na każdym etapie współpracy.</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-blue-400 mb-2">Skalowalność</h3>
          <p className="text-gray-300">Elastyczne rozwiązania, które rosną wraz z Twoim biznesem i dostosowują się do zmieniających potrzeb.</p>
        </div>
      </div>

      {/* Sekcja Formularza Kontaktowego */}
      <div className="container mx-auto px-4 mb-16 max-w-lg">
        <h2 className="text-3xl font-bold text-blue-400 text-center mb-6">Skontaktuj się z nami</h2>
        <form className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-300 text-lg font-semibold mb-2" htmlFor="name">
              Imię
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-lg font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-lg font-semibold mb-2" htmlFor="message">
              Wiadomość
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Wyślij Wiadomość
          </button>
        </form>
      </div>
    </section>
  );
};

export default StartCollaboration;
