const Features = () => {
  return (
    <section className="px-6 lg:px-12 max-w-8xl mx-auto relative z-20 -mt-16 lg:-mt-24 pb-20 w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        
        {/* Card 1: Kotak Kuning */}
        <div 
          tabIndex="0"
          className="bg-primary text-dark p-8 lg:p-10 border-[3px] border-dark shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] hover:shadow-[12px_12px_0px_0px_rgba(17,17,17,1)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-64 lg:h-72 focus:outline-none group cursor-default"
        >
          <h3 className="text-4xl font-black font-serif text-dark z-10 leading-tight">
            Bright<br />Starts For<br />Minds.
          </h3>
          {/* Ikon latar belakang */}
          <svg className="absolute bottom-[-20px] right-[-20px] w-48 h-48 text-dark opacity-10 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 15.99L12 18.72L7 15.99V12.27L12 15L17 12.27V15.99Z"/>
          </svg>
        </div>

        {/* Card 2: Putih dengan Gambar */}
        <div 
          tabIndex="0"
          className="bg-white flex flex-row border-[3px] border-dark shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] hover:shadow-[12px_12px_0px_0px_rgba(17,17,17,1)] hover:-translate-y-1 transition-all duration-300 h-64 lg:h-72 items-center group focus:outline-none cursor-default"
        >
          <div className="w-1/2 p-6 lg:p-8 flex flex-col justify-center h-full border-r-[3px] border-dark z-10 bg-white">
            <h3 className="text-5xl font-black font-serif text-dark mb-2">20+</h3>
            <p className="text-dark font-bold uppercase tracking-widest text-xs mb-6 leading-relaxed">Learning<br/>Activities</p>
            <a href="#courses" className="text-dark font-black uppercase tracking-widest text-xs hover:bg-primary inline-flex items-center gap-2 w-max p-2 border-[2px] border-transparent hover:border-dark transition-all outline-none">
              Join Now
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
          <div className="w-1/2 h-full relative overflow-hidden bg-dark">
            {/* Efek grayscale brutalist */}
            <img 
              loading="lazy"
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=400&q=80" 
              alt="Student learning" 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" 
            />
          </div>
        </div>

        {/* Card 3: Kotak Hitam (Dark) dengan Shadow Kuning/Hitam */}
        <div 
          tabIndex="0"
          className="bg-dark text-white p-8 lg:p-10 border-[3px] border-dark shadow-[8px_8px_0px_0px_#FCE300] hover:shadow-[12px_12px_0px_0px_#FCE300] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-64 lg:h-72 focus:outline-none group cursor-default"
        >
          <div>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-6xl font-black font-serif tracking-tight text-white">50+</h3>
              {/* Kotak ikon yang merespons hover */}
              <div className="p-3 border-[3px] border-white bg-dark group-hover:bg-primary group-hover:border-primary group-hover:text-dark text-white transition-colors duration-300">
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15M9 11l3 3L22 4" />
                </svg>
              </div>
            </div>
            <p className="text-sm font-bold text-white uppercase tracking-widest mt-6">Expert Instructors</p>
          </div>
          <p className="text-sm text-gray-400 font-light mt-2 leading-relaxed border-t-[1px] border-gray-700 pt-4">
            Industry professionals guiding your educational journey.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Features;