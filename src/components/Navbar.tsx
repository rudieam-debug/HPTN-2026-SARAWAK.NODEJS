import React, { useState, useEffect } from 'react';
import { MENU_ITEMS, IMAGES } from '../constants';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Initialize from localStorage to avoid icon flicker
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
       return localStorage.getItem('theme') !== 'light';
    }
    return true;
  });
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Sync DOM with state on mount in case index.html script didn't catch it for some reason
    // or if the user manually manipulated classes.
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for sticky header

      // Find the section currently in view
      const sections = MENU_ITEMS.map(item => item.href.substring(1)).filter(id => id !== '');
      
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = section;
          }
        }
      }
      
      // Special case for Hero (top of page)
      if (scrollPosition < 500) {
        setActiveSection(''); // Or 'home' if you have an ID for it
      } else {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-white/10 bg-white/90 dark:bg-[#181611]/90 backdrop-blur-md transition-colors duration-300 shadow-sm">
      <div className="flex items-center justify-between whitespace-nowrap px-4 py-4 max-w-[1400px] mx-auto w-full">
        
        {/* Brand */}
        <div className="hidden lg:flex w-1/4 items-center">
           <a href="#" className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2 group shrink-0">
             <img src={IMAGES.OFFICIAL_LOGO} alt="Official Logo" className="h-8 w-auto max-w-[140px] xl:max-w-[180px] object-contain group-hover:scale-110 transition-transform duration-300" />
             <img src={IMAGES.NAV_LOGO} alt="HPTN Logo" className="h-8 w-auto max-w-[140px] xl:max-w-[180px] object-contain group-hover:scale-110 transition-transform duration-300" />
             <span className="text-lg xl:text-xl">#HPTN2026</span>
           </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 justify-center p-1 bg-gray-100 dark:bg-white/5 rounded-full border border-gray-200 dark:border-white/5" aria-label="Desktop Navigation">
          {MENU_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className={`
                  relative px-3 xl:px-5 py-2 rounded-full text-[13px] xl:text-[14px] font-bold tracking-tight transition-all duration-300 whitespace-nowrap
                  ${isActive 
                    ? 'text-black bg-primary shadow-md' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10'}
                `}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop Theme Toggle */}
        <div className="hidden lg:flex justify-end w-1/4">
            <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary border border-gray-200 dark:border-transparent"
            aria-label={isDarkMode ? "Tukar ke mod cerah" : "Tukar ke mod gelap"}
            title={isDarkMode ? "Mod Cerah" : "Mod Gelap"}
            >
            <span className="material-symbols-outlined fill-current">
                {isDarkMode ? 'light_mode' : 'dark_mode'}
            </span>
            </button>
        </div>

        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between w-full gap-2">
          <a href="#" className="flex items-center gap-1.5 sm:gap-2 min-w-0 shrink">
             <img src={IMAGES.OFFICIAL_LOGO} alt="Official Logo" className="h-6 sm:h-8 w-auto max-w-[35vw] sm:max-w-[200px] object-contain shrink" />
             <img src={IMAGES.NAV_LOGO} alt="HPTN Logo" className="h-6 sm:h-8 w-auto max-w-[35vw] sm:max-w-[200px] object-contain shrink" />
             <span className="text-sm sm:text-base font-bold text-gray-900 dark:text-white shrink-0">#HPTN2026</span>
          </a>
          <div className="flex items-center gap-1 shrink-0">
            <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors focus:outline-none"
            >
                <span className="material-symbols-outlined">
                    {isDarkMode ? 'light_mode' : 'dark_mode'}
                </span>
            </button>
            <button 
                className="text-gray-900 dark:text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
            >
                <span className="material-symbols-outlined" aria-hidden="true">{isMobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <nav 
          id="mobile-menu"
          className="lg:hidden bg-white dark:bg-[#181611] border-b border-gray-200 dark:border-white/10 px-4 py-4 flex flex-col gap-2 shadow-lg animate-fade-in-up"
          aria-label="Mobile Navigation"
        >
          {MENU_ITEMS.map((item) => {
             const isActive = activeSection === item.href.substring(1);
             return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`
                    text-[15px] font-bold block py-3 px-4 rounded-lg transition-colors
                    ${isActive 
                        ? 'bg-primary/10 text-primary border border-primary/20' 
                        : 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/5'}
                  `}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
             );
          })}
        </nav>
      )}
    </header>
  );
};

export default Navbar;