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
            title: "Buffet ",
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
            <section className="w-full h-full bg-white flex flex-col items-center justify-center px-3 sm:px-6 md:px-10 py-4 sm:py-6 md:py-8 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 w-full max-w-[90vw] md:max-w-[1250px]">
                    {images.map((img, index) => (
                        <motion.div
                            key={img.key}
                            className="flex flex-col items-center w-full h-full justify-start sm:justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            {/* IMAGEM */}
                            <motion.div
                                onClick={() => openModal(img.key)}
                                className="overflow-hidden w-full aspect-[3/4] bg-[#f9f9f9] shadow-sm relative mb-4 sm:mb-5 md:mb-6 cursor-pointer rounded-[20px] sm:rounded-[30px]"
                                style={{
                                    maxHeight: "clamp(200px, 45vh, 400px)",
                                }}
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                <motion.img
                                    src={img.src}
                                    alt={img.title}
                                    initial={{ filter: "grayscale(100%)" }}
                                    whileHover={{ filter: "grayscale(0%)" }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>

                            {/* TÍTULO E BOTÃO (LABEL) */}
                            <div className="text-center w-full flex flex-col items-center">
                                <h3 className="text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-extrabold mb-4 text-black leading-tight">
                                    {img.title}
                                </h3>
                                
                                <button
                                    onClick={() => openModal(img.key)}
                                    className="px-6 sm:px-8 py-2 sm:py-2.5 border border-black rounded-full text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.3em] text-black transition-all duration-300 hover:bg-black hover:text-white"
                                >
                                    {img.label}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* MODAL (Mantido conforme original, garantindo font-sans) */}
            <AnimatePresence>
                {activeModal && (
                    <motion.div
                        className="fixed inset-0 z-[500] bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 font-sans"
                        onClick={closeModal}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            onClick={(e) => e.stopPropagation()}
                            initial={{ y: 40, opacity: 0, scale: 0.96 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 40, opacity: 0, scale: 0.96 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="bg-white w-full sm:w-[95%] md:w-[92%] max-w-[1100px] max-h-[85vh] sm:max-h-[90vh] overflow-hidden relative rounded-[20px] shadow-2xl"
                        >
                            <button
                                onClick={closeModal}
                                className="absolute top-6 right-8 text-[10px] tracking-[0.4em] uppercase text-gray-400 hover:text-black z-50 transition-colors font-bold"
                            >
                                Fechar
                            </button>

                            <GalleryModal
                                data={GALLERIES[activeModal]}
                                onClose={closeModal}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}