<template>
  <div class="gallery-card group cursor-pointer">
    <div
      class="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-700 bg-white"
    >
      <img :src="image" :alt="title" class="w-full h-72 object-cover" />
      <div class="overlay absolute inset-0 opacity-0"></div>
      <div class="card-content absolute bottom-4 left-4 right-4 text-white">
        <h3 class="font-semibold text-lg mb-1">{{ title }}</h3>
        <p class="text-sm opacity-90">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Props
defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
/* Smooth hover effects for gallery cards */
.gallery-card {
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

.gallery-card:hover {
  transform: scale(1.02);
}

.gallery-card img {
  transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.gallery-card:hover img {
  transform: scale(1.05);
}

.gallery-card .overlay {
  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  background: linear-gradient(
    to top,
    rgba(6, 78, 59, 0.4),
    transparent,
    transparent
  );
}

.gallery-card:hover .overlay {
  opacity: 1;
}

.gallery-card .card-content {
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(16px);
  opacity: 0;
}

.gallery-card:hover .card-content {
  transform: translateY(0);
  opacity: 1;
}
</style>
