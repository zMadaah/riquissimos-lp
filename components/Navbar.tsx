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
  const [mobileLocalizacaoOpen, setMobileLocalizacaoOpen] = useState(false); // Novo estado
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cidades = ["Brasília", "Goiânia", "Ribeirão Preto", "São Paulo"];

  const isFixedWhite = forceVisible || isScrolled;
  const textColor = isFixedWhite ? 'text-black' : (isDarkBg ? 'text-white' : 'text-black');
  const logoFilter = isFixedWhite ? 'brightness-0' : (isDarkBg ? 'brightness-0 invert' : 'brightness-0');

  return (
    <nav className={`
      flex items-center justify-between px-4 sm:px-6 md:px-10 
      h-20 sm:h-24 md:h-28 w-full transition-all duration-500 relative z-[500] font-sans antialiased
      ${isFixedWhite ? 'bg-white shadow-sm' : 'bg-transparent group hover:bg-white'}
    `}>

      {/* LADO ESQUERDO (Desktop) */}
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
                   <p className="text-[8px] uppercase tracking-[0.5em] text-zinc-400 mb-4 font-extrabold font-sans border-b pb-2">Onde Atuamos</p>
                   <ul className="flex flex-col gap-4">
                     {cidades.map(c => (
                       <li key={c} className="text-[10px] uppercase tracking-[0.2em] font-bold text-black hover:translate-x-1 transition-transform cursor-pointer">{c}</li>
                     ))}
                   </ul>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        <Link href="#galeria" className={`uppercase text-[10px] tracking-[0.4em] font-bold transition-colors duration-500 h-full flex items-center ${textColor} ${!isFixedWhite ? 'group-hover:text-black' : ''}`}>
          Serviços
        </Link>
      </div>

      {/* CENTRO: LOGOTIPO */}
      <div className="flex justify-center items-center flex-1 md:flex-none h-full">
        <Link href="/">
          <img 
            src="/assets/image/logo.png" 
            alt="Logo" 
            className={`h-10 sm:h-12 md:h-14 w-auto object-contain transition-all duration-500 ${logoFilter} ${!isFixedWhite ? 'group-hover:brightness-0 group-hover:invert-0' : ''}`} 
          />
        </Link>
      </div>

      {/* LADO DIREITO (Desktop) */}
      <div className="hidden md:flex items-center justify-end gap-8 lg:gap-12 flex-1 h-full">
        <Link href="/contato" className={`uppercase text-[10px] tracking-[0.4em] font-bold transition-colors duration-500 h-full flex items-center ${textColor} ${!isFixedWhite ? 'group-hover:text-black' : ''}`}>
          Fale Conosco
        </Link>
        <Link href="/faq" className={`uppercase text-[10px] tracking-[0.4em] font-bold transition-colors duration-500 h-full flex items-center ${textColor} ${!isFixedWhite ? 'group-hover:text-black' : ''}`}>
          FAQ
        </Link>
      </div>

      {/* MOBILE MENU TRIGGER */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={`md:hidden flex flex-col gap-1.5 relative z-[600] transition-colors duration-500 ${textColor}`}
      >
        <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2 !text-black' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2 !text-black' : ''}`}></span>
      </button>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 bg-white z-[550] flex flex-col items-center justify-center font-sans px-10"
          >
            <div className="flex flex-col items-center gap-6 w-full max-w-[280px]">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-black text-[12px] uppercase tracking-[0.5em] font-bold">Início</Link>
              
              <Link href="#galeria" onClick={() => setIsMobileMenuOpen(false)} className="text-black text-[12px] uppercase tracking-[0.5em] font-bold">Serviços</Link>

              {/* ITEM LOCALIZAÇÃO COM DROPDOWN INTERNO NO MOBILE */}
              <div className="flex flex-col items-center w-full">
                <button 
                  onClick={() => setMobileLocalizacaoOpen(!mobileLocalizacaoOpen)}
                  className="text-black text-[12px] uppercase tracking-[0.5em] font-bold flex items-center gap-2"
                >
                  Localização {mobileLocalizacaoOpen}
                </button>
                
                <AnimatePresence>
                  {mobileLocalizacaoOpen && (
                    <motion.ul 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: 'auto', opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col items-center gap-3 mt-4"
                    >
                      {cidades.map(c => (
                        <li key={c} className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">{c}</li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/faq" onClick={() => setIsMobileMenuOpen(false)} className="text-black text-[12px] uppercase tracking-[0.5em] font-bold">FAQ</Link>
              
              <Link href="/contato" onClick={() => setIsMobileMenuOpen(false)} className="text-black text-[12px] uppercase tracking-[0.5em] font-bold border-2 border-black px-6 py-3 mt-4">Fale Conosco</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}