"use client";
import React from 'react';

export default function FAQ() {
  const faqs = [
    {
      question: "Como solicitar um orçamento personalizado?",
      answer: "Pode entrar em contacto connosco através da nossa página de contacto ou diretamente por e-mail. A nossa equipa de curadoria responderá em até 24 horas úteis para agendar uma consultoria inicial."
    },
    {
      question: "Atendem eventos fora de São Paulo?",
      answer: "Sim, realizamos projetos em todo o território nacional e eventos internacionais, mediante planeamento logístico prévio e análise de viabilidade técnica da nossa equipa de produção."
    },
    {
      question: "Qual é a antecedência mínima para reserva?",
      answer: "Para garantir a excelência e exclusividade que a marca propõe, recomendamos uma antecedência mínima de 6 a 12 meses para grandes eventos, e 3 meses para projetos de menor escala."
    },
    {
      question: "Trabalham com fornecedores externos?",
      answer: "Possuímos uma rede de parceiros exclusivos que cumprem os nossos padrões de qualidade. No entanto, estamos abertos a colaborar com fornecedores da sua preferência, desde que passem pela nossa curadoria técnica."
    },
    {
      question: "Os projetos 3D estão incluídos no serviço?",
      answer: "Sim, todos os nossos projetos de cenografia e decoração incluem o desenvolvimento de maquetes digitais 3D para que possa visualizar cada detalhe antes da execução final."
    }
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      {/* HEADER */}
      <section className="pt-24 sm:pt-32 md:pt-40 lg:pt-48 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-10 text-center">
        <h1 className="text-[10px] sm:text-[11px] md:text-[13px] tracking-[0.4em] sm:tracking-[0.5em] md:tracking-[0.6em] uppercase font-light mb-3 sm:mb-4 text-gray-400">Suporte & Informação</h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic tracking-tight leading-tight">Perguntas Frequentes</h2>
      </section>

      {/* LISTA DE FAQ */}
      <section className="px-4 sm:px-6 md:px-10 pb-16 sm:pb-24 md:pb-32 max-w-4xl mx-auto">
        <div className="space-y-10 sm:space-y-12 md:space-y-16">
          {faqs.map((faq, index) => (
            <div key={index} className="border-t border-gray-100 pt-6 sm:pt-7 md:pt-8 group">
              <h3 className="text-[11px] sm:text-[11.5px] md:text-[12px] tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase font-bold mb-4 sm:mb-5 md:mb-6 group-hover:text-gray-500 transition-colors leading-tight">
                {faq.question}
              </h3>
              <p className="text-[12px] sm:text-[13px] md:text-[14px] tracking-widest text-gray-500 leading-relaxed sm:leading-relaxed md:leading-relaxed font-light max-w-2xl">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION FINAL */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#F8F8F8] text-center px-4 sm:px-6 md:px-10">
        <p className="text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.3em] sm:tracking-[0.35em] md:tracking-[0.4em] uppercase mb-6 sm:mb-7 md:mb-8">Ainda tem dúvidas?</p>
        <button className="border border-black px-6 sm:px-8 md:px-12 py-3 sm:py-3.5 md:py-4 text-[9px] sm:text-[9.5px] md:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.35em] md:tracking-[0.4em] hover:bg-black hover:text-white transition-all duration-500 font-light rounded-lg sm:rounded-none w-full sm:w-auto">
          Falar com um consultor
        </button>
      </section>
    </main>
  );
}
