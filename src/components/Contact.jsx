import { useState } from "react";
import { contactData } from "../data/database";

const Contact = () => {
  const tangerangLocations = contactData.locations.filter(
    (loc) => loc.id === "tng",
  );

  const [activeMapIndex, setActiveMapIndex] = useState(0);

  const prevSlide = () => {
    setActiveMapIndex((prev) =>
      prev === 0 ? tangerangLocations.length - 1 : prev - 1,
    );
  };

  const nextSlide = () => {
    setActiveMapIndex((prev) =>
      prev === tangerangLocations.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <section
      id="contact"
      className="px-6 lg:px-12 max-w-8xl mx-auto py-24 w-full bg-white"
    >
      <div className="bg-white border-[4px] border-dark shadow-[16px_16px_0px_0px_rgba(17,17,17,1)] flex flex-col md:flex-row relative">
        <div className="bg-dark text-white p-10 lg:p-14 md:w-5/12 flex flex-col justify-between border-b-[4px] md:border-b-0 md:border-r-[4px] border-dark relative overflow-hidden">
          <div className="z-10 relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[3px] w-10 bg-primary"></div>
              <span className="text-primary font-bold tracking-widest text-sm uppercase">
                Our Locations
              </span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-black font-serif mb-6 leading-tight">
              Visit Our
              <br />
              Center.
            </h2>
            <p className="text-gray-300 font-light text-xl mb-12 leading-relaxed">
              Find our nearest learning center or contact us directly. Click on
              the location below to see the map.
            </p>

            <div className="space-y-6">
              {tangerangLocations.map((branch, index) => (
                <div
                  key={branch.id}
                  onClick={() => setActiveMapIndex(index)}
                  className={`flex items-start gap-4 p-5 cursor-pointer transition-all duration-300 border-[3px] group ${
                    activeMapIndex === index
                      ? "bg-primary border-primary text-dark shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transform translate-x-2"
                      : "bg-transparent border-gray-700 text-white hover:border-primary hover:translate-x-1"
                  }`}
                >
                  <div
                    className={`p-3 border-[2px] shrink-0 transition-colors ${
                      activeMapIndex === index
                        ? "bg-dark border-dark text-primary"
                        : "bg-transparent border-gray-500 text-gray-400 group-hover:border-primary group-hover:text-primary"
                    }`}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4
                      className={`font-black font-serif text-2xl uppercase tracking-widest mb-2 transition-colors ${activeMapIndex === index ? "text-dark" : "text-white"}`}
                    >
                      Privakom {branch.city}
                    </h4>
                    <p
                      className={`text-sm leading-relaxed mb-4 line-clamp-2 font-medium ${activeMapIndex === index ? "text-dark/80" : "text-gray-400"}`}
                    >
                      {branch.address}
                    </p>

                    <div className="flex items-center gap-2 font-bold">
                      <svg
                        className={`w-5 h-5 ${activeMapIndex === index ? "text-dark" : "text-primary"}`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                      </svg>
                      <a
                        href={`https://wa.me/${branch.whatsapp.replace(/\D/g, "")}`}
                        target="_blank"
                        rel="noreferrer"
                        className={`text-sm uppercase tracking-widest hover:underline ${activeMapIndex === index ? "text-dark" : "text-primary"}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {branch.whatsapp}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-gray-800 opacity-20 pointer-events-none rotate-45 border-[4px] border-gray-700"></div>
        </div>
        <div className="md:w-7/12 bg-light relative p-6 lg:p-10 min-h-[500px] lg:min-h-full flex items-center justify-center z-10">
          <div className="relative w-full h-[400px] lg:h-full border-[4px] border-dark shadow-[12px_12px_0px_0px_rgba(17,17,17,1)] overflow-hidden bg-dark">
            <div
              className="flex w-full h-full transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeMapIndex * 100}%)` }}
            >
              {tangerangLocations.map((branch) => (
                <div
                  key={branch.id}
                  className="w-full h-full flex-shrink-0 relative"
                >
                  <div className="absolute top-6 right-6 z-20 bg-primary border-[3px] border-dark px-5 py-3 shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] flex items-center gap-3 pointer-events-none">
                    <span className="w-3 h-3 bg-dark animate-pulse"></span>
                    <span className="font-black text-dark text-sm uppercase tracking-widest">
                      Privakom {branch.city}
                    </span>
                  </div>

                  <iframe
                    title={`Peta Lokasi Privakom ${branch.city}`}
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(branch.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              ))}
            </div>
            {tangerangLocations.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center bg-white border-[3px] border-dark text-dark shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] hover:bg-primary hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all z-20 focus:outline-none"
                  aria-label="Peta Sebelumnya"
                >
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
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center bg-white border-[3px] border-dark text-dark shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] hover:bg-primary hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all z-20 focus:outline-none"
                  aria-label="Peta Selanjutnya"
                >
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
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </button>
              </>
            )}
            {tangerangLocations.length > 1 && (
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20 bg-white border-[3px] border-dark px-4 py-3 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">
                {tangerangLocations.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveMapIndex(index)}
                    className={`transition-all duration-300 border-[2px] border-dark ${
                      activeMapIndex === index
                        ? "w-8 h-4 bg-primary"
                        : "w-4 h-4 bg-white hover:bg-gray-200"
                    }`}
                    aria-label={`Lihat peta lokasi ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
