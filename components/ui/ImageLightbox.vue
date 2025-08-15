<template>
    <Teleport to="body">
        <Transition
            enter-active-class="transition-all duration-500 ease-out"
            leave-active-class="transition-all duration-300 ease-in"
            enter-from-class="opacity-0 backdrop-blur-none"
            enter-to-class="opacity-100 backdrop-blur-sm"
            leave-from-class="opacity-100 backdrop-blur-sm"
            leave-to-class="opacity-0 backdrop-blur-none"
        >
            <div
                v-if="isOpen"
                class="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md transform-gpu will-change-transform"
                @click="closeLightbox"
                @keydown.esc="closeLightbox"
            >
                <!-- Close button -->
                <button
                    @click="closeLightbox"
                    class="absolute top-4 right-4 z-60 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 transform-gpu hover:scale-105"
                >
                    <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                </button>

                <!-- Navigation arrows -->
                <button
                    v-if="images.length > 1"
                    @click.stop="prevImage"
                    class="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 transform-gpu hover:scale-105 z-60"
                    :class="{
                        'opacity-50 cursor-not-allowed': currentIndex === 0,
                    }"
                >
                    <svg
                        class="w-6 h-6"
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
                    v-if="images.length > 1"
                    @click.stop="nextImage"
                    class="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 transform-gpu hover:scale-105 z-60"
                    :class="{
                        'opacity-50 cursor-not-allowed':
                            currentIndex === images.length - 1,
                    }"
                >
                    <svg
                        class="w-6 h-6"
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

                <!-- Image container -->
                <div class="relative max-w-full max-h-full p-4" @click.stop>
                    <Transition
                        enter-active-class="transition-all duration-400 ease-out"
                        leave-active-class="transition-all duration-200 ease-in"
                        enter-from-class="opacity-0 scale-90 translate-y-4"
                        enter-to-class="opacity-100 scale-100 translate-y-0"
                        leave-from-class="opacity-100 scale-100 translate-y-0"
                        leave-to-class="opacity-0 scale-95 translate-y-2"
                        mode="out-in"
                    >
                        <div
                            :key="currentIndex"
                            class="flex flex-col items-center transform-gpu will-change-transform"
                        >
                            <img
                                :src="
                                    currentImage.image || currentImage.thumbnail
                                "
                                :alt="currentImage.title || currentImage.alt"
                                class="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl transform-gpu will-change-transform transition-transform duration-300 hover:scale-[1.02]"
                            />

                            <!-- Image info -->
                            <div
                                class="mt-4 text-center text-white max-w-2xl mb-20 md:mb-24"
                            >
                                <h3
                                    v-if="currentImage.title"
                                    class="text-2xl font-bold mb-2"
                                >
                                    {{ currentImage.title }}
                                </h3>
                                <p
                                    v-if="currentImage.description"
                                    class="text-lg opacity-90"
                                >
                                    {{ currentImage.description }}
                                </p>
                                <p
                                    v-else-if="currentImage.category"
                                    class="text-lg opacity-90"
                                >
                                    {{ currentImage.category }}
                                </p>
                            </div>
                        </div>
                    </Transition>
                </div>

                <!-- Image counter -->
                <div
                    v-if="images.length > 1"
                    class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium"
                >
                    {{ currentIndex + 1 }} / {{ images.length }}
                </div>

                <!-- Thumbnails strip (for large screens) -->
                <div
                    v-if="images.length > 1 && images.length <= 10"
                    class="absolute bottom-20 left-1/2 transform -translate-x-1/2 hidden md:flex space-x-2 bg-black/30 backdrop-blur-sm rounded-full p-2"
                >
                    <button
                        v-for="(image, index) in images"
                        :key="`thumb-${index}`"
                        @click.stop="currentIndex = index"
                        class="w-12 h-8 rounded overflow-hidden border-2 transition-all duration-200 transform-gpu hover:scale-110"
                        :class="
                            currentIndex === index
                                ? 'border-white scale-110'
                                : 'border-transparent opacity-60 hover:opacity-100'
                        "
                    >
                        <img
                            :src="image.image || image.thumbnail"
                            :alt="image.title || image.alt"
                            class="w-full h-full object-cover"
                        />
                    </button>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from "vue";

// Props
const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false,
    },
    images: {
        type: Array,
        required: true,
    },
    initialIndex: {
        type: Number,
        default: 0,
    },
});

// Emits
const emit = defineEmits(["close", "change"]);

// State
const currentIndex = ref(props.initialIndex);

// Computed
const currentImage = computed(() => props.images[currentIndex.value] || {});

// Methods
const closeLightbox = () => {
    emit("close");
};

const nextImage = () => {
    if (currentIndex.value < props.images.length - 1) {
        currentIndex.value++;
        emit("change", currentIndex.value);
    }
};

const prevImage = () => {
    if (currentIndex.value > 0) {
        currentIndex.value--;
        emit("change", currentIndex.value);
    }
};

// Keyboard navigation
const handleKeydown = (event) => {
    if (!props.isOpen) return;

    switch (event.key) {
        case "ArrowLeft":
            prevImage();
            break;
        case "ArrowRight":
            nextImage();
            break;
        case "Escape":
            closeLightbox();
            break;
    }
};

// Watch for prop changes
watch(
    () => props.initialIndex,
    (newIndex) => {
        currentIndex.value = newIndex;
    }
);

watch(
    () => props.isOpen,
    (isOpen) => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }
);

// Lifecycle
onMounted(() => {
    document.addEventListener("keydown", handleKeydown);
});

onBeforeUnmount(() => {
    document.removeEventListener("keydown", handleKeydown);
    document.body.style.overflow = "";
});
</script>

<style scoped>
/* Additional styles for better visual effects */
img {
    user-select: none;
    -webkit-user-drag: none;
}
</style>
