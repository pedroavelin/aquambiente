<template>
  <section id="services" class="services-section py-16">
    <v-container>
      <div class="section-header mb-12">
        <p class="section-kicker">SERVIÇOS</p>
        <h2 class="text-h3 font-weight-bold mb-4">Soluções ambientais com visão de futuro</h2>
        <p class="text-h6 text-grey-darken-1">
          A Aquambiente combina experiência técnica, rigor regulatório e execução prática para
          entregar resultados sustentáveis e confiáveis.
        </p>
      </div>

      <v-row>
        <v-col v-for="service in services" :key="service.id" cols="12" md="3" sm="6">
          <div
            class="service-card"
            :style="{
              backgroundImage: `linear-gradient(180deg, rgba(18, 35, 28, 0.1), rgba(18, 35, 28, 0.78)), url('${service.image}')`,
              transitionDelay: `${(service.id - 1) * 70}ms`,
            }"
          >
            <div class="service-card__content">
              <div class="service-icon">
                <v-icon color="white" :icon="service.icon" size="34" />
              </div>

              <h3 class="service-title">{{ service.title }}</h3>

              <p class="service-description">{{ service.description }}</p>

              <span class="service-link">Saiba mais</span>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted } from 'vue'

let observer: IntersectionObserver | null = null

const services = [
  {
    id: 1,
    icon: 'mdi-leaf',
    title: 'Consultoria Ambiental',
    description: 'Estratégias personalizadas para licenciamento, estudos e apoio à decisão.',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    icon: 'mdi-recycle',
    title: 'Gestão de Resíduos',
    description: 'Planeamento, segregação e otimização dos fluxos de resíduos e materiais.',
    image:
      'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    icon: 'mdi-eye-check',
    title: 'Monitorização',
    description: 'Acompanhamento contínuo com indicadores, relatórios e avaliação de desempenho.',
    image:
      'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    icon: 'mdi-wind-power',
    title: 'Qualidade do Ar',
    description: 'Diagnóstico técnico e medidas preventivas para proteção do ambiente e da saúde.',
    image:
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 5,
    icon: 'mdi-volume-mute',
    title: 'Ruído',
    description: 'Avaliações acústicas para conformidade, conforto e mitigação de impactos.',
    image:
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 6,
    icon: 'mdi-file-document-check',
    title: 'Licenciamento',
    description: 'Gestão documental e apoio na tramitação de processos junto às autoridades.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 7,
    icon: 'mdi-medical-bag',
    title: 'Higiene e Segurança',
    description: 'Programas orientados para condições seguras, saudáveis e conformes.',
    image:
      'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 8,
    icon: 'mdi-book-open-variant',
    title: 'Formação',
    description: 'Sessões práticas e especializadas para reforçar conhecimento e boas práticas.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
  },
]

onMounted(() => {
  const revealCards = document.querySelectorAll('.service-card')

  if (!('IntersectionObserver' in window)) {
    revealCards.forEach((card) => card.classList.add('is-visible'))
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 },
  )

  revealCards.forEach((card) => observer?.observe(card))
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<style scoped>
.services-section {
  background: linear-gradient(180deg, #f6f8f5 0%, #edf2ee 100%);
}

.section-header {
  text-align: center;
  max-width: 900px;
  margin-inline: auto;
}

.section-kicker {
  margin: 0 0 0.75rem;
  color: #2e7d32;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.18rem;
}

.service-card {
  position: relative;
  min-height: 280px;
  border-radius: 10px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  box-shadow: 0 18px 36px rgba(17, 24, 39, 0.12);
  opacity: 0;
  transform: translateY(24px);
  transition:
    transform 0.6s ease,
    box-shadow 0.3s ease,
    opacity 0.6s ease;
}

.service-card.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.service-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.76));
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 40px rgba(17, 24, 39, 0.18);
}

.service-card__content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 280px;
  padding: 1rem 1rem 1.125rem;
  color: white;
}

.service-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  margin-bottom: 0.85rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.24);
}

.service-title {
  font-weight: 700;
  font-size: 1.1rem;
  line-height: 1.25;
  margin: 0 0 0.35rem;
  color: #ffffff;
}

.service-description {
  margin: 0.3rem 0 0.75rem;
  color: rgba(255, 255, 255, 0.84);
  font-size: 0.85rem;
  line-height: 1.45;
}

.service-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  margin-inline: auto;
  gap: 0.35rem;
  width: fit-content;
  min-width: 120px;
  padding: 0.5rem 0.8rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.28);
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  transition: background-color 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
}

.service-card:hover .service-link {
  background: rgba(46, 125, 50, 0.85);
  border-color: rgba(46, 125, 50, 0.95);
  transform: translateY(-1px);
}

@media (max-width: 960px) {
  .service-card,
  .service-card__content {
    min-height: 250px;
  }
}
</style>
