<template>
  <section id="news" class="newsletter-section">
    <div class="newsletter-background" aria-hidden="true" />

    <v-container class="newsletter-container">
      <div class="newsletter-layout">

        <!-- =====================================================
             BLOCO INFORMATIVO
        ====================================================== -->
        <div class="newsletter-info">

          <div class="newsletter-icon-box">
            <v-icon
              icon="mdi-email"
              size="26"
              color="white"
            />
          </div>

          <div class="newsletter-copy">
            <h3 class="newsletter-heading">
              Receba as nossas novidades
            </h3>

            <p class="newsletter-subtext">
              Inscreva-se à nossa Newsletter e fique por dentro
              das nossas notícias, projectos e cursos.
            </p>
          </div>

        </div>


        <!-- =====================================================
             FORMULÁRIO
        ====================================================== -->
        <div class="newsletter-form-wrapper">

          <v-form
            ref="formRef"
            class="newsletter-form"
            @submit.prevent="subscribe"
          >

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
                class="newsletter-input"
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
              variant="tonal"
              class="newsletter-alert"
            >
              {{ message }}
            </v-alert>

          </v-form>

        </div>

      </div>
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


/* =========================================================
   VALIDAÇÃO
========================================================= */

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const emailRule = (value) => {
  if (!value) {
    return 'O email é obrigatório'
  }

  return (
    emailPattern.test(value) ||
    'Introduza um email válido'
  )
}


const isEmailValid = computed(() => {
  return emailPattern.test(email.value)
})


/* =========================================================
   TIMER
========================================================= */

const clearDismissTimer = () => {
  if (dismissTimer.value) {
    clearTimeout(dismissTimer.value)
    dismissTimer.value = null
  }
}


/* =========================================================
   SUBSCRIÇÃO
========================================================= */

const subscribe = async () => {

  const { valid } = await formRef.value.validate()

  if (!valid) {
    return
  }

  loading.value = true
  message.value = ''

  clearDismissTimer()

  try {

    await new Promise(resolve => {
      setTimeout(resolve, 1000)
    })

    message.value =
      'Inscrição realizada com sucesso! Obrigado.'

    messageType.value = 'success'

    email.value = ''

    formRef.value.resetValidation()

    dismissTimer.value = setTimeout(() => {

      message.value = ''
      messageType.value = 'success'

    }, 3000)

  } catch (error) {

    message.value =
      'Ocorreu um erro. Tente novamente mais tarde.'

    messageType.value = 'error'

  } finally {

    loading.value = false

  }
}


/* =========================================================
   CLEANUP
========================================================= */

onBeforeUnmount(() => {
  clearDismissTimer()
})
</script>


<style scoped>

/* =========================================================
   SECTION
========================================================= */

.newsletter-section {
  position: relative;

  width: 100%;

  min-height: 82px;

  display: flex;
  align-items: center;

  overflow: hidden;

  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
}


/* =========================================================
   BACKGROUND
========================================================= */

.newsletter-background {
  position: absolute;

  inset: 0;

  z-index: 0;

  background-image:
    linear-gradient(
      90deg,
      rgba(12, 45, 76, 0.82),
      rgba(15, 68, 85, 0.72)
    ),
    url('https://plus.unsplash.com/premium_photo-1789011763402-5decd28b09e9?q=80&w=1216&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');

  background-size: cover;

  background-position:
    center center;

  background-repeat: no-repeat;
}


/* =========================================================
   CONTAINER
========================================================= */

.newsletter-container {
  position: relative;

  z-index: 1;

  width: 100%;

  max-width: 1400px !important;

  margin: 0 auto;

  padding-top: clamp(0.7rem, 1.5vw, 1.15rem) !important;
  padding-bottom: clamp(0.7rem, 1.5vw, 1.15rem) !important;

  padding-left: clamp(1rem, 4vw, 3.5rem) !important;
  padding-right: clamp(1rem, 4vw, 3.5rem) !important;
}


/* =========================================================
   LAYOUT PRINCIPAL
========================================================= */

.newsletter-layout {
  width: 100%;

  display: grid;

  grid-template-columns:
    minmax(0, 1fr)
    minmax(360px, 0.9fr);

  align-items: center;

  gap: clamp(1.5rem, 4vw, 5rem);
}


/* =========================================================
   INFORMAÇÃO
========================================================= */

.newsletter-info {
  min-width: 0;

  display: flex;

  align-items: center;

  gap: clamp(0.65rem, 1.2vw, 1rem);
}


/* =========================================================
   ÍCONE
========================================================= */

.newsletter-icon-box {
  width: clamp(40px, 4vw, 46px);
  height: clamp(40px, 4vw, 46px);

  min-width: clamp(40px, 4vw, 46px);

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 9px;

  background:
    linear-gradient(
      135deg,
      #1e3a8a,
      #2563a8
    );

  box-shadow:
    0 5px 16px rgba(0, 0, 0, 0.15);
}


/* =========================================================
   TEXTO
========================================================= */

.newsletter-copy {
  min-width: 0;
}

.newsletter-heading {
  margin: 0 0 3px !important;

  color: #ffffff;

  font-size:
    clamp(0.9rem, 1.2vw, 1.08rem);

  font-weight: 650;

  line-height: 1.2;

  letter-spacing: -0.01em;
}


.newsletter-subtext {
  max-width: 620px;

  margin: 0 !important;

  color:
    rgba(255, 255, 255, 0.86);

  font-size:
    clamp(0.65rem, 0.75vw, 0.76rem);

  line-height: 1.4;
}


/* =========================================================
   FORM WRAPPER
========================================================= */

.newsletter-form-wrapper {
  width: 100%;

  min-width: 0;
}


/* =========================================================
   FORM
========================================================= */

.newsletter-form {
  width: 100%;
}


/* =========================================================
   FORM ROW
========================================================= */

.newsletter-form-row {
  width: 100%;

  display: grid;

  grid-template-columns:
    minmax(0, 1fr)
    auto;

  align-items: start;

  gap: 0.5rem;
}


/* =========================================================
   INPUT
========================================================= */

.newsletter-input {
  width: 100%;

  min-width: 0;

  margin: 0 !important;
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
  color: #1f2937 !important;

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
  color: #1e3a8a;
}
/* =========================================================
   BOTÃO
========================================================= */

.newsletter-btn {
  width: auto;

  min-width: 132px;

  height: 38px !important;

  border-radius: 6px !important;

  font-size: 0.78rem;

  font-weight: 650;

  text-transform: none;

  letter-spacing: 0.15px;

  flex-shrink: 0;
}


/* =========================================================
   ALERT
========================================================= */

.newsletter-alert {
  margin-top: 0.4rem !important;

  padding:
    4px 8px !important;

  font-size: 0.72rem;

  border-radius: 6px;
}


/* =========================================================
   DESKTOP LARGO
   ≥ 1280px
========================================================= */

@media (min-width: 1280px) {

  .newsletter-layout {
    grid-template-columns:
      minmax(0, 1.05fr)
      minmax(420px, 0.95fr);

    gap: 5rem;
  }

}


/* =========================================================
   LAPTOP
   1024px — 1279px
========================================================= */

@media (min-width: 1024px) and (max-width: 1279px) {

  .newsletter-container {
    padding-left: 2rem !important;
    padding-right: 2rem !important;
  }

  .newsletter-layout {
    grid-template-columns:
      minmax(0, 1fr)
      minmax(360px, 0.95fr);

    gap: 2rem;
  }

  .newsletter-heading {
    font-size: 0.92rem;
  }

  .newsletter-subtext {
    font-size: 0.68rem;
  }

  .newsletter-btn {
    min-width: 125px;
  }

}


/* =========================================================
   TABLET HORIZONTAL
   768px — 1023px
========================================================= */

@media (min-width: 768px) and (max-width: 1023px) {

  .newsletter-container {
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important;
  }

  .newsletter-layout {
    grid-template-columns:
      minmax(0, 1fr)
      minmax(300px, 0.9fr);

    gap: 1.5rem;
  }

  .newsletter-info {
    gap: 0.65rem;
  }

  .newsletter-heading {
    font-size: 0.85rem;
  }

  .newsletter-subtext {
    font-size: 0.65rem;
  }

  .newsletter-icon-box {
    width: 40px;
    height: 40px;
    min-width: 40px;
  }

  .newsletter-form-row {
    grid-template-columns:
      minmax(0, 1fr)
      auto;
  }

  .newsletter-btn {
    min-width: 112px;

    padding-left: 0.7rem !important;
    padding-right: 0.7rem !important;
  }

}
/* =========================================================
   TABLET VERTICAL
   600px — 767px
========================================================= */

@media (min-width: 600px) and (max-width: 767px) {

  .newsletter-container {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .newsletter-layout {
    grid-template-columns: 1fr;

    gap: 0.85rem;
  }

  .newsletter-info {
    justify-content: center;

    text-align: center;
  }

  .newsletter-copy {
    max-width: 600px;
  }

  .newsletter-subtext {
    max-width: none;
  }

  .newsletter-form-row {
    grid-template-columns:
      minmax(0, 1fr)
      auto;
  }

}
/* =========================================================
   MOBILE
   < 600px
========================================================= */

@media (max-width: 599px) {

  .newsletter-container {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;

    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }

  .newsletter-layout {
    grid-template-columns: 1fr;

    gap: 0.85rem;
  }

  .newsletter-info {
    align-items: flex-start;

    gap: 0.65rem;
  }

  .newsletter-icon-box {
    width: 40px;
    height: 40px;

    min-width: 40px;
  }

  .newsletter-heading {
    font-size: 0.9rem;
  }

  .newsletter-subtext {
    font-size: 0.68rem;

    line-height: 1.45;
  }

  .newsletter-form-row {
    grid-template-columns: 1fr;

    gap: 0.45rem;
  }

  .newsletter-input {
    width: 100%;
  }

  .newsletter-btn {
    width: 100%;

    min-width: 0;

    height: 40px !important;
  }

}

/* =========================================================
   MOBILE PEQUENO
   ≤ 400px
========================================================= */

@media (max-width: 400px) {

  .newsletter-container {
    padding-left: 0.8rem !important;
    padding-right: 0.8rem !important;
  }

  .newsletter-info {
    gap: 0.55rem;
  }

  .newsletter-icon-box {
    width: 36px;
    height: 36px;

    min-width: 36px;
  }

  .newsletter-icon-box :deep(.v-icon) {
    font-size: 20px !important;
  }

  .newsletter-heading {
    font-size: 0.84rem;
  }

  .newsletter-subtext {
    font-size: 0.64rem;
  }

}
/* =========================================================
   MOBILE MUITO PEQUENO
   ≤ 340px
========================================================= */

@media (max-width: 340px) {

  .newsletter-info {
    align-items: flex-start;
  }

  .newsletter-heading {
    font-size: 0.8rem;
  }

  .newsletter-subtext {
    font-size: 0.61rem;
  }

}
/* =========================================================
   REDUÇÃO DE MOVIMENTO
========================================================= */

@media (prefers-reduced-motion: reduce) {

  .newsletter-section *,
  .newsletter-section *::before,
  .newsletter-section *::after {
    transition: none !important;
    animation: none !important;
  }

}

</style>