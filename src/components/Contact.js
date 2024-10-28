// src/components/Contact.js
import React from 'react';

const Contact = () => (
  <section id="contact" className="py-20 bg-gray-900 text-white text-center">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-semibold mb-10">Skontaktuj się z nami</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <form className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Imię"
            className="w-full px-4 py-2 mb-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 mb-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Twoja wiadomość"
            className="w-full px-4 py-2 mb-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Wyślij wiadomość
          </button>
        </form>
        <div className="max-w-md mx-auto">
          <iframe
            title="map"
            className="w-full h-full rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2810566666526!2d144.96316!3d-37.814107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43bfebd4f1%3A0xc25aa4a5bcd1fd4!2sAustralia!5e0!3m2!1sen!2sus!4v1585030483429!5m2!1sen!2sus"
            style={{ border: 0 }}
            allowFullScreen=""
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;

