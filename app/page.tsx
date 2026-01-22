"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

  /* ===============================
      CONTROLE DE SEÇÕES
  ================================ */
  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      if (v < 0.25) setActiveSection(1);
      else if (v < 0.5) setActiveSection(2);
      else if (v < 0.75) setActiveSection(3);
      else setActiveSection(4);
    });

    return () => unsub();
  }, [scrollYProgress]);

  const isDarkBg = activeSection !== 2; 

  /* ===============================
      ANIMAÇÕES (Ajustadas para evitar vãos)
  ================================ */

  // Seção 1 desaparece subindo
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.3], 
    ["inset(0% 0% 0% 0%)", "inset(0% 0% 100% 0%)"]
  );

  // Seção 3 sobe cobrindo a Seção 2
  const section3Y = useTransform(
    scrollYProgress,
    [0.5, 0.75],
    ["100%", "0%"]
  );

  // Seção 4 surge por opacidade sobre a 3
  const silkOpacity = useTransform(
    scrollYProgress,
    [0.75, 0.9],
    [0, 1]
  );

  return (
    <main ref={containerRef} className="relative bg-black font-sans">
      {/* NAVBAR FIXA */}
      {!isAnyModalOpen && (
        <div className="fixed top-0 w-full z-[160] transition-colors duration-500">
          <Navbar isDarkBg={isDarkBg} />
        </div>
      )}

      {/* CONTAINER STICKY */}
      <div className="relative h-[400vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">

          {/* ================================    
                 SEÇÃO 2 — GALERIA
              ================================ */}
          <div
            className={`absolute inset-0 transition-all duration-700
    ${activeSection === 2
                ? "z-50 opacity-100 pointer-events-auto"
                : activeSection > 2
                  ? "z-10 opacity-100 pointer-events-none"
                  : "z-0 opacity-0 pointer-events-none"
              }
  `}
          >
            <ImageGallery
              isActive={activeSection === 2}
              onModalChange={setIsAnyModalOpen}
            />
          </div>

          {/* ===============================
              SEÇÃO 1 — VÍDEO HERO (Z-20)
          ================================ */}
          <motion.section
            style={{ clipPath }}
            className="absolute inset-0 z-20 bg-black overflow-hidden"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover opacity-60"
            >
              <source src="/assets/video/Khadija.mp4" type="video/mp4" />
            </video>
          </motion.section>

          {/* ===============================
              SEÇÃO 3 — VÍDEO EMOLDURADO (Z-30)
          ================================ */}
          <motion.section
            style={{ y: section3Y }}
            className="absolute inset-0 z-30 flex items-center justify-center bg-black"
          >
            <div className="w-full h-full max-w-[1200px] max-h-[70vh] px-10 flex flex-col items-center justify-center">
             
              <div className="relative w-full h-full overflow-hidden bg-zinc-900 shadow-2xl">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover opacity-80"
                >
                  <source src="/assets/video/imersao.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </motion.section>

          {/* ===============================
                  SEÇÃO 4 — SILK (Z-40)
              ================================ */}
          <motion.section
            style={{ opacity: silkOpacity }}
            className="absolute inset-0 z-40 bg-white flex items-center justify-center"
          >
            {/* Efeito Silk ao Fundo */}
            <div className="absolute inset-0 pointer-events-none">
              <Silk speed={5} scale={1} color="#7B7481" noiseIntensity={0.7} rotation={0} />
            </div>

            {/* Conteúdo Central: Imagem ao invés de texto */}
            <motion.div
              className="relative z-50 flex flex-col items-center px-4"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <img
                src="/assets/image/logo_footer.png"
                alt="Riquíssimos Logo"
                className="w-full max-w-[400px] md:max-w-[600px] h-auto object-contain brightness-0 invert"
              // Usei brightness-0 para a logo ficar preta sobre o fundo Silk, 
              // mas você pode remover ou trocar por "brightness-0 invert" para branco.
              />
            </motion.div>
          </motion.section>

        </div>
      </div>
    </main>
  );
}