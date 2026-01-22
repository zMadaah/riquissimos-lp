
export type GalleryItemKey = "buffet" | "ambiente" | "imersao";

export type GalleryData = {
  title: string;
  description: string;
  images: string[];
};

export const GALLERIES: Record<GalleryItemKey, GalleryData> = {
  buffet: {
    title: "Buffet",
    description:
      "Uma curadoria exclusiva de celebrações únicas, capturadas com elegância e emoção.",
    images: [
      "/assets/image/buffet_1.jpg",
      "/assets/image/buffet_2.jpg",
      "/assets/image/buffet_3.jpg",
      "/assets/image/buffet_4.jpg",
    ],
  },

  ambiente: {
    title: "Ambiente Riquíssimos",
    description:
      "Fragmentos raros da vida, onde tempo, presença e sensibilidade se encontram.",
    images: [
      "/assets/image/decoracao_1.jpg",
      "/assets/image/decoracao_2.jpg",
      "/assets/image/decoracao_3.jpg",
      "/assets/image/decoracao_4.jpg",
    ],
  },

  imersao: {
    title: "Imersão",
    description:
      "Novas narrativas visuais, projetos especiais e experiências inéditas.",
    images: [
      "/assets/image/imersao_1.png",
      "/assets/image/imersao_2.png",
      "/assets/image/imersao_3.png",
      "/assets/image/imersao_4.png",
    ],
  },
};
