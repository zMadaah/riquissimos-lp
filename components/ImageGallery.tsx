"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import GalleryModal from "./GalleryModal";
import { GALLERIES, GalleryItemKey } from "@/data/galleries";

type ImageItem = {
    key: GalleryItemKey;
    src: string;
    title: string;
    label: string;
};

type ImageGalleryProps = {
    isActive: boolean;
    onModalChange?: (open: boolean) => void;
};

export default function ImageGallery({
    isActive,
    onModalChange,
}: ImageGalleryProps) {
    const images: ImageItem[] = [
        {
            key: "buffet",
            src: "/assets/image/buffet_1.jpg",
            title: "Buffet",
            label: "Conhecer",
        },
        {
            key: "ambiente",
            src: "/assets/image/decoracao_1.jpg",
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

    function openModal(key: GalleryItemKey) {
        setActiveModal(key);
        onModalChange?.(true);
    }

    function closeModal() {
        setActiveModal(null);
        onModalChange?.(false);
    }

    return (
        <>
            <section className="w-full h-auto bg-white flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 py-10 md:py-16 font-sans">
                {/* Grid Responsivo: 1 coluna no mobile, 3 no desktop */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 w-full max-w-[1250px]">
                    {images.map((img, index) => (
                        <motion.div
                            key={img.key}
                            className="flex flex-col items-center w-full"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {/* IMAGEM COM PROPORÇÃO CONTROLADA */}
                            <motion.div
                                onClick={() => openModal(img.key)}
                                className="overflow-hidden w-full aspect-[3/4] bg-[#f9f9f9] shadow-sm relative mb-6 cursor-pointer rounded-[24px] sm:rounded-[30px]"
                                style={{
                                    // Limita a altura em telas mobile para não empurrar o botão para fora
                                    maxHeight: "clamp(300px, 50vh, 480px)", 
                                }}
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                <motion.img
                                    src={img.src}
                                    alt={img.title}
                                    initial={{ filter: "grayscale(100%)" }}
                                    whileHover={{ filter: "grayscale(0%)" }}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>

                            {/* TEXTO E BOTÃO */}
                            <div className="text-center w-full flex flex-col items-center">
                                <h3 className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-extrabold mb-5 text-black leading-tight">
                                    {img.title}
                                </h3>
                                
                                <button
                                    onClick={() => openModal(img.key)}
                                    className="px-10 py-3 border border-black rounded-full text-[9px] font-bold uppercase tracking-[0.3em] text-black transition-all duration-300 hover:bg-black hover:text-white active:scale-95"
                                >
                                    {img.label}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* MODAL RESPONSIVO */}
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
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            className="bg-white w-full max-w-[1100px] h-[85vh] md:h-[90vh] overflow-hidden relative rounded-[24px] shadow-2xl"
                        >
                            <button
                                onClick={closeModal}
                                className="absolute top-5 right-6 text-[10px] tracking-[0.3em] uppercase text-gray-400 hover:text-black z-[600] transition-colors font-bold bg-white/80 backdrop-blur px-3 py-1 rounded-full"
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