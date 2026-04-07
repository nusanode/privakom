const Hero = () => {
  return (
    <main className="relative w-full min-h-[90vh] flex items-center bg-white overflow-hidden border-b-[3px] border-dark">
      
      {/* KOTAK KUNING BESAR DI BACKGROUND */}
      {/* Lebarnya mengambil sebagian besar layar di kanan, menyisakan putih di kiri */}
      <div className="absolute top-0 right-0 w-full lg:w-[85%] h-full bg-primary z-0 lg:border-l-[3px] border-dark"></div>

      <div className="px-6 lg:px-12 max-w-8xl mx-auto w-full relative z-10 flex flex-col lg:flex-row items-center justify-between pt-20 pb-28">
        
        {/* Kolom Teks (Kiri) */}
        <div className="lg:w-1/2 z-10 py-10">
          
          {/* Judul Font Serif & Hitam Pekat */}
          <h1 className="text-6xl lg:text-[7.5rem] font-serif font-black text-dark leading-[1] mb-8 tracking-tight">
            Privakom.
          </h1>
          
          {/* Deskripsi (Font Tipis / Light) */}
          <p className="text-xl lg:text-2xl text-dark font-light mb-12 max-w-lg leading-relaxed bg-white/60 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none p-4 lg:p-0 border-[3px] lg:border-none border-dark shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] lg:shadow-none">
            Program aktivitas yang dirancang untuk mendukung proses belajar, mengembangkan keterampilan, dan menggali potensi terbaik setiap individu.
          </p>
          
          {/* Tombol Start Learning (Brutalist Style) */}
          <a href="#courses" className="inline-flex items-center gap-4 bg-dark text-white border-[3px] border-dark px-10 py-5 font-bold text-sm tracking-widest uppercase shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] lg:shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 transition-all group">
            Start Learning Today
            <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>

          {/* Statistik Siswa (Dalam Kotak Brutalist) */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mt-16 p-5 border-[3px] border-dark bg-white shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] max-w-max">
            <div className="flex -space-x-4">
              <img className="w-16 h-16 rounded-full border-[3px] border-dark object-cover relative z-30 grayscale hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Student" />
              <img className="w-16 h-16 rounded-full border-[3px] border-dark object-cover relative z-20 grayscale hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Student" />
              <img className="w-16 h-16 rounded-full border-[3px] border-dark object-cover relative z-10 grayscale hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Student" />
            </div>
            <div>
              <div className="text-4xl font-black font-serif text-dark tracking-tight leading-none">500+</div>
              <div className="text-sm font-bold text-dark uppercase tracking-widest mt-1">Happy Students</div>
            </div>
          </div>
        </div>

        {/* Kolom Gambar (Kanan) */}
        <div className="lg:w-1/2 relative mt-16 lg:mt-0 flex justify-end z-10 lg:pl-10">
          {/* Frame Brutalist untuk Gambar */}
          <div className="relative mb-8 border-[4px] border-dark shadow-[16px_16px_0px_0px_rgba(17,17,17,1)] bg-white w-full max-w-2xl xl:max-w-3xl overflow-hidden group">
            <img 
              src="logo.svg" 
              alt="Graduate" 
              className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
            />
            
            {/* Aksen Label Melayang di atas gambar */}
            <div className="absolute top-6 left-6 bg-primary border-[3px] border-dark px-4 py-2 font-black uppercase tracking-widest text-dark text-sm shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">
              Level Up
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Hero;