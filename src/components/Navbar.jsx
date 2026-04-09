import { useState } from 'react';

const Navbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-[3px] border-dark transition-all w-full">
      <div className="flex items-center justify-between py-4 px-6 lg:px-12 max-w-8xl mx-auto w-full">
        <div className="flex items-center gap-3 text-3xl font-black font-serif text-dark uppercase tracking-tighter">
          <img src="/logo.svg" alt="Privakom Logo" className="h-8 w-auto" />
          Privakom
        </div>

        <div className="hidden md:flex space-x-10 font-bold uppercase tracking-widest text-sm text-dark">
          <a
            href="#about"
            className="hover:text-primary hover:underline decoration-[3px] underline-offset-8 transition-all"
          >
            About Us
          </a>
          <a
            href="#courses"
            className="hover:text-primary hover:underline decoration-[3px] underline-offset-8 transition-all"
          >
            Courses
          </a>
          <a
            href="#students"
            className="hover:text-primary hover:underline decoration-[3px] underline-offset-8 transition-all"
          >
            Students
          </a>
          <a
            href="#contact"
            className="hover:text-primary hover:underline decoration-[3px] underline-offset-8 transition-all"
          >
            Contact
          </a>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {/* Tombol Join Now Brutalist */}
          <a
            href="#contact"
            className="bg-primary text-dark border-[3px] border-dark px-8 py-3 font-black uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            Join Now
          </a>
        </div>

        <button
          className="md:hidden p-2 text-dark hover:text-primary transition-colors focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b-[4px] border-dark py-6 px-6 flex flex-col space-y-6 animate-[fadeIn_0.2s_ease-out] shadow-[0px_16px_0px_0px_rgba(17,17,17,1)]">
          <a
            href="#about"
            className="text-dark font-black uppercase tracking-widest text-lg hover:text-primary border-b-[2px] border-gray-100 pb-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </a>
          <a
            href="#courses"
            className="text-dark font-black uppercase tracking-widest text-lg hover:text-primary border-b-[2px] border-gray-100 pb-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Courses
          </a>
          <a
            href="#students"
            className="text-dark font-black uppercase tracking-widest text-lg hover:text-primary border-b-[2px] border-gray-100 pb-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Students
          </a>
          <a
            href="#contact"
            className="text-dark font-black uppercase tracking-widest text-lg hover:text-primary border-b-[2px] border-gray-100 pb-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>

          <div className="pt-6 flex flex-col gap-4">
            <a
              href="#contact"
              className="bg-primary text-dark border-[3px] border-dark text-center px-8 py-4 font-black uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;