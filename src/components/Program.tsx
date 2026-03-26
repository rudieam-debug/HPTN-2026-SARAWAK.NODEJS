import React, { useState, useEffect } from 'react';
import { IMAGES } from '../constants';

const HighlightCard: React.FC<{ title: string; desc: string; image: string }> = ({ title, desc, image }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-background-card border border-gray-200 dark:border-white/5 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl dark:shadow-none dark:hover:shadow-[0_0_30px_rgba(244,192,37,0.1)] h-full">
    <div 
      className="h-56 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
      style={{ backgroundImage: `url("${image}")` }}
    ></div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
      <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-primary transition-colors font-display">{title}</h3>
      <p className="text-gray-300 text-sm opacity-90 leading-relaxed border-l-2 border-primary/50 pl-3">{desc}</p>
    </div>
  </div>
);

const EVENT_PHOTOS = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop", // Conference crowd
  "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=2546&auto=format&fit=crop", // Networking
  "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=2072&auto=format&fit=crop", // Tech showcase
  "https://images.unsplash.com/photo-1475721027767-f053a6eff10d?q=80&w=2070&auto=format&fit=crop", // Speaker
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"  // Engineering/Industrial
];

const OTHER_SPEAKERS = [
  {
    name: "Ir. Dr. Zulkifli",
    role: "President",
    org: "Institution of Engineers Malaysia (IEM)",
    bio: "Pakar kejuruteraan struktur mampan dengan pengalaman lebih 30 tahun dalam pembinaan bangunan tinggi.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Dr. Aminah Zulkifli",
    role: "Ketua Penyelidik",
    org: "Universiti Teknologi Malaysia (UTM)",
    bio: "Mengkhusus dalam bahan binaan hijau dan teknologi pembinaan neutral karbon untuk iklim tropika.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop"
  },
  {
    name: "Sarah Chen",
    role: "Ketua Pegawai Teknologi",
    org: "TechSquad Sarawak",
    bio: "Pelopor sistem pengawasan dron autonomi untuk pemantauan dan penyelenggaraan infrastruktur luar bandar.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2661&auto=format&fit=crop"
  }
];

const SpeakerCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % OTHER_SPEAKERS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % OTHER_SPEAKERS.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? OTHER_SPEAKERS.length - 1 : prev - 1));

  return (
    <div className="w-full max-w-5xl mx-auto mb-20 relative" aria-label="Senarai Penceramah">
        <div className="overflow-hidden rounded-2xl bg-white dark:bg-background-card border border-gray-200 dark:border-white/5 shadow-2xl relative min-h-[500px] md:min-h-[400px] flex items-center group">
            {/* Slides */}
            {OTHER_SPEAKERS.map((speaker, index) => (
                <div 
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out flex flex-col md:flex-row ${
                        index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                    aria-hidden={index !== currentIndex}
                >
                    {/* Image Section */}
                    <div className="w-full md:w-1/2 h-[40%] md:h-full relative overflow-hidden bg-gray-100 dark:bg-black">
                        <div 
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
                            style={{ backgroundImage: `url("${speaker.image}")` }}
                            role="img"
                            aria-label={`Gambar ${speaker.name}`}
                        >
                           <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/90 via-transparent to-transparent md:via-black/20 md:to-transparent"></div>
                        </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="w-full md:w-1/2 h-[60%] md:h-full p-6 md:p-12 flex flex-col justify-center bg-white dark:bg-background-card relative">
                         {/* Decorative elements */}
                        <div className="absolute top-0 right-0 p-4 opacity-10 hidden md:block" aria-hidden="true">
                            <span className="material-symbols-outlined text-9xl text-gray-200 dark:text-gray-800">format_quote</span>
                        </div>

                        <div className="relative z-10 animate-fade-in-up">
                            <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-primary/20 text-gray-800 dark:text-primary text-xs font-bold uppercase tracking-wider rounded mb-4 border border-gray-200 dark:border-primary/20">
                                Penceramah
                            </span>
                            <h3 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 leading-tight font-display">{speaker.name}</h3>
                            <div className="text-primary font-medium mb-1">{speaker.role}</div>
                            <div className="text-gray-500 dark:text-gray-400 text-sm font-bold uppercase tracking-wide mb-6">{speaker.org}</div>
                            
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base border-l-2 border-primary/30 pl-4 italic">
                                "{speaker.bio}"
                            </p>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Controls */}
            <div className="absolute bottom-6 right-6 md:right-12 z-20 flex gap-4">
                <button 
                    onClick={prevSlide}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-300 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-white hover:bg-primary hover:text-black hover:border-primary transition-all bg-white/80 dark:bg-black/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-label="Speaker sebelumnya"
                >
                    <span className="material-symbols-outlined" aria-hidden="true">west</span>
                </button>
                <button 
                    onClick={nextSlide}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-300 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-white hover:bg-primary hover:text-black hover:border-primary transition-all bg-white/80 dark:bg-black/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-label="Speaker seterusnya"
                >
                    <span className="material-symbols-outlined" aria-hidden="true">east</span>
                </button>
            </div>
        </div>
    </div>
  );
}

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % EVENT_PHOTOS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % EVENT_PHOTOS.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? EVENT_PHOTOS.length - 1 : prev - 1));

  return (
    <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden border border-gray-200 dark:border-white/5 bg-background-card mb-20 group shadow-2xl" aria-label="Galeri Foto Acara">
      {EVENT_PHOTOS.map((photo, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={index !== currentIndex}
        >
          <div 
            className="w-full h-full bg-cover bg-center transform transition-transform duration-[10000ms] ease-linear"
            style={{ 
              backgroundImage: `url("${photo}")`,
              transform: index === currentIndex ? 'scale(1.1)' : 'scale(1.0)' 
            }}
          >
             <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>
      ))}

      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:text-primary hover:bg-black/70 backdrop-blur-sm border border-white/10 transition-all opacity-0 group-hover:opacity-100 z-10 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Foto sebelumnya"
      >
        <span className="material-symbols-outlined" aria-hidden="true">chevron_left</span>
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:text-primary hover:bg-black/70 backdrop-blur-sm border border-white/10 transition-all opacity-0 group-hover:opacity-100 z-10 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Foto seterusnya"
      >
        <span className="material-symbols-outlined" aria-hidden="true">chevron_right</span>
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {EVENT_PHOTOS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${
              idx === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-white/50 hover:bg-white'
            }`}
            aria-label={`Lihat foto ${idx + 1}`}
            aria-current={idx === currentIndex ? 'true' : undefined}
          />
        ))}
      </div>
      
       <div className="absolute top-6 right-6 z-10 pointer-events-none">
        <span className="px-3 py-1 bg-black/60 backdrop-blur rounded text-xs font-bold text-white uppercase tracking-wider border border-white/10">
            Galeri Sorotan
        </span>
      </div>
    </div>
  );
};

interface Speaker {
  name: string;
  role: string;
  organization: string;
  bio: string;
}

interface EventItem {
  title: string;
  time: string;
  speaker?: Speaker;
  description?: string;
  details?: string[];
}

const SessionShareButton: React.FC<{ title: string; time: string; date: string }> = ({ title, time, date }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const text = `Sertai sesi "${title}" pada ${date} jam ${time} di #HPTN2026 Sarawak! Info lanjut:`;
    const url = window.location.href.split('#')[0] + '#program';

    if (navigator.share) {
      try {
        await navigator.share({
          title: `#HPTN2026: ${title}`,
          text: text,
          url: url,
        });
      } catch (err) {
        console.error("Share cancelled or failed", err);
      }
    } else {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(`${text} ${url}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy", err);
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className={`p-2 rounded-lg flex items-center gap-2 text-xs font-bold transition-all border shadow-sm ${
        copied 
          ? 'bg-green-500/20 text-green-500 border-green-500/50' 
          : 'bg-white/5 text-gray-400 border-transparent hover:bg-primary/20 hover:text-primary hover:border-primary/30'
      }`}
      title={copied ? "Telah disalin" : "Kongsi sesi ini"}
    >
      <span className="material-symbols-outlined text-[18px]">
        {copied ? 'check' : 'share'}
      </span>
      <span className="hidden lg:inline">{copied ? 'Disalin' : 'Kongsi'}</span>
    </button>
  );
};

const ScheduleEvent: React.FC<{ event: EventItem; date: string }> = ({ event, date }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 group/item p-4 rounded-2xl hover:bg-white dark:hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-white/5 hover:shadow-lg dark:hover:shadow-none">
       <div className="flex-1">
        <div className="flex items-center justify-between sm:justify-start gap-3 mb-2">
            <span className="inline-block sm:hidden px-3 py-1 bg-primary/10 text-primary rounded text-xs font-bold border border-primary/20">
                {event.time}
            </span>
            <div className="sm:hidden">
                <SessionShareButton title={event.title} time={event.time} date={date} />
            </div>
        </div>
        <h4 className="text-gray-900 dark:text-white font-bold text-lg md:text-xl group-hover/item:text-primary transition-colors font-display">{event.title}</h4>
        
        {event.speaker && (
          <div className="mt-4 bg-white dark:bg-background-card rounded-xl p-5 border border-gray-200 dark:border-white/5 flex flex-col md:flex-row gap-4 items-start transition-all duration-300 hover:scale-[1.02] hover:border-primary hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(244,192,37,0.15)] group-hover/item:bg-gray-50 dark:group-hover/item:bg-white/5">
            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
              <span className="material-symbols-outlined text-primary text-2xl" aria-hidden="true">person</span>
            </div>
            <div>
              <div className="font-bold text-gray-900 dark:text-white text-lg leading-tight">{event.speaker.name}</div>
              <div className="text-primary text-xs font-bold uppercase tracking-wide mt-1 mb-2">
                {event.speaker.role} <span className="text-gray-400 dark:text-gray-600 mx-1">|</span> {event.speaker.organization}
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm italic leading-relaxed border-l-2 border-primary/30 pl-3">
                "{event.speaker.bio}"
              </p>
            </div>
          </div>
        )}

        {event.description && !event.speaker && (
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-3 leading-relaxed border-l-2 border-gray-300 dark:border-white/10 pl-3">
            {event.description}
          </p>
        )}

        {/* Expandable Details Section */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-5' : 'max-h-0 opacity-0'}`}>
            <div className="bg-gray-50 dark:bg-white/5 p-5 rounded-xl border border-gray-200 dark:border-white/10 text-sm shadow-inner">
                <h5 className="font-bold text-primary mb-3 uppercase text-xs tracking-wider flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">info</span>
                    Objektif & Perincian
                </h5>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    {event.details && event.details.length > 0 ? (
                        event.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <span className="material-symbols-outlined text-primary text-[10px] mt-1">circle</span>
                                <span>{detail}</span>
                            </li>
                        ))
                    ) : (
                        <li className="italic opacity-70">Tiada maklumat tambahan.</li>
                    )}
                </ul>
            </div>
        </div>
        
        {/* Toggle Button */}
        {event.details && event.details.length > 0 && (
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="mt-4 flex items-center gap-2 text-xs font-bold text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors focus:outline-none group/btn select-none"
            >
                <div className={`w-6 h-6 rounded-full border border-current flex items-center justify-center transition-all duration-300 ${isOpen ? 'rotate-45 bg-primary border-primary text-black' : 'group-hover/btn:border-primary'}`}>
                    <span className="material-symbols-outlined text-[16px]">add</span>
                </div>
                <span className="uppercase tracking-wider">{isOpen ? 'Tutup' : 'Maklumat Lanjut'}</span>
            </button>
        )}

      </div>
      <div className="hidden sm:flex flex-col items-end gap-3 shrink-0 pt-1">
         <span className="inline-block px-4 py-1.5 bg-gray-100 dark:bg-background-card rounded-lg text-sm font-bold text-primary border border-gray-200 dark:border-white/10">
            {event.time}
         </span>
         <div className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
            <SessionShareButton title={event.title} time={event.time} date={date} />
         </div>
      </div>
    </div>
  );
};

const ScheduleRow: React.FC<{ day: string; date: string; events: EventItem[] }> = ({ day, date, events }) => (
  <div className="flex flex-col md:flex-row gap-6 md:gap-10 border-b border-gray-200 dark:border-white/10 pb-10 last:border-0 last:pb-0">
    <div className="md:w-40 flex-shrink-0 pt-1">
      <div className="sticky top-24">
        <span className="block text-primary font-bold text-2xl mb-1 font-display">{day}</span>
        <span className="text-gray-500 dark:text-gray-400 font-medium">{date}</span>
      </div>
    </div>
    <div className="flex-1 space-y-8">
      {events.map((event, idx) => (
        <ScheduleEvent key={idx} event={event} date={date} />
      ))}
    </div>
  </div>
);

const Program: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white dark:bg-background-card relative transition-colors" id="program">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block animate-fade-in-up">Agenda Utama</span>
          <h2 className="text-gray-900 dark:text-white text-5xl md:text-7xl font-bold leading-tight mb-8 animate-fade-in-up font-['Arial_Black'] tracking-tight" style={{ animationDelay: '0.1s' }}>Program Menarik</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Sertai pelbagai aktiviti berimpak tinggi yang direka khas untuk meningkatkan kompetensi profesional teknikal.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-20 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <HighlightCard 
            title="Bicara Teknikal" 
            desc="Sesi perkongsian ilmu daripada pakar industri mengenai trend terkini." 
            image={IMAGES.SPEAKER} 
          />
          <HighlightCard 
            title="Pameran Inovasi" 
            desc="Showcase teknologi robotik, dron, dan AI daripada syarikat terkemuka." 
            image={IMAGES.HOLO_TABLE} 
          />
          <HighlightCard 
            title="Jaringan Bisnes" 
            desc="Ruang eksklusif untuk kolaborasi antara agensi kerajaan dan swasta." 
            image={IMAGES.BUSINESS_NET} 
          />
        </div>

        {/* Other Speakers Carousel Section (Barisan Penceramah Utama) */}
        <div className="mb-20">
             <div className="text-center mb-12">
                <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block animate-fade-in-up">Pakar Industri</span>
                <h2 className="text-gray-900 dark:text-white text-5xl md:text-7xl font-bold leading-tight mb-8 animate-fade-in-up font-['Arial_Black'] tracking-tight">
                    Barisan Penceramah Utama
                </h2>
             </div>
             <SpeakerCarousel />
        </div>

        {/* Existing Gallery Carousel */}
        <ImageCarousel />

        {/* Jadual Program Section Title */}
        <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block animate-fade-in-up">Atur Cara</span>
            <h2 className="text-gray-900 dark:text-white text-5xl md:text-7xl font-bold leading-tight mb-8 animate-fade-in-up font-['Arial_Black'] tracking-tight">
                Jadual Program
            </h2>
             <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed animate-fade-in-up">
                Tertakluk kepada perubahan semasa.
            </p>
        </div>

        <div className="bg-white dark:bg-background-card border border-gray-200 dark:border-white/5 rounded-2xl p-6 md:p-12 shadow-xl dark:shadow-none">
          
          <div className="space-y-12">
            <ScheduleRow 
              day="HARI 1" 
              date="1 Disember 2026" 
              events={[
                { 
                    title: 'Majlis Perasmian & Amanat', 
                    time: '09:00 AM', 
                    speaker: {
                      name: 'YAB Datuk Patinggi Tan Sri (Dr) Abang Haji Abdul Rahman Zohari Bin Tun Datuk Abang Haji Openg',
                      role: 'Premier Sarawak',
                      organization: 'Kerajaan Sarawak',
                      bio: 'Peneraju wawasan ekonomi digital Sarawak dan strategi transformasi infrastruktur pasca-Covid (PCDS 2030).'
                    },
                    description: 'Pelancaran rasmi #HPTN2026 dan amanat tahunan mengenai hala tuju infrastruktur negeri.',
                    details: [
                        'Ketibaan Tetamu Kehormat dan Perarakan Masuk.',
                        'Nyanyian Lagu Negaraku & Ibu Pertiwiku.',
                        'Bacaan Doa Selamat.',
                        'Amanat Perasmian oleh Premier Sarawak mengenai PCDS 2030 dan peranan profesion teknikal.',
                        'Gimik Pelancaran #HPTN2026 Edisi Borneo.'
                    ]
                },
                { 
                    title: 'Forum Perdana: Halatuju Teknikal Negara', 
                    time: '02:00 PM', 
                    speaker: {
                      name: 'Ir. Dr. Zulkifli',
                      role: 'President',
                      organization: 'Institution of Engineers Malaysia (IEM)',
                      bio: 'An expert in sustainable structural engineering with over 30 years of experience in high-rise construction across ASEAN.'
                    },
                    description: 'Membincangkan strategi adaptasi teknologi hijau dalam pembinaan mega di Borneo.',
                    details: [
                        'Objektif: Memahami cabaran dan peluang dalam pembinaan mampan di rantau Borneo.',
                        'Topik Perbincangan: Adaptasi Teknologi Hijau (Green Tech) dalam sektor pembinaan.',
                        'Kesan Perubahan Iklim terhadap reka bentuk infrastruktur kritikal.',
                        'Sesi Soal Jawab bersama panelis jemputan dari JKR dan CIDB.'
                    ]
                },
                {
                    title: 'Sesi Networking VIP',
                    time: '05:00 PM',
                    description: 'Sesi ramah mesra bersama pemimpin industri dan ketua jabatan.',
                    details: [
                        'Peluang berinteraksi secara santai dengan ketua-ketua jabatan kerajaan dan CEO syarikat korporat.',
                        'Perbincangan tidak formal mengenai peluang kolaborasi projek.',
                        'Jamuan ringan disediakan.'
                    ]
                }
              ]} 
            />
            <ScheduleRow 
              day="HARI 2" 
              date="2 Disember 2026" 
              events={[
                { 
                    title: 'Pertandingan Inovasi Pelajar (Hackathon)', 
                    time: '09:00 AM',
                    description: 'Pertandingan akhir bagi kategori pelajar universiti dan politeknik.',
                    details: [
                        'Tema: "Solusi Kejuruteraan untuk Komuniti Luar Bandar".',
                        'Pembentangan projek akhir oleh 10 kumpulan finalis.',
                        'Penilaian oleh juri profesional dari industri.',
                        'Pameran prototaip pelajar di ruang legar utama.'
                    ]
                },
                { 
                    title: 'Sesi Pembentangan Kertas Kerja Teknikal', 
                    time: '11:00 AM', 
                    speaker: {
                      name: 'Dr. Aminah Zulkifli',
                      role: 'Lead Researcher',
                      organization: 'Universiti Teknologi Malaysia (UTM)',
                      bio: 'Specializes in green building materials and carbon-neutral construction technologies.'
                    },
                    description: 'Topik: "Inovasi Bahan Binaan Mampan untuk Iklim Tropika" dan "Smart City Grid".',
                    details: [
                        'Kertas Kerja 1: Penggunaan Buluh Terawat sebagai Alternatif Tetulang Besi.',
                        'Kertas Kerja 2: Integrasi AI dalam Pengurusan Grid Tenaga Pintar (Smart Grid) di Sarawak.',
                        'Kertas Kerja 3: Teknologi Carbon Capture dalam Penghasilan Simen Eko-Mesra.',
                        'Sesi kritikan dan maklum balas akademik.'
                    ]
                },
                { 
                    title: 'Demonstrasi Robotik & Dron', 
                    time: '02:00 PM', 
                    speaker: {
                      name: 'Sarah Chen',
                      role: 'Chief Technology Officer',
                      organization: 'TechSquad Sarawak',
                      bio: 'Pioneer in autonomous drone surveillance systems for rural infrastructure monitoring.'
                    },
                    description: 'Pameran teknologi pemantauan infrastruktur menggunakan dron autonomi dan AI.',
                    details: [
                        'Demo Langsung: Dron pemantauan jambatan dan cerun berisiko tinggi.',
                        'Penggunaan Robot Anjing (Spot) untuk pemeriksaan tapak pembinaan berbahaya.',
                        'Simulasi VR/AR untuk latihan keselamatan tapak bina.',
                        'Pameran teknologi percetakan 3D berskala industri.'
                    ]
                },
                { 
                    title: 'Anugerah Tokoh Teknikal & Penutup', 
                    time: '04:00 PM', 
                    speaker: {
                      name: 'Menteri Kerja Raya',
                      role: 'Minister of Works',
                      organization: 'Ministry of Works Malaysia',
                      bio: 'Championing the modernization of public works and technical profession recognition in Malaysia.'
                    },
                    description: 'Penyampaian anugerah kepada ikon teknikal yang berjasa serta majlis penutupan rasmi.',
                    details: [
                        'Ucapan Penutupan oleh Menteri Kerja Raya.',
                        'Penyampaian Anugerah Tokoh Teknikal Negara 2026.',
                        'Penyampaian Hadiah Pertandingan Inovasi & Hackathon.',
                        'Persembahan Kebudayaan Sarawak.',
                        'Penyerahan Bendera HPTN kepada tuan rumah tahun hadapan.'
                    ]
                }
              ]} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;