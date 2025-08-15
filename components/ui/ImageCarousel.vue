<template>
    <div class="relative">
        <!-- Main Carousel Container -->
        <div
            class="relative overflow-hidden rounded-3xl shadow-2xl bg-white transform-gpu will-change-transform"
            data-carousel
        >
            <!-- Images Container -->
            <div
                class="flex transition-transform duration-400 ease-out transform-gpu will-change-transform"
                :style="{ transform: `translate3d(-${currentIndex * 100}%, 0, 0)` }"
            >
                <div
                    v-for="(image, index) in images"
                    :key="image.id"
                    class="w-full flex-shrink-0 relative"
                >
                    <div
                        class="aspect-[16/9] relative group cursor-pointer transform-gpu will-change-transform"
                        @click="$emit('imageClick', index)"
                    >
                        <img
                            :src="image.image"
                            :alt="image.title"
                            class="w-full h-full object-cover transform-gpu will-change-transform transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                        />
                        <!-- Overlay with gradient -->
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 transform-gpu"
                        ></div>

                        <!-- Content overlay -->
                        <div
                            class="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 transform-gpu will-change-transform"
                        >
                            <h3
                                class="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2"
                            >
                                {{ image.title }}
                            </h3>
                            <p
                                class="text-sm md:text-lg opacity-90 max-w-2xl line-clamp-2"
                            >
                                {{ image.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Navigation Arrows -->
            <button
                @click="prevSlide"
                class="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 group z-10 transform-gpu hover:scale-105"
                :class="{ 'opacity-50 cursor-not-allowed': currentIndex === 0 }"
            >
                <svg
                    class="w-4 h-4 md:w-6 md:h-6 transform group-hover:scale-110 transition-transform duration-200 transform-gpu"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 19l-7-7 7-7"
                    ></path>
                </svg>
            </button>

            <button
                @click="nextSlide"
                class="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 group z-10 transform-gpu hover:scale-105"
                :class="{
                    'opacity-50 cursor-not-allowed':
                        currentIndex === images.length - 1,
                }"
            >
                <svg
                    class="w-4 h-4 md:w-6 md:h-6 transform group-hover:scale-110 transition-transform duration-200 transform-gpu"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                    ></path>
                </svg>
            </button>

            <!-- Slide Indicators -->
            <div
                class="absolute bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 md:space-x-2"
            >
                <button
                    v-for="(image, index) in images"
                    :key="`indicator-${image.id}`"
                    @click="goToSlide(index)"
                    class="w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200 transform-gpu hover:scale-125"
                    :class="
                        currentIndex === index
                            ? 'bg-white scale-125'
                            : 'bg-white/50 hover:bg-white/75'
                    "
                ></button>
            </div>

            <!-- Image Counter -->
            <div
                class="absolute top-3 md:top-4 right-3 md:right-4 bg-black/50 backdrop-blur-sm text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium"
            >
                {{ currentIndex + 1 }} / {{ images.length }}
            </div>
        </div>

        <!-- Thumbnail Navigation - Hidden on mobile, visible on tablet+ -->
        <div class="mt-4 md:mt-6 hidden lg:block">
            <div class="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide">
                <button
                    v-for="(image, index) in images"
                    :key="`thumb-${image.id}`"
                    @click="goToSlide(index)"
                    class="flex-shrink-0 relative group"
                >
                    <div
                        class="w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 transform-gpu"
                        :class="
                            currentIndex === index
                                ? 'border-emerald-500 scale-105'
                                : 'border-transparent hover:border-emerald-300'
                        "
                    >
                        <img
                            :src="image.image"
                            :alt="image.title"
                            class="w-full h-full object-cover transition-transform duration-200 group-hover:scale-110 transform-gpu will-change-transform"
                            loading="lazy"
                        />
                    </div>
                    <!-- Active indicator -->
                    <div
                        v-if="currentIndex === index"
                        class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-emerald-500 rounded-full"
                    ></div>
                </button>
            </div>
        </div>

        <!-- Mobile swipe indicator -->
        <div class="mt-3 text-center text-xs text-slate-500 lg:hidden">
            Deslize para ver mais fotos
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

// Props
const props = defineProps({
    images: {
        type: Array,
        required: true,
    },
    autoplay: {
        type: Boolean,
        default: false,
    },
    autoplayInterval: {
        type: Number,
        default: 5000,
    },
});

// Emits
const emit = defineEmits(["imageClick"]);

// State
const currentIndex = ref(0);
let autoplayTimer = null;

// Methods
const nextSlide = () => {
    if (currentIndex.value < props.images.length - 1) {
        currentIndex.value++;
    } else if (props.autoplay) {
        currentIndex.value = 0; // Loop back to start for autoplay
    }
};

const prevSlide = () => {
    if (currentIndex.value > 0) {
        currentIndex.value--;
    } else if (props.autoplay) {
        currentIndex.value = props.images.length - 1; // Loop to end for autoplay
    }
};

const goToSlide = (index) => {
    currentIndex.value = index;
    resetAutoplay();
};

const startAutoplay = () => {
    if (props.autoplay) {
        autoplayTimer = setInterval(() => {
            nextSlide();
        }, props.autoplayInterval);
    }
};

const stopAutoplay = () => {
    if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
    }
};

const resetAutoplay = () => {
    stopAutoplay();
    startAutoplay();
};

// Keyboard navigation
const handleKeydown = (event) => {
    switch (event.key) {
        case "ArrowLeft":
            prevSlide();
            break;
        case "ArrowRight":
            nextSlide();
            break;
        case "Escape":
            // Could be used for fullscreen mode
            break;
    }
};

// Touch/Swipe support for mobile
const touchStartX = ref(0);
const touchEndX = ref(0);

const handleTouchStart = (event) => {
    touchStartX.value = event.changedTouches[0].screenX;
};

const handleTouchEnd = (event) => {
    touchEndX.value = event.changedTouches[0].screenX;
    handleSwipe();
};

const handleSwipe = () => {
    const difference = touchStartX.value - touchEndX.value;
    const threshold = 50; // Minimum swipe distance

    if (Math.abs(difference) > threshold) {
        if (difference > 0) {
            // Swiped left - go to next slide
            nextSlide();
        } else {
            // Swiped right - go to previous slide
            prevSlide();
        }
    }
};

// Lifecycle
onMounted(() => {
    startAutoplay();
    document.addEventListener("keydown", handleKeydown);

    // Add touch event listeners for mobile swipe
    const carousel = document.querySelector("[data-carousel]");
    if (carousel) {
        carousel.addEventListener("touchstart", handleTouchStart);
        carousel.addEventListener("touchend", handleTouchEnd);
    }
});

onBeforeUnmount(() => {
    stopAutoplay();
    document.removeEventListener("keydown", handleKeydown);

    // Remove touch event listeners
    const carousel = document.querySelector("[data-carousel]");
    if (carousel) {
        carousel.removeEventListener("touchstart", handleTouchStart);
        carousel.removeEventListener("touchend", handleTouchEnd);
    }
});
</script>

<style scoped>
/* Custom scrollbar for thumbnail navigation */
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.overflow-x-auto::-webkit-scrollbar {
    height: 4px;
}

.overflow-x-auto::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 2px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
    background: #10b981;
    border-radius: 2px;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
    background: #059669;
}

/* Line clamp utility */
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
