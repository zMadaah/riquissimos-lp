"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Silk from "@/components/Silk";
import ImageGallery from "@/components/ImageGallery";

export default function RolexInspiredSite() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState(1);
  const [isAnyModalOpen, setIsAnyModalOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      if (v < 0.25) setActiveSection(1);
      else if (v < 0.50) setActiveSection(2);
      else if (v < 0.75) setActiveSection(3);
      else setActiveSection(4);
    });
    return () => unsub();
  }, [scrollYProgress]);

  return (
    <main
      ref={containerRef}
      className="h-[100dvh] w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-black font-sans antialiased overflow-x-hidden"
    >
      <AnimatePresence>
        {!isAnyModalOpen && (
          <header className="fixed top-0 w-full z-[200] pointer-events-none">
            <div className="pointer-events-auto">
              <Navbar isDarkBg={activeSection !== 2} forceVisible={activeSection === 2} />
            </div>
          </header>
        )}
      </AnimatePresence>

      {/* SEÇÃO 1: HERO */}
      <section className="relative h-screen w-full snap-start z-10 overflow-hidden bg-black">
        <video autoPlay muted loop playsInline className="h-full w-full object-cover opacity-70">
          <source src="/assets/video/Khadija.mp4" type="video/mp4" />
        </video>
      </section>

      {/* SEÇÃO 2: GALERIA - Z-INDEX ALTO E BG SÓLIDO */}
      <section
        id="galeria"
        className="relative min-h-[100dvh] w-full snap-start z-[50] bg-white flex flex-col items-center"
      >
        {/* O z-[50] acima garante que ela fique por cima dos vídeos (z-10) */}

        <div className="h-20 sm:h-24 md:h-28 w-full flex-shrink-0 bg-white" />

        <div className="max-w-[1440px] mx-auto w-full px-4 flex-1 flex items-center py-10 bg-white">
          <ImageGallery isActive={activeSection === 2} onModalChange={setIsAnyModalOpen} />
        </div>
      </section>

      {/* SEÇÃO 3: VÍDEO EMOLDURADO - Margens e dimensões corrigidas */}
      <section
        id="localizacao"
        className="relative h-screen min-h-[100dvh] w-full snap-start flex-shrink-0 z-10 bg-black flex flex-col items-center px-4"
      >
        <div className="h-20 sm:h-24 md:h-28 w-full flex-shrink-0" />
        <div className="w-full flex-1 flex items-center justify-center pb-10">
          <div className="w-full max-w-[95vw] sm:max-w-[85vw] md:max-w-[800px] aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            >
              <source src="/assets/video/imersao.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: SILK & FOOTER */}
      <section className="relative h-screen min-h-[100dvh] w-full snap-start flex-shrink-0 z-10 bg-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <Silk speed={1.2} scale={1.2} color="#7B7481" noiseIntensity={0.3} />
        </div>

        <motion.div
          className="relative z-50 px-6 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src="/assets/image/logo_footer.png"
            alt="Logo"
            className="w-full max-w-[180px] sm:max-w-[300px] md:max-w-[450px] h-auto mb-10 md:mb-16"
          />

          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-8 sm:gap-12 md:gap-16">
              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/riquissimosoficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 transition-transform duration-300 hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26" height="26"
                  viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2"
                  className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="text-[7px] md:text-[8px] uppercase tracking-[0.4em] font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Instagram
                </span>
              </a>

              {/* TIKTOK */}
              <a
                href="https://www.tiktok.com/@riquissimooficial"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 transition-transform duration-300 hover:scale-110"
              >
                <svg
                  width="26" height="26"
                  viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2"
                  className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
                <span className="text-[7px] md:text-[8px] uppercase tracking-[0.4em] font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Tiktok
                </span>
              </a>

              {/* PINTEREST */}
              <a
                href="https://pin.it/1kSKHjyZ2"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 transition-transform duration-300 hover:scale-110"
              >
                <svg
                  width="26" height="26"
                  viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2"
                  className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
                  <path d="M12 12c0 2.5-1 4.5-3 5.5" />
                </svg>
                <span className="text-[7px] md:text-[8px] uppercase tracking-[0.4em] font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Pinterest
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}