<template>
  <section
    id="experiencias"
    class="py-12 md:py-24 bg-gradient-to-br from-slate-50 to-emerald-50 relative overflow-hidden"
  >
    <!-- Background decorations -->
    <div class="absolute top-0 left-0 w-full h-full">
      <div
        class="absolute top-20 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
      ></div>
      <div
        class="absolute bottom-20 left-10 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"
        style="animation-delay: 2s"
      ></div>
    </div>

    <div class="container mx-auto px-4 md:px-6 relative z-10">
      <div class="text-center mb-10 md:mb-20">
        <h2
          class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6 text-slate-800 animate-fade-in-up"
        >
          <span
            class="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
          >
            Experiências
          </span>
          Completas
        </h2>
        <p
          class="text-base md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200"
        >
          Nossos membros e suas famílias desfrutam de atividades exclusivas em
          um ambiente seguro e acolhedor
        </p>
      </div>

      <div class="space-y-12 md:space-y-24">
        <!-- Para Famílias -->
        <div class="group">
          <div
            class="bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500"
          >
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-0">
              <!-- Content Side -->
              <div class="p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                <h3
                  class="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 md:mb-8"
                >
                  Para Famílias
                </h3>

                <p
                  class="text-base md:text-lg text-slate-600 mb-6 md:mb-8 leading-relaxed"
                >
                  Momentos especiais que conectam gerações. Um ambiente seguro e
                  divertido onde pais e filhos criam memórias inesquecíveis.
                </p>

                <!-- Features List - Clean -->
                <ul
                  class="space-y-3 md:space-y-2 text-sm md:text-base text-slate-700"
                >
                  <li class="flex items-start">
                    <span
                      class="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"
                    ></span>
                    <span
                      >Piscina natural com área infantil segura e
                      monitorada</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span
                      class="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"
                    ></span>
                    <span>Playground para crianças até 12 anos</span>
                  </li>
                  <li class="flex items-start">
                    <span
                      class="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"
                    ></span>
                    <span>Trilhas em meio à natureza com supervisão</span>
                  </li>
                  <li class="flex items-start">
                    <span
                      class="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"
                    ></span>
                    <span>Salão de festas para eventos especiais</span>
                  </li>
                </ul>
              </div>

              <!-- Images Side -->
              <div
                class="lg:col-span-2 grid grid-cols-2 gap-2 md:gap-3 p-4 md:p-6"
              >
                <div class="space-y-3">
                  <div
                    class="relative overflow-hidden rounded-2xl group/img cursor-pointer"
                    @click="openLightbox(familyImages, 0)"
                  >
                    <img
                      :src="familyImages[0].image"
                      :alt="familyImages[0].alt"
                      class="w-full h-48 object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <!-- Lightbox indicator -->
                    <div
                      class="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-all duration-300 flex items-center justify-center"
                    >
                      <div
                        class="opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3"
                      >
                        <svg
                          class="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    class="relative overflow-hidden rounded-2xl group/img cursor-pointer"
                    @click="openLightbox(familyImages, 1)"
                  >
                    <img
                      :src="familyImages[1].image"
                      :alt="familyImages[1].alt"
                      class="w-full h-48 object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div
                      class="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-all duration-300 flex items-center justify-center"
                    >
                      <div
                        class="opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3"
                      >
                        <svg
                          class="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="space-y-3">
                  <div
                    class="relative overflow-hidden rounded-2xl group/img cursor-pointer"
                    @click="openLightbox(familyImages, 2)"
                  >
                    <img
                      :src="familyImages[2].image"
                      :alt="familyImages[2].alt"
                      class="w-full h-64 object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div
                      class="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-all duration-300 flex items-center justify-center"
                    >
                      <div
                        class="opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3"
                      >
                        <svg
                          class="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    class="relative overflow-hidden rounded-2xl group/img cursor-pointer"
                    @click="openLightbox(familyImages, 3)"
                  >
                    <img
                      :src="familyImages[3].image"
                      :alt="familyImages[3].alt"
                      class="w-full h-32 object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div
                      class="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-all duration-300 flex items-center justify-center"
                    >
                      <div
                        class="opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3"
                      >
                        <svg
                          class="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Para Relaxar -->
        <div class="group">
          <div
            class="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500"
          >
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-0">
              <!-- Images Side -->
              <div
                class="lg:col-span-2 grid grid-cols-2 gap-3 p-6 order-2 lg:order-1"
              >
                <div class="space-y-3">
                  <div
                    class="relative overflow-hidden rounded-2xl group/img cursor-pointer"
                    @click="openLightbox(relaxImages, 0)"
                  >
                    <img
                      :src="relaxImages[0].image"
                      :alt="relaxImages[0].alt"
                      class="w-full h-64 object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div
                      class="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-all duration-300 flex items-center justify-center"
                    >
                      <div
                        class="opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3"
                      >
                        <svg
                          class="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    class="relative overflow-hidden rounded-2xl group/img cursor-pointer"
                    @click="openLightbox(relaxImages, 1)"
                  >
                    <img
                      :src="relaxImages[1].image"
                      :alt="relaxImages[1].alt"
                      class="w-full h-32 object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div
                      class="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-all duration-300 flex items-center justify-center"
                    >
                      <div
                        class="opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3"
                      >
                        <svg
                          class="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="space-y-3">
                  <div
                    class="relative overflow-hidden rounded-2xl group/img cursor-pointer"
                    @click="openLightbox(relaxImages, 2)"
                  >
                    <img
                      :src="relaxImages[2].image"
                      :alt="relaxImages[2].alt"
                      class="w-full h-48 object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div
                      class="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-all duration-300 flex items-center justify-center"
                    >
                      <div
                        class="opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3"
                      >
                        <svg
                          class="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    class="relative overflow-hidden rounded-2xl group/img cursor-pointer"
                    @click="openLightbox(relaxImages, 3)"
                  >
                    <img
                      :src="relaxImages[3].image"
                      :alt="relaxImages[3].alt"
                      class="w-full h-48 object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div
                      class="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-all duration-300 flex items-center justify-center"
                    >
                      <div
                        class="opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3"
                      >
                        <svg
                          class="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Content Side -->
              <div
                class="p-8 md:p-12 flex flex-col justify-center order-1 lg:order-2"
              >
                <h3 class="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
                  Para Relaxar
                </h3>

                <p class="text-lg text-slate-600 mb-8 leading-relaxed">
                  Fuja do estresse urbano e reconecte-se com a tranquilidade.
                  Momentos de paz em meio à natureza exuberante.
                </p>

                <!-- Features List - Clean -->
                <ul class="space-y-2 text-slate-700">
                  <li class="flex items-start">
                    <span
                      class="inline-block w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-4 flex-shrink-0"
                    ></span>
                    <span
                      >Pesca esportiva com equipamentos inclusos e
                      instrutor</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span
                      class="inline-block w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-4 flex-shrink-0"
                    ></span>
                    <span
                      >Gastronomia regional autêntica com vista
                      privilegiada</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span
                      class="inline-block w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-4 flex-shrink-0"
                    ></span>
                    <span
                      >Trilhas contemplativas para conexão com a natureza</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span
                      class="inline-block w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-4 flex-shrink-0"
                    ></span>
                    <span
                      >Área de convivência para relaxar em meio à natureza</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Para se Divertir -->
        <div class="group">
          <div
            class="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500"
          >
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-0">
              <!-- Content Side -->
              <div class="p-8 md:p-12 flex flex-col justify-center">
                <h3 class="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
                  Para se Divertir
                </h3>

                <p class="text-lg text-slate-600 mb-8 leading-relaxed">
                  Energia, movimento e diversão! Espaços profissionais para quem
                  busca adrenalina e momentos de pura alegria.
                </p>

                <!-- Features List - Clean -->
                <ul class="space-y-2 text-slate-700">
                  <li class="flex items-start">
                    <span
                      class="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-4 flex-shrink-0"
                    ></span>
                    <span>Quadra de vôlei de areia </span>
                  </li>
                  <li class="flex items-start">
                    <span
                      class="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-4 flex-shrink-0"
                    ></span>
                    <span>Campo de futebol gramado</span>
                  </li>
                  <li class="flex items-start">
                    <span
                      class="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-4 flex-shrink-0"
                    ></span>
                    <span>Salão de jogos com sinuca, pebolim e outros</span>
                  </li>
                  <li class="flex items-start">
                    <span
                      class="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-4 flex-shrink-0"
                    ></span>
                    <span
                      >Atividades aquáticas e esportes na piscina natural</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span
                      class="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-4 flex-shrink-0"
                    ></span>
                    <span>Jogos recreativos e competições organizadas</span>
                  </li>
                </ul>
              </div>

              <!-- Images Side -->
              <div class="lg:col-span-2 grid grid-cols-2 gap-3 p-6">
                <div class="space-y-3">
                  <div
                    class="relative overflow-hidden rounded-2xl group/img cursor-pointer"
                    @click="openLightbox(funImages, 0)"
                  >
                    <img
                      :src="funImages[0].image"
                      :alt="funImages[0].alt"
                      class="w-full h-64 object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div
                      class="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-all duration-300 flex items-center justify-center"
                    >
                      <div
                        class="opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3"
                      >
                        <svg
                          class="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    class="relative overflow-hidden rounded-2xl group/img cursor-pointer"
                    @click="openLightbox(funImages, 1)"
                  >
                    <img
                      :src="funImages[1].image"
                      :alt="funImages[1].alt"
                      class="w-full h-32 object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div
                      class="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-all duration-300 flex items-center justify-center"
                    >
                      <div
                        class="opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3"
                      >
                        <svg
                          class="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="space-y-3">
                  <div
                    class="relative overflow-hidden rounded-2xl group/img cursor-pointer"
                    @click="openLightbox(funImages, 2)"
                  >
                    <img
                      :src="funImages[2].image"
                      :alt="funImages[2].alt"
                      class="w-full h-48 object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div
                      class="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-all duration-300 flex items-center justify-center"
                    >
                      <div
                        class="opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3"
                      >
                        <svg
                          class="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    class="relative overflow-hidden rounded-2xl group/img cursor-pointer"
                    @click="openLightbox(funImages, 3)"
                  >
                    <img
                      :src="funImages[3].image"
                      :alt="funImages[3].alt"
                      class="w-full h-48 object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div
                      class="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-all duration-300 flex items-center justify-center"
                    >
                      <div
                        class="opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3"
                      >
                        <svg
                          class="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-20">
        <div
          class="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-white shadow-2xl"
        >
          <h4 class="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Viver Essas Experiências?
          </h4>
          <p class="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Entre em contato conosco e planeje sua visita ao Sapucaia. Nossa
            equipe está pronta para criar a experiência perfeita para você e sua
            família.
          </p>
          <a
            @click="scrollToSection('associacao')"
            href="#associacao"
            class="inline-flex items-center px-10 py-5 bg-white text-emerald-600 font-bold text-lg rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </div>

    <!-- Lightbox Component -->
    <UiImageLightbox
      :is-open="lightboxOpen"
      :images="lightboxImages"
      :initial-index="lightboxIndex"
      @close="closeLightbox"
    />
  </section>
</template>

<script setup>
import { ref } from "vue";

// Lightbox state
const lightboxOpen = ref(false);
const lightboxImages = ref([]);
const lightboxIndex = ref(0);

// Image collections for each section
const familyImages = [
  {
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Família se divertindo",
    title: "Diversão em Família",
    category: "Para Famílias",
  },
  {
    image:
      "https://cdn.2rscms.com.br/uploads/5145/album/160/photo_657b0b402c0c7.jpg",
    alt: "Piscina natural",
    title: "Piscina Natural",
    category: "Para Famílias",
  },
  {
    image:
      "https://cdn.create.vista.com/api/media/medium/12792190/stock-photo-playground?token=",
    alt: "Crianças brincando na natureza",
    title: "Playground (até 12 anos)",
    category: "Para Famílias",
  },
  {
    image: "https://www.erosimoveisrj.com.br/admin/imovel/1005958.jpg",
    alt: "Salão de festas",
    title: "Salão de Festas",
    category: "Para Famílias",
  },
];

const relaxImages = [
  {
    image:
      "https://s2-g1.glbimg.com/BS4bUEb0Znt3aOSFrGMvLHIvqqs=/0x0:4928x3264/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/0/X/2nIyZ3RXqiU5GY537BLA/antonio-visita-familiares-em-vilhena-e-foi-convidado-a-conhecer-o-pesque-pague.jpg",
    alt: "Pesca tranquila",
    title: "Pesca Esportiva",
    category: "Para Relaxar",
  },
  {
    image:
      "https://borazeviagens.com.br/wp-content/uploads/2020/11/GOPR0800-1024x768.jpg",
    alt: "Trilha contemplativa",
    title: "Trilhas Contemplativas",
    category: "Para Relaxar",
  },
  {
    image:
      "https://sitiosaojorge.com.br/wp-content/uploads/2023/04/Casamento-rustico-Comida-caseira-e-regional-11-scaled.webp",
    alt: "Restaurante com vista",
    title: "Gastronomia Regional",
    category: "Para Relaxar",
  },
  {
    image:
      "https://www.aarquiteta.com.br/blog/wp-content/uploads/2023/03/Quiosque-de-Sitio-Um-Lugar-Perfeito-para-Momentos-de-Lazer-e-Descanso.png",
    alt: "Área de convivência",
    title: "Área de Convivência",
    category: "Para Relaxar",
  },
];

const funImages = [
  {
    image:
      "https://www.oab-ro.org.br/gerenciador/data/uploads/2018/08/Inaugura%C3%A7%C3%A3o-quadra-de-v%C3%B4lei-17.jpg",
    alt: "Quadra de vôlei de areia",
    title: "Quadra de Vôlei de Areia",
    category: "Para se Divertir",
  },
  {
    image:
      "https://cdn.2rscms.com.br/uploads/5145/album/160/photo_657b0b402c0c7.jpg",
    alt: "Esportes aquáticos",
    title: "Esportes Aquáticos",
    category: "Para se Divertir",
  },
  {
    image: "https://i.imgur.com/1eOhARQ.jpeg",
    alt: "Campo de futebol",
    title: "Campo de Futebol",
    category: "Para se Divertir",
  },
  {
    image:
      "https://itacareecoresort.com.br/wp-content/uploads/2022/03/DSC_2078-1024x682.jpg",
    alt: "Salão de jogos",
    title: "Salão de Jogos",
    category: "Para se Divertir",
  },
];

// Lightbox methods
const openLightbox = (images, index) => {
  lightboxImages.value = images;
  lightboxIndex.value = index;
  lightboxOpen.value = true;
};

const closeLightbox = () => {
  lightboxOpen.value = false;
};
</script>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
