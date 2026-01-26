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

    const [activeModal, setActiveModal] =
        useState<GalleryItemKey | null>(null);

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
            {/* SEÇÃO PRINCIPAL  */}
            <section className="w-full h-full bg-white flex flex-col items-center justify-center px-3 sm:px-6 md:px-10 py-4 sm:py-6 md:py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-[1250px] w-full h-full items-start sm:items-center">
                    {images.map((img, index) => (
                        <motion.div
                            key={img.key}
                            className="flex flex-col items-center w-full h-full justify-start sm:justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <motion.div
                                onClick={() => openModal(img.key)}
                                className="overflow-hidden w-full aspect-[3/4] bg-[#f9f9f9] shadow-sm relative mb-2 sm:mb-3 md:mb-4 cursor-pointer rounded-lg"
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

                            <div className="text-center text-black w-full">
                                <h3 className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.5em] font-bold mb-1 sm:mb-2 md:mb-3 leading-tight">
                                    {img.title}
                                </h3>
                                <span className="px-3 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 border border-gray-200 rounded-full text-[7px] sm:text-[8px] md:text-[9px] uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] text-gray-400 inline-block whitespace-nowrap">
                                    {img.label}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* MODAL */}
            <AnimatePresence>
                {activeModal && (
                    <motion.div
                        className="fixed inset-0 z-[500] bg-black/70 flex items-center justify-center p-2 sm:p-4"
                        onClick={closeModal}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <motion.div
                            onClick={(e) => e.stopPropagation()}
                            initial={{ y: 40, opacity: 0, scale: 0.96 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 40, opacity: 0, scale: 0.96 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="bg-white w-full sm:w-[95%] md:w-[92%] max-w-[1100px] max-h-[85vh] sm:max-h-[90vh] overflow-hidden relative rounded-lg"
                        >
                            {/* FECHAR */}
                            <button
                                onClick={closeModal}
                                className="absolute top-2 sm:top-3 md:top-5 right-2 sm:right-3 md:right-5 text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase text-gray-400 hover:text-black z-10 transition-colors font-medium"
                            >
                                Fechar
                            </button>

                            {/* CONTEÚDO */}
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