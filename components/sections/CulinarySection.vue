<template>
    <section
        id="culinaria"
        class="py-12 md:py-24 bg-gradient-to-br from-emerald-50 to-slate-100 relative overflow-hidden"
    >
        <!-- Background decoration -->
        <div
            class="absolute top-10 left-10 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
        ></div>
        <div
            class="absolute bottom-10 right-10 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse"
            style="animation-delay: 3s"
        ></div>

        <div class="container mx-auto px-4 md:px-6 relative z-10">
            <div class="text-center mb-10 md:mb-20">
                <h2
                    class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6 text-slate-800 animate-fade-in-up"
                >
                    Nossa
                    <span
                        class="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
                        >Culinária</span
                    >
                </h2>
                <p
                    class="text-base md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200"
                >
                    Descubra nossa extensa variedade gastronômica com sabores
                    autênticos da tradição regional. Muito mais delícias
                    aguardam você em nosso cardápio completo!
                </p>
            </div>
            <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
            >
                <div
                    v-for="dish in dishes"
                    :key="dish.id"
                    class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                    <img
                        :src="dish.image"
                        :alt="dish.title"
                        class="w-full h-40 md:h-48 object-cover"
                    />
                    <div class="p-4 md:p-6">
                        <h3
                            class="text-lg md:text-xl font-bold mb-2 text-gray-800"
                        >
                            {{ dish.title }}
                        </h3>
                        <p class="text-sm md:text-base text-gray-600">
                            {{ dish.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { getImagesByCategory } from "~/helpers/images";

// Obter imagens da categoria culinária
const dishes = getImagesByCategory("culinary");
</script>
