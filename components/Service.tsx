"use client";
import React from 'react';
import Link from 'next/link';

export default function Service() {
  const serviceCategories = [
    {
      title: "Cenografia",
      items: ["Cenografia completa", "Construção de cenários personalizados", "Cenografia de balões", "Ambientação temática", "Personagens cenográficos"]
    },
    {
      title: "Decoração",
      items: ["Decoração cenográfica", "Decoração floral", "Decoração temática", "Decoração personalizada"]
    },
    {
      title: "Gastronomia",
      items: ["Buffet completo", "Buffet personalizado", "Bolos artísticos", "Doces finos", "Doces personalizados"]
    },
    {
      title: "Mobiliário e Estrutura",
      items: ["Mobiliário próprio", "Mobiliário decorativo", "Estrutura completa", "Logística de montagem"]
    },
    {
      title: "Criação e Projeto",
      items: ["Criação de conceito", "Projeto criativo", "Projeto 3D cenográfico", "Curadoria estética"]
    },
    {
      title: "Audiovisual",
      items: ["Fotografia profissional", "Filmagem profissional", "Captação com drone", "Produção de conteúdo"]
    },
    {
      title: "Produção e Execução",
      items: ["Planejamento", "Produção executiva", "Coordenação geral", "Execução completa"]
    },
    {
      title: "Formatos Atendidos",
      items: ["Festas Infantis e 15 anos", "Casamentos e Bodas", "Eventos Corporativos", "Lançamentos e Shows"]
    }
  ];

  return (
    /* Fundo preto e texto branco com fonte Roboto */
    <main className="min-h-screen bg-black text-white font-sans antialiased">

      {/* BOTÃO VOLTAR (Branco sobre Preto) */}
      <div className="fixed top-6 left-4 sm:left-6 md:left-10 z-[100]">
        <Link 
          href="/" 
          className="group flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] font-medium hover:text-zinc-400 transition-colors duration-300"
        >
          <div className="p-2 rounded-full border border-zinc-800 group-hover:border-white transition-colors duration-300">
            <svg 
              className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <span className="hidden sm:inline">Voltar</span>
        </Link>
      </div>

      {/* HEADER DA PÁGINA */}
      <section className="pt-32 sm:pt-40 md:pt-48 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-10 text-center">
        <h1 className="text-[10px] sm:text-[11px] md:text-[13px] tracking-[0.5em] uppercase font-sans mb-3 sm:mb-4 text-zinc-500">
          Portfolio de Experiências
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans tracking-tight leading-tight">
          Serviços & Excelência
        </h2>
      </section>

      {/* GRADE DE SERVIÇOS */}
      <section className="px-4 sm:px-6 md:px-10 pb-16 sm:pb-24 md:pb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 lg:gap-x-12 gap-y-12 sm:gap-y-16">
          {serviceCategories.map((category, index) => (
            <div key={index} className="flex flex-col border-t border-zinc-800 pt-6 group">
              {/* Título da Categoria com Roboto Bold */}
              <h3 className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase font-bold mb-6 text-white group-hover:text-zinc-400 transition-colors">
                {category.title}
              </h3>
              
              {/* Lista de Itens com Roboto Light */}
              <ul className="space-y-3">
                {category.items.map((item, idx) => (
                  <li key={idx} className="text-[10px] sm:text-[11px] tracking-[0.2em] text-white uppercase leading-relaxed font-bold hover:text-zinc-300 transition-colors">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="py-20 border-t border-zinc-900 text-center px-4">
        <p className="text-[9px] sm:text-[10px] tracking-[0.5em] uppercase text-zinc-600 font-light">
          Transformando visões em realidade memorável.
        </p>
      </footer>
    </main>
  );
}