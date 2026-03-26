import React from 'react';

const PartnerBox: React.FC<{ 
  name: string; 
  logoUrl?: string;
  type: 'organizer' | 'coop' | 'strategic' | 'platinum' | 'gold' | 'silver' | 'bronze' | 'pempamer' | 'berlian' | 'zamrud' | 'kuarza' 
}> = ({ name, logoUrl, type }) => {
  // Common base: Rounded corners, flex center, transitions for scale/shadow/border
  let containerClasses = "rounded-xl flex items-center justify-center border transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-sm text-center px-4 relative overflow-hidden group";
  
  // Specific styling based on type
  let specificClasses = "";
  let textClasses = "";

  switch (type) {
    case 'organizer':
      specificClasses = "h-40 w-72 bg-white/90 dark:bg-white/5 border-primary shadow-lg shadow-primary/10 hover:shadow-primary/30 hover:border-primary hover:bg-white dark:hover:bg-white/10";
      textClasses = "text-2xl text-primary font-black tracking-widest uppercase leading-tight font-display";
      break;
      
    case 'coop':
      specificClasses = "h-32 w-64 bg-white/80 dark:bg-white/5 border-gray-300 dark:border-white/10 shadow-md hover:shadow-lg hover:border-gray-400 dark:hover:border-white/30";
      textClasses = "text-xl text-gray-900 dark:text-white font-bold tracking-wider uppercase";
      break;
      
    case 'berlian': // Diamond
      specificClasses = "h-28 w-56 bg-gradient-to-br from-blue-50/80 to-white/90 dark:from-blue-900/10 dark:to-white/5 border-blue-200 dark:border-blue-500/30 shadow-md hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-500";
      textClasses = "text-lg text-blue-900 dark:text-blue-100 font-bold tracking-wider font-display uppercase";
      break;
      
    case 'zamrud': // Emerald
      specificClasses = "h-24 w-48 bg-gradient-to-br from-emerald-50/80 to-white/90 dark:from-emerald-900/10 dark:to-white/5 border-emerald-200 dark:border-emerald-500/30 shadow-sm hover:shadow-lg hover:shadow-emerald-500/20 hover:border-emerald-500";
      textClasses = "text-base text-emerald-900 dark:text-emerald-100 font-bold tracking-wider font-display uppercase";
      break;
      
    case 'kuarza': // Quartz
      specificClasses = "h-20 w-40 bg-gradient-to-br from-fuchsia-50/80 to-white/90 dark:from-fuchsia-900/10 dark:to-white/5 border-fuchsia-200 dark:border-fuchsia-500/30 shadow-sm hover:shadow-lg hover:shadow-fuchsia-500/20 hover:border-fuchsia-500";
      textClasses = "text-sm text-fuchsia-900 dark:text-fuchsia-100 font-bold tracking-wider font-display uppercase";
      break;
      
    case 'platinum':
      specificClasses = "h-28 w-56 bg-white/70 dark:bg-white/5 border-gray-300 dark:border-white/20 shadow-md hover:shadow-lg hover:border-gray-500 dark:hover:border-white/40";
      textClasses = "text-lg text-gray-900 dark:text-white font-bold tracking-wider";
      break;
      
    case 'gold':
      specificClasses = "h-24 w-48 bg-white/60 dark:bg-white/5 border-yellow-200 dark:border-yellow-500/20 shadow-sm hover:shadow-lg hover:shadow-yellow-500/20 hover:border-yellow-500";
      textClasses = "text-base text-gray-800 dark:text-white font-semibold";
      break;
      
    case 'silver':
      specificClasses = "h-20 w-40 bg-white/50 dark:bg-white/5 border-gray-200 dark:border-white/10 shadow-sm hover:shadow-md hover:border-gray-400";
      textClasses = "text-sm text-gray-700 dark:text-gray-300 font-medium";
      break;
      
    case 'bronze':
      specificClasses = "h-20 w-40 bg-white/50 dark:bg-white/5 border-orange-200 dark:border-white/10 shadow-sm hover:shadow-md hover:shadow-orange-700/10 hover:border-orange-600";
      textClasses = "text-sm text-orange-900 dark:text-orange-200 font-medium";
      break;
      
    case 'strategic':
      specificClasses = "h-24 w-48 bg-white/60 dark:bg-white/5 border-gray-200 dark:border-white/10 shadow-sm hover:shadow-lg hover:border-blue-400/50";
      textClasses = "text-sm text-gray-800 dark:text-gray-200 font-bold tracking-wider uppercase";
      break;
      
    default: // pempamer
      specificClasses = "h-16 w-32 bg-white/40 dark:bg-white/5 border-gray-100 dark:border-white/5 shadow-sm hover:shadow hover:border-gray-300 dark:hover:border-white/20";
      textClasses = "text-xs text-gray-500 dark:text-gray-400 font-medium";
      break;
  }

  return (
    <div className={`${containerClasses} ${specificClasses}`}>
      {logoUrl ? (
        <div className="flex flex-col items-center justify-center h-full w-full p-2">
            <img 
              src={logoUrl} 
              alt={name} 
              referrerPolicy="no-referrer"
              className="max-h-[85%] max-w-[90%] object-contain" 
            />
        </div>
      ) : (
        <span className={textClasses}>{name}</span>
      )}
    </div>
  );
};

const SectionHeader: React.FC<{ title: string; color?: string }> = ({ title, color = "text-primary" }) => (
    <div className="flex items-center justify-center gap-4 mb-10">
        <div className={`h-[1px] w-12 bg-gradient-to-r from-transparent to-current opacity-50 ${color.replace('text-', 'text-opacity-50 ')}`}></div>
        <h3 className={`${color} font-black tracking-[0.2em] text-lg md:text-xl uppercase text-center font-display`}>{title}</h3>
        <div className={`h-[1px] w-12 bg-gradient-to-l from-transparent to-current opacity-50 ${color.replace('text-', 'text-opacity-50 ')}`}></div>
    </div>
);

const Partners: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-[1200px] mx-auto w-full text-center" id="rakan">
      <div className="mb-16">
        <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">Jaringan Industri</span>
        <h2 className="text-gray-900 dark:text-white text-5xl md:text-7xl font-bold leading-tight mb-8 animate-fade-in-up font-['Arial_Black'] tracking-tight">Rakan #HPTN2026</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Sinergi strategik pemacu keunggulan teknikal negara.
        </p>
      </div>
      
      {/* 1. PENGANJUR BERSAMA */}
      <div className="mb-24">
        <SectionHeader title="PENGANJUR BERSAMA" />
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center">
          <PartnerBox 
            name="KKR MALAYSIA" 
            type="organizer" 
            logoUrl="https://ik.imagekit.io/z7yhsbzej/KEMENTERIAN%20KERJA%20RAYA%20MALAYSIA%20LOGO.png" 
          />
          <PartnerBox 
            name="KERAJAAN SARAWAK" 
            type="organizer" 
            logoUrl="https://ik.imagekit.io/z7yhsbzej/Sarawak%20Crest%20Baru.png" 
          />
        </div>
      </div>

      {/* 2. DENGAN KERJASAMA */}
      <div className="mb-24">
        <SectionHeader title="DENGAN KERJASAMA" color="text-gray-700 dark:text-gray-300" />
        <div className="flex flex-wrap justify-center gap-8 items-center">
          <PartnerBox name="JKR MALAYSIA" type="coop" />
          <PartnerBox name="JKR SARAWAK" type="coop" />
        </div>
      </div>

      {/* 3. RAKAN STRATEGIK (TIERED) */}
      <div className="mb-24 bg-white dark:bg-background-card rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-white/5 shadow-sm">
        <SectionHeader title="RAKAN STRATEGIK" color="text-blue-500" />
        
        {/* Berlian (Diamond) */}
        <div className="mb-12">
          <h4 className="text-blue-600 dark:text-blue-400 font-bold tracking-[0.2em] text-sm uppercase mb-6 opacity-90 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-lg">diamond</span> Rakan Strategik Berlian
          </h4>
          <div className="flex flex-wrap justify-center gap-8 items-center">
             <PartnerBox name="UNIMAS" type="berlian" />
             <PartnerBox name="SWINBURNE" type="berlian" />
          </div>
        </div>

        {/* Zamrud (Emerald) */}
        <div className="mb-12">
          <h4 className="text-emerald-600 dark:text-emerald-400 font-bold tracking-[0.2em] text-sm uppercase mb-6 opacity-90 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-lg">hexagon</span> Rakan Strategik Zamrud
          </h4>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            <PartnerBox name="CENTEXS" type="zamrud" />
            <PartnerBox name="PPKS" type="zamrud" />
            <PartnerBox name="UTS" type="zamrud" />
          </div>
        </div>

        {/* Kuarza (Quartz) */}
        <div>
          <h4 className="text-fuchsia-600 dark:text-fuchsia-400 font-bold tracking-[0.2em] text-sm uppercase mb-6 opacity-90 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-lg">change_history</span> Rakan Strategik Kuarza
          </h4>
          <div className="flex flex-wrap justify-center gap-5 items-center">
            <PartnerBox name="ICATS" type="kuarza" />
            <PartnerBox name="UPM BINTULU" type="kuarza" />
            <PartnerBox name="POLIKU" type="kuarza" />
            <PartnerBox name="ILP KOTA SAMARAHAN" type="kuarza" />
          </div>
        </div>
      </div>

      {/* 4. RAKAN PEMPAMER */}
      <div className="mb-24 bg-white/50 dark:bg-background-card/50 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-white/5 border-dashed">
        <SectionHeader title="RAKAN PEMPAMER" />
        
        {/* Platinum */}
        <div className="mb-12">
          <h4 className="text-gray-800 dark:text-white font-bold tracking-[0.2em] text-sm uppercase mb-6 opacity-80">Platinum</h4>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <PartnerBox name="PETRONAS" type="platinum" />
            <PartnerBox name="SHELL" type="platinum" />
            <PartnerBox name="SARAWAK ENERGY" type="platinum" />
          </div>
        </div>

        {/* Gold */}
        <div className="mb-12">
          <h4 className="text-[#D4AF37] font-bold tracking-[0.2em] text-sm uppercase mb-6 opacity-80">Gold</h4>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            <PartnerBox name="TM ONE" type="gold" />
            <PartnerBox name="HUAWEI" type="gold" />
            <PartnerBox name="GAMUDA" type="gold" />
            <PartnerBox name="IJM CORP" type="gold" />
          </div>
        </div>

        {/* Silver */}
        <div className="mb-12">
          <h4 className="text-[#999999] dark:text-[#C0C0C0] font-bold tracking-[0.2em] text-sm uppercase mb-6 opacity-80">Silver</h4>
          <div className="flex flex-wrap justify-center gap-5 items-center">
            <PartnerBox name="SUNWAY CONST" type="silver" />
            <PartnerBox name="YTL" type="silver" />
            <PartnerBox name="UEM EDGENTA" type="silver" />
            <PartnerBox name="MRCB" type="silver" />
            <PartnerBox name="CAHYA MATA" type="silver" />
          </div>
        </div>

        {/* Bronze */}
        <div>
          <h4 className="text-[#CD7F32] font-bold tracking-[0.2em] text-sm uppercase mb-6 opacity-80">Bronze</h4>
          <div className="flex flex-wrap justify-center gap-5 items-center">
            <PartnerBox name="ZECON BERHAD" type="bronze" />
            <PartnerBox name="NAIM HOLDINGS" type="bronze" />
            <PartnerBox name="SARA TIMUR" type="bronze" />
            <PartnerBox name="DAYANG ENT" type="bronze" />
          </div>
        </div>
      </div>

      {/* 5. RAKAN KOLABORASI */}
      <div className="mb-12">
        <SectionHeader title="RAKAN KOLABORASI" color="text-gray-500" />
        <div className="flex flex-wrap justify-center gap-6 items-center">
          <PartnerBox name="CIDB" type="strategic" />
          <PartnerBox name="BEM" type="strategic" />
          <PartnerBox name="MBOT" type="strategic" />
          <PartnerBox name="DOSH" type="strategic" />
        </div>
      </div>

    </section>
  );
};

export default Partners;