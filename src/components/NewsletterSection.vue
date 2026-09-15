<template>
  <section class="newsletter-section py-0">
    <div class="newsletter-background" aria-hidden="true" />
    <v-container fluid class="pa-0">
      <v-row align="center" justify="center" class="ma-0">
        <!-- Left - Icon and Text -->
        <v-col cols="12" md="5" class="text-left">
          <div class="d-flex align-center gap-4 mb-4">
            <div class="newsletter-icon-box">
              <v-icon size="32" color="white">mdi-email</v-icon>
            </div>
            <div>
              <h3 class="newsletter-heading mb-1">Receba as nossas novidades</h3>
              <p class="newsletter-subtext mb-0">
                Inscreva-se à nossa Newsletter e fica dentro das nossas notícias, projectos e cursos
              </p>
            </div>
          </div>
        </v-col>

        <!-- Right - Newsletter Form -->
        <v-col cols="12" md="5">
          <v-form ref="formRef" @submit.prevent="subscribe">
            <div class="newsletter-form-row">
              <v-text-field
                v-model="email"
                type="email"
                label="O seu email"
                variant="outlined"
                density="compact"
                hide-details="auto"
                :rules="[emailRule]"
                required
                prepend-inner-icon="mdi-email-outline"
                class="newsletter-input flex-grow-1"
              />
              <v-btn
                type="submit"
                color="primary"
                size="default"
                :loading="loading"
                :disabled="!isEmailValid"
                prepend-icon="mdi-send"
                class="newsletter-btn"
              >
                Insrever
              </v-btn>
            </div>
            <v-alert
              v-if="message"
              :type="messageType"
              density="compact"
              class="mt-3"
              variant="tonal"
            >
              {{ message }}
            </v-alert>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref, computed, onBeforeUnmount } from 'vue'

const formRef = ref(null)
const email = ref('')
const loading = ref(false)
const message = ref('')
const messageType = ref('success')
const dismissTimer = ref(null)

const emailRule = (v) => {
  if (!v) return 'O email é obrigatório'
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return pattern.test(v) || 'Introduza um email válido'
}

// Verifica se o email é válido em tempo real
const isEmailValid = computed(() => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return pattern.test(email.value)
})

const clearDismissTimer = () => {
  if (dismissTimer.value) {
    clearTimeout(dismissTimer.value)
    dismissTimer.value = null
  }
}

const subscribe = async () => {
  // Valida o formulário antes de continuar
  const { valid } = await formRef.value.validate()
  if (!valid) return

  loading.value = true
  message.value = ''
  clearDismissTimer()

  try {
    await new Promise(resolve => setTimeout(resolve, 1000))

    message.value = 'Inscrição realizada com sucesso! Obrigado.'
    messageType.value = 'success'
    email.value = ''
    formRef.value.resetValidation()

    dismissTimer.value = setTimeout(() => {
      message.value = ''
      messageType.value = 'success'
    }, 3000)
  } catch (error) {
    message.value = 'Ocorreu um erro. Tente novamente mais tarde.'
    messageType.value = 'error'
  } finally {
    loading.value = false
  }
}

onBeforeUnmount(() => {
  clearDismissTimer()
})
</script>

<style scoped>
.newsletter-section {
  position: relative;
  background: transparent;
  padding: 0.35rem 0;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  overflow: hidden;
}

.newsletter-background {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(
      90deg,
      rgba(12, 45, 76, 0.78),
      rgba(15, 68, 85, 0.68)
    ),
    url('https://plus.unsplash.com/premium_photo-1789011763402-5decd28b09e9?q=80&w=1216&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');

  background-size: cover;
  background-position: center;

  z-index: 0;
}

/* =========================================================
   VUETIFY — REMOVER ESPAÇAMENTOS PADRÃO
========================================================= */

.newsletter-section :deep(.v-container),
.newsletter-section :deep(.v-row),
.newsletter-section :deep(.v-col) {
  position: relative;
  z-index: 1;

  padding: 0 !important;
  margin: 0 !important;
}


/* =========================================================
   COLUNAS
========================================================= */

.newsletter-section :deep(.v-col) {
  display: flex;
  align-items: center;
}


/* =========================================================
   BLOCO ESQUERDO
========================================================= */

.newsletter-section :deep(.d-flex) {
  margin-bottom: 0 !important;
  gap: 0.65rem !important;
}

/* =========================================================
   ÍCONE
========================================================= */

.newsletter-icon-box {
  width: 42px;
  height: 42px;

  min-width: 42px;

  border-radius: 8px;

  background: #1e3a8a;

  display: flex;
  align-items: center;
  justify-content: center;
}

.newsletter-icon-box :deep(.v-icon) {
  font-size: 23px !important;
}


/* =========================================================
   TÍTULO
========================================================= */

.newsletter-heading {
  margin-bottom: 2px !important;

  color: #ffffff;

  font-size: 1rem;
  font-weight: 600;
  line-height: 1.2;
}


/* =========================================================
   TEXTO
========================================================= */

.newsletter-subtext {
  margin: 0 !important;

  color: rgba(255, 255, 255, 0.86);

  font-size: 0.72rem;
  line-height: 1.35;
}


/* =========================================================
   FORMULÁRIO
========================================================= */

.newsletter-form-row {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}


/* =========================================================
   INPUT
========================================================= */

.newsletter-input {
  margin: 0 !important;
  flex: 1 1 560px;
  width: 290px;
  min-width: 0;
  max-width: 620px;
}

.newsletter-input :deep(.v-field) {
  min-height: 38px !important;

  background: #ffffff;

  border-radius: 6px;
}

.newsletter-input :deep(.v-field__input) {
  min-height: 38px !important;

  padding-top: 4px !important;
  padding-bottom: 4px !important;

  color: #1f2937 !important;

  opacity: 1 !important;
}

.newsletter-input :deep(input) {
  color: #dfe5ef !important;

  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.newsletter-input :deep(.v-field__prepend-inner) {
  padding-top: 0 !important;

  align-items: center;

  color: #6b7280;
}

.newsletter-input :deep(.v-label) {
  color: #6b7280 !important;
  opacity: 1 !important;
}

.newsletter-input :deep(.v-field--focused .v-label) {
  color: #1e3a8a !important;
}

.newsletter-input :deep(.v-field__outline) {
  color: #d1d5db;
}

.newsletter-input :deep(.v-field--focused .v-field__outline) {
  color: #f6f8fb;
}


/* =========================================================
   BOTÃO
========================================================= */

.newsletter-btn {
  height: 38px !important;
  min-width: 125px;

  border-radius: 6px !important;

  font-size: 0.82rem;

  font-weight: 600;

  text-transform: none;

  letter-spacing: 0.2px;

  flex-shrink: 0;
}


/* =========================================================
   ALERTA
========================================================= */

.newsletter-section :deep(.v-alert) {
  margin-top: 0.35rem !important;

  padding: 4px 8px !important;

  font-size: 0.75rem;
}


/* =========================================================
   DESKTOP
========================================================= */
@media (min-width: 600px) {
  .newsletter-form-row {
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
  }

  .newsletter-input {
    flex: 1 1 560px;
    min-width: 0;
    max-width: 620px;
  }

  .newsletter-btn {
    flex: 0 0 150px;
  }
}


/* =========================================================
   TABLET / MOBILE
========================================================= */

@media (max-width: 960px) {

  .newsletter-section {
    padding: 0.5rem 0;
  }

  .newsletter-section :deep(.v-col) {
    padding: 0 !important;
  }

  .newsletter-heading {
    font-size: 0.95rem;
  }

  .newsletter-subtext {
    font-size: 0.7rem;
  }

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 599px) {

  .newsletter-section {
    padding: 0.6rem 12px;
  }

  .newsletter-section :deep(.v-col) {
    margin-bottom: 0.5rem !important;
  }

  .newsletter-section :deep(.v-col:last-child) {
    margin-bottom: 0 !important;
  }

  .newsletter-form-row {
    flex-direction: row;
  }

  .newsletter-btn {
    min-width: 105px;
  }

}


/* =========================================================
   MOBILE PEQUENO
========================================================= */

@media (max-width: 430px) {

  .newsletter-form-row {
    flex-direction: column;
  }

  .newsletter-input,
  .newsletter-btn {
    width: 100%;
  }

}
</style>