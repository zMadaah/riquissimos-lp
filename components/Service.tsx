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
      <section className="pt-48 pb-20 px-10 text-center">
        <h1 className="text-[13px] tracking-[0.6em] uppercase font-light mb-4">Portfolio de Experiências</h1>
        <h2 className="text-4xl md:text-5xl font-serif italic tracking-tight">Serviços & Excelência</h2>
      </section>

      {/* GRADE DE SERVIÇOS */}
      <section className="px-10 pb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20">
          {serviceCategories.map((category, index) => (
            <div key={index} className="flex flex-col border-t border-gray-200 pt-6">
              <h3 className="text-[11px] tracking-[0.3em] uppercase font-bold mb-6">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, idx) => (
                  <li key={idx} className="text-[12px] tracking-widest text-gray-500 uppercase leading-relaxed font-light">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* RODAPÉ DA PÁGINA (OPCIONAL) */}
      <footer className="py-20 border-t border-gray-50 text-center">
        <p className="text-[10px] tracking-[0.5em] uppercase text-gray-400">
          Transformando visões em realidade memorável.
        </p>
      </footer>
    </main>
  );
}