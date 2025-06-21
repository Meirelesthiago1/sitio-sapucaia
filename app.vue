<template>
  <UApp>
    <LayoutHeader />

    <SectionsHeroSection />
    <SectionsExperiencesSection />
    <SectionsCulinarySection />
    <SectionsGallerySection />
    <SectionsMembershipSection />
    <SectionsContactSection />
    <SectionsFaqSection />

    <LayoutFooter />

    <UiWhatsAppFloat />
  </UApp>
</template>

<script setup>
import { useAnimations } from "~/composables/useAnimations";

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
useAnimations();
</script>
