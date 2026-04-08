const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white relative w-full overflow-hidden border-t-[3px] border-dark">
      
      <div className="px-6 lg:px-12 max-w-8xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Kolom Gambar (Kiri) */}
        <div className="lg:w-1/2 relative w-full group mt-10 lg:mt-0 z-10">
          
          {/* Gambar dengan Border Tebal dan Hard Shadow ala Brutalism */}
          <div className="relative border-[3px] border-dark shadow-[12px_12px_0px_0px_rgba(17,17,17,1)] bg-primary z-10 overflow-hidden">
            <img 
              src="foto-1.jpeg" 
              alt="Siswa belajar di Privakom" 
              loading="lazy"
              className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90 group-hover:opacity-100" 
            />
          </div>
          
          {/* Badge Sertifikasi (Gaya Blok Solid) */}
          <div className="absolute -bottom-8 -right-4 lg:-bottom-12 lg:-right-12 bg-white p-5 lg:p-6 border-[3px] border-dark shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] z-20 transition-transform duration-300 hover:-translate-y-2">
            <div className="flex items-center gap-4">
              <div className="bg-primary text-dark p-3 border-[2px] border-dark">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-black font-serif text-dark uppercase tracking-tight">Certified</p>
                <p className="text-xs font-bold text-dark uppercase tracking-widest">Institution</p>
              </div>
            </div>
          </div>
        </div>

        {/* Kolom Teks (Kanan) */}
        <div className="lg:w-1/2 w-full py-8 mt-12 lg:mt-0 z-10">
          
          {/* Label Section */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[3px] w-12 bg-dark"></div>
            <span className="text-dark font-bold tracking-widest text-sm uppercase">About Privakom</span>
          </div>
          
          {/* Judul Font Serif */}
          <h2 className="text-5xl lg:text-7xl font-black font-serif text-dark mb-8 leading-[1.05]">
            Empowering The Next Generation.
          </h2>
          
          {/* Teks Font Sans-serif Tipis */}
          <p className="text-xl lg:text-2xl text-dark font-light mb-6 leading-relaxed">
            Di Privakom, kami percaya bahwa proses belajar harus terasa menarik dan menginspirasi. Kurikulum inovatif kami dirancang untuk membangkitkan rasa ingin tahu.
          </p>
          <p className="text-xl lg:text-2xl text-dark font-light mb-12 leading-relaxed">
            Membangun keterampilan praktis menggunakan metode interaktif modern.
          </p>

          {/* List Keunggulan bergaya kotak solid */}
          <ul className="space-y-4 mb-14">
            <li className="flex items-center gap-4 border-[2px] border-dark p-4 bg-white hover:bg-primary transition-colors cursor-default group/list">
              <div className="text-dark">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <span className="text-dark font-bold uppercase tracking-widest text-sm">Interactive Learning</span>
            </li>
            <li className="flex items-center gap-4 border-[2px] border-dark p-4 bg-white hover:bg-primary transition-colors cursor-default group/list">
              <div className="text-dark">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <span className="text-dark font-bold uppercase tracking-widest text-sm">Progress Tracking</span>
            </li>
            <li className="flex items-center gap-4 border-[2px] border-dark p-4 bg-white hover:bg-primary transition-colors cursor-default group/list">
              <div className="text-dark">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <span className="text-dark font-bold uppercase tracking-widest text-sm">Expert Curriculum</span>
            </li>
          </ul>

          {/* Tombol Learn More Brutalist */}
          <a href="#courses" className="inline-flex items-center gap-4 bg-primary border-[3px] border-dark text-dark font-bold px-10 py-5 uppercase tracking-widest shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] hover:shadow-[2px_2px_0px_0px_rgba(17,17,17,1)] hover:translate-y-1 hover:translate-x-1 transition-all">
            Learn More
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default About;