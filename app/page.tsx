"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Silk from "@/components/Silk";
import ImageGallery from "@/components/ImageGallery";

export default function RolexInspiredSite() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState<1 | 2 | 3 | 4>(1);
  const [isAnyModalOpen, setIsAnyModalOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      if (v < 0.2) setActiveSection(1);
      else if (v < 0.45) setActiveSection(2);
      else if (v < 0.75) setActiveSection(3);
      else setActiveSection(4);
    });
    return () => unsub();
  }, [scrollYProgress]);

  const isDarkBg = activeSection !== 2;
  const shouldForceNavbar = activeSection === 2;

  return (
    <main
      ref={containerRef}
      className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-black font-sans antialiased overflow-x-hidden"
    >
      {/* NAVBAR FIXA COM CONTROLE DE VISIBILIDADE */}
      <AnimatePresence>
        {!isAnyModalOpen && (
          <header className="fixed top-0 w-full z-[200] pointer-events-none">
            <div className="pointer-events-auto">
              <Navbar isDarkBg={isDarkBg} forceVisible={shouldForceNavbar} />
            </div>
          </header>
        )}
      </AnimatePresence>

      {/* SEÇÃO 1: HERO - VÍDEO PRINCIPAL (Preload Ativo) */}
      <section className="relative h-screen w-full snap-start flex-shrink-0 z-10 overflow-hidden bg-black">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="auto"
          className="h-full w-full object-cover opacity-70 will-change-transform"
        >
          <source src="/assets/video/Khadija.mp4" type="video/mp4" />
        </video>
      </section>

      {/* SEÇÃO 2: GALERIA - FOCO EM RESPONSIVIDADE */}
      <section className="relative h-screen w-full snap-start flex-shrink-0 z-20 bg-white flex flex-col justify-center pt-20 sm:pt-24 md:pt-28 pb-10">
        <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-8 md:px-12">
          <ImageGallery isActive={activeSection === 2} onModalChange={setIsAnyModalOpen} />
        </div>
      </section>

      {/* SEÇÃO 3: VÍDEO EMOLDURADO - OTIMIZAÇÃO DE CARREGAMENTO */}
      <section className="relative h-screen w-full snap-start flex-shrink-0 z-10 bg-black flex flex-col items-center justify-center px-4 sm:px-6 md:px-10">
        <div className="h-20 sm:h-24 md:h-32 w-full flex-shrink-0" />

        <div className="w-full max-w-[1200px] flex-1 flex items-center justify-center pb-8 sm:pb-12 md:pb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-video md:h-full max-h-[65vh] overflow-hidden bg-zinc-900 shadow-[0_0_50px_rgba(0,0,0,0.8)] rounded-2xl border border-white/10"
          >
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              preload="none" // Só carrega quando o usuário chega perto
              className="h-full w-full object-cover opacity-90 will-change-transform"
            >
              <source src="/assets/video/imersao.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO 4: SILK & FOOTER - REDES SOCIAIS MINIMALISTAS */}
      <section className="relative h-screen w-full snap-start flex-shrink-0 z-10 bg-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <Silk speed={1.2} scale={1.2} color="#7B7481" noiseIntensity={0.3} />
        </div>

        <motion.div
          className="relative z-50 px-6 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img
            src="/assets/image/logo_footer.png"
            alt="Logo"
            className="w-full max-w-[220px] sm:max-w-[350px] md:max-w-[500px] h-auto object-contain mb-8 md:mb-12"
          />

          {/* REDES SOCIAIS - ÍCONES BRANCOS COM HOVER */}
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-10 md:gap-16">

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/riquissimosoficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 transition-transform duration-300 hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="text-[8px] uppercase tracking-[0.4em] font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                  xmlns="http://www.w3.org/2000/center"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
                <span className="text-[8px] uppercase tracking-[0.4em] font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
                  <path d="M12 12c0 2.5-1 4.5-3 5.5" />
                </svg>
                <span className="text-[8px] uppercase tracking-[0.4em] font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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