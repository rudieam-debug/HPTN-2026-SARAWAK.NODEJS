import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import LogoRationale from './components/LogoRationale';
import History from './components/History';
import Fields from './components/Fields';
import Program from './components/Program';
import Registration from './components/Registration';
import Location from './components/Location';
import Partners from './components/Partners';
import FAQ from './components/FAQ';
import BottomBanner from './components/BottomBanner';
import Footer from './components/Footer';
import Divider from './components/Divider';
import ErrorBoundary from './components/ErrorBoundary';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 p-1 rounded-full bg-background-card/80 backdrop-blur border border-primary/20 shadow-lg text-primary transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(244,192,37,0.4)] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Kembali ke atas"
    >
      <div className="relative w-12 h-12 flex items-center justify-center">
        {/* Progress Circle SVG */}
        <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90" viewBox="0 0 36 36">
           <path
            className="text-gray-700"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeOpacity="0.3"
          />
          <path
            className="text-primary transition-all duration-100 ease-out"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray={`${scrollProgress}, 100`}
          />
        </svg>
        <span className="material-symbols-outlined text-2xl relative z-10">arrow_upward</span>
      </div>
    </button>
  );
};

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-300 selection:bg-primary/30">
        <Navbar />
        <main>
          <Hero />
          <Divider />
          <About />
          <Divider />
          <Stats />
          <Divider />
          <LogoRationale />
          <Divider />
          <History />
          <Divider />
          <Fields />
          <Divider />
          <Program />
          <Divider />
          <Registration />
          <Divider />
          <Location />
          <Divider />
          <Partners />
          <Divider />
          <FAQ />
          <BottomBanner />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </ErrorBoundary>
  );
};


export default App;