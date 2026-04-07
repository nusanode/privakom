import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Import komponen floating
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Courses />
      <Testimonials />
      <Contact />
      <Footer />
      
      {/* Floating Button */}
      <ScrollToTop />
      <FloatingWhatsApp />
    </>
  );
}

export default App;