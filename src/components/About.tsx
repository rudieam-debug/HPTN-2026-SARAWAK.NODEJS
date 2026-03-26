import React from 'react';

const FeatureCard: React.FC<{ icon: string; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="group p-8 rounded-2xl bg-white dark:bg-background-card border border-gray-200 dark:border-white/5 hover:border-primary/50 shadow-sm hover:shadow-xl dark:shadow-none dark:hover:shadow-[0_0_20px_rgba(244,192,37,0.1)] transition-all duration-300 hover:-translate-y-1 h-full flex flex-col items-center text-center">
    <div className="p-4 rounded-full bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
      <span className="material-symbols-outlined text-3xl">{icon}</span>
    </div>
    <h4 className="text-gray-900 dark:text-white font-bold text-xl mb-3 font-display">{title}</h4>
    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{description}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden" id="mengenai">
       {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full">
        <div className="flex flex-col items-center text-center mb-16 max-w-4xl mx-auto">
          
          <h2 className="text-gray-900 dark:text-white text-5xl md:text-7xl font-bold leading-tight mb-8 animate-fade-in-up font-['Arial_Black'] tracking-tight" style={{ animationDelay: '0.2s' }}>
            Mengenai #HPTN2026
          </h2>
          
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Sambutan Hari Profesion Teknikal Negara (HPTN) merupakan wadah bagi menghargai jasa para profesion teknikal atas sumbangan besar mereka terhadap kemajuan infrastruktur dan pemodenan negara yang meliputi pelbagai bidang teknikal antaranya kejuruteraan, astronomi, sains, teknologi, pembinaan, senibina, ukur dan sebagainya.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              HPTN juga salah satu inisiatif untuk memberi galakan dan melahirkan tenaga mahir dalam bidang teknikal, terutamanya kepada generasi muda.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Program tahunan ini menyediakan platform kepada profesion teknikal untuk menyuarakan pandangan dan idea-idea bernas serta peluang untuk berinteraksi dengan masyarakat bagi meningkatkan martabat dan taraf Profesion Teknikal.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <FeatureCard 
            icon="lightbulb" 
            title="Inovasi Teknologi" 
            description="Mempamerkan teknologi terkini dalam bidang kejuruteraan, seni bina, dan IT yang memacu kemajuan negeri."
          />
          <FeatureCard 
            icon="groups" 
            title="Jaringan Profesional" 
            description="Platform pertemuan strategik antara pakar industri, pelabur, dan pembuat dasar untuk kolaborasi masa depan."
          />
          <FeatureCard 
            icon="eco" 
            title="Pembangunan Mampan" 
            description="Fokus kepada penyelesaian kejuruteraan hijau dan amalan lestari demi kesejahteraan alam sekitar."
          />
        </div>
      </div>
    </section>
  );
};

export default About;