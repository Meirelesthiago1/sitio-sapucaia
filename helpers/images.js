export const imageCategories = {
    family: [
        {
            id: "family-1",
            image: "/img/crianca-feliz.avif",
            title: "Diversão em Família",
            description: "Espaços seguros e divertidos onde pais e filhos criam memórias inesquecíveis juntos.",
            category: "Para Famílias",
            alt: "Criança feliz se divertindo",
        },
        {
            id: "family-2",
            image: "/img/piscina-natural.jpg",
            title: "Piscina Natural",
            description: "Nossa piscina natural cristalina oferece momentos únicos de relaxamento e diversão para toda a família.",
            category: "Para Famílias",
            alt: "Piscina natural cristalina",
        },
        {
            id: "family-3",
            image: "/img/playground.jpg",
            title: "Playground (até 12 anos)",
            description: "Playground exclusivo para crianças até 12 anos com equipamentos seguros e supervisionados.",
            category: "Para Famílias",
            alt: "Playground para crianças",
        },
        {
            id: "family-4",
            image: "/img/salao-principal.jpg",
            title: "Salão de Festas",
            description: "Salão completo para eventos especiais, aniversários e confraternizações em família.",
            category: "Para Famílias",
            alt: "Entrada do salão principal",
        },
    ],
    relax: [
        {
            id: "relax-1",
            image: "/img/trilhas.jpg",
            title: "Trilhas Contemplativas",
            description: "Caminhos em meio à natureza preservada com acompanhamento obrigatório para menores de idade.",
            category: "Para Relaxar",
            alt: "Trilhas em meio à natureza",
        },
        {
            id: "relax-2",
            image: "/img/area-convivencia.jpg",
            title: "Área de Convivência",
            description: "Espaços especialmente planejados para relaxar e conviver em meio à natureza exuberante.",
            category: "Para Relaxar",
            alt: "Vista geral da área de convivência",
        },
        {
            id: "relax-3",
            image: "/img/visao-area-2.jpg",
            title: "Ambiente Natural",
            description: "Paisagens naturais preservadas que proporcionam momentos de paz e tranquilidade.",
            category: "Para Relaxar",
            alt: "Segunda vista da área natural",
        },
        {
            id: "relax-4",
            image: "/img/area-externa.jpg",
            title: "Espaços Externos",
            description: "Amplas áreas externas para contemplação e relaxamento em contato direto com a natureza.",
            category: "Para Relaxar",
            alt: "Área externa do clube",
        },
    ],
    fun: [
        {
            id: "fun-2",
            image: "/img/campo-futebol.jpg",
            title: "Campo de Futebol",
            description: "Campo de futebol gramado para partidas organizadas e recreação esportiva dos contribuintes.",
            category: "Para se Divertir",
            alt: "Campo de futebol gramado",
        },
        {
            id: "fun-3",
            image: "/img/sala-jogos.jpg",
            title: "Salão de Jogos",
            description: "Espaço recreativo com sinuca, pebolim e outros jogos para entretenimento de toda a família.",
            category: "Para se Divertir",
            alt: "Salão de jogos com sinuca",
        },
        {
            id: "fun-4",
            image: "/img/campo-areia.jpg",
            title: "Campo de Areia",
            description: "Espaço versátil para diversos esportes de areia e atividades recreativas.",
            category: "Para se Divertir",
            alt: "Campo de areia para esportes",
        },
    ],
    culinary: [
        {
            id: "culinary-1",
            image: "/img/feijoada.jpg",
            title: "Feijoada Tradicional",
            description: "Nossa famosa feijoada preparada com ingredientes frescos e receita tradicional da região.",
            category: "Gastronomia",
            alt: "Feijoada tradicional",
        },
        {
            id: "culinary-2",
            image: "/img/frango-caipira.jpg",
            title: "Frango Caipira",
            description: "Frango caipira preparado no fogão à lenha com temperos especiais da casa.",
            category: "Gastronomia",
            alt: "Frango caipira assado",
        },
        {
            id: "culinary-3",
            image: "/img/peixe-assado.jpg",
            title: "Peixe Assado",
            description: "Peixes frescos da região preparados na brasa com acompanhamentos caseiros.",
            category: "Gastronomia",
            alt: "Peixe assado na brasa",
        },
        {
            id: "culinary-4",
            image: "/img/torta-sorvete.webp",
            title: "Sobremesas Especiais",
            description: "Sobremesas caseiras preparadas diariamente pela nossa equipe de cozinha.",
            category: "Gastronomia",
            alt: "Torta de sorvete caseira",
        },
    ],
};

function createExperienceSections() {
    return {
        family: {
            name: "Para Famílias",
            images: {
                primary: getImageById("family-1"),
                secondary: getImageById("family-2"),
                highlight: getImageById("family-3"),
                accent: getImageById("family-4"),
            },
        },
        relax: {
            name: "Para Relaxar",
            images: {
                primary: getImageById("relax-1"),
                secondary: getImageById("relax-2"),
                highlight: getImageById("relax-3"),
                accent: getImageById("relax-4"),
            },
        },
        fun: {
            name: "Para se Divertir",
            images: {
                primary: getImageById("fun-2"),
                secondary: getImageById("fun-3"),
                highlight: getImageById("fun-4"),
                accent: getImageById("family-2"),
            },
        },
    };
}

export function getAllImages() {
    const allImages = [];
    Object.values(imageCategories).forEach((category) => {
        allImages.push(...category);
    });
    return allImages;
}

export function getImagesByCategory(category) {
    return imageCategories[category] || [];
}

export function getImageById(id) {
    const allImages = getAllImages();
    return allImages.find((img) => img.id === id);
}

export function getCategories() {
    return Object.keys(imageCategories);
}

export function getSectionImages(sectionName) {
    const experienceSections = createExperienceSections();
    const section = experienceSections[sectionName];
    if (!section) return null;
    return section.images;
}

export function getSectionImage(sectionName, imageRole) {
    const experienceSections = createExperienceSections();
    const section = experienceSections[sectionName];
    if (!section) return null;
    return section.images[imageRole] || null;
}

export function getSectionImagesArray(sectionName) {
    const experienceSections = createExperienceSections();
    const section = experienceSections[sectionName];
    if (!section) return [];
    return Object.values(section.images).filter((img) => img !== null);
}

export function getImageIndex(sectionName, imageRole) {
    const imagesArray = getSectionImagesArray(sectionName);
    const targetImage = getSectionImage(sectionName, imageRole);
    if (!targetImage) return 0;
    return imagesArray.findIndex((img) => img.id === targetImage.id) || 0;
}