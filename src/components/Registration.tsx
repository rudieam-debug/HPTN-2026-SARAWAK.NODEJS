import React, { useState } from 'react';

const Registration: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [registrationType, setRegistrationType] = useState('peserta');
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: ''
  });

  // Validation State
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: ''
  });
  
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false
  });

  const validateEmail = (email: string) => {
    // Robust email regex
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  const validateName = (name: string) => {
    return name.trim().length >= 3;
  };

  const validatePhone = (phone: string) => {
    return phone.trim().length >= 9;
  };

  const scrollToForm = (type: string) => {
    setRegistrationType(type);
    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const validateField = (id: string, value: string) => {
    let errorMsg = '';
    if (id === 'name') {
      if (!validateName(value)) errorMsg = 'Nama mestilah sekurang-kurangnya 3 huruf.';
      setErrors(prev => ({ ...prev, name: errorMsg }));
    }
    if (id === 'email') {
      if (!value) {
        errorMsg = 'Sila masukkan alamat emel.';
      } else if (!validateEmail(value)) {
        errorMsg = 'Format emel tidak sah. Contoh: nama@domain.com';
      }
      setErrors(prev => ({ ...prev, email: errorMsg }));
    }
    if (id === 'phone') {
        if (!validatePhone(value)) errorMsg = 'Nombor telefon tidak sah.';
        setErrors(prev => ({ ...prev, phone: errorMsg }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));

    // Real-time validation if the field has been touched previously
    if (touched[id as keyof typeof touched]) {
      validateField(id, value);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === 'name' || id === 'email' || id === 'phone') {
        setTouched(prev => ({ ...prev, [id]: true }));
        validateField(id, value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields on submit
    const isNameValid = validateName(formData.name);
    const isEmailValid = validateEmail(formData.email);
    const isPhoneValid = validatePhone(formData.phone);
    
    setTouched({ name: true, email: true, phone: true });
    
    let newErrors = { name: '', email: '', phone: '' };
    if (!isNameValid) newErrors.name = 'Nama mestilah sekurang-kurangnya 3 huruf.';
    if (!formData.email) newErrors.email = 'Sila masukkan alamat emel.';
    else if (!isEmailValid) newErrors.email = 'Format emel tidak sah. Contoh: nama@domain.com';
    if (!isPhoneValid) newErrors.phone = 'Sila masukkan nombor telefon yang sah.';
    
    setErrors(newErrors);

    if (isNameValid && isEmailValid && isPhoneValid && formData.organization) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        setIsSubmitted(true);
      }, 1500);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setRegistrationType('peserta');
    setFormData({ name: '', email: '', organization: '', phone: '' });
    setErrors({ name: '', email: '', phone: '' });
    setTouched({ name: false, email: false, phone: false });
  };

  return (
    <section className="py-24 px-6 bg-white dark:bg-background-card transition-colors relative" id="pendaftaran">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block animate-fade-in-up">Sertai Kami</span>
            <h2 className="text-gray-900 dark:text-white text-5xl md:text-7xl font-bold leading-tight mb-8 animate-fade-in-up font-['Arial_Black'] tracking-tight" style={{ animationDelay: '0.1s' }}>
                Pendaftaran #HPTN2026
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg font-medium animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Pilih kategori pendaftaran anda di bawah. Penyertaan adalah percuma untuk semua kategori awam dan pelajar.
            </p>
        </div>
      
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-20 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            
            {/* Card 1: Jemputan / Peserta */}
            <div className="group relative rounded-2xl bg-white dark:bg-background-card border border-gray-200 dark:border-white/5 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl dark:shadow-none dark:hover:shadow-[0_0_30px_rgba(244,192,37,0.1)] overflow-hidden flex flex-col h-full">
                <div className="p-8 md:p-10 flex flex-col h-full items-center text-center">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                        <span className="material-symbols-outlined text-4xl">groups</span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 font-display">
                        Jemputan & <br/> Peserta Awam
                    </h3>
                    <p className="text-primary font-bold mb-8 text-lg flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-base">check_circle</span>
                        Pendaftaran Percuma
                    </p>

                    {/* List */}
                    <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 mb-8 border border-gray-100 dark:border-white/5 w-full">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider text-sm border-b border-gray-200 dark:border-white/10 pb-2">Kategori Pendaftaran</h4>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-400 text-sm font-medium">
                            <li className="flex items-center justify-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>Jemputan Khas & Peserta</li>
                            <li className="flex items-center justify-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>Penceramah & Panelis</li>
                            <li className="flex items-center justify-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>Pelajar & E-Sukan/STEM</li>
                            <li className="flex items-center justify-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>Pengunjung Awam</li>
                        </ul>
                    </div>

                    <div className="mt-auto space-y-4 w-full">
                        <button
                            onClick={() => scrollToForm('peserta')}
                            className="w-full py-4 bg-primary text-black font-bold rounded-xl hover:bg-[#ffe066] shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2 group/btn"
                        >
                            DAFTAR SEKARANG
                            <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                        <button
                            onClick={() => scrollToForm('akademik')}
                            className="w-full py-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-sm"
                        >
                            <span className="material-symbols-outlined text-lg">school</span>
                            Sesi Akademik / Penyelidikan
                        </button>
                    </div>
                </div>
            </div>

            {/* Card 2: Pempamer / Penaja */}
            <div className="group relative rounded-2xl bg-white dark:bg-background-card border border-gray-200 dark:border-white/5 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl dark:shadow-none dark:hover:shadow-[0_0_30px_rgba(244,192,37,0.1)] overflow-hidden flex flex-col h-full">
                <div className="p-8 md:p-10 flex flex-col h-full items-center text-center">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-500 group-hover:scale-110 transition-transform duration-300">
                        <span className="material-symbols-outlined text-4xl">storefront</span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-display">
                        Pempamer & <br/> Rakan Strategik
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                        Sertai kami sebagai rakan industri untuk mempamerkan inovasi teknologi terkini dan meluaskan jaringan perniagaan anda.
                    </p>

                    <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 mb-8 border border-gray-100 dark:border-white/5 w-full">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider text-sm border-b border-gray-200 dark:border-white/10 pb-2">Peluang Penyertaan</h4>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-400 text-sm font-medium">
                            <li className="flex items-center justify-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>Ruang Pameran Korporat</li>
                            <li className="flex items-center justify-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>Slot Pembentangan Produk</li>
                            <li className="flex items-center justify-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>Penajaan Acara</li>
                        </ul>
                    </div>

                    <div className="mt-auto space-y-4 w-full">
                        <button
                            onClick={() => scrollToForm('pempamer')}
                            className="w-full py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-bold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-all flex items-center justify-center gap-2 px-6 group/btn"
                        >
                            <span>Daftar Pempamer</span>
                            <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                        <button
                            onClick={() => scrollToForm('penaja')}
                            className="w-full py-4 bg-transparent border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all flex items-center justify-center gap-2 px-6 group/btn"
                        >
                            <span>Daftar Penaja</span>
                            <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                        <button
                            className="w-full py-3 text-gray-500 dark:text-gray-400 font-bold hover:text-primary transition-colors flex items-center justify-center gap-2 text-sm"
                        >
                            <span className="material-symbols-outlined">download</span>
                            Muat Turun Brosur
                        </button>
                    </div>
                </div>
            </div>

        </div>

        {/* Registration Form */}
        <div id="registration-form" className="max-w-3xl mx-auto scroll-mt-32">
            <div className="bg-white dark:bg-background-card border border-gray-200 dark:border-white/5 rounded-2xl p-8 md:p-10 shadow-xl transition-all duration-300 relative overflow-hidden">
            {isLoading && (
                <div className="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-gray-900 dark:text-white font-bold animate-pulse">Sedang memproses...</p>
                </div>
            )}

            {!isSubmitted ? (
                <>
                <div className="text-center mb-8">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase rounded-full mb-3">
                        Langkah Terakhir
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Borang Pendaftaran</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                        Anda sedang mendaftar sebagai: <span className="font-bold text-primary capitalize">{registrationType.replace(/-/g, ' ')}</span>
                    </p>
                </div>
                
                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                    <div className="space-y-2">
                    <label htmlFor="registrationType" className="text-sm font-medium text-gray-700 dark:text-gray-300">Kategori Pendaftaran</label>
                    <select
                        id="registrationType"
                        value={registrationType}
                        onChange={(e) => setRegistrationType(e.target.value)}
                        className="w-full bg-gray-50 dark:bg-[#181611] border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer font-medium"
                    >
                        <option value="peserta">Peserta Awam / Jemputan</option>
                        <option value="akademik">Sesi Parallel Akademik/Penyelidikan</option>
                        <option value="pempamer">Pempamer (Exhibitor)</option>
                        <option value="penaja">Penaja (Sponsor)</option>
                        <option value="penceramah">Penceramah</option>
                        <option value="pelajar">Pelajar (School/University)</option>
                    </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Nama Penuh</label>
                        <input 
                        type="text" 
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={`w-full bg-gray-50 dark:bg-[#181611] border rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-1 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600 ${
                            touched.name && errors.name 
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                            : 'border-gray-300 dark:border-white/10 focus:border-primary focus:ring-primary'
                        }`}
                        placeholder="Masukkan nama penuh"
                        aria-invalid={touched.name && !!errors.name}
                        aria-describedby={touched.name && errors.name ? "name-error" : undefined}
                        />
                        {touched.name && errors.name && (
                        <p id="name-error" role="alert" className="text-red-500 text-xs mt-1 flex items-center gap-1 animate-fade-in-up">
                            <span className="material-symbols-outlined text-sm" aria-hidden="true">error</span>
                            {errors.name}
                        </p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300">No. Telefon</label>
                        <input 
                        type="tel" 
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={`w-full bg-gray-50 dark:bg-[#181611] border rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-1 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600 ${
                            touched.phone && errors.phone 
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                            : 'border-gray-300 dark:border-white/10 focus:border-primary focus:ring-primary'
                        }`}
                        placeholder="+6012-3456789"
                        aria-invalid={touched.phone && !!errors.phone}
                        />
                        {touched.phone && errors.phone && (
                        <p id="phone-error" role="alert" className="text-red-500 text-xs mt-1 flex items-center gap-1 animate-fade-in-up">
                            <span className="material-symbols-outlined text-sm" aria-hidden="true">error</span>
                            {errors.phone}
                        </p>
                        )}
                    </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Alamat Emel</label>
                        <input 
                        type="email" 
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={`w-full bg-gray-50 dark:bg-[#181611] border rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-1 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600 ${
                            touched.email && errors.email 
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                            : 'border-gray-300 dark:border-white/10 focus:border-primary focus:ring-primary'
                        }`}
                        placeholder="contoh@emel.com"
                        aria-invalid={touched.email && !!errors.email}
                        aria-describedby={touched.email && errors.email ? "email-error" : undefined}
                        />
                        {touched.email && errors.email && (
                        <p id="email-error" role="alert" className="text-red-500 text-xs mt-1 flex items-center gap-1 animate-fade-in-up">
                            <span className="material-symbols-outlined text-sm" aria-hidden="true">error</span>
                            {errors.email}
                        </p>
                        )}
                    </div>
                    
                    <div className="space-y-2">
                    <label htmlFor="organization" className="text-sm font-medium text-gray-700 dark:text-gray-300">Organisasi / Institusi / Syarikat</label>
                    <input 
                        type="text" 
                        id="organization"
                        value={formData.organization}
                        onChange={(e) => setFormData(prev => ({...prev, organization: e.target.value}))}
                        required
                        className="w-full bg-gray-50 dark:bg-[#181611] border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600"
                        placeholder="Nama organisasi anda"
                    />
                    </div>

                    <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-primary text-[#181611] font-bold py-4 rounded-lg hover:bg-[#ffe066] transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2 mt-4 focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                    <span className="material-symbols-outlined" aria-hidden="true">how_to_reg</span>
                    Hantar Pendaftaran
                    </button>
                </form>
                </>
            ) : (
                <div className="flex flex-col items-center justify-center text-center py-8 animate-scale-in relative" role="alert">
                {/* Confetti simulation elements */}
                {[...Array(20)].map((_, i) => (
                    <div 
                        key={i} 
                        className="absolute w-2.5 h-2.5 bg-primary animate-pop" 
                        style={{
                            top: '50%',
                            left: '50%',
                            transform: `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`,
                            animationDelay: `${Math.random() * 0.5}s`,
                            marginTop: `${(Math.random() - 0.5) * 200}px`,
                            marginLeft: `${(Math.random() - 0.5) * 200}px`,
                            backgroundColor: ['#f4c025', '#e01f26', '#ffffff'][Math.floor(Math.random() * 3)]
                        }} 
                    />
                ))}
                
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 animate-bounce">
                    <span className="material-symbols-outlined text-green-500 text-5xl" aria-hidden="true">check_circle</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Pendaftaran Berjaya!</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto leading-relaxed">
                    Terima kasih kerana mendaftar untuk #HPTN2026 Sarawak. Butiran lanjut dan pas masuk telah dihantar ke alamat emel anda.
                </p>
                <button 
                    onClick={handleReset}
                    className="px-8 py-3 rounded-lg bg-gray-800 dark:bg-[#393528] text-white font-bold hover:bg-primary hover:text-black transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                    <span className="material-symbols-outlined text-sm" aria-hidden="true">person_add</span>
                    Daftar Peserta Lain
                </button>
                </div>
            )}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;