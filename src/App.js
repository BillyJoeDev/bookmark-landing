import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar'
import Features from './components/Features/Features'
import Download from './components/Download/Download';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="landing-page-wrapper">
      <Navbar />
      <Hero />
      <Features />
      <Download />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
