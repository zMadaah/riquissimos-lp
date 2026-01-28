"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

type GalleryData = {
  title: string;
  description: string;
  images: string[];
};

type GalleryModalProps = {
  data: GalleryData;
  onClose: () => void;
};

export default function GalleryModal({
  data,
  onClose,
}: GalleryModalProps) {
  // Fecha com ESC
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div className="h-full overflow-y-auto overscroll-contain bg-white scrollbar-hide">
      {/* HEADER: Ajustado para melhor leitura no mobile */}
      <header className="px-5 sm:px-8 md:px-12 py-8 sm:py-10 border-b border-gray-50">
        <h2 className="text-[10px] sm:text-[11px] uppercase tracking-[0.5em] text-zinc-400 mb-4 font-black">
          {data.title}
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 max-w-2xl leading-relaxed font-medium">
          {data.description}
        </p>
      </header>

      {/* GALERIA: Grid inteligente (1 coluna mobile pequeno, 2 mobile médio, 3+ desktop) */}
      <section className="p-5 sm:p-8 md:p-12 pb-20">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {data.images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.05,
                duration: 0.4,
                ease: "easeOut",
              }}
              className="group overflow-hidden bg-zinc-50 rounded-xl sm:rounded-2xl"
            >
              <img
                src={src}
                alt={`${data.title} - imagem ${index + 1}`}
                loading="lazy"
                className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}