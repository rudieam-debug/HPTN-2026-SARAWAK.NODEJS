import React from 'react';

const TIMELINE_DATA = [
  { 
    year: "2026", 
    theme: "Merakyatkan Teknologi, Mengglobalkan Inovasi",
    icon: "public" 
  },
  { 
    year: "2025", 
    theme: "Mengorak Inovasi Masa Depan Demi Kemanusiaan",
    icon: "volunteer_activism" 
  },
  { 
    year: "2024", 
    theme: "Profesion Teknikal Peneraju Kecemerlangan Teknologi",
    icon: "stars" 
  },
  { 
    year: "2023", 
    theme: "Profesion Teknikal Pemacu Pembangunan Malaysia Madani",
    icon: "engineering" 
  },
  { 
    year: "2022", 
    theme: "Mengungguli Teknologi, Melonjak Pembangunan",
    icon: "precision_manufacturing" 
  },
  { 
    year: "2021", 
    theme: "Menggerak Negara, Melangkaui Aspirasi",
    icon: "trending_up" 
  },
  { 
    year: "2020", 
    theme: "Masa Depan Adalah Kita",
    icon: "visibility" 
  },
  { 
    year: "2019", 
    theme: "Profesion Teknikal Teras Kemakmuran Bersama",
    icon: "handshake" 
  },
  { 
    year: "2018", 
    theme: "Profesion Teknikal Pelopor Pembangunan",
    icon: "flag" 
  }
];

const History: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white dark:bg-background-card transition-colors" id="sejarah">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block animate-fade-in-up">Imbasan Sejarah</span>
          <h2 className="text-gray-900 dark:text-white text-5xl md:text-7xl font-bold leading-tight mb-8 animate-fade-in-up font-['Arial_Black'] tracking-tight" style={{ animationDelay: '0.1s' }}>Garis Masa Sambutan HPTN</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Perjalanan mengiktiraf dan memperkasakan profesion teknikal di Malaysia sepanjang dekad yang lalu.
          </p>
        </div>
        
        <div className="relative mb-20">
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:border-border-dark md:-ml-0.5"></div>
          <div className="space-y-12">
            {TIMELINE_DATA.map((item, index) => (
              <div key={item.year} className="relative flex flex-col md:flex-row items-start md:items-center group">
                {/* Left Side Container (Content for Even index, Spacer for Odd index) */}
                <div className={`md:w-1/2 md:pr-12 ${index % 2 === 0 ? 'md:text-right pl-12 md:pl-0' : 'hidden md:block'}`}>
                  {index % 2 === 0 && (
                    <div className="group-hover:-translate-x-2 transition-transform duration-300">
                      <h3 className="text-primary text-2xl font-bold font-display">{item.year}</h3>
                      <h4 className="text-gray-900 dark:text-white text-lg font-medium mt-1 leading-snug">{item.theme}</h4>
                    </div>
                  )}
                </div>

                {/* Center Icon */}
                <div className={`absolute left-0 md:left-1/2 w-10 h-10 rounded-full border-4 border-white dark:border-background-card md:-ml-5 flex items-center justify-center z-10 transition-all duration-300 shadow-sm
                  ${item.year === '2026' ? 'bg-primary scale-110 shadow-[0_0_20px_rgba(244,192,37,0.5)]' : 'bg-gray-200 dark:bg-[#393528] group-hover:bg-primary group-hover:scale-110'}`}>
                  <span className={`material-symbols-outlined text-sm font-bold ${item.year === '2026' ? 'text-black' : 'text-gray-600 dark:text-white group-hover:text-black'}`} aria-hidden="true">
                    {item.icon}
                  </span>
                </div>

                {/* Right Side Container (Content for Odd index, Spacer for Even index) */}
                <div className={`md:w-1/2 md:pl-12 ${index % 2 !== 0 ? 'pl-12 md:text-left' : 'hidden md:block'}`}>
                   {index % 2 !== 0 && (
                    <div className="group-hover:translate-x-2 transition-transform duration-300">
                      <h3 className="text-primary text-2xl font-bold font-display">{item.year}</h3>
                      <h4 className="text-gray-900 dark:text-white text-lg font-medium mt-1 leading-snug">{item.theme}</h4>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Single History Image */}
        <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden border border-gray-200 dark:border-border-dark bg-white dark:bg-background-card shadow-2xl group">
           <img 
             src="https://ik.imagekit.io/z7yhsbzej/HPTN%20History.png" 
             alt="Infografik Sejarah HPTN" 
             referrerPolicy="no-referrer"
             className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-6 left-6 z-10 pointer-events-none">
              <span className="px-3 py-1 bg-black/60 backdrop-blur rounded text-xs font-bold text-white uppercase tracking-wider border border-white/10">
                  Lakaran Sejarah
              </span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default History;