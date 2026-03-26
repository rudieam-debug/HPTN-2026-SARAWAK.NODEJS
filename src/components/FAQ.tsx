import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 dark:border-white/5 last:border-0">
      <button
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-primary' : 'text-gray-900 dark:text-white group-hover:text-primary'}`}>
          {question}
        </span>
        <span className={`material-symbols-outlined transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : 'text-gray-400 group-hover:text-primary'}`}>
          expand_more
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base border-l-2 border-primary/20 pl-4">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Adakah penyertaan dikenakan bayaran?",
      answer: "Penyertaan adalah PERCUMA untuk semua kategori (Awam, Profesional, dan Pelajar). Walau bagaimanapun, pendaftaran awal adalah digalakkan kerana tempat duduk bagi sesi forum utama adalah terhad."
    },
    {
      question: "Adakah mata CPD (Continuing Professional Development) disediakan?",
      answer: "Ya, mata CPD akan diberikan kepada jurutera, arkitek, dan juruukur bertauliah yang mendaftar sebagai Delegasi Profesional dan menghadiri sesi teknikal penuh. Kod imbasan CPD akan dipaparkan di akhir setiap sesi."
    },
    {
      question: "Apakah kod etika pakaian semasa acara?",
      answer: "Pakaian adalah Formal Pejabat, Lounge Suit atau Batik Malaysia/Sarawak. Bagi pelajar, sila pakai pakaian korporat atau uniform institusi masing-masing. Selipar dan seluar pendek tidak dibenarkan."
    },
    {
      question: "Bagaimana dengan kemudahan pengangkutan dan parkir?",
      answer: "BCCK menyediakan lebih 1,500 petak parkir percuma. Perkhidmatan shuttle bus percuma juga disediakan dari Hotel Waterfront dan Plaza Merdeka setiap 30 minit bermula jam 8:00 pagi."
    },
    {
      question: "Adakah makanan disediakan?",
      answer: "Makan tengahari dan minum petang disediakan untuk Delegasi Profesional yang berdaftar. Bagi pelawat awam, terdapat pelbagai gerai jualan makanan (food trucks) di perkarangan luar BCCK."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 bg-white dark:bg-background-card" id="faq">
      <div className="max-w-[800px] mx-auto w-full">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block animate-fade-in-up">Soalan Lazim</span>
          <h2 className="text-gray-900 dark:text-white text-5xl md:text-7xl font-bold leading-tight mb-8 animate-fade-in-up font-['Arial_Black'] tracking-tight" style={{ animationDelay: '0.1s' }}>Perkara Yang Anda Perlu Tahu</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
             Jawapan kepada pertanyaan umum mengenai logistik, pendaftaran dan pengisian program.
          </p>
        </div>
        
        <div className="bg-white dark:bg-background-card border border-gray-200 dark:border-white/5 rounded-2xl p-6 md:p-10 shadow-lg animate-fade-in-up hover:border-primary/30 transition-colors" style={{ animationDelay: '0.3s' }}>
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Masih ada soalan?</p>
            <a href="mailto:info@hptn2026.sarawak.gov.my" className="text-primary font-bold hover:underline mt-1 inline-flex items-center gap-1 group">
                Hubungi Sekretariat Kami
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;