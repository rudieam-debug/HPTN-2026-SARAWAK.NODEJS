import React, { useState } from 'react';
import { VENUE_IMAGES } from '../constants';

const FacilityCard: React.FC<{ icon: string; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 h-full">
    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 shrink-0">
      <span className="material-symbols-outlined text-3xl">{icon}</span>
    </div>
    <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-2 font-display">{title}</h4>
    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

const AttractionCard: React.FC<{ image: string; title: string; category: string }> = ({ image, title, category }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-200 dark:border-white/5 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
    <div 
        className="h-72 w-full bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110 group-hover:rotate-1" 
        style={{ backgroundImage: `url("${image}")` }}
    ></div>
    {/* Enhanced Gradient for Contrast */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>
    
    <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
        <span className="inline-block px-3 py-1 mb-2 text-[10px] font-bold uppercase tracking-widest text-black bg-primary rounded shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 delay-75">{category}</span>
        <h4 className="text-white font-bold text-xl md:text-2xl leading-tight drop-shadow-md group-hover:text-primary-50 transition-colors">{title}</h4>
        <div className="h-1 w-0 bg-primary mt-3 group-hover:w-16 transition-all duration-700 ease-out delay-100"></div>
    </div>
  </div>
);

const Location: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'venue' | 'destination' | 'map'>('venue');

  return (
    <section className="py-24 px-6 bg-white dark:bg-background-card transition-colors relative" id="lokasi">
       {/* Background accent */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block animate-fade-in-up">Hospitaliti & Fasiliti</span>
            <h2 className="text-gray-900 dark:text-white text-5xl md:text-7xl font-bold leading-tight mb-8 animate-fade-in-up font-['Arial_Black'] tracking-tight" style={{ animationDelay: '0.1s' }}>
                Lokasi & Destinasi
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Terokai Pusat Konvensyen Borneo Kuching (BCCK) dan keunikan Sarawak Bumi Kenyalang.
            </p>
        </div>

        {/* Custom Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {[
                { id: 'venue', label: 'Mengenai BCCK', icon: 'domain' },
                { id: 'destination', label: 'Menarik di Sarawak', icon: 'travel_explore' },
                { id: 'map', label: 'Peta & Akses', icon: 'map' }
            ].map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                        activeTab === tab.id 
                        ? 'bg-primary text-black shadow-lg shadow-primary/20 scale-105' 
                        : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10'
                    }`}
                >
                    <span className="material-symbols-outlined text-lg">{tab.icon}</span>
                    {tab.label}
                </button>
            ))}
        </div>

        <div className="min-h-[600px] transition-all duration-500 animate-fade-in-up">
            
            {/* VENUE TAB */}
            {activeTab === 'venue' && (
                <div className="space-y-16 animate-scale-in">
                    {/* Hero Section */}
                    <div className="relative rounded-3xl overflow-hidden h-[400px] group shadow-2xl">
                        <div 
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                            style={{ backgroundImage: `url("${VENUE_IMAGES.BCCK_EXTERIOR}")` }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-3xl">
                             <div className="flex items-center gap-3 mb-4">
                                <div className="h-1 w-12 bg-primary"></div>
                                <span className="text-white/80 uppercase tracking-widest text-sm font-bold">Venue Rasmi HPTN 2026</span>
                             </div>
                            <h3 className="text-white text-3xl md:text-5xl font-bold mb-4 font-display">Borneo Convention Centre Kuching</h3>
                            <p className="text-white/90 text-lg leading-relaxed max-w-2xl">
                                Pusat konvensyen bertaraf dunia pertama di Sarawak yang direka dengan inspirasi daun 'Ririk' dari hutan hujan tropika Borneo.
                            </p>
                        </div>
                    </div>

                    {/* Centre Guide Grid */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                             <h4 className="text-2xl font-bold text-gray-900 dark:text-white font-display">Fasiliti Pusat Konvensyen</h4>
                             <div className="h-[1px] flex-1 bg-gray-200 dark:bg-white/10"></div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <FacilityCard 
                                icon="apartment" 
                                title="Great Hall" 
                                desc="Kapasiti sehingga 5,000 delegasi untuk persidangan berskala besar."
                            />
                            <FacilityCard 
                                icon="meeting_room" 
                                title="14 Bilik Mesyuarat" 
                                desc="Ruang fleksibel dengan keluasan dari 97m² sehingga 453m²."
                            />
                            <FacilityCard 
                                icon="wifi" 
                                title="Ketersambungan" 
                                desc="WiFi berkelajuan tinggi untuk sehingga 8,000 pengguna serentak."
                            />
                            <FacilityCard 
                                icon="local_parking" 
                                title="800 Parkir" 
                                desc="Ruang parkir bawah tanah dan terbuka yang selamat dan mudah diakses."
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* DESTINATION TAB */}
            {activeTab === 'destination' && (
                <div className="space-y-16 animate-scale-in">
                    
                    {/* Intro Sarawak */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                             <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Selamat Datang Ke</span>
                             <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-display">Sarawak, Bumi Kenyalang</h3>
                             <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                                Sarawak adalah negeri terbesar di Malaysia, terkenal dengan hutan hujan tropika, kepelbagaian 27 etnik, dan keharmonian budaya yang unik.
                             </p>
                             
                             <div className="grid grid-cols-2 gap-6">
                                 <div className="p-4 bg-gray-50 dark:bg-white/5 rounded-xl border-l-4 border-primary">
                                     <span className="block text-2xl font-bold text-gray-900 dark:text-white mb-1">2.78 Juta</span>
                                     <span className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">Populasi</span>
                                 </div>
                                 <div className="p-4 bg-gray-50 dark:bg-white/5 rounded-xl border-l-4 border-primary">
                                     <span className="block text-2xl font-bold text-gray-900 dark:text-white mb-1">124,450 km²</span>
                                     <span className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">Keluasan</span>
                                 </div>
                             </div>
                        </div>
                        <div className="order-1 md:order-2 relative h-[400px] rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                             <div 
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url("${VENUE_IMAGES.SARAWAK_WELCOME}")` }}
                             ></div>
                        </div>
                    </div>

                    {/* Places of Interest */}
                    <div>
                         <div className="flex items-center justify-between mb-8">
                            <h4 className="text-2xl font-bold text-gray-900 dark:text-white font-display">Tempat Menarik di Kuching</h4>
                            <a href="https://sarawaktourism.com" target="_blank" rel="noreferrer" className="text-sm font-bold text-primary hover:underline flex items-center gap-1">
                                Lihat Semua <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </a>
                         </div>
                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                            <AttractionCard image={VENUE_IMAGES.CULTURAL_VILLAGE} title="Sarawak Cultural Village" category="Warisan" />
                            <AttractionCard image={VENUE_IMAGES.SEMENGGOH} title="Semenggoh Wildlife Centre" category="Alam Semulajadi" />
                            <AttractionCard image={VENUE_IMAGES.DARUL_HANA} title="Darul Hana Bridge" category="Ikon Bandar" />
                            <AttractionCard image={VENUE_IMAGES.BAKO} title="Bako National Park" category="Pengembaraan" />
                         </div>
                    </div>

                    {/* Food Haven */}
                    <div className="bg-gray-50 dark:bg-white/5 rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-white/5">
                        <div className="text-center max-w-2xl mx-auto mb-10">
                            <h4 className="text-3xl font-bold text-gray-900 dark:text-white font-display mb-4">Syurga Makanan</h4>
                            <p className="text-gray-600 dark:text-gray-400">
                                Kuching diiktiraf sebagai "Creative City of Gastronomy" oleh UNESCO. Nikmati kepelbagaian rasa yang memukau.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                             <div className="flex flex-col gap-4 group cursor-pointer">
                                 <div className="rounded-2xl overflow-hidden h-48 w-full shadow-lg">
                                     <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url("${VENUE_IMAGES.LAKSA}")` }}></div>
                                 </div>
                                 <div>
                                     <h5 className="font-bold text-xl text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors">Laksa Sarawak</h5>
                                     <p className="text-sm text-gray-500 dark:text-gray-400">Dipuji sebagai "Breakfast of the Gods". Kuah pedas berempah dengan bihun dan udang.</p>
                                 </div>
                             </div>
                             <div className="flex flex-col gap-4 group cursor-pointer">
                                 <div className="rounded-2xl overflow-hidden h-48 w-full shadow-lg">
                                     <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url("${VENUE_IMAGES.KOLO_MEE}")` }}></div>
                                 </div>
                                 <div>
                                     <h5 className="font-bold text-xl text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors">Kolo Mee</h5>
                                     <p className="text-sm text-gray-500 dark:text-gray-400">Mi kering ikonik yang dihidangkan dengan hirisan daging cincang dan bawang goreng.</p>
                                 </div>
                             </div>
                             <div className="flex flex-col gap-4 group cursor-pointer">
                                 <div className="rounded-2xl overflow-hidden h-48 w-full shadow-lg">
                                     <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url("${VENUE_IMAGES.AYAM_PANSOH}")` }}></div>
                                 </div>
                                 <div>
                                     <h5 className="font-bold text-xl text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors">Ayam Pansoh</h5>
                                     <p className="text-sm text-gray-500 dark:text-gray-400">Ayam dimasak di dalam buluh bersama herba tradisional Dayak dan daun ubi.</p>
                                 </div>
                             </div>
                        </div>
                    </div>
                </div>
            )}

            {/* MAP TAB */}
            {activeTab === 'map' && (
                <div className="space-y-8 animate-scale-in">
                    <div className="bg-white dark:bg-background-card rounded-3xl p-6 md:p-8 border border-gray-200 dark:border-white/5 shadow-xl">
                        <div className="h-[450px] w-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-white/5 relative mb-8">
                             <img 
                                src={VENUE_IMAGES.MAP_TO_BCCK} 
                                alt="Peta Lokasi BCCK" 
                                className="w-full h-full object-contain bg-white" 
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 flex items-start gap-4">
                                <span className="material-symbols-outlined text-3xl text-primary">distance</span>
                                <div>
                                    <h5 className="font-bold text-gray-900 dark:text-white">Jarak Perjalanan</h5>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">15 Minit dari Pusat Bandar</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">20 Minit dari Lapangan Terbang (KIA)</p>
                                </div>
                            </div>
                             <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 flex items-start gap-4">
                                <span className="material-symbols-outlined text-3xl text-primary">pin_drop</span>
                                <div>
                                    <h5 className="font-bold text-gray-900 dark:text-white">Alamat</h5>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                        Demak-Isthmus Bridge, Jalan Keruing, Sejingkat, 93050 Kuching, Sarawak
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                             <a 
                                href={VENUE_IMAGES.MAP_TO_BCCK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white font-bold rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-all"
                            >
                                <span className="material-symbols-outlined text-xl">download</span>
                                Muat Turun Peta BCCK
                            </a>
                             <a 
                                href="https://maps.app.goo.gl/7e2q3Z8Z8Z8Z8Z8Z8" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-black font-bold rounded-full hover:bg-[#ffe066] transition-all shadow-lg hover:shadow-primary/30"
                            >
                                <span className="material-symbols-outlined text-xl">map</span>
                                Lihat Peta Interaktif
                            </a>
                        </div>
                    </div>
                </div>
            )}

        </div>
      </div>
    </section>
  );
};

export default Location;