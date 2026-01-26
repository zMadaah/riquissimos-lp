"use client";
import React from 'react';

export default function FaleConosco() {
  // Substitua pelo seu número (DDI + DDD + Número) sem espaços ou traços
  const whatsappNumber = "5561991209112"; 
  const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento exclusivo.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <main className="min-h-screen bg-white text-black">
      {/* HEADER */}
      <section className="pt-24 sm:pt-32 md:pt-40 lg:pt-48 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto border-b border-gray-100 pb-8 sm:pb-10 md:pb-12">
          <h1 className="text-[10px] sm:text-[11px] md:text-[13px] tracking-[0.4em] sm:tracking-[0.5em] md:tracking-[0.6em] uppercase font-light mb-3 sm:mb-4 text-gray-400">
            Contato
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic tracking-tight leading-tight">
            Solicite um orçamento exclusivo
          </h2>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="px-4 sm:px-6 md:px-10 pb-16 sm:pb-24 md:pb-32 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20">
        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          <div>
            <h3 className="text-[10px] sm:text-[10.5px] md:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase font-bold mb-4 sm:mb-5 md:mb-6">Modelo de Atendimento</h3>
            <p className="text-[11px] sm:text-[11.5px] md:text-[12px] tracking-widest text-gray-500 uppercase leading-relaxed sm:leading-loose">
              Atendimento 100% Online<br className="hidden sm:block" /> 
              Disponibilidade Nacional & Internacional
            </p>
          </div>
          <div>
            <h3 className="text-[10px] sm:text-[10.5px] md:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase font-bold mb-4 sm:mb-5 md:mb-6">Canais Diretos</h3>
            <p className="text-[11px] sm:text-[11.5px] md:text-[12px] tracking-widest text-gray-500 uppercase leading-relaxed sm:leading-loose">
              Segunda a Sexta — 09h às 18h
            </p>
          </div>
        </div>

        {/* CHAMADA PARA AÇÃO (WHATSAPP) */}
        <div className="flex flex-col justify-center items-start space-y-6 sm:space-y-7 md:space-y-8">
          <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed max-w-md">
            Para garantir a exclusividade e agilidade no seu atendimento, realizamos nossas consultorias e orçamentos via WhatsApp Business.
          </p>
          
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-black text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 text-[9px] sm:text-[9.5px] md:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.35em] md:tracking-[0.4em] font-light hover:bg-gray-800 transition-all duration-500 flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-center sm:justify-start rounded-lg sm:rounded-none"
          >
            Iniciar Atendimento Online
            <svg 
              className="w-3 sm:w-3.5 md:w-4 h-3 sm:h-3.5 md:h-4 transition-transform duration-500 group-hover:translate-x-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          {/* <span className="text-[9px] uppercase tracking-[0.2em] text-gray-400">
            Tempo médio de resposta: 15 minutos
          </span> */}
        </div>
      </section>
    </main>
  );
}
