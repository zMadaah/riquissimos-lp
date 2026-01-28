"use client";
import React from 'react';
import Link from 'next/link';

export default function FAQ() {
  const faqs = [
    {
      question: "Como solicitar um orçamento personalizado?",
      answer: "Pode entrar em contacto conosco através da nossa página de contacto ou diretamente por e-mail. A nossa equipa de curadoria responderá em até 24 horas úteis para agendar uma consultoria inicial."
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
      answer: "Sim, todos os nossos projetos de cenografia e decoração incluem o desenvolvimento de projetos 3D para que possa visualizar cada detalhe antes da execução final."
    }
  ];
  const whatsappNumber = "5561991209112"; 
  const message = encodeURIComponent("Olá! Gostaria de falar com a equipe.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <main className="min-h-screen bg-white text-black font-sans antialiased">

      {/* BOTÃO VOLTAR */}
      <div className="fixed top-6 left-4 sm:left-6 md:left-10 z-[100]">
        <Link 
          href="/" 
          className="group flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] font-medium hover:text-gray-500 transition-colors duration-300"
        >
          <div className="p-2 rounded-full border border-gray-100 group-hover:border-black transition-colors duration-300">
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

      {/* HEADER */}
      <section className="pt-32 sm:pt-40 md:pt-48 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-10 text-center">
        <h1 className="text-[10px] sm:text-[11px] md:text-[13px] tracking-[0.5em] uppercase font-sans mb-3 sm:mb-4 text-gray-500">
          Suporte
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans tracking-tight font-extrabold">
          Perguntas Frequentes
        </h2>
      </section>

      {/* LISTA DE FAQ COM BORDER RADIUS, BORDA PRETA E TEXTO PRETO */}
      <section className="px-4 sm:px-6 md:px-10 pb-16 sm:pb-24 md:pb-32 max-w-4xl mx-auto">
        <div className="flex flex-col gap-4 sm:gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 md:p-10 rounded-[20px] sm:rounded-[30px] border border-black bg-white hover:bg-zinc-50 transition-all duration-500"
            >
              <h3 className="text-[11px] sm:text-[11.5px] md:text-[12px] tracking-[0.25em] uppercase font-extrabold mb-4 sm:mb-5 md:mb-6 leading-tight transition-colors font-sans text-black">
                {faq.question}
              </h3>

              <p className="text-[12px] sm:text-[13px] md:text-[14px] tracking-[0.05em] text-black leading-relaxed font-light max-w-2xl font-sans">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION FINAL */}
      <section className="py-20 bg-[#f5f3ef] text-center px-4 sm:px-6 md:px-10">
        <p className="text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.4em] uppercase mb-8 font-bold text-zinc-500">
          Ainda tem dúvidas?
        </p>

        <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
           className="inline-block bg-black text-white px-10 py-5 rounded-full text-[9px] sm:text-[10px] uppercase tracking-[0.3em] hover:bg-zinc-800 transition-all duration-500 font-bold"
          >
            Fale com a nossa equipe
          </a>
      </section>
    </main>
  );
}