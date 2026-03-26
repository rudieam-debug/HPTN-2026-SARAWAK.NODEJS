import React from 'react';

const FieldCard: React.FC<{ icon: string; label: string }> = ({ icon, label }) => (
  <div className="group relative h-full min-h-[180px] p-6 rounded-2xl bg-white dark:bg-background-card border border-gray-200 dark:border-white/5 hover:border-primary/50 transition-all duration-500 hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(244,192,37,0.1)] hover:-translate-y-1 flex flex-col items-center justify-center text-center overflow-hidden cursor-default">
    {/* Background Gradient on Hover */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    {/* Icon Container */}
    <div className="relative w-16 h-16 mb-5 flex items-center justify-center rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-500 z-10 group-hover:scale-110 group-hover:rotate-3 ease-out">
      <span className="material-symbols-outlined text-4xl text-gray-400 dark:text-gray-500 group-hover:text-primary transition-colors duration-300">
        {icon}
      </span>
    </div>
    
    {/* Label */}
    <h3 className="relative z-10 text-gray-900 dark:text-white font-bold text-lg leading-snug group-hover:text-primary transition-colors duration-300 font-display">
      {label}
    </h3>
    
    {/* Decorative corner accent */}
    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
         <span className="material-symbols-outlined text-primary/40 text-sm">north_east</span>
    </div>
  </div>
);

const Fields: React.FC = () => {
  const fields = [
    { icon: 'engineering', label: 'Kejuruteraan' },
    { icon: 'architecture', label: 'Seni Bina' },
    { icon: 'square_foot', label: 'Juruukur Bahan' },
    { icon: 'landscape', label: 'Seni Bina Landskap' },
    { icon: 'apartment', label: 'Perancang Bandar' },
    { icon: 'science', label: 'Sains' },
    { icon: 'biotech', label: 'Teknologi Makanan' },
    { icon: 'computer', label: 'IT & Komputer' },
  ];

  return (
    <section className="py-24 px-6 relative bg-background-light dark:bg-[#181611] transition-colors overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-[1200px] mx-auto w-full relative z-10">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block animate-fade-in-up">Profesion & Kepakaran</span>
                <h2 className="text-gray-900 dark:text-white text-5xl md:text-7xl font-bold leading-tight mb-8 animate-fade-in-up font-['Arial_Black'] tracking-tight" style={{ animationDelay: '0.1s' }}>
                    Bidang Teknikal Yang Diiktiraf
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    HPTN 2026 mengiktiraf sumbangan pelbagai disiplin teknikal yang menjadi tulang belakang pembangunan infrastruktur, ekonomi digital, dan kelestarian negara.
                </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:gap-8">
                {fields.map((field, idx) => (
                    <div key={idx} className="animate-fade-in-up h-full" style={{ animationDelay: `${0.1 + (idx * 0.05)}s` }}>
                         <FieldCard icon={field.icon} label={field.label} />
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Fields;