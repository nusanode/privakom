import { useState, useEffect } from 'react';
import { coursesData, contactData } from '../data/database';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Courses');
  const [selectedCourse, setSelectedCourse] = useState(null);
  
  const [viewMode, setViewMode] = useState('grid');
  
  // STATE BARU: Mengontrol jumlah item yang terlihat
  const [visibleCount, setVisibleCount] = useState(3); 

  const categories = ['All Courses', ...new Set(coursesData.map(course => course.category))];

  const allFilteredCourses = coursesData.filter(course => {
    const matchesCategory = activeCategory === 'All Courses' || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Memotong data yang difilter sesuai dengan state visibleCount
  const displayedCourses = allFilteredCourses.slice(0, visibleCount);

  // LOGIKA TOMBOL LOAD MORE / SHOW LESS
  const isShowingAll = visibleCount >= allFilteredCourses.length;

  const handleToggleView = () => {
    if (isShowingAll) {
      // Jika sudah terbuka semua, tutup sekaligus
      setVisibleCount(3);
      // Opsional: scroll kembali ke atas daftar kursus secara halus
      document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
    } else {
      // Buka bertahap: Tambah 3 lagi ke jumlah yang terlihat
      setVisibleCount(prevCount => prevCount + 3);
    }
  };

  const handleCategoryClick = (category) => {
    if (activeCategory === category && category !== 'All Courses') {
      setActiveCategory('All Courses');
    } else {
      setActiveCategory(category);
    }
    // Reset kembali ke 3 saat ganti kategori
    setVisibleCount(3); 
  };

  const closeModal = () => setSelectedCourse(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeModal();
    };

    if (selectedCourse) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [selectedCourse]);

  const handleDaftarClick = () => {
    const phoneNumber = contactData.locations[0].whatsapp.replace(/\D/g, ''); 
    const message = `Halo tim Privakom, saya tertarik untuk mendaftar program kursus *${selectedCourse.title}*. Boleh minta informasi lebih lanjut mengenai harga dan jadwalnya?`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Jika sedang mencari (mengetik sesuatu), kita otomatis tampilkan semua hasil pencarian yang relevan.
  // Jika kotak pencarian kosong, kita kembali ke aturan awal (tampilkan sebagian).
  useEffect(() => {
    if (searchTerm) {
      setVisibleCount(allFilteredCourses.length);
    } else {
      setVisibleCount(3);
    }
  }, [searchTerm, allFilteredCourses.length]);

  return (
    <section id="courses" className="px-6 lg:px-12 max-w-8xl mx-auto py-24 w-full relative bg-white border-t-[3px] border-dark">
      
      {/* HEADER & CONTROLS */}
      <div className="flex flex-col md:flex-row items-end justify-between mb-16">
        <div className="mb-8 md:mb-0">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[3px] w-8 bg-dark"></div>
            <span className="text-dark font-bold tracking-widest text-sm uppercase">Discover Your Path</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black font-serif text-dark leading-[1.1]">
            Explore<br />Courses.
          </h2>
        </div>
        
        {/* Search & Toggle View Mode */}
        <div className="w-full md:w-auto flex flex-col md:flex-row items-stretch md:items-center gap-4">
          
          {/* Toggle View Mode (Brutalist style) */}
          <div className="flex shrink-0 self-end md:self-auto order-2 md:order-1 border-[3px] border-dark bg-white shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">
            <button 
              onClick={() => setViewMode('grid')} 
              aria-label="Grid view"
              className={`p-3 transition-colors ${viewMode === 'grid' ? 'bg-primary text-dark' : 'text-dark hover:bg-gray-100'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            </button>
            <div className="w-[3px] bg-dark"></div>
            <button 
              onClick={() => setViewMode('list')} 
              aria-label="Table view"
              className={`p-3 transition-colors ${viewMode === 'list' ? 'bg-primary text-dark' : 'text-dark hover:bg-gray-100'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
            </button>
          </div>

          {/* Fitur Search */}
          <div className="relative w-full md:min-w-[300px] order-1 md:order-2">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-6 w-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-12 pr-12 py-4 border-[3px] border-dark text-dark font-bold bg-white placeholder-gray-500 focus:outline-none focus:bg-primary transition-colors shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]" 
              placeholder="SEARCH COURSES..." 
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-dark hover:text-red-500 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* FILTER KATEGORI */}
      <div className="flex flex-wrap gap-4 mb-14">
        {categories.map((category) => (
          <button 
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-6 py-3 font-bold uppercase tracking-widest text-sm transition-all border-[3px] border-dark ${
              activeCategory === category 
                ? 'bg-dark text-white' 
                : 'bg-white text-dark hover:bg-primary shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* RENDER KONTEN */}
      {displayedCourses.length > 0 ? (
        viewMode === 'grid' ? (
          
          /* --- MODE GRID (BRUTALIST) --- */
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {displayedCourses.map((course, index) => (
              <div 
                key={course.id} 
                onClick={() => setSelectedCourse(course)}
                className="bg-white border-[3px] border-dark shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] hover:shadow-[12px_12px_0px_0px_rgba(17,17,17,1)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col"
              >
                <div className="relative h-64 border-b-[3px] border-dark overflow-hidden bg-dark flex items-center justify-center shrink-0 w-full">
                  {index === 0 && activeCategory === 'All Courses' && !searchTerm && (
                    <div className="absolute top-4 right-4 z-20 bg-red-500 text-white border-[2px] border-dark px-3 py-1 text-xs font-black uppercase tracking-wider animate-pulse">
                      Hot
                    </div>
                  )}
                  <img 
                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80" 
                    alt={course.title} 
                    loading="lazy"
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                  />
                  <div className="absolute top-4 left-4 bg-primary text-dark border-[2px] border-dark px-4 py-1.5 text-xs font-black uppercase tracking-widest z-10">
                    {course.category}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow bg-white">
                  <h3 className="text-2xl font-black font-serif text-dark mb-4 line-clamp-2 leading-tight">{course.title}</h3>
                  <p className="text-dark font-light text-lg mb-8 line-clamp-2 flex-grow">{course.description}</p>
                  
                  <div className="flex items-center justify-between pt-6 border-t-[3px] border-dark mt-auto">
                    <span className="text-lg font-bold text-dark flex items-center gap-2">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      {course.duration}
                    </span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCourse(course);
                      }} 
                      className="text-sm font-black uppercase tracking-widest text-dark bg-white border-[2px] border-dark px-6 py-3 hover:bg-primary transition-colors"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        ) : (

          /* --- MODE TABEL (BRUTALIST) --- */
          <div className="w-full bg-white border-[3px] border-dark shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] overflow-x-auto">
            <table className="w-full text-left border-collapse whitespace-nowrap min-w-[800px]">
              <thead>
                <tr className="bg-primary text-dark border-b-[3px] border-dark">
                  <th className="py-5 px-6 font-black uppercase tracking-widest w-16 text-center border-r-[3px] border-dark">No</th>
                  <th className="py-5 px-6 font-black uppercase tracking-widest border-r-[3px] border-dark">Program Kursus</th>
                  <th className="py-5 px-6 font-black uppercase tracking-widest border-r-[3px] border-dark">Kategori</th>
                  <th className="py-5 px-6 font-black uppercase tracking-widest border-r-[3px] border-dark">Durasi</th>
                  <th className="py-5 px-6 font-black uppercase tracking-widest text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y-[3px] divide-dark">
                {displayedCourses.map((course, index) => (
                  <tr 
                    key={course.id} 
                    onClick={() => setSelectedCourse(course)}
                    className="hover:bg-primary/20 transition-colors cursor-pointer group bg-white"
                  >
                    <td className="py-4 px-6 text-dark font-bold text-center border-r-[3px] border-dark">
                      {index + 1}
                    </td>
                    <td className="py-4 px-6 border-r-[3px] border-dark">
                      <div className="font-bold text-dark text-lg font-serif">
                        {course.title}
                      </div>
                    </td>
                    <td className="py-4 px-6 border-r-[3px] border-dark">
                      <span className="bg-white text-dark border-[2px] border-dark px-3 py-1 text-xs font-bold uppercase tracking-widest">
                        {course.category}
                      </span>
                    </td>
                    <td className="py-4 px-6 border-r-[3px] border-dark">
                      <div className="flex items-center gap-2 text-dark font-bold">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        {course.duration}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCourse(course);
                        }}
                        className="text-xs font-black uppercase tracking-widest text-dark bg-white hover:bg-dark hover:text-white border-[2px] border-dark px-4 py-2 transition-colors"
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        )
      ) : (
        /* --- EMPTY STATE --- */
        <div className="col-span-full py-24 flex flex-col items-center justify-center text-center border-[3px] border-dark bg-gray-50 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
          <div className="bg-primary text-dark p-6 border-[3px] border-dark mb-6">
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 className="text-3xl font-black font-serif text-dark mb-4 uppercase">No Courses Found</h3>
          <p className="text-dark font-light text-xl">We couldn't find any courses matching "{searchTerm}".</p>
          <button onClick={() => setSearchTerm('')} className="mt-8 bg-dark text-white font-bold uppercase tracking-widest px-8 py-4 hover:bg-primary hover:text-dark border-[3px] border-transparent hover:border-dark transition-colors">
            Clear Search
          </button>
        </div>
      )}
      
      {/* Tombol View All / Load More */}
      {/* Hanya tampilkan tombol ini jika kita TIDAK sedang melakukan pencarian DAN jumlah total kursus (yang difilter berdasarkan kategori) lebih dari 3 */}
      {!searchTerm && allFilteredCourses.length > 3 && (
        <div className="text-center mt-20">
          <button 
            onClick={handleToggleView}
            className="inline-flex items-center gap-4 bg-white border-[3px] border-dark text-dark font-bold px-12 py-5 uppercase tracking-widest shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] hover:bg-primary hover:shadow-none hover:translate-y-1 hover:translate-x-1 transition-all text-lg"
          >
            {isShowingAll ? 'Tutup Katalog' : 'Muat Lebih Banyak'}
            <svg 
              className={`w-6 h-6 transition-transform duration-300 ${isShowingAll ? '-rotate-90' : 'group-hover:translate-x-1'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isShowingAll ? (
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              )}
            </svg>
          </button>
        </div>
      )}

      {/* MODAL (BRUTALIST STYLE) */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark/90 backdrop-blur-sm p-4 md:p-8 overflow-y-auto" role="dialog" aria-modal="true">
          <div className="absolute inset-0 cursor-pointer" onClick={closeModal}></div>
          
          <div className="bg-white w-full max-w-3xl relative z-10 border-[4px] border-dark shadow-[16px_16px_0px_0px_rgba(252,227,0,1)] animate-[fadeIn_0.2s_ease-out] my-auto">
            
            <div className="h-64 relative bg-dark flex items-end border-b-[4px] border-dark">
               <img 
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80" 
                  alt={selectedCourse.title} 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 mix-blend-luminosity" 
                />
                <h3 className="relative z-10 text-4xl lg:text-5xl font-black font-serif text-white p-8 lg:px-10 mb-0 leading-tight">
                  {selectedCourse.title}
                </h3>
                
                <button 
                  onClick={closeModal}
                  className="absolute top-6 right-6 bg-white text-dark border-[3px] border-dark p-2 hover:bg-primary transition-colors focus:outline-none z-20 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                  aria-label="Close modal"
                  autoFocus 
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>

            <div className="p-8 lg:p-10">
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="bg-primary text-dark border-[2px] border-dark px-4 py-2 font-black uppercase tracking-widest text-sm">
                  {selectedCourse.category}
                </span>
                <span className="bg-white text-dark border-[2px] border-dark px-4 py-2 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  {selectedCourse.duration}
                </span>
              </div>
              
              <h4 className="font-black text-xl text-dark mb-4 uppercase tracking-widest">Deskripsi Program:</h4>
              <p className="text-dark font-light text-xl leading-relaxed mb-10">
                {selectedCourse.description}
              </p>
              
              <div className="bg-gray-100 border-l-[6px] border-dark p-6 mb-10">
                <p className="text-dark font-medium text-lg italic">
                  "Untuk informasi harga kelas reguler, weekend, maupun private, silakan hubungi tim admin kami melalui WhatsApp."
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 border-t-[4px] border-dark pt-10">
                <button 
                  onClick={closeModal} 
                  className="w-full sm:w-1/3 px-6 py-5 font-black uppercase tracking-widest border-[3px] border-dark text-dark bg-white hover:bg-gray-100 transition-colors"
                >
                  Tutup
                </button>
                <button 
                  onClick={handleDaftarClick}
                  className="w-full sm:w-2/3 px-6 py-5 font-black uppercase tracking-widest bg-primary text-dark border-[3px] border-dark shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] hover:shadow-[2px_2px_0px_0px_rgba(17,17,17,1)] hover:translate-y-1 hover:translate-x-1 transition-all flex items-center justify-center gap-3"
                >
                  <span>Daftar via WhatsApp</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Courses;