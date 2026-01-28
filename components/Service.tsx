"use client";
import React from 'react';
import Link from 'next/link';

export default function Service() {
  const serviceCategories = [
    {
      title: "Cenografia",
      items: ["Cenografia completa", "Construção de cenários personalizados", "Cenografia de balões", ]
    },
    {
      title: "Decoração",
      items: ["Decoração cenográfica", "Decoração floral", "Decoração personalizada"]
    },
    {
      title: "Gastronomia",
      items: ["Buffet completo","Bolos artísticos", "Doces finos"]
    },
    {
      title: "Mobiliário e Estrutura",
      items: [ "Mobiliário completo", "Estrutura completa", "Logística de montagem"]
    },
    {
      title: "Criação e Projeto",
      items: ["Criação de conceito", "Projeto criativo", "Projeto 3D cenográfico"]
    },
    {
      title: "Audiovisual",
      items: ["Fotografia e Filmagem profissional",  "Captação com drone", "Produção de conteúdo"]
    },
    {
      title: "Produção e Execução",
      items: ["Planejamento", "Produção executiva", "Coordenação geral"]
    },
    {
      title: "Formatos Atendidos",
      items: ["Festas De 15 anos", "Casamentos", "Eventos Corporativos"]
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white font-sans antialiased overflow-x-hidden">

      {/* BOTÃO VOLTAR: Melhorado para toque no mobile */}
      <div className="fixed top-4 sm:top-6 left-4 sm:left-6 md:left-10 z-[100]">
        <Link 
          href="/" 
          className="group flex items-center gap-2 text-[8px] sm:text-[9px] uppercase tracking-[0.3em] font-bold hover:text-zinc-400 transition-colors duration-300"
        >
          <div className="p-1.5 sm:p-2 rounded-full border border-zinc-800 bg-black/50 backdrop-blur-sm group-hover:border-white transition-colors duration-300">
            <svg 
              className="w-3.5 h-3.5 sm:w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <span className="hidden xs:inline">Voltar</span>
        </Link>
      </div>

      {/* HEADER DA PÁGINA: Padding adaptável */}
      <header className="pt-24 sm:pt-32 md:pt-44 pb-12 sm:pb-20 px-6 text-center">
        <h1 className="text-[9px] sm:text-[11px] tracking-[0.4em] uppercase font-bold mb-3 text-zinc-500">
          Portfolio de Experiências
        </h1>
        <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight font-black">
          Serviços & Excelência
        </h2>
      </header>

      {/* GRADE DE SERVIÇOS: Grid progressivo */}
      <section className="px-6 sm:px-10 pb-20 sm:pb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-x-8 lg:gap-x-12 gap-y-10 sm:gap-y-16">
          {serviceCategories.map((category, index) => (
            <div key={index} className="flex flex-col border-t border-zinc-900 pt-8 group">
              <h3 className="text-[12px] sm:text-[12px] tracking-[0.3em] uppercase font-black mb-6 text-zinc-100 font-extrabold group-hover:text-white transition-colors">
                {category.title}
              </h3>
              
              <div className="py-5 border-t border-zinc-100 text-center px-6"></div>

              <ul className="space-y-4">
                {category.items.map((item, idx) => (
                  <li key={idx} className="text-[10px] sm:text-[11px] tracking-[0.15em] text-zinc-300 uppercase leading-relaxed font-bold hover:text-white transition-colors cursor-default">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      
    </main>
  );
}