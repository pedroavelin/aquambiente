<template>
  <section class="newsletter-section py-12">
    <v-container>
      <v-row align="center" justify="center">
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
          <v-form @submit.prevent="subscribe" class="newsletter-form">
            <v-row class="g-2">
              <v-col cols="12" sm="8">
                <v-text-field
                  v-model="email"
                  type="email"
                  placeholder="O seu email e-mail"
                  variant="outlined"
                  color="green-accent-4"
                  bg-color="white"
                  hide-details
                  required
                  density="comfortable"
                />
              </v-col>
              <v-col cols="12" sm="4">
                <v-btn
                  type="submit"
                  color="green-accent-4"
                  class="font-weight-bold w-100"
                  size="large"
                >
                  INSCREVER-SE
                </v-btn>
              </v-col>
            </v-row>
          </v-form>

          <!-- Success Message -->
          <v-alert
            v-if="subscribeSuccess"
            type="success"
            class="mt-4"
            closable
            color="white"
            text-color="success"
          >
            Obrigado pela subscrição! Verifique seu email para confirmar.
          </v-alert>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const email = ref('')
const subscribeSuccess = ref(false)

const subscribe = () => {
  // Here you would send the email to your backend
  console.log('Subscribing email:', email.value)
  subscribeSuccess.value = true
  email.value = ''

  // Hide message after 5 seconds
  setTimeout(() => {
    subscribeSuccess.value = false
  }, 5000)
}
</script>

<style scoped>
.newsletter-section {
  background: linear-gradient(135deg, #0d3b5c 0%, #0f4a6b 100%);
  color: white;
}

.newsletter-icon-box {
  width: 60px;
  height: 60px;
  background: rgba(102, 187, 106, 0.3);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.newsletter-heading {
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
}

.newsletter-subtext {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.4;
}

.newsletter-form {
  max-width: 100%;
}

@media (max-width: 768px) {
  .newsletter-section {
    padding: 2rem 1rem !important;
  }

  .newsletter-heading {
    font-size: 1rem;
  }

  .newsletter-subtext {
    font-size: 0.85rem;
  }
}
</style>
