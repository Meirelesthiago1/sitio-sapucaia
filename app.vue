<template>
    <UApp>
        <LayoutHeader />

        <SectionsHeroSection />
        <SectionsExperiencesSection />
        <SectionsCulinarySection />
        <SectionsFutureInstallationsSection />
        <SectionsMembershipSection />
        <SectionsContactSection />
        <SectionsFaqSection />

        <LayoutFooter />

        <UiWhatsAppFloat />
    </UApp>
</template>

<script setup>
import { onMounted } from "vue";

// Metadata for SEO
useHead({
    title: "Eco Parque Sapucaia - Clube Recreativo",
    meta: [
        {
            name: "description",
            content:
                "Clube recreativo em meio à natureza onde membros e famílias desfrutam de atividades exclusivas. Piscinas, fazendinha, trilhas, pesca esportiva e muito mais. Torne-se membro!",
        },
        {
            name: "keywords",
            content:
                "eco parque sapucaia, clube recreativo, associação, membro, família, natureza, piscina, fazendinha, trilhas, pesca esportiva, atividades recreativas, mensalidade",
        },
    ],
});

// Setup animations
onMounted(() => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-in");
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
        ".animate-fade-in, .animate-fade-in-up, .animate-slide-in-left, .animate-slide-in-right, .animate-stagger-in"
    );
    animatedElements.forEach((el) => observer.observe(el));
});
</script>
