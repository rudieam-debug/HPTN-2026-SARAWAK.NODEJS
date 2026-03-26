import React from 'react';
import { IMAGES } from '../constants';

const BottomBanner: React.FC = () => {
  return (
    <section className="w-full bg-background-light dark:bg-background-dark py-12 px-6">
      <div className="w-full max-w-4xl mx-auto">
        <img
          src={IMAGES.BOTTOM_BANNER}
          alt="HPTN 2026 Sarawak Banner"
          referrerPolicy="no-referrer"
          className="w-full h-auto object-contain block mx-auto rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-500"
        />
      </div>
    </section>
  );
};

export default BottomBanner;