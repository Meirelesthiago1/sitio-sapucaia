<template>
  <section
    id="galeria"
    class="py-12 md:py-24 bg-gradient-to-br from-slate-50 to-emerald-50"
  >
    <div class="container mx-auto px-4 md:px-6">
      <div class="text-center mb-10 md:mb-20">
        <h2
          class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6 text-slate-800 animate-fade-in-up"
        >
          Nossa
          <span
            class="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
            >Galeria</span
          >
        </h2>
        <p
          class="text-base md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200"
        >
          Explore a beleza natural do Sapucaia através de nossas imagens
        </p>
      </div>

      <!-- Main Gallery Carousel -->
      <div class="animate-fade-in-up animation-delay-400">
        <UiImageCarousel
          :images="galleryImages"
          :autoplay="true"
          :autoplay-interval="6000"
          @image-click="openLightbox"
        />
      </div>
    </div>

    <!-- Lightbox Modal -->
    <UiImageLightbox
      :is-open="isLightboxOpen"
      :images="galleryImages"
      :initial-index="lightboxIndex"
      @close="closeLightbox"
    />
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

// Main gallery images for carousel
const galleryImages = [
  {
    id: 1,
    image:
      "https://cdn.2rscms.com.br/uploads/5145/album/160/photo_657b0b402c0c7.jpg",
    title: "Piscina Natural",
    description:
      "Nossa piscina natural cristalina oferece momentos únicos de relaxamento e diversão para toda a família.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Diversão em Família",
    description:
      "Espaços seguros e divertidos onde pais e filhos criam memórias inesquecíveis juntos.",
  },
  {
    id: 3,
    image:
      "https://cdn.create.vista.com/api/media/medium/12792190/stock-photo-playground?token=",
    title: "Playground (até 12 anos)",
    description:
      "Playground exclusivo para crianças até 12 anos com equipamentos seguros e supervisionados.",
  },
  {
    id: 4,
    image: "https://www.erosimoveisrj.com.br/admin/imovel/1005958.jpg",
    title: "Salão de Festas",
    description:
      "Salão completo para eventos especiais, aniversários e confraternizações em família.",
  },
  {
    id: 5,
    image:
      "https://s2-g1.glbimg.com/BS4bUEb0Znt3aOSFrGMvLHIvqqs=/0x0:4928x3264/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/0/X/2nIyZ3RXqiU5GY537BLA/antonio-visita-familiares-em-vilhena-e-foi-convidado-a-conhecer-o-pesque-pague.jpg",
    title: "Pesca Esportiva",
    description:
      "Atividade relaxante em nossas lagoas cristalinas com equipamentos inclusos e instrutores disponíveis.",
  },
  {
    id: 6,
    image:
      "https://borazeviagens.com.br/wp-content/uploads/2020/11/GOPR0800-1024x768.jpg",
    title: "Trilhas Contemplativas",
    description:
      "Caminhos em meio à natureza preservada com acompanhamento obrigatório para menores de idade.",
  },
  {
    id: 7,
    image:
      "https://sitiosaojorge.com.br/wp-content/uploads/2023/04/Casamento-rustico-Comida-caseira-e-regional-11-scaled.webp",
    title: "Gastronomia Regional",
    description:
      "Sabores autênticos da culinária local preparados com ingredientes frescos e regionais.",
  },
  {
    id: 8,
    image:
      "https://www.aarquiteta.com.br/blog/wp-content/uploads/2023/03/Quiosque-de-Sitio-Um-Lugar-Perfeito-para-Momentos-de-Lazer-e-Descanso.png",
    title: "Área de Convivência",
    description:
      "Espaços especialmente planejados para relaxar e conviver em meio à natureza exuberante.",
  },
  {
    id: 9,
    image:
      "https://www.oab-ro.org.br/gerenciador/data/uploads/2018/08/Inaugura%C3%A7%C3%A3o-quadra-de-v%C3%B4lei-17.jpg",
    title: "Quadra de Vôlei de Areia",
    description:
      "Quadra profissional de vôlei de areia para torneios e momentos de diversão entre amigos e família.",
  },
  {
    id: 10,
    image: "https://i.imgur.com/1eOhARQ.jpeg",
    title: "Campo de Futebol",
    description:
      "Campo de futebol gramado para partidas organizadas e recreação esportiva dos contribuintes.",
  },
  {
    id: 11,
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/0d/ab/d4/bf/sala-de-jogos-com-sinuca.jpg",
    title: "Salão de Jogos",
    description:
      "Espaço recreativo com sinuca, pebolim e outros jogos para entretenimento de toda a família.",
  },
];

// Lightbox functionality
const isLightboxOpen = ref(false);
const lightboxIndex = ref(0);

const openLightbox = (index) => {
  lightboxIndex.value = index;
  isLightboxOpen.value = true;
};

const closeLightbox = () => {
  isLightboxOpen.value = false;
};
</script>
