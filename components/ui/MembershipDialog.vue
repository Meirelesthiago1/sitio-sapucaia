<template>
    <div
        v-if="isOpen"
        class="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md transition-all duration-300 transform-gpu"
        @click.self="closeDialog"
    >
        <div
            class="bg-white rounded-2xl md:rounded-3xl shadow-2xl w-full max-w-md md:max-w-2xl max-h-[90vh] overflow-y-auto transform transition-all duration-400 ease-out transform-gpu will-change-transform"
            :class="
                isOpen
                    ? 'scale-100 opacity-100 translate-y-0'
                    : 'scale-95 opacity-0 translate-y-4'
            "
        >
            <!-- Header -->
            <div
                class="bg-gradient-to-r from-emerald-500 to-teal-500 p-6 md:p-8 text-white"
            >
                <div class="flex items-center justify-between">
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold mb-2">
                            {{
                                membershipType === "familiar"
                                    ? "Associação Familiar"
                                    : "Associação Individual"
                            }}
                        </h2>
                        <p class="text-emerald-100 text-sm md:text-base">
                            Taxa de Adesão - Mensalidade conforme valores do
                            site
                        </p>
                    </div>
                    <button
                        @click="closeDialog"
                        class="text-white hover:bg-white/20 hover:text-emerald-100 rounded-full p-2 transition-all duration-200 transform-gpu hover:scale-105"
                    >
                        <svg
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
            </div>

            <!-- Form -->
            <form @submit.prevent="submitForm" class="p-6 md:p-8 space-y-6">
                <!-- Info Box -->
                <div
                    class="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-4"
                >
                    <div class="flex items-start">
                        <svg
                            class="w-5 h-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                        </svg>
                        <div>
                            <h3
                                class="font-semibold text-emerald-800 text-sm md:text-base"
                            >
                                Taxa de Adesão ao Eco Parque
                            </h3>
                            <p class="text-emerald-700 text-xs md:text-sm mt-1">
                                Este formulário é para pagamento da taxa de
                                adesão. A cobrança da mensalidade iniciará após
                                a finalização da documentação legal.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Nome -->
                <div>
                    <label
                        for="name"
                        class="block text-sm font-semibold text-gray-700 mb-2"
                    >
                        Nome Completo *
                    </label>
                    <input
                        id="name"
                        v-model="form.name"
                        type="text"
                        required
                        class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 focus:shadow-md transition-all duration-200 placeholder-gray-500 text-gray-900"
                        placeholder="Digite seu nome completo"
                    />
                </div>

                <!-- Telefone -->
                <div>
                    <label
                        for="phone"
                        class="block text-sm font-semibold text-gray-700 mb-2"
                    >
                        Telefone/WhatsApp *
                    </label>
                    <input
                        id="phone"
                        v-model="form.phone"
                        type="tel"
                        required
                        @input="formatPhone"
                        @blur="validatePhone"
                        :class="[
                            'w-full px-4 py-3 border rounded-xl focus:outline-none focus:shadow-md transition-all duration-200 placeholder-gray-500 text-gray-900',
                            errors.phone
                                ? 'border-red-500 focus:border-red-500'
                                : 'border-gray-300 focus:border-emerald-500',
                        ]"
                        placeholder="(32) 99999-9999"
                    />
                    <p v-if="errors.phone" class="text-red-500 text-sm mt-1">
                        {{ errors.phone }}
                    </p>
                </div>

                <!-- Email -->
                <div>
                    <label
                        for="email"
                        class="block text-sm font-semibold text-gray-700 mb-2"
                    >
                        E-mail *
                    </label>
                    <input
                        id="email"
                        v-model="form.email"
                        type="email"
                        required
                        @blur="validateEmail"
                        @input="
                            () => {
                                if (errors.email) errors.email = '';
                            }
                        "
                        :class="[
                            'w-full px-4 py-3 border rounded-xl focus:outline-none focus:shadow-md transition-all duration-200 placeholder-gray-500 text-gray-900',
                            errors.email
                                ? 'border-red-500 focus:border-red-500'
                                : 'border-gray-300 focus:border-emerald-500',
                        ]"
                        placeholder="seu@email.com"
                    />
                    <p v-if="errors.email" class="text-red-500 text-sm mt-1">
                        {{ errors.email }}
                    </p>
                </div>

                <!-- Dependents Section (only for familia membership) -->
                <div v-if="membershipType === 'familiar'" class="space-y-3">
                    <h3 class="text-lg font-semibold text-gray-800">
                        Dependentes (máximo 6)
                    </h3>

                    <!-- Add Dependent Form -->
                    <div class="bg-gray-50 rounded-xl p-3 space-y-3">
                        <h4 class="text-sm font-semibold text-gray-700">
                            Adicionar Dependente
                        </h4>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <!-- Dependent Name -->
                            <div>
                                <label
                                    class="block text-sm font-semibold text-gray-700 mb-1"
                                >
                                    Nome Completo *
                                </label>
                                <input
                                    v-model="dependentForm.name"
                                    type="text"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:shadow-md transition-all duration-200 placeholder-gray-500 text-gray-900"
                                    placeholder="Nome do dependente"
                                />
                            </div>

                            <!-- Relationship -->
                            <div>
                                <label
                                    class="block text-sm font-semibold text-gray-700 mb-1"
                                >
                                    Grau de Parentesco *
                                </label>
                                <select
                                    v-model="dependentForm.relationship"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:shadow-md transition-all duration-200 text-gray-900 bg-white"
                                >
                                    <option value="" class="text-gray-500">
                                        Selecione
                                    </option>
                                    <option
                                        v-for="rel in relationshipOptions"
                                        :key="rel"
                                        :value="rel"
                                        class="text-gray-900"
                                    >
                                        {{ rel }}
                                    </option>
                                </select>
                            </div>
                        </div>

                        <!-- Age Input (only for children) -->
                        <div
                            v-if="dependentForm.relationship === 'Filho(a)'"
                            class="grid grid-cols-1 gap-3"
                        >
                            <div>
                                <label
                                    class="block text-sm font-semibold text-gray-700 mb-1"
                                >
                                    Idade (anos) *
                                </label>
                                <input
                                    v-model.number="dependentForm.age"
                                    type="number"
                                    min="1"
                                    max="17"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:shadow-md transition-all duration-200 placeholder-gray-500 text-gray-900"
                                    placeholder="Ex: 12"
                                />
                                <p class="text-xs text-gray-500 mt-1">
                                    Filhos menores de 18 anos
                                </p>
                            </div>
                        </div>

                        <!-- Error message -->
                        <p v-if="errors.dependent" class="text-red-500 text-sm">
                            {{ errors.dependent }}
                        </p>

                        <!-- Add Button -->
                        <button
                            type="button"
                            @click="addDependent"
                            :disabled="form.dependents.length >= 6"
                            class="w-full md:w-auto px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
                        >
                            <span v-if="form.dependents.length >= 6"
                                >Límite atingido (6/6)</span
                            >
                            <span v-else
                                >Adicionar Dependente ({{
                                    form.dependents.length
                                }}/6)</span
                            >
                        </button>
                    </div>

                    <!-- List of Added Dependents -->
                    <div v-if="form.dependents.length > 0" class="space-y-2">
                        <h4 class="text-sm font-semibold text-gray-700">
                            Dependentes Adicionados:
                        </h4>
                        <div class="space-y-1.5">
                            <div
                                v-for="(dependent, index) in form.dependents"
                                :key="dependent.id"
                                class="flex items-center justify-between bg-emerald-50 border border-emerald-200 rounded-lg p-3"
                            >
                                <div class="flex-1">
                                    <p
                                        class="font-medium text-emerald-800 text-sm"
                                    >
                                        {{ dependent.name }}
                                    </p>
                                    <p class="text-emerald-600 text-xs">
                                        {{ dependent.relationship
                                        }}{{
                                            dependent.relationship ===
                                                "Filho(a)" && dependent.age
                                                ? ` - ${dependent.age} anos`
                                                : dependent.relationship !==
                                                  "Filho(a)"
                                                ? " - Maior de idade"
                                                : ""
                                        }}
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    @click="removeDependent(index)"
                                    class="text-red-500 hover:text-red-700 p-1 transition-colors"
                                >
                                    <svg
                                        class="w-4 h-4"
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
                        </div>
                    </div>
                </div>

                <!-- Membership Type Info -->
                <div
                    class="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-4"
                >
                    <h3 class="font-semibold text-emerald-800 mb-2">
                        {{
                            membershipType === "familiar"
                                ? "Associação Familiar"
                                : "Associação Individual"
                        }}
                    </h3>
                    <div class="text-sm text-emerald-700 space-y-1">
                        <p>
                            <span class="font-medium">Taxa de Adesão:</span>
                            {{ formatCurrency(membershipFee) }} (única vez)
                        </p>
                        <p>
                            <span class="font-medium">Inclui:</span>
                            {{
                                membershipType === "familiar"
                                    ? "Titular + cônjuge + até 6 dependentes"
                                    : "Acesso individual"
                            }}
                        </p>
                    </div>
                </div>

                <!-- Documentos para Visualização ---->
                <div class="space-y-3">
                    <h3
                        class="text-lg font-semibold text-gray-800 flex items-center"
                    >
                        <svg
                            class="w-5 h-5 text-emerald-600 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            ></path>
                        </svg>
                        Documentos para Consulta
                    </h3>

                    <div class="bg-gray-50 rounded-xl p-4 space-y-3">
                        <p class="text-sm text-gray-600 mb-3">
                            Antes de prosseguir, recomendamos a leitura dos
                            documentos abaixo:
                        </p>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <!-- Contrato de Adesão -->
                            <a
                                href="/contrato-adesao.pdf"
                                target="_blank"
                                class="flex items-center p-3 bg-white border border-gray-200 rounded-lg hover:border-emerald-300 hover:shadow-md transition-all duration-200 group"
                            >
                                <div
                                    class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-red-200 transition-colors"
                                >
                                    <svg
                                        class="w-5 h-5 text-red-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                        ></path>
                                    </svg>
                                </div>
                                <div class="flex-1">
                                    <h4
                                        class="text-sm font-semibold text-gray-800 group-hover:text-emerald-700 transition-colors"
                                    >
                                        Contrato de Adesão
                                    </h4>
                                    <p class="text-xs text-gray-500">
                                        PDF • Visualizar/Baixar
                                    </p>
                                </div>
                                <svg
                                    class="w-4 h-4 text-gray-400 group-hover:text-emerald-600 transition-colors"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    ></path>
                                </svg>
                            </a>

                            <!-- Regimento Interno -->
                            <a
                                href="/regimento-interno.pdf"
                                target="_blank"
                                class="flex items-center p-3 bg-white border border-gray-200 rounded-lg hover:border-emerald-300 hover:shadow-md transition-all duration-200 group"
                            >
                                <div
                                    class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors"
                                >
                                    <svg
                                        class="w-5 h-5 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        ></path>
                                    </svg>
                                </div>
                                <div class="flex-1">
                                    <h4
                                        class="text-sm font-semibold text-gray-800 group-hover:text-emerald-700 transition-colors"
                                    >
                                        Regimento Interno
                                    </h4>
                                    <p class="text-xs text-gray-500">
                                        PDF • Visualizar/Baixar
                                    </p>
                                </div>
                                <svg
                                    class="w-4 h-4 text-gray-400 group-hover:text-emerald-600 transition-colors"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    ></path>
                                </svg>
                            </a>
                        </div>

                        <div
                            class="bg-emerald-50 border border-emerald-200 rounded-lg p-3 mt-3"
                        >
                            <div class="flex items-start">
                                <svg
                                    class="w-4 h-4 text-emerald-600 mt-0.5 mr-2 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    ></path>
                                </svg>
                                <p class="text-xs text-emerald-700">
                                    Os documentos serão abertos em uma nova aba.
                                    Recomendamos a leitura completa antes de
                                    prosseguir com a adesão.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Meio de Pagamento -->
                <div>
                    <label
                        for="paymentMethod"
                        class="block text-sm font-semibold text-gray-700 mb-2"
                    >
                        Meio de Pagamento Preferido *
                    </label>
                    <select
                        id="paymentMethod"
                        v-model="form.paymentMethod"
                        required
                        @change="resetInstallments"
                        class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 focus:shadow-md transition-all duration-200 text-gray-900 bg-white"
                    >
                        <option value="" class="text-gray-500">
                            Selecione uma opção
                        </option>
                        <option value="PIX" class="text-gray-900">PIX</option>
                        <option value="Boleto Bancário" class="text-gray-900">
                            Boleto Bancário
                        </option>
                        <option value="Cartão de Débito" class="text-gray-900">
                            Cartão de Débito
                        </option>
                        <option value="Cartão de Crédito" class="text-gray-900">
                            Cartão de Crédito
                        </option>
                        <option value="Dinheiro" class="text-gray-900">
                            Dinheiro
                        </option>
                    </select>
                </div>

                <!-- Parcelamento (apenas para Cartão de Crédito) -->
                <div
                    v-if="form.paymentMethod === 'Cartão de Crédito'"
                    class="space-y-3"
                >
                    <label
                        for="installments"
                        class="block text-sm font-semibold text-gray-700 mb-2"
                    >
                        Número de Parcelas *
                    </label>
                    <select
                        id="installments"
                        v-model="form.installments"
                        required
                        class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 focus:shadow-md transition-all duration-200 text-gray-900 bg-white"
                    >
                        <option value="" class="text-gray-500">
                            Selecione o parcelamento
                        </option>
                        <option
                            v-for="option in installmentOptions"
                            :key="option.parcelas"
                            :value="option.parcelas"
                            class="text-gray-900"
                        >
                            {{ option.label }}
                        </option>
                    </select>

                    <!-- Info sobre parcelamento selecionado -->
                    <div
                        v-if="selectedInstallmentInfo"
                        class="bg-blue-50 border border-blue-200 rounded-xl p-3"
                    >
                        <h4 class="text-sm font-semibold text-blue-800 mb-1">
                            Detalhes do Parcelamento
                        </h4>
                        <div class="text-sm text-blue-700 space-y-1">
                            <p>
                                <span class="font-medium"
                                    >Valor por parcela:</span
                                >
                                {{
                                    formatCurrency(
                                        selectedInstallmentInfo.valorParcela
                                    )
                                }}
                            </p>
                            <p>
                                <span class="font-medium">Total:</span>
                                {{
                                    formatCurrency(
                                        selectedInstallmentInfo.valorTotal
                                    )
                                }}
                            </p>
                            <p v-if="selectedInstallmentInfo.juros > 0">
                                <span class="font-medium">Taxa de juros:</span>
                                {{ selectedInstallmentInfo.juros }}% a.m.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Buttons -->
                <div class="flex flex-col sm:flex-row gap-3 pt-4">
                    <button
                        type="submit"
                        :disabled="isSubmitting"
                        class="flex-1 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 transform-gpu hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                        <span v-if="!isSubmitting"
                            >Solicitar Taxa de Adesão</span
                        >
                        <span v-else class="flex items-center justify-center">
                            <svg
                                class="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    class="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    stroke-width="4"
                                ></circle>
                                <path
                                    class="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                            Enviando...
                        </span>
                    </button>
                    <button
                        type="button"
                        @click="closeDialog"
                        class="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 transform-gpu hover:scale-105"
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, watch, nextTick, computed } from "vue";
import { getContactInfo } from "~/helpers/contact";

// Props
const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false,
    },
    membershipType: {
        type: String,
        default: "familiar", // 'familiar' or 'individual'
        validator: (value) => ["familiar", "individual"].includes(value),
    },
});

// Emits
const emit = defineEmits(["close", "submit"]);

// Get runtime config for membership fees
const config = useRuntimeConfig();

// Format currency
const formatCurrency = (value) => {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(value);
};

// Computed properties
const membershipFee = computed(() => {
    return props.membershipType === "familiar"
        ? Number(config.public.membershipFeeFamily) || 2000
        : Number(config.public.membershipFeeIndividual) || 1200;
});

// Installment calculation logic
const calculateInstallments = (baseValue, installments) => {
    let interestRate = 0;

    // Escalating interest rates
    if (installments >= 7 && installments <= 9) {
        interestRate = 2; // 2% a.m.
    } else if (installments >= 10 && installments <= 12) {
        interestRate = 3; // 3% a.m.
    }

    if (interestRate === 0) {
        // No interest
        return {
            parcelas: installments,
            valorParcela: baseValue / installments,
            valorTotal: baseValue,
            juros: 0,
        };
    } else {
        // Calculate with compound interest
        const monthlyRate = interestRate / 100;
        const totalValue = baseValue * Math.pow(1 + monthlyRate, installments);
        const installmentValue = totalValue / installments;

        return {
            parcelas: installments,
            valorParcela: installmentValue,
            valorTotal: totalValue,
            juros: interestRate,
        };
    }
};

// Installment options computed
const installmentOptions = computed(() => {
    const options = [];
    const baseValue = membershipFee.value;

    for (let i = 1; i <= 12; i++) {
        const calc = calculateInstallments(baseValue, i);
        const label =
            i === 1
                ? `À vista - ${formatCurrency(calc.valorTotal)}`
                : `${i}x de ${formatCurrency(
                      calc.valorParcela
                  )} = ${formatCurrency(calc.valorTotal)}${
                      calc.juros > 0 ? ` (${calc.juros}% a.m.)` : ""
                  }`;

        options.push({
            parcelas: i,
            label,
            ...calc,
        });
    }

    return options;
});

// Selected installment info
const selectedInstallmentInfo = computed(() => {
    if (!form.installments) return null;
    return installmentOptions.value.find(
        (opt) => opt.parcelas === Number(form.installments)
    );
});

// Reactive data
const isSubmitting = ref(false);
const form = reactive({
    name: "",
    phone: "",
    email: "",
    paymentMethod: "",
    installments: "",
    dependents: [],
});

// Dependent form for adding new dependents
const dependentForm = reactive({
    name: "",
    relationship: "",
    age: "",
});

// Error states
const errors = reactive({
    phone: "",
    email: "",
    dependent: "",
});

// Relationship options
const relationshipOptions = [
    "Cônjuge",
    "Filho(a)",
    "Neto(a)",
    "Pai/Mãe",
    "Irmão/Irmã",
    "Outro",
];

// Methods
const closeDialog = () => {
    emit("close");
};

const resetForm = () => {
    form.name = "";
    form.phone = "";
    form.email = "";
    form.paymentMethod = "";
    form.installments = "";
    form.dependents = [];
    errors.phone = "";
    errors.email = "";
    errors.dependent = "";
    resetDependentForm();
};

const resetInstallments = () => {
    form.installments = "";
};

const resetDependentForm = () => {
    dependentForm.name = "";
    dependentForm.relationship = "";
    dependentForm.age = "";
};

const addDependent = () => {
    if (!validateDependentForm()) {
        return;
    }

    if (form.dependents.length >= 6) {
        errors.dependent = "Máximo de 6 dependentes permitidos";
        return;
    }

    form.dependents.push({
        ...dependentForm,
        id: Date.now(), // Simple ID for key
    });

    resetDependentForm();
    errors.dependent = "";
};

const removeDependent = (index) => {
    form.dependents.splice(index, 1);
    errors.dependent = "";
};

const validateDependentForm = () => {
    if (!dependentForm.name.trim()) {
        errors.dependent = "Nome do dependente é obrigatório";
        return false;
    }

    if (!dependentForm.relationship) {
        errors.dependent = "Grau de parentesco é obrigatório";
        return false;
    }

    // Age is required only for children
    if (
        dependentForm.relationship === "Filho(a)" &&
        (!dependentForm.age || dependentForm.age < 1 || dependentForm.age > 17)
    ) {
        errors.dependent = "Idade deve ser entre 1 e 17 anos para filhos";
        return false;
    }

    errors.dependent = "";
    return true;
};

// Phone formatting function
const formatPhone = (event) => {
    let value = event.target.value.replace(/\D/g, "");

    if (value.length <= 11) {
        if (value.length <= 2) {
            value = value.replace(/(\d{0,2})/, "($1");
        } else if (value.length <= 7) {
            value = value.replace(/(\d{2})(\d{0,5})/, "($1) $2");
        } else {
            value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
        }
        form.phone = value;
    }

    // Clear error when user starts typing
    if (errors.phone) {
        errors.phone = "";
    }
};

// Validation functions
const validatePhone = () => {
    const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
    if (!phoneRegex.test(form.phone)) {
        errors.phone = "Telefone deve ter o formato (XX) XXXXX-XXXX";
        return false;
    }
    errors.phone = "";
    return true;
};

const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
        errors.email = "Por favor, insira um e-mail válido";
        return false;
    }
    errors.email = "";
    return true;
};

const validateForm = () => {
    const isPhoneValid = validatePhone();
    const isEmailValid = validateEmail();

    // Validate installments for credit card
    if (form.paymentMethod === "Cartão de Crédito" && !form.installments) {
        return false;
    }

    return isPhoneValid && isEmailValid;
};

const submitForm = async () => {
    // Validate form before submitting
    if (!validateForm()) {
        return;
    }

    isSubmitting.value = true;

    try {
        // Get contact info from environment
        const contactInfo = getContactInfo();

        // Prepare WhatsApp message
        const membershipType =
            props.membershipType === "familiar"
                ? "Associação Familiar"
                : "Associação Individual";

        const taxaValue = formatCurrency(membershipFee.value);

        let installmentInfo = "";
        if (
            form.paymentMethod === "Cartão de Crédito" &&
            form.installments &&
            selectedInstallmentInfo.value
        ) {
            const info = selectedInstallmentInfo.value;
            installmentInfo = `\n *Parcelamento:* ${
                info.parcelas
            }x de ${formatCurrency(info.valorParcela)}`;
            if (info.juros > 0) {
                installmentInfo += ` (Taxa: ${info.juros}% a.m.)`;
            }
            installmentInfo += `\n *Total:* ${formatCurrency(info.valorTotal)}`;
        }

        let dependentsInfo = "";
        if (props.membershipType === "familiar" && form.dependents.length > 0) {
            dependentsInfo = `\n\n*DEPENDENTES:*\n`;
            form.dependents.forEach((dep, index) => {
                const ageInfo =
                    dep.relationship === "Filho(a)" && dep.age
                        ? `${dep.age} anos`
                        : dep.relationship !== "Filho(a)"
                        ? "Maior de idade"
                        : "Menor de idade";
                dependentsInfo += `${index + 1}. ${dep.name} - ${
                    dep.relationship
                } - ${ageInfo}\n`;
            });
        }

        const message = `*TAXA DE ADESÃO - ECO PARQUE SAPUCAIA*

*Tipo de Associação:* ${membershipType}

*Nome:* ${form.name}
*Telefone:* ${form.phone}
*E-mail:* ${form.email}
*Meio de Pagamento Preferido:* ${form.paymentMethod}
*Taxa de Adesão:* ${taxaValue}${installmentInfo}${dependentsInfo}
`;

        // Create WhatsApp URL with the form data
        const whatsappUrl = `https://wa.me/${
            contactInfo.whatsappNumber
        }?text=${encodeURIComponent(message)}`;

        // Open WhatsApp
        window.open(whatsappUrl, "_blank");

        // Emit submit event
        emit("submit", {
            type: props.membershipType,
            data: { ...form },
        });

        // Close dialog and reset form
        closeDialog();
        resetForm();
    } catch (error) {
        console.error("Error submitting form:", error);
    } finally {
        isSubmitting.value = false;
    }
};

// Watch for dialog open/close to manage body scroll
watch(
    () => props.isOpen,
    (isOpen) => {
        if (process.client) {
            if (isOpen) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
                resetForm();
            }
        }
    }
);

// Handle escape key
const handleEscape = (event) => {
    if (event.key === "Escape" && props.isOpen) {
        closeDialog();
    }
};

// Add/remove event listeners
if (process.client) {
    document.addEventListener("keydown", handleEscape);
}
</script>

<style scoped>
/* Custom scrollbar for the dialog */
.overflow-y-auto::-webkit-scrollbar {
    width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
}
</style>
