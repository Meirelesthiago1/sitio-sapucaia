<template>
  <section
    id="associacao"
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
          Torne-se
          <span
            class="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
          >
            Membro
          </span>
        </h2>
        <p
          class="text-base md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200"
        >
          Faça parte da nossa família e desfrute de todos os benefícios
          exclusivos do Eco Parque Sapucaia
        </p>
      </div>

      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 max-w-6xl mx-auto"
      >
        <!-- Plano Familiar -->
        <div
          class="bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
        >
          <div
            class="bg-gradient-to-r from-emerald-500 to-teal-500 p-6 md:p-8 text-white text-center"
          >
            <h3 class="text-2xl md:text-3xl font-bold mb-1 md:mb-2">
              Associação Familiar
            </h3>
            <p class="text-sm md:text-base text-emerald-100">
              Para você e toda sua família
            </p>
          </div>
          <div class="p-6 md:p-8">
            <div class="text-center mb-6 md:mb-8">
              <span class="text-lg md:text-2xl text-slate-600"
                >Mensalidade:</span
              >
              <div
                class="text-3xl md:text-4xl font-bold text-slate-800 mt-1 md:mt-2"
              >
                10% do salário mínimo
              </div>
              <p class="text-sm md:text-base text-slate-500 mt-1 md:mt-2">
                Valor atual: R$ 141,20/mês*
              </p>
            </div>

            <div class="mb-6 md:mb-8">
              <h4
                class="text-lg md:text-xl font-bold text-slate-800 mb-3 md:mb-4"
              >
                Inclui:
              </h4>
              <ul class="space-y-2 md:space-y-3">
                <li class="flex items-center">
                  <svg
                    class="w-4 h-4 md:w-5 md:h-5 text-emerald-500 mr-2 md:mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span class="text-sm md:text-base text-slate-700"
                    >Titular + cônjuge</span
                  >
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-4 h-4 md:w-5 md:h-5 text-emerald-500 mr-2 md:mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span class="text-sm md:text-base text-slate-700"
                    >Filhos menores de 18 anos</span
                  >
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-4 h-4 md:w-5 md:h-5 text-emerald-500 mr-2 md:mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span class="text-sm md:text-base text-slate-700"
                    >Acesso a todas as instalações</span
                  >
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-4 h-4 md:w-5 md:h-5 text-emerald-500 mr-2 md:mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span class="text-sm md:text-base text-slate-700"
                    >Até 4 convidados por visita</span
                  >
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-4 h-4 md:w-5 md:h-5 text-emerald-500 mr-2 md:mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span class="text-sm md:text-base text-slate-700"
                    >Prioridade no salão de festas</span
                  >
                </li>
              </ul>
            </div>

            <a
              href="https://wa.me/5511998765432?text=Olá! Tenho interesse na associação familiar do Eco Parque Sapucaia. Gostaria de mais informações sobre o processo de inscrição e taxa de adesão."
              target="_blank"
              class="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-xl md:rounded-2xl text-sm md:text-base font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 inline-block text-center"
            >
              Quero Ser Membro
            </a>
          </div>
        </div>

        <!-- Plano Individual -->
        <div
          class="bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
        >
          <div
            class="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 md:p-8 text-white text-center"
          >
            <h3 class="text-2xl md:text-3xl font-bold mb-1 md:mb-2">
              Associação Individual
            </h3>
            <p class="text-sm md:text-base text-blue-100">
              Para quem busca tranquilidade
            </p>
          </div>
          <div class="p-6 md:p-8">
            <div class="text-center mb-6 md:mb-8">
              <span class="text-lg md:text-2xl text-slate-600"
                >Mensalidade:</span
              >
              <div
                class="text-3xl md:text-4xl font-bold text-slate-800 mt-1 md:mt-2"
              >
                6% do salário mínimo
              </div>
              <p class="text-sm md:text-base text-slate-500 mt-1 md:mt-2">
                Valor atual: R$ 84,72/mês*
              </p>
            </div>

            <div class="mb-6 md:mb-8">
              <h4
                class="text-lg md:text-xl font-bold text-slate-800 mb-3 md:mb-4"
              >
                Inclui:
              </h4>
              <ul class="space-y-2 md:space-y-3">
                <li class="flex items-center">
                  <svg
                    class="w-4 h-4 md:w-5 md:h-5 text-blue-500 mr-2 md:mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span class="text-sm md:text-base text-slate-700"
                    >Acesso individual</span
                  >
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-4 h-4 md:w-5 md:h-5 text-blue-500 mr-2 md:mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span class="text-sm md:text-base text-slate-700"
                    >Acesso a todas as instalações</span
                  >
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-4 h-4 md:w-5 md:h-5 text-blue-500 mr-2 md:mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span class="text-sm md:text-base text-slate-700"
                    >Até 4 convidados por visita</span
                  >
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-4 h-4 md:w-5 md:h-5 text-blue-500 mr-2 md:mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span class="text-sm md:text-base text-slate-700"
                    >Atividades recreativas</span
                  >
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-4 h-4 md:w-5 md:h-5 text-blue-500 mr-2 md:mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span class="text-sm md:text-base text-slate-700"
                    >Locação do salão de festas</span
                  >
                </li>
              </ul>
            </div>

            <a
              href="https://wa.me/5511998765432?text=Olá! Tenho interesse na associação individual do Eco Parque Sapucaia. Gostaria de mais informações sobre o processo de inscrição e taxa de adesão."
              target="_blank"
              class="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-xl md:rounded-2xl text-sm md:text-base font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 inline-block text-center"
            >
              Quero Ser Membro
            </a>
          </div>
        </div>
      </div>

      <!-- Flexibilidade no Pagamento - Versão Compacta -->
      <div class="mt-8 md:mt-12">
        <div
          class="bg-white border border-slate-200 rounded-2xl p-4 md:p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div class="flex items-center justify-center mb-3 md:mb-4">
            <div
              class="w-8 h-8 md:w-12 md:h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-3 md:mr-4"
            >
              <svg
                class="w-4 h-4 md:w-6 md:h-6 text-emerald-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 class="text-lg md:text-2xl font-bold text-slate-800">
              Flexibilidade no Pagamento
            </h3>
          </div>

          <p class="text-base md:text-lg text-slate-700 mb-2">
            Oferecemos até
            <span class="font-semibold text-emerald-600"
              >30 dias de tolerância</span
            >
            após o vencimento.
          </p>
          <p class="text-xs md:text-sm text-slate-500">
            Após 4 mensalidades consecutivas em atraso, será necessário renovar
            a associação.
          </p>
        </div>
      </div>

      <!-- Como Funciona o Processo de Adesão - Versão Compacta -->
      <div class="mt-8 md:mt-12 bg-white rounded-2xl p-4 md:p-8 shadow-xl">
        <div class="text-center mb-6 md:mb-8">
          <h3
            class="text-2xl md:text-3xl font-bold text-slate-800 mb-2 md:mb-3"
          >
            Como Funciona o Processo de Adesão
          </h3>
          <p class="text-base md:text-lg text-slate-600">
            Simples e transparente, do primeiro contato à sua primeira visita
          </p>
        </div>

        <!-- Container com scroll horizontal no mobile -->
        <div class="overflow-x-auto md:overflow-x-visible">
          <div
            class="flex space-x-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:space-x-0 min-w-max md:min-w-0"
          >
            <!-- Passo 1 -->
            <div class="text-center group flex-shrink-0 w-36 md:w-auto">
              <div
                class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300"
              >
                <span class="text-white font-bold text-sm md:text-lg">1</span>
              </div>
              <h4 class="text-sm md:text-lg font-bold text-slate-800 mb-2">
                Primeiro Contato
              </h4>
              <p class="text-xs md:text-sm text-slate-600">
                Entre em contato via WhatsApp. Nossa equipe responde
                rapidamente.
              </p>
            </div>

            <!-- Passo 2 -->
            <div class="text-center group flex-shrink-0 w-36 md:w-auto">
              <div
                class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300"
              >
                <span class="text-white font-bold text-sm md:text-lg">2</span>
              </div>
              <h4 class="text-sm md:text-lg font-bold text-slate-800 mb-2">
                Visita Agendada
              </h4>
              <p class="text-xs md:text-sm text-slate-600">
                Agende sua visita e conheça pessoalmente nossas instalações.
              </p>
            </div>

            <!-- Passo 3 -->
            <div class="text-center group flex-shrink-0 w-36 md:w-auto">
              <div
                class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300"
              >
                <span class="text-white font-bold text-sm md:text-lg">3</span>
              </div>
              <h4 class="text-sm md:text-lg font-bold text-slate-800 mb-2">
                Escolha do Plano
              </h4>
              <p class="text-xs md:text-sm text-slate-600">
                Defina o tipo de associação e conheça os valores das taxas.
              </p>
            </div>

            <!-- Passo 4 -->
            <div class="text-center group flex-shrink-0 w-36 md:w-auto">
              <div
                class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300"
              >
                <span class="text-white font-bold text-sm md:text-lg">4</span>
              </div>
              <h4 class="text-sm md:text-lg font-bold text-slate-800 mb-2">
                Bem-vindo!
              </h4>
              <p class="text-xs md:text-sm text-slate-600">
                Efetue o pagamento, receba sua carteirinha e comece a
                aproveitar!
              </p>
            </div>
          </div>
        </div>

        <!-- Informação adicional sobre o processo -->
        <div class="mt-6 md:mt-8 text-center">
          <div
            class="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-3 md:p-4"
          >
            <p class="text-sm md:text-base text-slate-700">
              <span class="font-semibold">⏱️ Processo Rápido:</span>
              Todo o processo pode ser concluído em apenas uma visita.
            </p>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-16">
        <div
          class="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-white shadow-2xl"
        >
          <h3 class="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Fazer Parte da Nossa Família?
          </h3>
          <p class="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Entre em contato conosco e conheça todos os benefícios de ser membro
            do Eco Parque Sapucaia
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511998765432?text=Olá! Gostaria de saber mais sobre como me tornar membro do Eco Parque Sapucaia."
              target="_blank"
              class="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.309"
                />
              </svg>
              Falar no WhatsApp
            </a>
            <a
              href="#contato"
              class="inline-flex items-center px-8 py-4 bg-white text-emerald-600 font-bold text-lg rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Outras Formas de Contato
            </a>
          </div>
        </div>
      </div>

      <!-- Observação sobre valores -->
      <div class="mt-8 text-center">
        <p class="text-sm text-slate-500">
          * Valores baseados no salário mínimo vigente (R$ 1.412,00). Sujeitos a
          alteração conforme legislação.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// Membership section component
</script>
