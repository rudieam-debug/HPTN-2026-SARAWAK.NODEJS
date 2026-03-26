import React from 'react';
import { IMAGES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-border-dark pt-16 pb-8 px-6 mt-auto" id="pautan">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <div className="flex items-center gap-3 text-white mb-3">
                <img 
                  alt="Official Logo" 
                  className="h-10 w-auto" 
                  src={IMAGES.OFFICIAL_LOGO} 
                  referrerPolicy="no-referrer"
                />
                <img 
                  alt="HPTN 2026 Logo" 
                  className="h-10 w-auto" 
                  src={IMAGES.NAV_LOGO} 
                  referrerPolicy="no-referrer"
                />
              </div>
              <h2 className="font-bold text-xl tracking-tight text-white">#HPTN2026</h2>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Hari Profesion Teknikal Negara 2026 Sarawak adalah inisiatif untuk memartabatkan profesion teknikal dalam pembangunan negara.
            </p>
            <div className="flex gap-4">
              <a className="text-gray-400 hover:text-white transition-colors" href="#" aria-label="Laman Web Rasmi"><span className="material-symbols-outlined" aria-hidden="true">public</span></a>
              <a className="text-gray-400 hover:text-white transition-colors" href="#" aria-label="Kongsi di Media Sosial"><span className="material-symbols-outlined" aria-hidden="true">share</span></a>
              <a className="text-gray-400 hover:text-white transition-colors" href="#" aria-label="Langgan RSS Feed"><span className="material-symbols-outlined" aria-hidden="true">rss_feed</span></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Pautan Pantas</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a className="hover:text-primary transition-colors" href="#">Utama</a></li>
              <li><a className="hover:text-primary transition-colors" href="#mengenai">Mengenai Kami</a></li>
              <li><a className="hover:text-primary transition-colors" href="#program">Program</a></li>
              <li><a className="hover:text-primary transition-colors" href="#pendaftaran">Pendaftaran</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Hubungi Kami</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Sekretariat</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Bahagian Dasar &amp; Korporat</li>
              <li>Kementerian Kerja Raya</li>
              <li>Jalan Sultan Salahuddin</li>
              <li>50480 Kuala Lumpur</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Hubungi Kami</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs" aria-hidden="true">call</span> +603-1234 5678</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs" aria-hidden="true">mail</span> info@hptn2026.gov.my</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© 2026 Hari Profesion Teknikal Negara. Hak Cipta Terpelihara.</p>
          <div className="flex gap-6">
            <a className="hover:text-gray-400" href="#">Penyataan Penafian</a>
            <a className="hover:text-gray-400" href="#">Dasar Privasi</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;