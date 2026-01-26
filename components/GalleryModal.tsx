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
    <div className="h-full overflow-y-auto overscroll-contain">
      {/* HEADER */}
      <header className="px-4 sm:px-6 md:px-10 py-6 sm:py-8 border-b border-gray-100">
        <h2 className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] sm:tracking-[0.6em] text-gray-400 mb-3 sm:mb-4 font-bold">
          {data.title}
        </h2>
        <p className="text-xs sm:text-sm text-gray-700 max-w-xl leading-relaxed">
          {data.description}
        </p>
      </header>

      {/* GALERIA */}
      <section className="p-4 sm:p-6 md:p-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
          {data.images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.04,
                duration: 0.35,
                ease: "easeOut",
              }}
              className="overflow-hidden bg-gray-100 rounded-lg"
            >
              <img
                src={src}
                alt=""
                className="w-full aspect-[3/4] object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
