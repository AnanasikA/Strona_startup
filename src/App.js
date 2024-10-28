// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Start from './pages/Start';
import Discover from './pages/Discover';
import StartCollaboration from './pages/StartCollaboration';

function App() {
  return (
    <Router>
      <Header />
      <main className="bg-gray-100">
        <Routes>
          {/* Strona główna */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <About />
                <Partners />
                <Contact />
              </>
            }
          />
          <Route path="/start" element={<Start />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/start-collaboration" element={<StartCollaboration />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
