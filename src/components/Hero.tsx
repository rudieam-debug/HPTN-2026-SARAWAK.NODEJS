import React, { useState, useEffect } from 'react';
import { IMAGES, HERO_SLIDES } from '../constants';

const TimeBox: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center justify-center bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-3 min-w-[80px] md:min-w-[100px] hover:border-primary/30 transition-colors">
    <span key={value} className="text-3xl md:text-4xl font-bold text-white font-display mb-1 animate-count-pulse inline-block">
      {value < 10 ? `0${value}` : value}
    </span>
    <span className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-widest">
      {label}
    </span>
  </div>
);

const ShareButton: React.FC<{ platform: 'facebook' | 'twitter' | 'linkedin'; url: string }> = ({ platform, url }) => {
  let href = '';
  let icon = null;

  switch (platform) {
    case 'facebook':
      href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
      icon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      );
      break;
    case 'twitter':
      href = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent("Sertai kami di #HPTN2026 Sarawak!")}`;
      icon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
           <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
      break;
    case 'linkedin':
      href = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
      icon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      );
      break;
  }

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-primary hover:text-background-dark hover:border-primary hover:scale-110 transition-all duration-300"
      aria-label={`Share on ${platform}`}
    >
      {icon}
    </a>
  );
};

const TypewriterText: React.FC<{ text: string }> = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let i = 0;
    setDisplayText(''); // Reset on text change
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(() => text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 20); // 20ms per char speed
    
    return () => clearInterval(timer);
  }, [text]);

  return (
    <span>
      {displayText}
      <span className="inline-block w-[2px] h-[1.2em] bg-primary ml-1 align-middle animate-cursor-blink"></span>
    </span>
  );
};

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Countdown timer logic
  useEffect(() => {
    const targetDate = new Date('2026-12-01T00:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  // Carousel auto-rotation logic
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  // Parallax scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
  };

  return (
    <section className="relative w-full overflow-hidden min-h-[85vh]">
      {/* Background Carousel with Parallax */}
      {/* Increased height and top offset to allow for parallax movement without gaps */}
      <div 
        className="absolute -top-[20%] left-0 w-full h-[140%] z-0 will-change-transform"
        style={{ transform: `translate3d(0, ${scrollY * 0.4}px, 0)` }}
      >
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Gradient Overlay */}
            <div 
                className="absolute inset-0 z-10"
                style={{ background: 'linear-gradient(rgba(24, 22, 17, 0.7) 0%, rgba(24, 22, 17, 1) 100%)' }}
            ></div>
            {/* Image with Ken Burns effect */}
            <div
              className={`w-full h-full bg-cover bg-center transition-transform duration-[10000ms] ease-linear ${
                index === currentSlide ? 'scale-110' : 'scale-100'
              }`}
              style={{ backgroundImage: `url("${slide}")` }}
            ></div>
          </div>
        ))}
      </div>

      {/* Robot Overlay with Independent Parallax */}
      <div className="absolute -bottom-24 right-[-25%] lg:-bottom-32 lg:right-[-10%] xl:right-[-5%] z-[5] hidden md:block select-none opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          {/* Parallax Wrapper */}
          <div style={{ transform: `translate3d(0, ${scrollY * 0.15}px, 0)` }} className="will-change-transform">
             {/* Float Animation Wrapper */}
             <div className="animate-robot-float will-change-transform relative inline-block group/robot">
                {/* Robot Image */}
                <img 
                 src={IMAGES.ROBOT_HERO} 
                 alt="HPTN Robot" 
                 className="h-[110vh] lg:h-[150vh] w-auto object-contain drop-shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out group-hover/robot:scale-105 group-hover/robot:drop-shadow-[0_0_80px_rgba(244,192,37,0.6)] group-hover/robot:brightness-110 cursor-pointer relative z-10" 
               />
               
               {/* Shine Overlay */}
               <div 
                  className="absolute inset-0 z-20 pointer-events-none"
                  style={{
                    maskImage: `url(${IMAGES.ROBOT_HERO})`,
                    WebkitMaskImage: `url(${IMAGES.ROBOT_HERO})`,
                    maskSize: 'contain',
                    WebkitMaskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    WebkitMaskPosition: 'center',
                  }}
                >
                  <div className="absolute -inset-full w-[200%] h-full bg-gradient-to-r from-transparent via-white/70 to-transparent skew-x-[-25deg] animate-robot-shine" />
                </div>
             </div>
          </div>
      </div>

      {/* Carousel Navigation Arrows - Visible on all screens now */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 text-white/70 hover:text-primary hover:bg-black/50 border border-white/10 transition-all"
        aria-label="Previous Slide"
      >
        <span className="material-symbols-outlined text-3xl">chevron_left</span>
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 text-white/70 hover:text-primary hover:bg-black/50 border border-white/10 transition-all"
        aria-label="Next Slide"
      >
        <span className="material-symbols-outlined text-3xl">chevron_right</span>
      </button>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[85vh] px-4 py-20 text-center max-w-[1400px] mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16 mb-10 animate-fade-in-up w-full">
          <div className="flex flex-col items-center gap-3 group relative">
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            {/* Border Highlight Wrapper with Animation */}
            <div className="relative p-3 rounded-2xl border-2 border-white/5 group-hover:border-primary/50 group-hover:bg-white/5 transition-all duration-300">
               <img 
                alt="Jata Sarawak Emblem" 
                className="relative z-10 h-32 md:h-40 w-auto object-contain drop-shadow-[0_0_15px_rgba(244,192,37,0.3)] animate-subtle-pulse cursor-pointer" 
                src={IMAGES.JATA_SARAWAK} 
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mb-6">
          <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest text-primary uppercase border border-primary/30 rounded-full bg-primary/10 mb-4">
            Edisi Borneo
          </span>
        </div>

        {/* Hero Logos */}
        <div className="relative w-full max-w-[800px] mb-12 group mx-auto flex items-center justify-center gap-8">
            {/* Official Logo */}
            <div className="relative w-[55%] max-w-[360px]">
              <img 
                src={IMAGES.OFFICIAL_LOGO} 
                alt="Official Logo" 
                className="relative z-10 w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300" 
              />
            </div>

            {/* Hero Logo with Shine Effect */}
            <div className="relative w-[45%] max-w-[280px]">
              <img 
                src={IMAGES.HERO_LOGO} 
                alt="#HPTN2026 Logo" 
                className="relative z-10 w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300" 
              />
              {/* Shine overlay */}
              <div 
                className="absolute inset-0 z-20 pointer-events-none"
                style={{
                  maskImage: `url(${IMAGES.HERO_LOGO})`,
                  WebkitMaskImage: `url(${IMAGES.HERO_LOGO})`,
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskPosition: 'center',
                }}
              >
                <div className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white to-transparent skew-x-[-25deg] animate-shine" />
              </div>
            </div>
        </div>

        <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-[-0.033em] max-w-5xl drop-shadow-2xl mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          HARI PROFESION TEKNIKAL NEGARA <span className="bg-gradient-to-r from-[#FFD100] to-[#E01F26] bg-clip-text text-transparent inline-block">2026 SARAWAK</span>
        </h1>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center text-gray-300 mb-8 text-lg">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">calendar_month</span>
            <span>1 - 2 Disember 2026</span>
          </div>
          <div className="hidden md:block w-1 h-1 bg-gray-500 rounded-full"></div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">location_on</span>
            <span>BCCK, Kuching, Sarawak</span>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <TimeBox value={timeLeft.days} label="Hari" />
          <TimeBox value={timeLeft.hours} label="Jam" />
          <TimeBox value={timeLeft.minutes} label="Minit" />
          <TimeBox value={timeLeft.seconds} label="Saat" />
        </div>

        <div className="text-white/80 text-lg md:text-xl font-normal leading-relaxed max-w-3xl mb-12 min-h-[3.5rem]">
          <TypewriterText text="Meraikan Kecemerlangan Profesion Teknikal di Bumi Kenyalang. Menghubungkan inovasi masa depan dengan tradisi kejuruteraan yang mampan." />
        </div>

        <div className="flex flex-wrap gap-4 justify-center w-full">
          <a href="#pendaftaran" className="flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-[#181611] text-base font-bold transition-all duration-300 min-w-[160px] animate-btn-pulse hover:animate-none hover:scale-105 hover:bg-[#ffe066] hover:shadow-[0_0_20px_rgba(244,192,37,0.6)]">
            <span className="material-symbols-outlined mr-2 text-[20px]">how_to_reg</span>
            Pendaftaran
          </a>
          <a href="#program" className="flex items-center justify-center rounded-lg h-12 px-6 bg-[#393528] text-white text-base font-bold border border-[#544e3b] hover:bg-[#544e3b] transition-colors min-w-[160px]">
            <span className="material-symbols-outlined mr-2 text-[20px]">newspaper</span>
            Berita Terkini
          </a>
          <a href="#pautan" className="flex items-center justify-center rounded-lg h-12 px-6 bg-transparent text-white text-base font-bold border border-white/20 hover:bg-white/10 transition-colors min-w-[160px]">
            <span className="material-symbols-outlined mr-2 text-[20px]">assignment</span>
            Soal Selidik
          </a>
        </div>
        
        {/* Learn More Button */}
        <div className="mt-6 w-full flex justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a href="#mengenai" className="px-8 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 text-white/80 hover:text-white transition-all text-sm font-bold uppercase tracking-widest backdrop-blur-sm flex items-center gap-2 group">
                Ketahui Lebih Lanjut
                <span className="material-symbols-outlined text-lg group-hover:translate-y-1 transition-transform">arrow_downward</span>
            </a>
        </div>

        {/* Social Share Buttons */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-3">
                <span className="text-white/40 text-xs font-bold tracking-[0.2em] uppercase">Kongsi Acara</span>
                <div className="w-12 h-[1px] bg-white/10 hidden md:block"></div>
            </div>
            <div className="flex gap-3">
                <ShareButton platform="facebook" url="https://hptn2026.sarawak.gov.my" />
                <ShareButton platform="twitter" url="https://hptn2026.sarawak.gov.my" />
                <ShareButton platform="linkedin" url="https://hptn2026.sarawak.gov.my" />
            </div>
        </div>
      </div>

      {/* Carousel Dots - Moved up to make room for scroll indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentSlide ? 'bg-primary w-8' : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-300"
        onClick={handleScrollDown}
      >
        <div className="animate-bounce-subtle flex flex-col items-center">
            <span className="text-[10px] text-white/80 uppercase tracking-widest font-bold mb-1">Skrol</span>
            <span className="material-symbols-outlined text-white text-2xl">keyboard_arrow_down</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;