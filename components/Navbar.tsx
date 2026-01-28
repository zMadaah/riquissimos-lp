"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isDarkBg?: boolean;
  forceVisible?: boolean;
}

export default function Navbar({ isDarkBg = true, forceVisible = false }: NavbarProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cidades = ["Brasília", "Goiânia", "Ribeirão Preto", "São Paulo"];

  // Se forceVisible for true, a barra fica BRANCA com texto PRETO permanentemente
  const isFixedWhite = forceVisible || isScrolled;
  
  const textColor = isFixedWhite ? 'text-black' : (isDarkBg ? 'text-white' : 'text-black');
  const logoFilter = isFixedWhite ? 'brightness-0' : (isDarkBg ? 'brightness-0 invert' : 'brightness-0');

  return (
    <nav className={`
      flex items-center justify-between px-4 sm:px-6 md:px-10 
      h-20 sm:h-24 md:h-28 w-full transition-all duration-500 relative z-[200] font-sans antialiased
      /* Removemos o hover condicionalmente para travar o estado da imagem enviada */
      ${isFixedWhite ? 'bg-white shadow-sm' : 'bg-transparent group hover:bg-white'}
    `}>

      {/* LADO ESQUERDO */}
      <div className="hidden md:flex items-center justify-start gap-8 lg:gap-12 flex-1 h-full">
        <div className="relative flex items-center h-full">
          <button
            onClick={() => setIsModalOpen(!isModalOpen)}
            className={`uppercase text-[10px] tracking-[0.4em] font-bold transition-colors duration-500 flex items-center h-full
              ${textColor} ${!isFixedWhite ? 'group-hover:text-black' : ''}`}
          >
            Localização
          </button>
          
          <AnimatePresence>
            {isModalOpen && (
              <>
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="fixed inset-0 z-10" onClick={() => setIsModalOpen(false)} 
                />
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                  className="absolute top-[80%] left-0 bg-white shadow-2xl p-6 min-w-[220px] z-20 border border-gray-100"
                >
                   <p className="text-[8px] uppercase tracking-[0.5em] text-black-700 mb-4 font-extrabold font-sans border-b pb-2">Onde Atuamos</p>
                   <ul className="flex flex-col gap-4">
                     {cidades.map(c => (
                       <li key={c} className="text-[10px] uppercase tracking-[0.2em] font-bold text-black-400 hover:translate-x-1 transition-transform cursor-pointer">{c}</li>
                     ))}
                   </ul>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        <Link href="/service" className={`uppercase text-[10px] tracking-[0.4em] font-bold transition-colors duration-500 h-full flex items-center ${textColor} ${!isFixedWhite ? 'group-hover:text-black' : ''}`}>
          Serviços
        </Link>
      </div>

      {/* CENTRO: LOGOTIPO (COROA) */}
      <div className="flex justify-center items-center flex-1 md:flex-none h-full">
        <Link href="/">
          <img 
            src="/assets/image/logo.png" 
            alt="Logo" 
            className={`h-10 sm:h-12 md:h-14 w-auto object-contain transition-all duration-500 ${logoFilter} ${!isFixedWhite ? 'group-hover:brightness-0 group-hover:invert-0' : ''}`} 
          />
        </Link>
      </div>

      {/* LADO DIREITO */}
      <div className="hidden md:flex items-center justify-end gap-8 lg:gap-12 flex-1 h-full">
        <Link href="/contato" className={`uppercase text-[10px] tracking-[0.4em] font-bold transition-colors duration-500 h-full flex items-center ${textColor} ${!isFixedWhite ? 'group-hover:text-black' : ''}`}>
          Fale Conosco
        </Link>
        <Link href="/faq" className={`uppercase text-[10px] tracking-[0.4em] font-bold transition-colors duration-500 h-full flex items-center ${textColor} ${!isFixedWhite ? 'group-hover:text-black' : ''}`}>
          FAQ
        </Link>
      </div>

      {/* MOBILE MENU (Ajustado para Roboto e Fundo Branco) */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={`md:hidden flex flex-col gap-1.5 relative z-[300] transition-colors duration-500 ${textColor}`}
      >
        <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2 !text-black' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2 !text-black' : ''}`}></span>
      </button>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-[250] flex flex-col items-center justify-center gap-8 font-sans"
          >
            {["Serviços", "Fale Conosco", "FAQ"].map((item) => (
              <Link 
                key={item} 
                href="#" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-black text-xs uppercase tracking-[0.5em] font-bold"
              >
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}