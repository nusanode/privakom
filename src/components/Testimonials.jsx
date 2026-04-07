import { studentsData } from '../data/database';

const Testimonials = () => {
  // Untuk efek infinite scroll yang mulus, kita perlu menggandakan datanya
  const doubledStudents = [...studentsData, ...studentsData];

  return (
    <section id="students" className="py-24 bg-white border-t-[3px] border-dark w-full overflow-hidden">
      <div className="px-6 lg:px-12 max-w-8xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[3px] w-12 bg-dark"></div>
            <span className="text-dark font-bold tracking-widest text-sm uppercase">Success Stories</span>
            <div className="h-[3px] w-12 bg-dark"></div>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black font-serif text-dark mb-8 leading-tight">
            What Our<br />Alumni Say.
          </h2>
          
          <p className="text-xl text-dark font-light max-w-2xl mx-auto leading-relaxed">
            Dengarkan kisah para lulusan kami yang telah mengubah karier mereka melalui platform pembelajaran Privakom.
          </p>
        </div>

        {/* Kontainer Marquee (Auto-play mengalir) */}
        <div className="relative w-full flex overflow-x-hidden group">
          
          {/* Track Animasi */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] py-4">
            
            {doubledStudents.map((student, index) => (
              <div 
                key={`${student.id}-${index}`} 
                className="bg-primary p-8 lg:p-10 border-[3px] border-dark shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] hover:shadow-[12px_12px_0px_0px_rgba(17,17,17,1)] hover:-translate-y-1 transition-all duration-300 relative flex flex-col w-[350px] lg:w-[420px] shrink-0 mx-4 group/card cursor-default"
              >
                
                {/* Ikon Quote (Besar & Solid) */}
                <svg className="w-20 h-20 text-dark opacity-10 absolute top-6 right-6 transition-transform duration-500 group-hover/card:scale-110 pointer-events-none" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                </svg>
                
                {/* 5 Bintang Hitam Brutalist */}
                <div className="flex gap-1 mb-8 text-dark">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                
                {/* Teks Testimoni */}
                <p className="text-dark font-medium text-lg lg:text-xl relative z-10 leading-relaxed flex-grow italic select-none mb-10">
                  "{student.testimonial}"
                </p>
                
                {/* Profil Siswa */}
                <div className="flex items-center gap-5 mt-auto pointer-events-none border-t-[3px] border-dark pt-6">
                  <img 
                    src={student.image} 
                    alt={student.name} 
                    loading="lazy" 
                    className="w-16 h-16 rounded-full object-cover border-[3px] border-dark shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] relative z-10 grayscale group-hover/card:grayscale-0 transition-all duration-500" 
                  />
                  <div>
                    <h4 className="font-black font-serif text-dark text-xl uppercase tracking-tight">{student.name}</h4>
                    <p className="text-xs text-dark font-bold uppercase tracking-widest mt-1">{student.role}</p>
                  </div>
                </div>

              </div>
            ))}

          </div>
          
          {/* Gradient overlay di sisi kiri dan kanan untuk menutupi transisi marquee (Diubah menjadi putih) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-white to-transparent z-20"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-white to-transparent z-20"></div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;