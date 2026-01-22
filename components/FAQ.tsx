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
      <section className="pt-48 pb-20 px-10 text-center">
        <h1 className="text-[13px] tracking-[0.6em] uppercase font-light mb-4 text-gray-400">Suporte & Informação</h1>
        <h2 className="text-4xl md:text-5xl font-serif italic tracking-tight">Perguntas Frequentes</h2>
      </section>

      {/* LISTA DE FAQ */}
      <section className="px-10 pb-32 max-w-4xl mx-auto">
        <div className="space-y-16">
          {faqs.map((faq, index) => (
            <div key={index} className="border-t border-gray-100 pt-8 group">
              <h3 className="text-[12px] tracking-[0.3em] uppercase font-bold mb-6 group-hover:text-gray-500 transition-colors">
                {faq.question}
              </h3>
              <p className="text-[14px] tracking-widest text-gray-500 leading-relaxed font-light max-w-2xl">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION FINAL */}
      <section className="py-20 bg-[#F8F8F8] text-center px-10">
        <p className="text-[11px] tracking-[0.4em] uppercase mb-8">Ainda tem dúvidas?</p>
        <button className="border border-black px-12 py-4 text-[10px] uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all duration-500 font-light">
          Falar com um consultor
        </button>
      </section>
    </main>
  );
}