<template>
    <section
        id="futuras-instalacoes"
        class="py-12 md:py-24 bg-gradient-to-br from-teal-50 to-emerald-50"
    >
        <div class="container mx-auto px-4 md:px-6">
            <div class="text-center mb-10 md:mb-20">
                <h2
                    class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6 text-slate-800 animate-fade-in-up"
                >
                    Futuras
                    <span
                        class="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent"
                        >Instalações</span
                    >
                </h2>
                <p
                    class="text-base md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200"
                >
                    Conheça os projetos que estão por vir. Seja membro agora e
                    desfrute dessas melhorias exclusivas!
                </p>
            </div>

            <!-- Main Future Installations Carousel -->
            <div class="animate-fade-in-up animation-delay-400">
                <UiImageCarousel
                    :images="futureImages"
                    :autoplay="true"
                    :autoplay-interval="7000"
                    @image-click="openLightbox"
                />
            </div>
        </div>

        <!-- Lightbox Modal -->
        <UiImageLightbox
            :is-open="isLightboxOpen"
            :images="futureImages"
            :initial-index="lightboxIndex"
            @close="closeLightbox"
        />
    </section>
</template>

<script setup>
import { ref } from "vue";
import { getImagesByCategory } from "~/helpers/images";

// Obter todas as imagens de futuras instalações
const futureImages = getImagesByCategory("future");

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

// Scroll function for buttons
const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
};
</script>
