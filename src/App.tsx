import { BrowserRouter, Routes, Route } from 'react-router';
import { Navbar, Footer } from './components/Layout';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import About from './pages/About';
import CareerJourney from './pages/CareerJourney';
import Contact from './pages/Contact';
import FeatureDetail from './pages/FeatureDetail';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#f8f9fa] text-gray-900 selection:bg-purple-500/30 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/features/:slug" element={<FeatureDetail />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/career-journey" element={<CareerJourney />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
