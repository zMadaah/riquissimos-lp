"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
  isDarkBg?: boolean; 
}

export default function Navbar({ isDarkBg = true }: NavbarProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const cidades = ["Brasília", "Goiânia", "Ribeirão Preto", "São Paulo"];

  // Definimos uma variável para a cor do texto baseada no fundo
  const textColor = isDarkBg ? 'text-white' : 'text-black';

  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 sm:py-6 md:py-8 bg-transparent w-full transition-colors duration-500 relative">
      
      {/* LADO ESQUERDO: Localização e Serviços (HIDDEN em mobile) */}
      <div className="hidden md:flex items-center justify-start gap-8 lg:gap-12 flex-1">
        
        {/* BLOCO LOCALIZAÇÃO */}
        <div className="relative">
          <button 
            onClick={() => setIsModalOpen(!isModalOpen)}
            className={`uppercase text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] font-medium hover:opacity-50 transition-opacity drop-shadow-sm outline-none ${textColor}`}
          >
            Localização
          </button>

          {isModalOpen && (
            <>
              {/* Overlay invisível */}
              <div 
                className="fixed inset-0 z-10" 
                onClick={() => setIsModalOpen(false)} 
              />
              
              {/* O Modal (Fundo branco, texto cinza/preto para contraste) */}
              <div className="absolute top-10 left-0 bg-white shadow-2xl p-4 sm:p-6 min-w-[200px] sm:min-w-[220px] z-20 border border-gray-100 transition-all duration-300">
                <p className="text-[7px] sm:text-[8px] uppercase tracking-[0.4em] md:tracking-[0.5em] text-gray-400 mb-3 sm:mb-5 font-bold border-b border-gray-100 pb-2">
                  Onde Atuamos
                </p>
                <ul className="flex flex-col gap-3 sm:gap-4">
                  {cidades.map((cidade) => (
                    <li key={cidade}>
                      <button className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-800 hover:translate-x-1 transition-transform duration-300 block">
                        {cidade}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
        
        <Link 
          href="/service" 
          className={`uppercase text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] font-medium hover:opacity-50 transition-opacity drop-shadow-sm ${textColor}`}
        >
          Serviços
        </Link>
      </div>

      {/* CENTRO: LOGOTIPO */}
      <div className="flex justify-center items-center flex-none px-2 sm:px-4 relative flex-1 md:flex-none">
        <Link href="/" className="absolute inset-0 flex items-center justify-center">
          <img
            src="/assets/image/logo.png"
            alt="Logo"
            className={`h-16 sm:h-20 md:h-32 w-auto object-contain transition-all duration-500 max-w-none ${
              isDarkBg ? 'brightness-0 invert' : 'brightness-0'
            }`}
          />
        </Link>
        {/* Criamos um espaçador invisível para manter o vão central se necessário */}
        <div className="h-10 w-16 sm:w-20 md:w-24"></div> 
      </div>

      {/* LADO DIREITO: Contato e FAQ (HIDDEN em mobile) */}
      <div className="hidden md:flex items-center justify-end gap-8 lg:gap-12 flex-1 relative">
        <Link 
          href="/contato" 
          className={`uppercase text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] font-medium hover:opacity-50 transition-opacity drop-shadow-sm ${textColor}`}
        >
          Fale Conosco
        </Link>

        <Link 
          href="/faq" 
          className={`uppercase text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] font-medium hover:opacity-50 transition-opacity drop-shadow-sm ${textColor}`}
        >
          FAQ
        </Link>
      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={`md:hidden flex flex-col gap-1.5 relative z-50 ${textColor}`}
      >
        <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 z-30 md:hidden" 
            onClick={() => setIsMobileMenuOpen(false)} 
          />
          
          {/* Menu */}
          <div className="absolute top-full left-0 right-0 bg-white shadow-2xl p-6 z-40 md:hidden border-t border-gray-100">
            <div className="flex flex-col gap-6">
              
              {/* Localização */}
              <div>
                <button 
                  onClick={() => setIsModalOpen(!isModalOpen)}
                  className="uppercase text-[10px] tracking-[0.4em] font-medium text-gray-800 hover:opacity-50 transition-opacity w-full text-left"
                >
                  Localização
                </button>
                {isModalOpen && (
                  <div className="mt-3 pl-4 border-l-2 border-gray-200">
                    <p className="text-[8px] uppercase tracking-[0.3em] text-gray-400 mb-3 font-bold">
                      Onde Atuamos
                    </p>
                    <ul className="flex flex-col gap-2">
                      {cidades.map((cidade) => (
                        <li key={cidade}>
                          <button className="text-[9px] uppercase tracking-[0.2em] text-gray-600 hover:text-gray-900 transition-colors">
                            {cidade}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Serviços */}
              <Link 
                href="/service"
                onClick={() => setIsMobileMenuOpen(false)}
                className="uppercase text-[10px] tracking-[0.4em] font-medium text-gray-800 hover:opacity-50 transition-opacity"
              >
                Serviços
              </Link>

              {/* Fale Conosco */}
              <Link 
                href="/contato"
                onClick={() => setIsMobileMenuOpen(false)}
                className="uppercase text-[10px] tracking-[0.4em] font-medium text-gray-800 hover:opacity-50 transition-opacity"
              >
                Fale Conosco
              </Link>

              {/* FAQ */}
              <Link 
                href="/faq"
                onClick={() => setIsMobileMenuOpen(false)}
                className="uppercase text-[10px] tracking-[0.4em] font-medium text-gray-800 hover:opacity-50 transition-opacity"
              >
                FAQ
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
