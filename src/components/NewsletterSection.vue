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
                Inscrever
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
  padding: 1rem 0;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  overflow: hidden;
}

.newsletter-background {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(90deg, rgba(12, 45, 76, 0.78), rgba(15, 68, 85, 0.68)),
    url('https://plus.unsplash.com/premium_photo-1789011763402-5decd28b09e9?q=80&w=1216&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: center;
  z-index: 0;
}

.newsletter-section :deep(.v-container),
.newsletter-section :deep(.v-row),
.newsletter-section :deep(.v-col) {
  position: relative;
  z-index: 1;
  padding-left: 0 !important;
  padding-right: 0 !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.newsletter-form-row {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (min-width: 600px) {
  .newsletter-form-row {
    flex-direction: row;
    gap: 1.25rem;
    align-items: flex-start;
  }
}

@media (max-width: 960px) {
  .newsletter-section :deep(.v-col) {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
}

.newsletter-icon-box {
  width: 60px;
  height: 60px;
  min-width: 60px;
  border-radius: 12px;
  background: #1e3a8a;
  display: flex;
  align-items: center;
  justify-content: center;
}

.newsletter-heading {
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.3;
}

.newsletter-subtext {
  color: rgba(255, 255, 255, 0.86);
  font-size: 0.9rem;
  line-height: 1.5;
}

/* ==== INPUT ==== */
.newsletter-input :deep(.v-field) {
  background: #ffffff;
  border-radius: 8px;
}

.newsletter-input :deep(.v-field__input) {
  min-height: 44px;
  padding-top: 14px !important;
  padding-bottom: 4px !important;
  color: #1f2937 !important;
  opacity: 1 !important;
}

.newsletter-input :deep(input) {
  color: #1f2937 !important;
  padding-top: 0 !important;
}

.newsletter-input :deep(.v-field__prepend-inner) {
  color: #6b7280;
  padding-top: 0 !important;
  align-items: center;
}

.newsletter-input :deep(.v-field--focused .v-field__prepend-inner) {
  color: #1e3a8a;
}

.newsletter-input :deep(.v-label) {
  color: #6b7280 !important;
  opacity: 1 !important;
}

.newsletter-input :deep(.v-field--focused .v-label) {
  color: #1e3a8a !important;
  opacity: 1 !important;
}

.newsletter-input :deep(.v-field__outline) {
  color: #d1d5db;
}

.newsletter-input :deep(.v-field--focused .v-field__outline) {
  color: #1e3a8a;
}

.newsletter-btn {
  height: 44px !important;
  min-width: 150px;
  border-radius: 8px !important;
  font-weight: 600;
  text-transform: none;
  letter-spacing: 0.3px;
  flex-shrink: 0;
}

@media (max-width: 960px) {
  .newsletter-section {
    padding: 0.75rem 0;
  }

  .newsletter-heading {
    font-size: 1.1rem;
  }

  .newsletter-subtext {
    font-size: 0.85rem;
  }
}
</style>