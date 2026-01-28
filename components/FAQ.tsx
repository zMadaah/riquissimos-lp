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
  const whatsappNumber = "11993115436"; 
  const message = encodeURIComponent("Olá! Gostaria de falar com a equipe.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <main className="min-h-screen bg-black text-white font-sans antialiased overflow-x-hidden">

      {/* BOTÃO VOLTAR: Posicionamento corrigido para mobile */}
      <div className="fixed top-4 sm:top-6 left-4 sm:left-6 md:left-10 z-[100]">
        <Link 
          href="/" 
          className="group flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-black-900  font-sans font-extrabold hover:text-white transition-colors duration-300"
        >
          <div className="p-2 rounded-full border border-gray-500 group-hover:border-white transition-colors duration-300">
            <svg 
              className="w-3.5 h-3.5 sm:w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <span className="hidden xs:inline ">Voltar</span>
        </Link>
      </div>

      {/* HEADER: Ajuste de escala responsiva */}
      <header className="pt-24 sm:pt-32 md:pt-40 pb-10 sm:pb-16 px-6 text-center">
        <h1 className="text-[9px] sm:text-[11px] tracking-[0.4em] uppercase font-bold mb-3 text-zinc-400">
          FAQ
        </h1>
        <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight font-black max-w-3xl mx-auto leading-tight">
          Perguntas Frequentes
        </h2>
      </header>

      {/* LISTA DE FAQ: Cards adaptáveis */}
      <section className="px-5 sm:px-8 md:px-10 pb-20 sm:pb-32 max-w-3xl mx-auto">
        <div className="flex flex-col gap-5 sm:gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 md:p-10 rounded-[24px] sm:rounded-[32px] border border-black/10 bg-white hover:border-black transition-all duration-500 shadow-sm hover:shadow-md"
            >
              <h3 className="text-[10px] sm:text-[11px] md:text-[12px] tracking-[0.2em] uppercase font-black mb-4 leading-snug text-black">
                {faq.question}
              </h3>

              <p className="text-[13px] sm:text-[14px] md:text-[15px] text-zinc-600 leading-relaxed font-medium">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION: Background luxuoso */}
      <section className="py-16 sm:py-24 bg-zinc-50 border-t border-zinc-100 text-center px-6">
        <p className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase mb-8 font-bold text-zinc-700">
          Ainda possui dúvidas específicas?
        </p>

        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full text-[9px] sm:text-[10px] uppercase tracking-[0.3em] hover:bg-zinc-800 active:scale-95 transition-all duration-500 font-bold shadow-lg"
        >
          Falar com a nossa equipe
        </a>
      </section>
    </main>
  );
}