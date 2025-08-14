<template>
    <section
        id="hero"
        class="relative h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
        style="
            background-image: linear-gradient(
                    rgba(0, 0, 0, 0.4),
                    rgba(0, 0, 0, 0.4)
                ),
                url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80');
        "
    >
        <!-- Floating particles effect -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="floating-particle animate-float-1" />
            <div class="floating-particle animate-float-2" />
            <div class="floating-particle animate-float-3" />
        </div>

        <div
            class="text-center text-white max-w-5xl mx-auto px-4 md:px-6 z-10 animate-fade-in-up"
        >
            <h1
                class="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-8 tracking-tight leading-tight"
            >
                <span class="inline-block animate-slide-in-left"
                    >Bem-vindos</span
                >
                <br />
                <span
                    class="inline-block animate-slide-in-right bg-gradient-to-r from-emerald-300 to-teal-200 bg-clip-text text-transparent"
                    >ao Sapucaia</span
                >
            </h1>
            <p
                class="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 md:mb-12 opacity-95 font-light leading-relaxed animate-fade-in-up animation-delay-300 max-w-3xl mx-auto"
            >
                Clube recreativo onde membros e famílias vivem momentos únicos
                em meio à natureza
            </p>
            <div class="animate-fade-in-up animation-delay-600">
                <button
                    class="group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 md:px-12 md:py-5 rounded-full text-lg md:text-xl font-semibold transition-all duration-500 shadow-2xl hover:shadow-3xl hover:scale-105 transform"
                    @click="scrollToSection('associacao')"
                >
                    <span class="flex items-center gap-2 md:gap-3">
                        Torne-se Membro
                        <svg
                            class="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            ></path>
                        </svg>
                    </span>
                </button>
            </div>
        </div>

        <!-- Scroll indicator -->
        <div
            class="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
            <div
                class="w-5 h-8 md:w-6 md:h-10 border-2 border-white/50 rounded-full flex justify-center"
            >
                <div
                    class="w-1 h-2 md:h-3 bg-white/70 rounded-full mt-1 md:mt-2 animate-pulse"
                ></div>
            </div>
        </div>
    </section>
</template>

<script setup>
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

<style scoped>
/* Floating particles */
.floating-particle {
    position: absolute;
    width: 10px;
    height: 10px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
}

.animate-float-1 {
    animation: float1 6s ease-in-out infinite;
}

.animate-float-2 {
    animation: float2 8s ease-in-out infinite;
    animation-delay: -2s;
}

.animate-float-3 {
    animation: float3 7s ease-in-out infinite;
    animation-delay: -4s;
}

@keyframes float1 {
    0%,
    100% {
        transform: translateY(0px) rotate(0deg);
    }
    50% {
        transform: translateY(-20px) rotate(180deg);
    }
}

@keyframes float2 {
    0%,
    100% {
        transform: translateY(0px) rotate(0deg);
    }
    50% {
        transform: translateY(-30px) rotate(-180deg);
    }
}

@keyframes float3 {
    0%,
    100% {
        transform: translateY(0px) rotate(0deg);
    }
    50% {
        transform: translateY(-25px) rotate(90deg);
    }
}

.floating-particle:nth-child(1) {
    top: 20%;
    left: 10%;
}

.floating-particle:nth-child(2) {
    top: 60%;
    right: 15%;
}

.floating-particle:nth-child(3) {
    bottom: 30%;
    left: 80%;
}
</style>
