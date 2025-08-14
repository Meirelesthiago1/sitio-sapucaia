<template>
    <div
        v-if="isOpen"
        class="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-gray-900 bg-opacity-40"
        style="backdrop-filter: blur(2px)"
        @click.self="closeDialog"
    >
        <div
            class="bg-white rounded-2xl md:rounded-3xl shadow-2xl w-full max-w-md md:max-w-2xl max-h-[90vh] overflow-y-auto transform transition-all duration-300"
            :class="isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'"
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
                            Pré-registro - Sem cobrança neste momento
                        </p>
                    </div>
                    <button
                        @click="closeDialog"
                        class="text-white hover:bg-white hover:bg-opacity-20 hover:text-emerald-600 rounded-full p-2 transition-all duration-200"
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
                                Este é apenas um pré-registro
                            </h3>
                            <p class="text-emerald-700 text-xs md:text-sm mt-1">
                                Não será cobrado nada agora. Nossa equipe
                                entrará em contato para explicar todo o
                                processo.
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
                            errors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-emerald-500',
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
                            errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-emerald-500',
                        ]"
                        placeholder="seu@email.com"
                    />
                    <p v-if="errors.email" class="text-red-500 text-sm mt-1">
                        {{ errors.email }}
                    </p>
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
                        class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 focus:shadow-md transition-all duration-200 text-gray-900 bg-white"
                    >
                        <option value="" class="text-gray-500">
                            Selecione uma opção
                        </option>
                        <option value="PIX" class="text-gray-900">
                            PIX (Recomendado)
                        </option>
                        <option value="Boleto Bancário" class="text-gray-900">
                            Boleto Bancário
                        </option>
                        <option value="Cartão de Débito" class="text-gray-900">
                            Cartão de Débito
                        </option>
                        <option value="Cartão de Crédito" class="text-gray-900">
                            Cartão de Crédito
                        </option>
                        <option value="Transferência Bancária" class="text-gray-900">
                            Transferência Bancária
                        </option>
                        <option value="Dinheiro" class="text-gray-900">
                            Dinheiro
                        </option>
                    </select>
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
                            <span class="font-medium">Mensalidade:</span>
                            {{
                                membershipType === "familiar"
                                    ? "R$ 151,80/mês"
                                    : "R$ 91,80/mês"
                            }}
                        </p>
                        <p>
                            <span class="font-medium">Inclui:</span>
                            {{
                                membershipType === "familiar"
                                    ? "Titular + cônjuge + filhos menores de 18 anos"
                                    : "Acesso individual"
                            }}
                        </p>
                    </div>
                </div>

                <!-- Buttons -->
                <div class="flex flex-col sm:flex-row gap-3 pt-4">
                    <button
                        type="submit"
                        :disabled="isSubmitting"
                        class="flex-1 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                        <span v-if="!isSubmitting">Enviar Pré-registro</span>
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
                        class="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200"
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, watch, nextTick } from "vue";
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

// Reactive data
const isSubmitting = ref(false);
const form = reactive({
    name: "",
    phone: "",
    email: "",
    paymentMethod: "",
});

// Error states
const errors = reactive({
    phone: "",
    email: "",
});

// Methods
const closeDialog = () => {
    emit("close");
};

const resetForm = () => {
    form.name = "";
    form.phone = "";
    form.email = "";
    form.paymentMethod = "";
    errors.phone = "";
    errors.email = "";
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
        const membershipInfo =
            props.membershipType === "familiar"
                ? "Associação Familiar (R$ 151,80/mês)"
                : "Associação Individual (R$ 91,80/mês)";

        const message = `🌿 *PRÉ-REGISTRO - ECO PARQUE SAPUCAIA*

📋 *Tipo de Associação:* ${membershipInfo}

👤 *Nome:* ${form.name}
📱 *Telefone:* ${form.phone}
📧 *E-mail:* ${form.email}
💳 *Meio de Pagamento Preferido:* ${form.paymentMethod}

---
✅ Este é um pré-registro sem cobrança. Gostaria de agendar uma visita para conhecer as instalações e finalizar o processo de associação.`;

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
