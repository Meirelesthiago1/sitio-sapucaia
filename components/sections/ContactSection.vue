<template>
  <section id="contato" class="py-12 md:py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-8 md:mb-16">
        <h2
          class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 text-gray-800"
        >
          Localização e
          <span
            class="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
          >
            Contato
          </span>
        </h2>
        <p class="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
          Venha nos visitar e viva uma experiência inesquecível em meio à
          natureza
        </p>
      </div>

      <div
        class="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 mb-10 md:mb-16"
      >
        <!-- Informações de Contato -->
        <div class="lg:col-span-2">
          <div
            class="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 md:p-8 rounded-2xl shadow-lg h-full"
          >
            <h3
              class="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800"
            >
              Como Chegar
            </h3>
            <div class="space-y-4 md:space-y-6">
              <div class="flex items-start">
                <div
                  class="w-10 h-10 md:w-12 md:h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0"
                >
                  <svg
                    class="w-5 h-5 md:w-6 md:h-6 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p class="text-sm md:text-base font-semibold text-gray-800">
                    Endereço
                  </p>
                  <p class="text-sm md:text-base text-gray-600">
                    Sítio Sapucaia<br />
                    Zona Rural<br />
                    Minas Gerais
                  </p>
                  <p class="text-xs md:text-sm text-emerald-600 mt-1 md:mt-2">
                    📍 Localização privilegiada em MG
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div
                  class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                >
                  <svg
                    class="w-6 h-6 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p class="font-semibold text-gray-800">Telefone</p>
                  <p class="text-gray-600">(32) 99963-5827</p>
                  <p class="text-sm text-gray-500">WhatsApp disponível</p>
                </div>
              </div>

              <div class="flex items-start">
                <div
                  class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                >
                  <svg
                    class="w-6 h-6 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p class="font-semibold text-gray-800">E-mail</p>
                  <p class="text-gray-600">contato@sapucaia.com.br</p>
                  <p class="text-sm text-gray-500">Respondemos em até 4h</p>
                </div>
              </div>

              <div class="flex items-start">
                <div
                  class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                >
                  <svg
                    class="w-6 h-6 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p class="font-semibold text-gray-800">Funcionamento</p>
                  <p class="text-gray-600">Todos os dias: 8h às 18h</p>
                </div>
              </div>
            </div>

            <!-- Redes Sociais -->
            <div class="mt-8 pt-6 border-t border-emerald-200">
              <h4 class="text-lg font-semibold mb-4 text-gray-800">
                Siga-nos nas Redes Sociais
              </h4>
              <div class="flex space-x-4">
                <a
                  href="https://instagram.com/sapucaia"
                  target="_blank"
                  class="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    />
                  </svg>
                </a>
                <a
                  href="https://facebook.com/sapucaia"
                  target="_blank"
                  class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    />
                  </svg>
                </a>
                <a
                  href="https://wa.me/5511998765432"
                  target="_blank"
                  class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.309"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Mapa -->
        <div class="lg:col-span-3">
          <div
            class="bg-gray-100 h-full min-h-[300px] md:min-h-[500px] rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.9364097647157!2d-42.3488471!3d-21.6865207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbd3957cf3a14b9%3A0x18bc4e05b86a222d!2sS%C3%ADtio%20Sapucaia!5e0!3m2!1spt-BR!2sbr!4v1735754321456"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="rounded-2xl"
            ></iframe>
          </div>
        </div>
      </div>

      <!-- Informações Adicionais -->
      <div
        class="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-white text-center"
      >
        <h3 class="text-3xl font-bold mb-6">Como Chegar ao Sítio</h3>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
        >
          <div>
            <h4 class="font-bold text-xl mb-3">🗺️ Localização GPS</h4>
            <p class="text-emerald-100">
              Pesquise por "Sítio Sapucaia" no Google Maps ou GPS. Localizado em
              Minas Gerais, zona rural.
            </p>
          </div>
          <div>
            <h4 class="font-bold text-xl mb-3">🅿️ Estacionamento</h4>
            <p class="text-emerald-100">
              Estacionamento gratuito na área interna do clube, limitado a 2
              veículos por membro.
            </p>
          </div>
          <div>
            <h4 class="font-bold text-xl mb-3">📞 Dúvidas de Localização</h4>
            <p class="text-emerald-100">
              Entre em contato pelo WhatsApp (32) 99963-5827 para orientações
              detalhadas de como chegar.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component uses static content with inline SVG icons
</script>

<style>
/* Component specific styles if needed */
</style>
