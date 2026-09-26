<template>
  <section id="services" class="services-section py-12">
    <v-container>
      <div class="section-heading">
        <div>
          <p class="section-kicker">O QUE FAZEMOS</p>
          <h2 class="section-title">Soluções ambientais para decisões mais sustentáveis</h2>
        </div>
        <p class="section-intro">
          Unimos conhecimento técnico e experiência prática para ajudar organizações a reduzir
          riscos e melhorar o seu desempenho ambiental.
        </p>
      </div>

      <v-row>
        <v-col v-for="service in services" :key="service.title" cols="12" sm="6" md="3">
          <article class="service-card">
            <v-icon :color="service.iconColor || 'green-accent-4'" :icon="service.icon" size="36" />
            <h3>{{ service.title }}</h3>

            <router-link
              :aria-label="`Saiba mais sobre ${service.title}`"
              class="service-more"
              to="/servicos"
            >
              Saiba mais
              <v-icon end icon="mdi-arrow-right" size="small" />
            </router-link>
          </article>
        </v-col>
      </v-row>

    </v-container>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    title: 'Consultoria ambiental',
    icon: 'mdi-flower-outline',
  },
  {
    title: 'Gestão de resíduos',
    icon: 'mdi-recycle',
  },
  {
    title: 'Monitorização da água',
    icon: 'mdi-water',
    iconColor: 'blue-darken-4',
  },
  {
    title: 'Qualidade do Ar',
    icon: 'mdi-cloud-outline',
    iconColor: 'blue-darken-4',
  },
  {
    title: 'Ruído e vibração',
    icon: 'mdi-vibrate',
     iconColor: 'blue-darken-4',
  },
  {
    title: 'Licenciamento Ambiental',
    icon: 'mdi-file-certificate-outline',
  },
  {
    title: 'Higiene e segurança no trabalho',
    icon: 'mdi-hard-hat',
    iconColor: 'orange',
  },
  {
    title: 'Formação e academia',
    icon: 'mdi-school-outline',
    iconColor: 'blue-darken-4',
  },
]
</script>

<style scoped>
.services-section {
  background: #f4f7f3;
}

.section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2rem;
}

.section-kicker {
  color: #16834a;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  margin-bottom: 0.75rem;
}

.section-title {
  color: #16352b;
  font-size: clamp(1.75rem, 3vw, 2.75rem);
  line-height: 1.1;
  max-width: 620px;
}

.section-intro {
  color: #52635b;
  max-width: 380px;
}

.service-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-top: 3px solid #0d47a1;
  border-radius: 10px;
  box-shadow: 0 4px 14px rgba(22, 53, 43, 0.12);
  height: 100%;
  padding: 1.5rem;
  text-align: center;
  transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
}

.service-card:hover {
  transform: scale(1.03);
  border-top-color: #16834a;
  box-shadow: 0 8px 20px rgba(22, 53, 43, 0.18);
}

.service-card h3 {
  color: #0d47a1;
  font-size: 1.1rem;
  margin: 1rem 0 0.65rem;
  transition: color 220ms ease;
}

.service-more {
  display: inline-flex;
  align-items: center;
  margin-top: auto;
  color: #16834a;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
}

.service-more:hover,
.service-card:hover .service-more {
  color: #16834a;
}

.service-more :deep(.v-icon) {
  transition: transform 220ms ease;
}

.service-more:hover :deep(.v-icon),
.service-card:hover .service-more :deep(.v-icon) {
  transform: translateX(3px);
}

.service-card:hover h3 {
  color: #16834a;
}

.service-card p {
  color: #64736c;
  font-size: 0.95rem;
  line-height: 1.55;
}

.section-action {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

@media (max-width: 700px) {
  .section-heading {
    align-items: start;
    flex-direction: column;
    gap: 1rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .service-card,
  .service-card h3,
  .service-more :deep(.v-icon) {
    transition: none;
  }

  .service-card:hover {
    transform: none;
  }
}
</style>