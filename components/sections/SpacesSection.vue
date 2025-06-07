<template>
  <section id="espacos" class="py-24 bg-white relative overflow-hidden">
    <!-- Background decoration -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent"
    ></div>
    <div
      class="absolute top-20 right-10 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"
    ></div>
    <div
      class="absolute bottom-20 left-10 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
      style="animation-delay: 2s"
    ></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-20">
        <h2
          class="text-5xl md:text-6xl font-bold mb-6 text-slate-800 animate-fade-in-up"
        >
          Nossos
          <span
            class="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
            >Espaços</span
          >
        </h2>
        <p
          class="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200"
        >
          Conheça os principais espaços que tornam o Sapucaia único
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 animate-stagger-in">
        <div
          v-for="space in spaces"
          :key="space.id"
          class="group text-center transform hover:scale-105 transition-all duration-500"
        >
          <div
            class="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 mb-6"
          >
            <img
              :src="space.image"
              :alt="space.title"
              class="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-emerald-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>
          </div>
          <h3
            class="text-3xl font-bold mb-4 text-slate-800 group-hover:text-emerald-600 transition-colors duration-300"
          >
            {{ space.title }}
          </h3>
          <p class="text-slate-600 text-lg leading-relaxed">
            {{ space.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Spaces data
const spaces = [
  {
    id: 1,
    title: "Piscina Natural",
    image:
      "https://sdmntprwestus2.oaiusercontent.com/files/00000000-d05c-61f8-acca-88363bafe3f6/raw?se=2025-06-06T14%3A44%3A40Z&sp=r&sv=2024-08-04&sr=b&scid=96471981-b57c-5a93-9ff6-a0c6a3e5025a&skoid=add8ee7d-5fc7-451e-b06e-a82b2276cf62&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-06T02%3A05%3A24Z&ske=2025-06-07T02%3A05%3A24Z&sks=b&skv=2024-08-04&sig=5r9BAEjaki%2B/bTIVvmmGkpsfN1X1pFqiGMSn50GWQVI%3D",
    description:
      "Águas cristalinas em um ambiente totalmente natural, perfeito para relaxar e se refrescar.",
  },
  {
    id: 2,
    title: "Quadra de Vôlei de Areia",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7",
    description:
      "Quadra profissional de vôlei de areia para momentos de diversão e esporte.",
  },
  {
    id: 3,
    title: "Campo de Futebol",
    image:
      "https://sdmntprwestcentralus.oaiusercontent.com/files/00000000-7c70-61fb-85ca-050a70d790e5/raw?se=2025-06-06T14%3A48%3A33Z&sp=r&sv=2024-08-04&sr=b&scid=72ccf42c-0c01-53c2-b1ce-715dfde1d255&skoid=add8ee7d-5fc7-451e-b06e-a82b2276cf62&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-06T02%3A01%3A52Z&ske=2025-06-07T02%3A01%3A52Z&sks=b&skv=2024-08-04&sig=I48yCaYbxJyEGEUbCFE05ydTj3oCd6C4kdEEXq%2BLH9g%3D",
    description:
      "Campo gramado com vista panorâmica para partidas emocionantes.",
  },
  {
    id: 4,
    title: "Restaurante",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description:
      "Ambiente aconchegante com culinária regional e vista privilegiada.",
  },
];
</script>
