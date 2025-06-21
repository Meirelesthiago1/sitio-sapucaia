// Composable específico para gerenciar imagens da seção de experiências
export const useExperienceImages = () => {
  const { getImageById } = useGalleryImages();

  // Definição explícita de qual imagem vai em cada posição de cada seção
  const experienceSections = {
    family: {
      name: "Para Famílias",
      images: {
        primary: getImageById("family-1"), // Imagem principal (col1-top)
        secondary: getImageById("family-2"), // Imagem secundária (col1-bottom)
        highlight: getImageById("family-3"), // Imagem destaque (col2-top)
        accent: getImageById("family-4"), // Imagem de apoio (col2-bottom)
      },
    },
    relax: {
      name: "Para Relaxar",
      images: {
        primary: getImageById("relax-1"), // Imagem principal (col1-top)
        secondary: getImageById("relax-2"), // Imagem secundária (col1-bottom)
        highlight: getImageById("relax-3"), // Imagem destaque (col2-top)
        accent: getImageById("relax-4"), // Imagem de apoio (col2-bottom)
      },
    },
    fun: {
      name: "Para se Divertir",
      images: {
        primary: getImageById("fun-2"), // Campo de futebol (col1-top)
        secondary: getImageById("fun-3"), // Salão de jogos (col1-bottom)
        highlight: getImageById("fun-4"), // Campo de areia (col2-top)
        accent: getImageById("family-2"), // Piscina natural (col2-bottom)
      },
    },
  };

  // Função para obter todas as imagens de uma seção específica
  const getSectionImages = (sectionName) => {
    const section = experienceSections[sectionName];
    if (!section) return null;

    return section.images;
  };

  // Função para obter uma imagem específica de uma seção por role
  const getSectionImage = (sectionName, imageRole) => {
    const section = experienceSections[sectionName];
    if (!section) return null;

    return section.images[imageRole] || null;
  };

  // Função para obter array de imagens no formato esperado pelo lightbox
  const getSectionImagesArray = (sectionName) => {
    const section = experienceSections[sectionName];
    if (!section) return [];

    return Object.values(section.images).filter((img) => img !== null);
  };

  // Função para obter o índice de uma imagem específica no array (para lightbox)
  const getImageIndex = (sectionName, imageRole) => {
    const imagesArray = getSectionImagesArray(sectionName);
    const targetImage = getSectionImage(sectionName, imageRole);

    if (!targetImage) return 0;

    return imagesArray.findIndex((img) => img.id === targetImage.id) || 0;
  };

  return {
    experienceSections,
    getSectionImages,
    getSectionImage,
    getSectionImagesArray,
    getImageIndex,
  };
};
