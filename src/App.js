import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar'
import Features from './components/Features/Features'

function App() {
  return (
    <div className="landing-page-wrapper">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}

export default App;
