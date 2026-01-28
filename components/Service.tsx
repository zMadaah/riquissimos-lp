"use client";

import React, { useState } from "react";
import Link from "next/link";

/* =========================
   TIPAGENS
========================= */
type ModalContent = {
  title: string;
  items: string[];
};

/* =========================
   DADOS DO MODAL
========================= */
const FORMATOS_ATENDIDOS: Record<string, ModalContent> = {

  "Eventos Sociais & Celebrações": {
    title: "Eventos Sociais & Celebrações",
    items: [
      "Aniversário infantil",
      "Aniversário teen",
      "Festa de 15 anos (tradicional, temática, contemporânea)",
      "Aniversário adulto",
      "Aniversário de 30, 40, 50, 60, 70+",
      "Baile de aniversário",
      "Festa surpresa",
      "Pool party",
      "Festa em casa / garden party",
    ],
  },

  "Eventos de Luxo & Experiência": {
    title: "Eventos de Luxo & Experiência",
    items: [
      "Baile de gala",
      "Baile de debutantes",
      "Jantar de gala",
      "Jantar intimista",
      "Jantar sensorial / experiencial",
      "Jantar temático",
      "Evento black tie",
      "Evento white party",
      "Sunset party",
      "Brunch luxuoso",
      "Afternoon tea",
      "Experiência exclusiva para convidados",
      "Eventos por convite (invite only)",
    ],
  },

  "Eventos Corporativos & Empresariais": {
    title: "Eventos Corporativos & Empresariais",
    items: [
      "Evento corporativo institucional",
      "Lançamento de marca",
      "Lançamento de produto",
      "Convenção empresarial",
      "Conferência",
      "Seminário",
      "Workshop",
      "Treinamento corporativo",
      "Reunião empresarial",
      "Café corporativo",
      "Coquetel corporativo",
      "Networking",
      "Happy hour corporativo",
      "Premiação empresarial",
      "Evento de endomarketing",
    ],
  },

  "Casamentos & União": {
    title: "Casamentos & União",
    items: [
      "Casamento civil",
      "Casamento religioso",
      "Casamento no campo",
      "Casamento na praia",
      "Destination wedding",
      "Mini wedding",
      "Elopement wedding",
      "Renovação de votos",
      "Noivado",
      "Chá de noivado",
      "Despedida de solteiro(a)",
      "Pós-wedding / after party",
      "Bodas"
    ],
  },

  "EVENTOS PERSONALIZADOS": {
    title: "EVENTOS PERSONALIZADOS",
    items: [
      "Eventos autorais",
      "Eventos conceito",
      "Eventos sensoriais",
      "Eventos imersivos",
      "Eventos com storytelling",
      "JEventos exclusivos por curadoria",
      "Evento black tie",
      "Evento white party",
      "Sunset party",
      "Brunch luxuoso",
      "Afternoon tea",
      "Experiência exclusiva para convidados",
      "Eventos por convite (invite only)",
    ],
  },


  "EVENTOS CULTURAIS & ARTÍSTICOS": {
    title: "EVENTOS CULTURAIS & ARTÍSTICOS",
    items: [
      "Exposição de arte",
      "Vernissage",
      "Mostra cultural",
      "Desfile de moda",
      "Eventos com storytelling",
      "Fashion show",
      "Apresentação artística",
      "Espetáculo",
      "Sarau",
      
    ],
  },


  // 👉 as demais listas continuam exatamente como estão
};


/* =========================
   COMPONENTE
========================= */
export default function Service() {
  const [modalData, setModalData] = useState<ModalContent | null>(null);

  const serviceCategories = [
    {
      title: "Formatos Atendidos",
      items: [
        "Eventos Sociais & Celebrações",
        "Eventos de Luxo & Experiência",
        "Eventos Corporativos & Empresariais",
        "Casamentos & União",
        "EVENTOS PERSONALIZADOS",
        "EVENTOS CULTURAIS & ARTÍSTICOS",
      ],
      hasModal: true,
    },
    {
      title: "Cenografia",
      items: [
        "Cenografia completa",
        "Construção de cenários personalizados",
        "Cenografia de balões",
      ],
    },
    {
      title: "Decoração",
      items: [
        "Decoração cenográfica",
        "Decoração floral",
        "Decoração personalizada",
      ],
    },
    {
      title: "Gastronomia",
      items: ["Buffet completo", "Bolos artísticos", "Doces finos"],
    },
    {
      title: "Mobiliário e Estrutura",
      items: [
        "Mobiliário completo",
        "Estrutura completa",
        "Logística de montagem",
      ],
    },
    {
      title: "Criação e Projeto",
      items: ["Criação de conceito", "Projeto criativo", "Projeto 3D cenográfico"],
    },
    {
      title: "Audiovisual",
      items: [
        "Fotografia e Filmagem profissional",
        "Captação com drone",
        "Produção de conteúdo",
      ],
    },
    {
      title: "Produção e Execução",
      items: ["Planejamento", "Produção executiva", "Coordenação geral"],
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white font-sans antialiased overflow-x-hidden">
      {/* ================= BOTÃO VOLTAR ================= */}
      <div className="fixed top-4 sm:top-6 left-4 sm:left-6 md:left-10 z-[100]">
        <Link
          href="/"
          className="group flex items-center gap-2 text-[8px] sm:text-[9px] uppercase tracking-[0.3em] font-bold hover:text-zinc-400 transition-colors"
        >
          <div className="p-2 rounded-full border border-zinc-800 bg-black/60 backdrop-blur-sm">
            <svg
              className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
          <span className="hidden xs:inline">Voltar</span>
        </Link>
      </div>

      {/* ================= HEADER ================= */}
      <header className="pt-28 sm:pt-36 md:pt-44 pb-16 text-center px-6">
        <h1 className="text-[9px] tracking-[0.4em] uppercase font-bold text-zinc-500 mb-4">
          Portfolio de Experiências
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
          Serviços & Excelência
        </h2>
      </header>

      {/* ================= SERVIÇOS ================= */}
      <section className="px-6 sm:px-10 pb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col border-t border-zinc-900 pt-8"
            >
              <h3 className="text-[12px] tracking-[0.3em] uppercase font-black mb-6">
                {category.title}
              </h3>

              <ul className="space-y-4">
                {category.items.map((item, idx) => {
                  const clickable =
                    category.hasModal && FORMATOS_ATENDIDOS[item];

                  return (
                    <li
                      key={idx}
                      onClick={() =>
                        clickable && setModalData(FORMATOS_ATENDIDOS[item])
                      }
                      className={`text-[10px] tracking-[0.15em] uppercase font-bold transition-colors
                        ${clickable
                          ? "cursor-pointer hover:text-white"
                          : "cursor-default text-zinc-400"
                        }`}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {modalData && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm px-6">
          <div className="max-w-xl w-full bg-black border border-zinc-800 p-8 relative">
            {/* Fechar */}
            <button
              onClick={() => setModalData(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white"
            >
              ✕
            </button>

            <h3 className="text-sm tracking-[0.3em] uppercase font-black mb-6">
              {modalData.title}
            </h3>

            <ul className="space-y-3">
              {modalData.items.map((item, index) => (
                <li
                  key={index}
                  className="text-[11px] tracking-wide text-zinc-300 uppercase"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </main>
  );
}
