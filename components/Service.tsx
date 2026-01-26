"use client";
import React from 'react';

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
    <main className="min-h-screen bg-white text-black">
      {/* HEADER DA PÁGINA */}
      <section className="pt-24 sm:pt-32 md:pt-40 lg:pt-48 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-10 text-center">
        <h1 className="text-[10px] sm:text-[11px] md:text-[13px] tracking-[0.4em] sm:tracking-[0.5em] md:tracking-[0.6em] uppercase font-light mb-3 sm:mb-4">Portfolio de Experiências</h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic tracking-tight leading-tight">Serviços & Excelência</h2>
      </section>

      {/* GRADE DE SERVIÇOS */}
      <section className="px-4 sm:px-6 md:px-10 pb-16 sm:pb-24 md:pb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-x-12 gap-y-12 sm:gap-y-14 md:gap-y-16 lg:gap-y-20">
          {serviceCategories.map((category, index) => (
            <div key={index} className="flex flex-col border-t border-gray-200 pt-4 sm:pt-5 md:pt-6">
              <h3 className="text-[10px] sm:text-[10.5px] md:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase font-bold mb-4 sm:mb-5 md:mb-6 leading-tight">
                {category.title}
              </h3>
              <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
                {category.items.map((item, idx) => (
                  <li key={idx} className="text-[10px] sm:text-[11px] md:text-[12px] tracking-widest text-gray-500 uppercase leading-relaxed font-light">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* RODAPÉ DA PÁGINA (OPCIONAL) */}
      <footer className="py-12 sm:py-16 md:py-20 border-t border-gray-50 text-center px-4 sm:px-6 md:px-10">
        <p className="text-[9px] sm:text-[9.5px] md:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em] uppercase text-gray-400">
          Transformando visões em realidade memorável.
        </p>
      </footer>
    </main>
  );
}
