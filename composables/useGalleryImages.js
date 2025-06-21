// Composable para gerenciar imagens da galeria organizadas por categorias
export const useGalleryImages = () => {
  // Configuração centralizada de todas as imagens por categoria
  const imageCategories = {
    // Imagens para famílias - atividades seguras e supervisionadas
    family: [
      {
        id: "family-1",
        image: "/img/crianca-feliz.avif",
        title: "Diversão em Família",
        description:
          "Espaços seguros e divertidos onde pais e filhos criam memórias inesquecíveis juntos.",
        category: "Para Famílias",
        alt: "Criança feliz se divertindo",
      },
      {
        id: "family-2",
        image: "/img/piscina-natural.jpg",
        title: "Piscina Natural",
        description:
          "Nossa piscina natural cristalina oferece momentos únicos de relaxamento e diversão para toda a família.",
        category: "Para Famílias",
        alt: "Piscina natural cristalina",
      },
      {
        id: "family-3",
        image: "/img/playground.jpg",
        title: "Playground (até 12 anos)",
        description:
          "Playground exclusivo para crianças até 12 anos com equipamentos seguros e supervisionados.",
        category: "Para Famílias",
        alt: "Playground para crianças",
      },
      {
        id: "family-4",
        image: "/img/salao-principal.jpg",
        title: "Salão de Festas",
        description:
          "Salão completo para eventos especiais, aniversários e confraternizações em família.",
        category: "Para Famílias",
        alt: "Entrada do salão principal",
      },
    ],

    // Imagens para relaxar - tranquilidade e contato com a natureza
    relax: [
      {
        id: "relax-1",
        image: "/img/trilhas.jpg",
        title: "Trilhas Contemplativas",
        description:
          "Caminhos em meio à natureza preservada com acompanhamento obrigatório para menores de idade.",
        category: "Para Relaxar",
        alt: "Trilhas em meio à natureza",
      },
      {
        id: "relax-2",
        image: "/img/area-convivencia.jpg",
        title: "Área de Convivência",
        description:
          "Espaços especialmente planejados para relaxar e conviver em meio à natureza exuberante.",
        category: "Para Relaxar",
        alt: "Vista geral da área de convivência",
      },
      {
        id: "relax-3",
        image: "/img/visao-area-2.jpg",
        title: "Ambiente Natural",
        description:
          "Paisagens naturais preservadas que proporcionam momentos de paz e tranquilidade.",
        category: "Para Relaxar",
        alt: "Segunda vista da área natural",
      },
      {
        id: "relax-4",
        image: "/img/area-externa.jpg",
        title: "Espaços Externos",
        description:
          "Amplas áreas externas para contemplação e relaxamento em contato direto com a natureza.",
        category: "Para Relaxar",
        alt: "Área externa do clube",
      },
    ],

    // Imagens para diversão - esportes e atividades recreativas
    fun: [
      {
        id: "fun-2",
        image: "/img/campo-futebol.jpg",
        title: "Campo de Futebol",
        description:
          "Campo de futebol gramado para partidas organizadas e recreação esportiva dos contribuintes.",
        category: "Para se Divertir",
        alt: "Campo de futebol gramado",
      },
      {
        id: "fun-3",
        image: "/img/sala-jogos.jpg",
        title: "Salão de Jogos",
        description:
          "Espaço recreativo com sinuca, pebolim e outros jogos para entretenimento de toda a família.",
        category: "Para se Divertir",
        alt: "Salão de jogos com sinuca",
      },
      {
        id: "fun-4",
        image: "/img/campo-areia.jpg",
        title: "Campo de Areia",
        description:
          "Espaço versátil para diversos esportes de areia e atividades recreativas.",
        category: "Para se Divertir",
        alt: "Campo de areia para esportes",
      },
    ],

    // Imagens gastronômicas - culinária regional
    culinary: [
      {
        id: "culinary-1",
        image: "/img/feijoada.jpg",
        title: "Feijoada Tradicional",
        description:
          "Nossa famosa feijoada preparada com ingredientes frescos e receita tradicional da região.",
        category: "Gastronomia",
        alt: "Feijoada tradicional",
      },
      {
        id: "culinary-2",
        image: "/img/frango-caipira.jpg",
        title: "Frango Caipira",
        description:
          "Frango caipira preparado no fogão à lenha com temperos especiais da casa.",
        category: "Gastronomia",
        alt: "Frango caipira assado",
      },
      {
        id: "culinary-3",
        image: "/img/peixe-assado.jpg",
        title: "Peixe Assado",
        description:
          "Peixes frescos da região preparados na brasa com acompanhamentos caseiros.",
        category: "Gastronomia",
        alt: "Peixe assado na brasa",
      },
      {
        id: "culinary-4",
        image: "/img/torta-sorvete.webp",
        title: "Sobremesas Especiais",
        description:
          "Sobremesas caseiras preparadas diariamente pela nossa equipe de cozinha.",
        category: "Gastronomia",
        alt: "Torta de sorvete caseira",
      },
    ],
  };

  // Função para obter todas as imagens em uma única lista (para carrossel principal)
  const getAllImages = () => {
    const allImages = [];
    Object.values(imageCategories).forEach((category) => {
      allImages.push(...category);
    });
    return allImages;
  };

  // Função para obter imagens por categoria específica
  const getImagesByCategory = (category) => {
    return imageCategories[category] || [];
  };

  // Função para obter imagem por ID
  const getImageById = (id) => {
    const allImages = getAllImages();
    return allImages.find((img) => img.id === id);
  };

  // Função para obter categorias disponíveis
  const getCategories = () => {
    return Object.keys(imageCategories);
  };

  // Layouts específicos para seções (definindo posições específicas por ID)
  const experienceLayouts = {
    family: {
      // Layout: 2 colunas, primeira coluna 2 imagens, segunda coluna 2 imagens
      grid: [
        { position: "col1-top", imageId: "family-1", height: "h-48" },
        { position: "col1-bottom", imageId: "family-2", height: "h-48" },
        { position: "col2-top", imageId: "family-3", height: "h-64" },
        { position: "col2-bottom", imageId: "family-4", height: "h-32" },
      ],
    },
    relax: {
      grid: [
        { position: "col1-top", imageId: "relax-1", height: "h-64" },
        { position: "col1-bottom", imageId: "relax-2", height: "h-32" },
        { position: "col2-top", imageId: "relax-3", height: "h-48" },
        { position: "col2-bottom", imageId: "relax-4", height: "h-48" },
      ],
    },
    fun: {
      grid: [
        { position: "col1-top", imageId: "fun-2", height: "h-64" },
        { position: "col1-bottom", imageId: "fun-3", height: "h-32" },
        { position: "col2-top", imageId: "fun-4", height: "h-48" },
        { position: "col2-bottom", imageId: "fun-2", height: "h-48" }, // Reutilizando uma imagem se necessário
      ],
    },
  };

  // Função para obter layout de uma seção com as imagens correspondentes
  const getExperienceLayout = (sectionName) => {
    const layout = experienceLayouts[sectionName];
    if (!layout) return [];

    return layout.grid.map((item) => {
      const image = getImageById(item.imageId);
      return {
        ...item,
        image: image || null,
      };
    });
  };

  // Função para obter imagem específica por posição no layout
  const getImageByPosition = (sectionName, position) => {
    const layout = getExperienceLayout(sectionName);
    const item = layout.find((item) => item.position === position);
    return item ? item.image : null;
  };

  return {
    imageCategories,
    getAllImages,
    getImagesByCategory,
    getImageById,
    getCategories,
    getExperienceLayout,
    getImageByPosition,
  };
};
