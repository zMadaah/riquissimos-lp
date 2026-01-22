"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
  isDarkBg?: boolean; 
}

export default function Navbar({ isDarkBg = true }: NavbarProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cidades = ["Brasília", "Goiânia", "Ribeirão Preto", "São Paulo"];

  // Definimos uma variável para a cor do texto baseada no fundo
  const textColor = isDarkBg ? 'text-white' : 'text-black';

  return (
    <nav className="flex items-center justify-between px-10 py-8 bg-transparent w-full transition-colors duration-500 relative h24">
      
      {/* LADO ESQUERDO: Localização e Serviços */}
      <div className="flex items-center justify-start gap-12 flex-1">
        
        {/* BLOCO LOCALIZAÇÃO */}
        <div className="relative">
          <button 
            onClick={() => setIsModalOpen(!isModalOpen)}
            className={`uppercase text-[10px] tracking-[0.4em] font-medium hover:opacity-50 transition-opacity drop-shadow-sm outline-none ${textColor}`}
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
              <div className="absolute top-10 left-0 bg-white shadow-2xl p-6 min-w-[220px] z-20 border border-gray-100 transition-all duration-300">
                <p className="text-[8px] uppercase tracking-[0.5em] text-gray-400 mb-5 font-bold border-b border-gray-100 pb-2">
                  Onde Atuamos
                </p>
                <ul className="flex flex-col gap-4">
                  {cidades.map((cidade) => (
                    <li key={cidade}>
                      <button className="text-[10px] uppercase tracking-[0.3em] text-gray-800 hover:translate-x-1 transition-transform duration-300 block">
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
          className={`uppercase text-[10px] tracking-[0.4em] font-medium hover:opacity-50 transition-opacity drop-shadow-sm ${textColor}`}
        >
          Serviços
        </Link>
      </div>

      {/* CENTRO: LOGOTIPO */}
      <div className="flex justify-center items-center flex-none px-4 relative">
        <Link href="/" className="absolute inset-0 flex items-center justify-center">
          <img
            src="/assets/image/logo.png"
            alt="Logo"
            // h-32 agora fará a logo transbordar a nav sem aumentá-la
            className={`h-32 w-auto object-contain transition-all duration-500 max-w-none ${
              isDarkBg ? 'brightness-0 invert' : 'brightness-0'
            }`}
          />
        </Link>
        {/* Criamos um espaçador invisível para manter o vão central se necessário */}
        <div className="h-10 w-24"></div> 
      </div>

      {/* LADO DIREITO: Contato e FAQ */}
      <div className="flex items-center justify-end gap-12 flex-1 relative">
        <Link 
          href="/contato" 
          className={`uppercase text-[10px] tracking-[0.4em] font-medium hover:opacity-50 transition-opacity drop-shadow-sm ${textColor}`}
        >
          Fale Conosco
        </Link>

        <Link 
          href="/faq" 
          className={`uppercase text-[10px] tracking-[0.4em] font-medium hover:opacity-50 transition-opacity drop-shadow-sm ${textColor}`}
        >
          FAQ
        </Link>
      </div>
    </nav>
  );
}