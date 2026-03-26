import React from 'react';
import { IMAGES } from '../constants';

const BottomBanner: React.FC = () => {
  const logos = [
    { src: IMAGES.JATA_NEGARA, alt: "Jata Negara" },
    { src: "https://ik.imagekit.io/z7yhsbzej/KEMENTERIAN%20KERJA%20RAYA%20MALAYSIA%20LOGO.png", alt: "KKR Malaysia" },
    { src: IMAGES.JATA_SARAWAK, alt: "Jata Sarawak" },
    { src: IMAGES.OFFICIAL_LOGO, alt: "HPTN 2026 Official Logo" },
  ];

  return (
    <section className="w-full bg-white py-12 px-6 border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BottomBanner;