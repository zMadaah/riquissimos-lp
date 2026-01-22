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
        <section className="w-full h-full bg-white flex flex-col items-center justify-center px-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-[1250px] w-full max-h-[85vh] items-center">
                {images.map((img) => (
                    <div key={img.key} className="flex flex-col items-center">
                        <motion.div
                            onClick={() => openModal(img.key)}
                            className="overflow-hidden w-full aspect-[3/4] max-h-[50vh] bg-[#f9f9f9] shadow-sm relative mb-8 cursor-pointer"
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

                        <div className="text-center text-black">
                            <h3 className="text-[10px] uppercase tracking-[0.5em] font-bold mb-4">
                                {img.title}
                            </h3>
                            <span className="px-6 py-2 border border-gray-200 rounded-full text-[9px] uppercase tracking-[0.3em] text-gray-400">
                                {img.label}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>

            {/* MODAL */}
            <AnimatePresence>
                {activeModal && (
                    <motion.div
                        className="fixed inset-0 z-[500] bg-black/70 flex items-center justify-center"
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
                            className="bg-white w-[92%] max-w-[1100px] h-[90vh] overflow-hidden relative"
                        >
                            {/* FECHAR */}
                            <button
                                onClick={closeModal}
                                className="absolute top-5 right-5 text-[10px] tracking-[0.4em] uppercase text-gray-400 hover:text-black z-10"
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
