"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type NavbarTheme = "light" | "dark";

export default function Navbar() {
  const [theme, setTheme] = useState<NavbarTheme>("dark");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileLocalizacaoOpen, setMobileLocalizacaoOpen] = useState(false);

  const cidades = ["Brasília - DF", "Goiânia - GO", "Ribeirão Preto - SP", "São Paulo - SP"];

  /* ================================
     OBSERVER DE SEÇÕES (GLOBAL)
  ================================= */
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      "section[data-theme]"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const target = entry.target as HTMLElement;
          const sectionTheme = target.dataset.theme;

          if (sectionTheme === "light" || sectionTheme === "dark") {
            setTheme(sectionTheme);
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: "-80px 0px -60% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* ================================
     PADRÕES VISUAIS
  ================================= */
  const textColor = "text-white";
  const logoFilter = "brightness-0 invert";

  const desktopLink =
    "uppercase text-[10px] tracking-[0.4em] font-bold transition-colors duration-300 text-white";

  const mobileLink =
    "uppercase text-[12px] tracking-[0.45em] font-bold text-black transition-colors duration-300";

  /* ================================
     NAVBAR
  ================================= */
  return (
    <nav
  className={`
    fixed top-0 w-full z-[500]
    flex items-center justify-between
    px-4 sm:px-6 md:px-10
    h-20 sm:h-24 md:h-28
    font-sans antialiased
    transition-all duration-500 ease-in-out
    ${
      theme === "light"
        ? "bg-black shadow-md"
        : "bg-transparent"
    }
  `}
>
      {/* ================= LEFT (DESKTOP) ================= */}
      <div className="hidden md:flex items-center gap-8 lg:gap-12 flex-1 h-full">
        {/* LOCALIZAÇÃO */}
        <div className="relative flex items-center h-full">
          <button
            onClick={() => setIsModalOpen(!isModalOpen)}
            className={desktopLink}
          >
            Localização
          </button>

          <AnimatePresence>
            {isModalOpen && (
              <>
                <motion.div
                  className="fixed inset-0 z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsModalOpen(false)}
                />

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-[80%] left-0 bg-white shadow-2xl p-6 min-w-[220px] z-20 border border-gray-100"
                >
                  <p className="text-[8px] uppercase tracking-[0.5em]  text-black mb-4 font-extrabold border-b pb-2">
                    Onde Atuamos
                  </p>
                  <ul className="flex flex-col gap-4">
                    {cidades.map((c) => (
                      <li
                        key={c}
                        className="text-[10px] uppercase tracking-[0.2em] font-bold text-black hover:translate-x-1 transition-transform cursor-pointer"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        <Link href="/service" className={desktopLink}>
          Serviços
        </Link>
      </div>

      {/* ================= LOGO ================= */}
      <div className="flex justify-center items-center flex-1 md:flex-none h-full">
        <Link href="/">
          <img
            src="/assets/image/logo.png"
            alt="Logo"
            className={`h-10 sm:h-12 md:h-14 transition-all duration-500 ${logoFilter}`}
          />
        </Link>
      </div>

      {/* ================= RIGHT (DESKTOP) ================= */}
      <div className="hidden md:flex items-center justify-end gap-8 lg:gap-12 flex-1 h-full">
        <Link href="/contato" className={desktopLink}>
          Fale Conosco
        </Link>
        <Link href="/faq" className={desktopLink}>
          FAQ
        </Link>
      </div>

      {/* ================= MOBILE TRIGGER ================= */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={`md:hidden flex flex-col gap-1.5 z-[600] ${textColor}`}
      >
        <span
          className={`w-6 h-0.5 bg-current transition-all ${
            isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-current transition-all ${
            isMobileMenuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-current transition-all ${
            isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-white z-[550] flex items-center justify-center px-10"
          >
            <div className="flex flex-col items-center gap-8">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={mobileLink}
              >
                Início
              </Link>

              <Link
                href="/service"
                onClick={() => setIsMobileMenuOpen(false)}
                className={mobileLink}
              >
                Serviços
              </Link>

              {/* LOCALIZAÇÃO MOBILE */}
              <div className="flex flex-col items-center">
                <button
                  onClick={() =>
                    setMobileLocalizacaoOpen(!mobileLocalizacaoOpen)
                  }
                  className={`${mobileLink} flex items-center gap-2`}
                >
                  Localização
                  <span
                    className={`transition-transform duration-300 ${
                      mobileLocalizacaoOpen ? "rotate-180" : ""
                    }`}
                  >
                  </span>
                </button>

                <AnimatePresence>
                  {mobileLocalizacaoOpen && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 flex flex-col gap-3"
                    >
                      {cidades.map((c) => (
                        <li
                          key={c}
                          className="text-[10px] uppercase tracking-[0.35em] font-bold text-zinc-500"
                        >
                          {c}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/faq"
                onClick={() => setIsMobileMenuOpen(false)}
                className={mobileLink}
              >
                FAQ
              </Link>

              <Link
                href="/contato"
                onClick={() => setIsMobileMenuOpen(false)}
                className={mobileLink}
              >
                Fale Conosco
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
