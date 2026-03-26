import React from 'react';

const PREMIER_SPEAKER = {
  name: "YAB Datuk Patinggi Tan Sri (Dr) Abang Haji Abdul Rahman Zohari Bin Tun Datuk Abang Haji Openg",
  role: "Premier Sarawak",
  org: "Kerajaan Sarawak",
  bio: "Peneraju wawasan ekonomi digital Sarawak dan strategi transformasi infrastruktur pasca-Covid (PCDS 2030).",
  image: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Premier_Sarawak_Abang_Johari_February_2024.jpg"
};

const Amanat: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-white dark:bg-background-card relative transition-colors" id="amanat">
            <div className="max-w-[1200px] mx-auto w-full relative z-10">
                 {/* Standard Section Header */}
                 <div className="text-center mb-10">
                    <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block animate-fade-in-up">Tetamu Kehormat</span>
                 </div>

                 {/* Spotlight Component */}
                 <div className="w-full max-w-5xl mx-auto relative group" aria-label="Ucapan Perasmian">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary via-white/20 to-primary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-background-card border border-gray-200 dark:border-white/5 shadow-2xl flex flex-col md:flex-row items-center">
                         {/* Image Section */}
                         <div className="w-full md:w-[45%] h-[400px] md:h-[550px] relative overflow-hidden">
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `url("${PREMIER_SPEAKER.image}")`, backgroundPosition: 'top center' }}
                                role="img"
                                aria-label={`Gambar ${PREMIER_SPEAKER.name}`}
                            >
                                 <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="w-full md:w-[55%] p-8 md:p-12 flex flex-col justify-center bg-white dark:bg-background-card">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block animate-fade-in-up">Ucapan Perasmian</span>
                            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 leading-tight font-display">
                                YAB Datuk Patinggi Tan Sri (Dr)<br />
                                Abang Haji Abdul Rahman Zohari<br />
                                Bin Tun Datuk Abang Haji Openg
                            </h3>
                            <div className="text-primary font-bold text-lg mb-1">{PREMIER_SPEAKER.role}</div>
                            <div className="text-gray-500 dark:text-gray-400 text-sm font-bold uppercase tracking-wide mb-8">{PREMIER_SPEAKER.org}</div>

                            <div className="relative">
                                <span className="absolute -top-4 -left-2 text-6xl text-gray-200 dark:text-gray-800 font-serif opacity-50">"</span>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg pl-6 italic relative z-10 border-l-4 border-primary/30">
                                    {PREMIER_SPEAKER.bio}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Amanat;