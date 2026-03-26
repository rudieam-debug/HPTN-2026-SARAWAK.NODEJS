import React from 'react';
import { IMAGES } from '../constants';

const RationaleItem: React.FC<{ title: string; desc: string; icon: string }> = ({ title, desc, icon }) => (
    <div className="flex gap-4 items-start p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
            <span className="material-symbols-outlined text-primary">{icon}</span>
        </div>
        <div>
            <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-1">{title}</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
        </div>
    </div>
);

const LogoRationale: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-background-light dark:bg-background-dark relative overflow-hidden" id="logo-rationale">
            <div className="max-w-[1200px] mx-auto w-full relative z-10">
                
                {/* Centered Section Header */}
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block animate-fade-in-up">Identiti Visual</span>
                    <h2 className="text-gray-900 dark:text-white text-5xl md:text-6xl font-bold leading-tight mb-8 animate-fade-in-up font-['Arial_Black'] tracking-tight" style={{ animationDelay: '0.1s' }}>
                        Justifikasi Logo
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-16">
                    
                    {/* Image Column */}
                    <div className="w-full lg:w-1/2 flex flex-col sm:flex-row items-center justify-center gap-8 order-1 lg:order-1 animate-fade-in-up">
                        <div className="relative group w-full sm:w-[55%] max-w-[300px]">
                            <img 
                                src={IMAGES.OFFICIAL_LOGO} 
                                alt="Official Logo" 
                                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="relative group w-full sm:w-[45%] max-w-[240px]">
                            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
                            <img 
                                src={IMAGES.LOGO_RATIONALE} 
                                alt="Logo #HPTN2026" 
                                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-2">
                        
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            Logo #HPTN2026 mengangkat imej ikonik <span className="font-bold text-primary">Bangunan Dewan Undangan Negeri (DUN) Sarawak</span> sebagai motif utama bagi melambangkan identiti Sarawak selaku tuan rumah serta manifestasi kehebatan kejuruteraan dan seni bina yang berjaya menggabungkan elemen warisan dengan teknologi moden.
                        </p>

                        <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            <RationaleItem 
                                icon="palette"
                                title="Warna Keemasan & Hitam"
                                desc="Menonjolkan imej prestij, kecemerlangan dan etika profesionalisme warga teknikal."
                            />
                            <RationaleItem 
                                icon="format_shapes"
                                title="Tipografi Tebal & Berstruktur"
                                desc="Mencerminkan kekukuhan asas pembangunan infrastruktur serta kesalinghubungan (connectivity)."
                            />
                            <RationaleItem 
                                icon="verified"
                                title="Integriti & Dinamik"
                                desc="Menterjemahkan peranan profesion teknikal sebagai tonggak utama kemajuan negara yang berdaya saing tinggi."
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LogoRationale;