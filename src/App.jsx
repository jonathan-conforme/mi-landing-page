// src/App.jsx

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Stats } from './components/Stats';
import { Features } from './components/Features';
import { Footer} from './components/Footer';
import { Testimonials } from './components/Testimonials';



function App() {
  return (
    <div>
    <Navbar />
      <main>
        <Hero />
      <Services />
      <Stats />
      <Features />
      <Testimonials />
      <Footer />
      
        {/* Aquí puedes meter más secciones */}
      </main>
  
    </div>
  );
}

export default App;