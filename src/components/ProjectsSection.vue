```vue
<template>
  <section id="projects" class="projects-section py-16">
    <v-container>
      <!-- Cabeçalho -->
      <div class="section-heading">
        <span class="section-eyebrow">PROJECTOS</span>

        <h2 class="section-header">
          PROJECTOS EM DESTAQUE
        </h2>

        <p class="section-subtitle">
          Conheça alguns dos projectos desenvolvidos nas áreas de
          monitorização, ambiente e sustentabilidade.
        </p>
      </div>

      <!-- CARROSSEL -->
      <div
        class="projects-carousel-shell"
        @mouseenter="pauseAutoPlay"
        @mouseleave="resumeAutoPlay"
      >
        <!-- Seta esquerda -->
        <button
          type="button"
          class="project-carousel-btn project-carousel-prev"
          aria-label="Projectos anteriores"
          @click="goToProjectSlide(-1)"
        >
          <v-icon icon="mdi-chevron-left" />
        </button>

        <!-- Viewport -->
        <div class="projects-carousel-viewport">
          <div
            class="projects-carousel-track"
            :style="trackStyle"
          >
            <article
              v-for="(project, index) in projects"
              :key="project.id"
              class="project-card"
              :class="{
                'is-active': index === activeProjectSlide
              }"
            >
              <!-- Imagem -->
              <div class="project-image-wrap">
                <v-img
                  :src="project.image"
                  :alt="project.title"
                  cover
                  class="project-image"
                  eager
                />

                <div class="project-image-overlay"></div>

                <span class="project-number">
                  {{ String(project.id).padStart(2, '0') }}
                </span>
              </div>

              <!-- Conteúdo -->
              <div class="project-content">
                <div class="project-meta">
                  <span
                    v-for="tag in project.tags.slice(0, 1)"
                    :key="tag"
                    class="project-category"
                  >
                    {{ tag }}
                  </span>
                </div>

                <h3 class="project-title">
                  {{ project.title }}
                </h3>

                <p class="project-description">
                  {{ project.description }}
                </p>

                <a
                  href="#"
                  class="project-link"
                  @click.prevent
                >
                  <span>VER PROJECTO</span>

                  <v-icon
                    icon="mdi-arrow-right"
                    size="16"
                  />
                </a>
              </div>
            </article>
          </div>
        </div>

        <!-- Seta direita -->
        <button
          type="button"
          class="project-carousel-btn project-carousel-next"
          aria-label="Próximos projectos"
          @click="goToProjectSlide(1)"
        >
          <v-icon icon="mdi-chevron-right" />
        </button>
      </div>

      <!-- Indicadores -->
      <div class="carousel-footer">
        <div class="carousel-progress">
          <span
            class="carousel-progress-active"
            :style="progressStyle"
          ></span>
        </div>

        <div class="carousel-counter">
          <strong>
            {{ String(activeProjectSlide + 1).padStart(2, '0') }}
          </strong>

          <span>/</span>

          <span>
            {{ String(projects.length).padStart(2, '0') }}
          </span>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import {
  computed,
  onBeforeUnmount,
  onMounted,
  ref
} from 'vue'

const activeProjectSlide = ref(0)

const isPaused = ref(false)

let autoplayTimer = null

/*
|--------------------------------------------------------------------------
| Projectos
|--------------------------------------------------------------------------
*/

const projects = [
  {
    id: 1,
    title: 'Monitorização Ambiental',
    description: 'Porto do Soyo.',
    image:
      'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=900&h=650&fit=crop',
    tags: ['Auditoria', 'Conformidade', 'Relatório']
  },

  {
    id: 2,
    title: 'Estudo de Impacte Ambiental',
    description: 'Projecto mineiro.',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&h=650&fit=crop',
    tags: ['Reciclagem', 'Resíduos', 'Sustentabilidade']
  },

  {
    id: 3,
    title: 'Monitorização Ambiental Contínua',
    description: 'Município de Viana.',
    image:
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=900&h=650&fit=crop',
    tags: ['Monitorização', 'Qualidade', 'Relatórios']
  },

  {
    id: 4,
    title: 'Laboratório Ambiental',
    description: 'Análise físico-química.',
    image:
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=900&h=650&fit=crop',
    tags: ['Conformidade', 'Regulamentação', 'Consultoria']
  },

  {
    id: 5,
    title: 'Gestão de Resíduos Urbanos',
    description:
      'Plano de recolha e valorização em cidade.',
    image:
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=900&h=650&fit=crop',
    tags: ['Resíduos', 'Logística', 'Sustentabilidade']
  },

  {
    id: 6,
    title: 'Avaliação de Impacte Ambiental',
    description:
      'Estudo para implementação de nova infraestrutura.',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&h=650&fit=crop',
    tags: ['Impacte', 'Planeamento', 'Consultoria']
  },

  {
    id: 7,
    title: 'Monitorização de Qualidade do Ar',
    description:
      'Análise contínua para zonas industriais.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&h=650&fit=crop',
    tags: ['Ar', 'Monitorização', 'Tecnologia']
  },

  {
    id: 8,
    title: 'Formação Ambiental',
    description:
      'Programas para equipas e comunidades locais.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&h=650&fit=crop',
    tags: ['Formação', 'Comunidades', 'Educação']
  }
]

/*
|--------------------------------------------------------------------------
| Número de cards visíveis
|--------------------------------------------------------------------------
*/

const cardsPerView = ref(4)

const updateCardsPerView = () => {
  if (window.innerWidth <= 600) {
    cardsPerView.value = 1
  } else if (window.innerWidth <= 960) {
    cardsPerView.value = 2
  } else {
    cardsPerView.value = 4
  }

  /*
   * Evita que o índice actual fique fora dos limites
   */
  const maxIndex = Math.max(
    0,
    projects.length - cardsPerView.value
  )

  if (activeProjectSlide.value > maxIndex) {
    activeProjectSlide.value = maxIndex
  }
}

/*
|--------------------------------------------------------------------------
| Movimento do carrossel
|--------------------------------------------------------------------------
*/

const maxSlide = computed(() =>
  Math.max(
    0,
    projects.length - cardsPerView.value
  )
)

const trackStyle = computed(() => ({
  transform: `translateX(-${
    activeProjectSlide.value *
    (100 / cardsPerView.value)
  }%)`
}))

/*
|--------------------------------------------------------------------------
| Progresso
|--------------------------------------------------------------------------
*/

const progressStyle = computed(() => {
  const total = maxSlide.value || 1

  const progress =
    ((activeProjectSlide.value / total) * 100)

  return {
    width: `${Math.max(8, progress)}%`
  }
})

/*
|--------------------------------------------------------------------------
| Navegação
|--------------------------------------------------------------------------
*/

const goToProjectSlide = (direction) => {
  if (!projects.length) {
    return
  }

  let next =
    activeProjectSlide.value + direction

  /*
   * Loop infinito
   */
  if (next > maxSlide.value) {
    next = 0
  }

  if (next < 0) {
    next = maxSlide.value
  }

  activeProjectSlide.value = next

  restartAutoPlay()
}

/*
|--------------------------------------------------------------------------
| Auto Play
|--------------------------------------------------------------------------
*/

const startAutoPlay = () => {
  stopAutoPlay()

  autoplayTimer = setInterval(() => {
    if (!isPaused.value) {
      goToProjectSlide(1)
    }
  }, 4500)
}

const stopAutoPlay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

const pauseAutoPlay = () => {
  isPaused.value = true
}

const resumeAutoPlay = () => {
  isPaused.value = false
}

/*
|--------------------------------------------------------------------------
| Reiniciar autoplay depois de navegação manual
|--------------------------------------------------------------------------
*/

const restartAutoPlay = () => {
  stopAutoPlay()
  startAutoPlay()
}

/*
|--------------------------------------------------------------------------
| Lifecycle
|--------------------------------------------------------------------------
*/

onMounted(() => {
  updateCardsPerView()

  window.addEventListener(
    'resize',
    updateCardsPerView
  )

  startAutoPlay()
})

onBeforeUnmount(() => {
  stopAutoPlay()

  window.removeEventListener(
    'resize',
    updateCardsPerView
  )
})
</script>

<style scoped>
/* =========================================================
   SECTION
========================================================= */

.projects-section {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(
      circle at 10% 20%,
      rgba(26, 123, 60, 0.05),
      transparent 30%
    ),
    linear-gradient(
      180deg,
      #f7faf8 0%,
      #edf4ef 100%
    );
}

/* =========================================================
   HEADER
========================================================= */

.section-heading {
  max-width: 760px;
  margin: 0 auto 3rem;
  text-align: center;
}

.section-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;

  margin-bottom: 0.75rem;

  color: #1a7b3c;

  font-size: 0.72rem;
  font-weight: 800;

  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.section-eyebrow::before,
.section-eyebrow::after {
  content: '';

  width: 24px;
  height: 1px;

  background: #1a7b3c;

  opacity: 0.45;
}

.section-header {
  margin: 0;

  color: #0d3b5c;

  font-size: clamp(
    2rem,
    4vw,
    3rem
  );

  font-weight: 800;

  line-height: 1.1;
  letter-spacing: -0.04em;
}

.section-subtitle {
  max-width: 620px;

  margin: 1rem auto 0;

  color: #667085;

  font-size: 0.95rem;
  line-height: 1.7;
}

/* =========================================================
   CAROUSEL
========================================================= */

.projects-carousel-shell {
  position: relative;

  width: 100%;
  padding: 0 1px;
}

.projects-carousel-viewport {
  width: 100%;

  overflow: hidden;

  padding: 12px 4px 22px;
}

.projects-carousel-track {
  display: flex;

  margin: 0 -10px;

  transition:
    transform 0.8s
    cubic-bezier(
      0.22,
      1,
      0.36,
      1
    );

  will-change: transform;
}

/* =========================================================
   CARD
========================================================= */

.project-card {
  position: relative;

  flex: 0 0
    calc(
      25% - 20px
    );

  min-width: 0;

  margin: 0 10px;

  overflow: hidden;

  background: #ffffff;

  border: 1px solid
    rgba(
      13,
      59,
      92,
      0.08
    );

  border-radius: 20px;

  box-shadow:
    0 8px 24px
      rgba(
        13,
        59,
        92,
        0.07
      );

  transition:
    transform 0.45s
      cubic-bezier(
        0.22,
        1,
        0.36,
        1
      ),
    box-shadow 0.45s ease,
    border-color 0.45s ease;
}

.project-card:hover {
  transform:
    translateY(-8px);

  border-color:
    rgba(
      26,
      123,
      60,
      0.2
    );

  box-shadow:
    0 20px 40px
      rgba(
        13,
        59,
        92,
        0.14
      );
}

/* =========================================================
   IMAGE
========================================================= */

.project-image-wrap {
  position: relative;

  height: 190px;

  overflow: hidden;

  background: #dfe8e2;
}

.project-image {
  width: 100%;
  height: 100%;

  transition:
    transform 0.7s
    cubic-bezier(
      0.22,
      1,
      0.36,
      1
    );
}

.project-card:hover
.project-image {
  transform: scale(1.07);
}

.project-image-overlay {
  position: absolute;
  inset: 0;

  background:
    linear-gradient(
      180deg,
      rgba(13, 59, 92, 0.02)
        35%,
      rgba(13, 59, 92, 0.55)
        100%
    );

  pointer-events: none;
}

.project-number {
  position: absolute;

  top: 14px;
  right: 14px;

  display: flex;

  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  border-radius: 50%;

  background:
    rgba(
      255,
      255,
      255,
      0.92
    );

  color: #0d3b5c;

  font-size: 0.72rem;
  font-weight: 800;

  box-shadow:
    0 6px 16px
      rgba(
        0,
        0,
        0,
        0.12
      );

  backdrop-filter: blur(8px);
}

/* =========================================================
   CONTENT
========================================================= */

.project-content {
  display: flex;

  flex-direction: column;

  min-height: 205px;

  padding: 1.25rem;
}

.project-meta {
  margin-bottom: 0.55rem;
}

.project-category {
  color: #1a7b3c;

  font-size: 0.65rem;

  font-weight: 800;

  letter-spacing: 0.12em;

  text-transform: uppercase;
}

.project-title {
  margin: 0 0 0.55rem;

  color: #0d3b5c;

  font-size: 1rem;

  font-weight: 750;

  line-height: 1.3;
}

.project-description {
  flex: 1;

  margin: 0;

  color: #667085;

  font-size: 0.78rem;

  line-height: 1.6;
}

.project-link {
  display: inline-flex;

  align-items: center;

  gap: 0.4rem;

  width: fit-content;

  margin-top: 1rem;

  color: #1a7b3c;

  font-size: 0.7rem;

  font-weight: 800;

  letter-spacing: 0.08em;

  text-decoration: none;

  transition:
    gap 0.3s ease,
    color 0.3s ease;
}

.project-link:hover {
  gap: 0.7rem;

  color: #0d5c2b;
}

/* =========================================================
   ARROWS
========================================================= */

.project-carousel-btn {
  position: absolute;

  top: 50%;

  z-index: 10;

  display: flex;

  align-items: center;
  justify-content: center;

  width: 46px;
  height: 46px;

  transform:
    translateY(-50%);

  border: 1px solid
    rgba(
      26,
      123,
      60,
      0.15
    );

  border-radius: 50%;

  background:
    rgba(
      255,
      255,
      255,
      0.95
    );

  color: #1a7b3c;

  cursor: pointer;

  box-shadow:
    0 10px 25px
      rgba(
        13,
        59,
        92,
        0.12
      );

  backdrop-filter:
    blur(10px);

  transition:
    transform 0.3s ease,
    background 0.3s ease,
    box-shadow 0.3s ease;
}

.project-carousel-btn:hover {
  transform:
    translateY(-50%)
    scale(1.08);

  background: #1a7b3c;

  color: #ffffff;

  box-shadow:
    0 14px 30px
      rgba(
        26,
        123,
        60,
        0.25
      );
}

.project-carousel-prev {
  left: -24px;
}

.project-carousel-next {
  right: -24px;
}

/* =========================================================
   FOOTER / PROGRESS
========================================================= */

.carousel-footer {
  display: flex;

  align-items: center;

  gap: 1rem;

  max-width: 600px;

  margin: 1rem auto 0;
}

.carousel-progress {
  position: relative;

  flex: 1;

  height: 3px;

  overflow: hidden;

  border-radius: 999px;

  background:
    rgba(
      13,
      59,
      92,
      0.1
    );
}

.carousel-progress-active {
  display: block;

  height: 100%;

  border-radius: inherit;

  background:
    linear-gradient(
      90deg,
      #1a7b3c,
      #2b9b55
    );

  transition:
    width 0.6s
    cubic-bezier(
      0.22,
      1,
      0.36,
      1
    );
}

.carousel-counter {
  display: flex;

  align-items: center;

  gap: 0.35rem;

  min-width: 65px;

  color: #98a2b3;

  font-size: 0.7rem;

  font-weight: 700;
}

.carousel-counter strong {
  color: #0d3b5c;

  font-size: 0.8rem;
}

/* =========================================================
   TABLET
========================================================= */

@media (max-width: 960px) {
  .project-card {
    flex-basis:
      calc(
        50% - 20px
      );
  }

  .project-image-wrap {
    height: 180px;
  }

  .project-carousel-prev {
    left: -15px;
  }

  .project-carousel-next {
    right: -15px;
  }
}

/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 600px) {
  .projects-section {
    padding-top: 4rem !important;
    padding-bottom: 4rem !important;
  }

  .section-heading {
    margin-bottom: 2rem;
  }

  .section-header {
    font-size: 1.8rem;
  }

  .section-subtitle {
    font-size: 0.82rem;
  }

  .project-card {
    flex-basis:
      calc(
        100% - 20px
      );
  }

  .project-image-wrap {
    height: 210px;
  }

  .project-content {
    min-height: 190px;
  }

  .project-carousel-btn {
    width: 40px;
    height: 40px;
  }

  .project-carousel-prev {
    left: 5px;
  }

  .project-carousel-next {
    right: 5px;
  }

  .carousel-footer {
    max-width: 90%;
  }
}

/* =========================================================
   REDUZIR MOVIMENTO
========================================================= */

@media (
  prefers-reduced-motion: reduce
) {
  .projects-carousel-track,
  .project-card,
  .project-image,
  .project-carousel-btn,
  .project-link {
    transition: none !important;
  }
}
</style>