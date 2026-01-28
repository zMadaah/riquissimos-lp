"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import Image from "next/image";
import GalleryModal from "./GalleryModal";
import { GALLERIES, GalleryItemKey } from "@/data/galleries";

type ImageItem = {
  key: GalleryItemKey;
  src: string;
  title: string;
  label: string;
};

interface ImageGalleryProps {
  onModalChange: (open: boolean) => void;
}

export default function ImageGallery({ onModalChange }: ImageGalleryProps) {
  const images: ImageItem[] = [
    {
      key: "buffet",
      src: "/assets/image/buffet_1.jpg",
      title: "Buffet",
      label: "Conhecer",
    },
    {
      key: "ambiente",
      src: "/assets/image/decoracao_5.jpg",
      title: "Ambiente Riquíssimos",
      label: "Descobrir",
    },
    {
      key: "imersao",
      src: "/assets/image/imersao_1.png",
      title: "Imersão",
      label: "Explorar",
    },
  ];

  const [activeModal, setActiveModal] = useState<GalleryItemKey | null>(null);

  const openModal = useCallback(
    (key: GalleryItemKey) => {
      setActiveModal(key);
      onModalChange(true);
    },
    [onModalChange]
  );

  const closeModal = useCallback(() => {
    setActiveModal(null);
    onModalChange(false);
  }, [onModalChange]);

  return (
    <>
      <section className="w-full bg-white flex justify-center px-4 sm:px-6 md:px-10 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-[1250px]">
          {images.map((img, index) => (
            <motion.div
              key={img.key}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* IMAGEM */}
              <motion.div
                onClick={() => openModal(img.key)}
                className="relative w-full aspect-[3/4] overflow-hidden rounded-[28px] bg-neutral-100 cursor-pointer shadow-sm"
                style={{
                  maxHeight: "clamp(300px, 50vh, 480px)",
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-all duration-500"
                  placeholder="blur"
                  blurDataURL="/assets/image/blur-placeholder.png"
                />
              </motion.div>

              {/* TEXTO */}
              <div className="text-center mt-6 flex flex-col items-center">
                <h3 className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-extrabold mb-5 text-black">
                  {img.title}
                </h3>

                <button
                  onClick={() => openModal(img.key)}
                  className="px-10 py-3 border border-black rounded-full text-[9px] font-bold uppercase tracking-[0.3em] text-black transition-all hover:bg-black hover:text-white active:scale-95"
                >
                  {img.label}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            className="fixed inset-0 z-[500] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              className="bg-white w-full max-w-[1100px] h-[85vh] md:h-[90vh] overflow-hidden rounded-[28px] shadow-2xl relative"
            >
              <button
                onClick={closeModal}
                className="absolute top-5 right-6 text-[10px] tracking-[0.3em] uppercase text-gray-400 hover:text-black z-10 bg-white/80 backdrop-blur px-3 py-1 rounded-full font-bold"
              >
                Fechar
              </button>

              <div className="w-full h-full overflow-y-auto">
                <GalleryModal
                  data={GALLERIES[activeModal]}
                  onClose={closeModal}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
