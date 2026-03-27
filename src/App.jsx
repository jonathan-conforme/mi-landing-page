// src/App.jsx
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Stats } from './components/Stats';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Testimonials } from './components/Testimonials';
import { Precios } from './Pages/Team/precios';

// IMPORTANTE: Asegúrate de que esta ruta sea exacta a tus carpetas
import { Team } from './Pages/Team/team'; 

function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <Services />
      <Stats />
      <Features />
      <Testimonials />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/equipo" element={<Team />} />
        <Route path="/precios" element={<Precios />} />

      </Routes>
 
      <Footer />
    </BrowserRouter>
  );
}

export default App;