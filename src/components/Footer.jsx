const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-20 pb-10 w-full border-t-[4px] border-dark relative">
      <div className="px-6 lg:px-12 max-w-8xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b-[4px] border-gray-800 pb-16">
          <div className="lg:col-span-2 pr-0 lg:pr-12">
            <div className="flex items-center gap-3 text-4xl font-black font-serif text-primary mb-6 uppercase tracking-tight">
              <img src="/logo.svg" alt="Privakom Logo" className="h-8 w-auto" />
              Privakom.
            </div>

            <p className="text-gray-300 font-light text-lg lg:text-xl leading-relaxed mb-10 max-w-xl">
              Memberdayakan pikiran melalui pembelajaran interaktif berbasis
              permainan. Bergabunglah dengan komunitas kami dan temukan cara
              baru untuk mengembangkan keterampilan Anda.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="w-14 h-14 bg-transparent border-[3px] border-white flex items-center justify-center hover:bg-primary hover:border-primary hover:text-dark transition-colors text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-14 h-14 bg-transparent border-[3px] border-white flex items-center justify-center hover:bg-primary hover:border-primary hover:text-dark transition-colors text-white"
              >
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-14 h-14 bg-transparent border-[3px] border-white flex items-center justify-center hover:bg-primary hover:border-primary hover:text-dark transition-colors text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-black font-serif text-2xl text-primary mb-8 uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li className="group">
                <a
                  href="#about"
                  className="inline-flex items-center text-white font-bold uppercase tracking-widest text-sm hover:text-primary transition-colors"
                >
                  <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-2 text-primary">
                    ■
                  </span>
                  About Us
                </a>
              </li>
              <li className="group">
                <a
                  href="#courses"
                  className="inline-flex items-center text-white font-bold uppercase tracking-widest text-sm hover:text-primary transition-colors"
                >
                  <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-2 text-primary">
                    ■
                  </span>
                  Popular Courses
                </a>
              </li>
              <li className="group">
                <a
                  href="#students"
                  className="inline-flex items-center text-white font-bold uppercase tracking-widest text-sm hover:text-primary transition-colors"
                >
                  <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-2 text-primary">
                    ■
                  </span>
                  Success Stories
                </a>
              </li>
              <li className="group">
                <a
                  href="#contact"
                  className="inline-flex items-center text-white font-bold uppercase tracking-widest text-sm hover:text-primary transition-colors"
                >
                  <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-2 text-primary">
                    ■
                  </span>
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-black font-serif text-2xl text-primary mb-8 uppercase tracking-widest">
              Operating Hours
            </h4>
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b-[2px] border-gray-700 pb-4">
                <span className="font-bold uppercase tracking-widest text-sm text-white">
                  Senin - Sabtu
                </span>
                <span className="bg-primary text-dark font-black px-3 py-1 text-sm border-[2px] border-primary">
                  09:00 - 17:00
                </span>
              </li>
              <li className="flex justify-between items-center border-b-[2px] border-gray-700 pb-4">
                <span className="font-bold uppercase tracking-widest text-sm text-white">
                  Minggu
                </span>
                <span className="bg-transparent text-gray-400 font-black px-3 py-1 text-sm border-[2px] border-gray-700 uppercase">
                  Libur
                </span>
              </li>
            </ul>
            <p className="text-sm font-medium text-gray-400 mt-6 leading-relaxed italic border-l-[4px] border-primary pl-4">
              "Pendaftaran & konsultasi online tetap dilayani 24/7 melalui
              WhatsApp."
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 font-medium text-xs lg:text-sm uppercase tracking-widest">
          <p>&copy; {currentYear} PRIVAKOM. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6 mt-6 md:mt-0">
            <a
              href="#"
              className="hover:text-primary transition-colors underline decoration-[2px] underline-offset-4"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors underline decoration-[2px] underline-offset-4"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
