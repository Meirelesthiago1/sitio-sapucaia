<template>
    <header
        class="fixed top-0 w-full bg-white/95 backdrop-blur-lg shadow-lg border-b border-emerald-100 z-50 transition-all duration-300"
        :class="{ 'py-2': scrolled, 'py-4': !scrolled }"
    >
        <nav class="container mx-auto px-6">
            <div class="flex justify-between items-center">
                <h1
                    class="text-3xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer"
                >
                    Sapucaia
                </h1>
                <ul class="hidden md:flex space-x-10">
                    <li v-for="item in navItems" :key="item.href">
                        <a
                            :href="item.href"
                            class="text-slate-700 hover:text-emerald-600 transition-all duration-300 font-medium relative group"
                        >
                            {{ item.label }}
                            <span
                                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"
                            ></span>
                        </a>
                    </li>
                </ul>
                <button
                    @click="toggleMobileMenu"
                    class="md:hidden text-slate-700 hover:text-emerald-600 transition-colors duration-300"
                >
                    <svg
                        v-if="!mobileMenuOpen"
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                    <svg
                        v-else
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
            </div>

            <!-- Mobile Menu -->
            <div
                v-if="mobileMenuOpen"
                class="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-lg border-b border-emerald-100"
            >
                <ul class="py-4 px-6 space-y-4">
                    <li v-for="item in navItems" :key="item.href">
                        <a
                            :href="item.href"
                            @click="closeMobileMenu"
                            class="block text-slate-700 hover:text-emerald-600 transition-all duration-300 font-medium py-2"
                        >
                            {{ item.label }}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

// State
const scrolled = ref(false);
const mobileMenuOpen = ref(false);

// Navigation items
const navItems = [
    { href: "#hero", label: "Início" },
    { href: "#experiencias", label: "Experiências" },
    { href: "#associacao", label: "Seja Membro" },
    { href: "#culinaria", label: "Culinária" },
    { href: "#galeria", label: "Galeria" },
    { href: "#contato", label: "Contato" },
    { href: "#faq", label: "FAQ" },
];

// Mobile menu functions
const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
    mobileMenuOpen.value = false;
};

// Handle scroll events
const handleScroll = () => {
    scrolled.value = window.scrollY > 50;
};

// Smooth scroll behavior for navigation links
onMounted(() => {
    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        });
    });
});

onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>
