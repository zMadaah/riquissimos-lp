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
      <section className="pt-48 pb-16 px-10">
        <div className="max-w-7xl mx-auto border-b border-gray-100 pb-12">
          <h1 className="text-[13px] tracking-[0.6em] uppercase font-light mb-4 text-gray-400">
            Contato
          </h1>
          <h2 className="text-4xl md:text-5xl font-serif italic tracking-tight">
            Solicite um orçamento exclusivo
          </h2>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="px-10 pb-32 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div>
            <h3 className="text-[11px] tracking-[0.3em] uppercase font-bold mb-6">Modelo de Atendimento</h3>
            <p className="text-[12px] tracking-widest text-gray-500 uppercase leading-loose">
              Atendimento 100% Online<br /> 
              Disponibilidade Nacional & Internacional
            </p>
          </div>
          <div>
            <h3 className="text-[11px] tracking-[0.3em] uppercase font-bold mb-6">Canais Diretos</h3>
            <p className="text-[12px] tracking-widest text-gray-500 uppercase leading-loose">
              Segunda a Sexta — 09h às 18h
            </p>
          </div>
        </div>

        {/* CHAMADA PARA AÇÃO (WHATSAPP) */}
        <div className="flex flex-col justify-center items-start space-y-8">
          <p className="text-sm text-gray-600 font-light leading-relaxed max-w-md">
            Para garantir a exclusividade e agilidade no seu atendimento, realizamos nossas consultorias e orçamentos via WhatsApp Business.
          </p>
          
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-black text-white px-12 py-5 text-[10px] uppercase tracking-[0.4em] font-light hover:bg-gray-800 transition-all duration-500 flex items-center gap-4"
          >
            Iniciar Atendimento Online
            <svg 
              className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" 
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