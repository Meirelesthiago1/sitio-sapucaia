<template>
  <section id="faq" class="py-12 md:py-20 bg-gray-50">
    <div class="container mx-auto px-3 md:px-4">
      <div class="text-center mb-8 md:mb-16">
        <h2 class="text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-gray-800">
          Dúvidas Frequentes
        </h2>
        <p class="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
          Encontre respostas para as perguntas mais comuns sobre o Sapucaia
        </p>
      </div>
      <div class="max-w-3xl mx-auto space-y-3 md:space-y-6">
        <div
          v-for="faq in faqs"
          :key="faq.id"
          class="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          <button
            @click="toggleFaq(faq.id)"
            class="w-full p-4 md:p-6 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50"
          >
            <h3 class="text-lg md:text-xl font-semibold text-gray-800 pr-4">
              {{ faq.question }}
            </h3>
            <svg
              :class="[
                'w-5 h-5 md:w-6 md:h-6 text-gray-500 transition-transform duration-300',
                { 'rotate-180': expandedFaq === faq.id },
              ]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            v-show="expandedFaq === faq.id"
            class="px-4 pb-4 md:px-6 md:pb-6 border-t border-gray-100 transition-all duration-300"
          >
            <p
              class="text-sm md:text-base text-gray-600 pt-3 md:pt-4 leading-relaxed"
            >
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

// Reactive state for expanded FAQ
const expandedFaq = ref(null);

// Toggle function
const toggleFaq = (faqId) => {
  expandedFaq.value = expandedFaq.value === faqId ? null : faqId;
};

// FAQ data
const faqs = [
  {
    id: 1,
    question: "Como faço para me tornar membro?",
    answer:
      "Entre em contato conosco através do WhatsApp ou telefone para agendar uma visita. Após conhecer as instalações, você poderá fazer sua inscrição pagando a taxa de adesão e iniciando a mensalidade.",
  },
  {
    id: 2,
    question: "Qual é o valor da mensalidade e taxa de adesão?",
    answer:
      "A mensalidade familiar é de 10% do salário mínimo vigente (R$ 141,20) e a individual é de 6% (R$ 84,72). Há também uma taxa de adesão única obrigatória na inscrição, cujo valor é definido pela administração. Entre em contato para conhecer os valores atuais da taxa de adesão.",
  },
  {
    id: 3,
    question: "Preciso pagar algo além da mensalidade?",
    answer:
      "Sim. Além da mensalidade, há uma taxa de adesão única no momento da inscrição. Para convidados, é cobrada uma taxa adicional por pessoa, paga na portaria. O estacionamento é gratuito para até 2 veículos por membro.",
  },
  {
    id: 4,
    question: "Quem pode usar as instalações?",
    answer:
      "Apenas membros com mensalidade em dia e seus dependentes podem usar as instalações. Membros familiares incluem cônjuge e filhos menores de 18 anos. Todos acima de 5 anos precisam de carteirinha de identificação.",
  },
  {
    id: 5,
    question: "Posso levar convidados?",
    answer:
      "Sim! Você pode levar até 4 convidados normalmente ou até 20 convidados para comemorações de aniversário. É cobrada uma taxa adicional por pessoa, a ser paga na portaria.",
  },
  {
    id: 6,
    question: "Qual é o horário de funcionamento?",
    answer:
      "Funcionamos todos os dias das 8h às 18h. Todos os membros e convidados acima de 5 anos devem apresentar carteirinha de identificação na entrada.",
  },
  {
    id: 7,
    question: "O que acontece se eu atrasar a mensalidade?",
    answer:
      "Você pode usar as instalações até 30 dias após o vencimento. Após 4 mensalidades em atraso consecutivas, o membro é excluído automaticamente e precisará pagar nova taxa de adesão para retornar.",
  },
  {
    id: 8,
    question: "Posso levar meu pet?",
    answer:
      "Pets são bem-vindos nas áreas externas, desde que mantidos na coleira e sob supervisão. Não é permitida a entrada de animais nas piscinas e salão de festas.",
  },
  {
    id: 9,
    question: "Há estacionamento disponível?",
    answer:
      "Sim, temos estacionamento gratuito na área interna do clube, limitado a 2 veículos por membro (incluindo dependentes e convidados).",
  },
  {
    id: 10,
    question: "As crianças podem usar todas as áreas?",
    answer:
      "Sim, mas sempre sob supervisão dos responsáveis. O playground é específico para crianças até 12 anos, conforme regimento interno. É obrigatório o acompanhamento de adultos em todas as atividades e trilhas.",
  },
  {
    id: 11,
    question: "Posso alugar o salão de festas?",
    answer:
      "Sim! Membros podem alugar o salão de festas mediante pagamento antecipado e assinatura de contrato. Os valores são tabelados pela diretoria e o agendamento deve ser feito com antecedência.",
  },
  {
    id: 12,
    question: "Onde posso consultar todas as regras do clube?",
    answer:
      "Todas as regras detalhadas estão no Regimento Interno do clube. Você pode baixar o documento completo ou consultá-lo na secretaria. É obrigatório que todos os membros conheçam e cumpram as normas.",
  },
];
</script>
