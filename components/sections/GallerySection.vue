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
import { ref } from "vue";

// Usar o composable centralizado de imagens
const { getAllImages } = useGalleryImages();

// Obter todas as imagens organizadas para o carrossel principal
const galleryImages = getAllImages();

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
