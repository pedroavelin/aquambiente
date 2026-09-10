<template>
  <section id="projects" class="projects-section py-16">
    <v-container>
      <h2 class="section-header text-h3 font-weight-bold">PROJECTOS EM DESTAQUE</h2>

      <div class="projects-carousel-shell">
        <button
          type="button"
          class="project-carousel-btn project-carousel-prev"
          aria-label="Projectos anteriores"
          @click="goToProjectSlide(-1)"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </button>

        <v-carousel
          v-model="activeProjectSlide"
          :show-arrows="false"
          height="280"
          class="projects-carousel"
        >
          <v-carousel-item
            v-for="(slide, slideIndex) in projectSlides"
            :key="slideIndex"
          >
            <v-row class="projects-grid">
              <v-col
                v-for="project in slide"
                :key="project.id"
                cols="12"
                sm="6"
                lg="3"
                class="project-col"
              >
                <article class="project-card">
                  <div class="project-image-wrap">
                    <v-img
                      :src="project.image"
                      height="100"
                      cover
                      class="project-image"
                    />
                  </div>

                  <div class="project-content">
                    <h3 class="project-title">{{ project.title }}</h3>
                    <p class="project-description">
                      {{ project.description }}
                    </p>

                    <a
                      class="project-link"
                      href="#"
                    >
                      VER PROJECTOS
                    </a>
                  </div>
                </article>
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>

        <button
          type="button"
          class="project-carousel-btn project-carousel-next"
          aria-label="Próximos projectos"
          @click="goToProjectSlide(1)"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </button>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeProjectSlide = ref(0)

const goToProjectSlide = (direction) => {
  const totalSlides = projectSlides.length

  if (!totalSlides) {
    return
  }

  activeProjectSlide.value = (activeProjectSlide.value + direction + totalSlides) % totalSlides
}

const projects = [
  {
    id: 1,
    title: 'Monitorização Ambiental',
    description:
      'Porto do soio.',
    image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=600&h=450&fit=crop',
    tags: ['Auditoria', 'Conformidade', 'Relatório']
  },
  {
    id: 2,
    title: 'Estudo de impacto ambiental',
    description:
      'Porjecto Mineiro.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&h=450&fit=crop',
    tags: ['Reciclagem', 'Resíduos', 'Sustentabilidade']
  },
  {
    id: 3,
    title: 'Monitorização Ambiental Contínua',
    description:
      'Município de Viana.',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600&h=450&fit=crop',
    tags: ['Monitorização', 'Qualidade', 'Relatórios']
  },
  {
    id: 4,
    title: 'Laboreatório Ambiental',
    description:
      'Análise Fisico Quimico.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=450&fit=crop',
    tags: ['Conformidade', 'Regulamentação', 'Consultoria']
  },
  {
    id: 5,
    title: 'Gestão de Resíduos Urbanos',
    description:
      'Plano de recolha e valorização em cidade.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=450&fit=crop',
    tags: ['Resíduos', 'Logística', 'Sustentabilidade']
  },
  {
    id: 6,
    title: 'Avaliação de Impacte Ambiental',
    description:
      'Estudo para implementação de nova infraestrutura.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=450&fit=crop',
    tags: ['Impacte', 'Planeamento', 'Consultoria']
  },
  {
    id: 7,
    title: 'Monitorização de Qualidade do Ar',
    description:
      'Análise contínua para zonas industriais.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=450&fit=crop',
    tags: ['Ar', 'Monitorização', 'Tecnologia']
  },
  {
    id: 8,
    title: 'Formação Ambiental',
    description:
      'Programas para equipas e comunidades locais.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=450&fit=crop',
    tags: ['Formação', 'Comunidades', 'Educação']
  }
]

const projectSlides = Array.from(
  { length: Math.ceil(projects.length / 4) },
  (_, index) => projects.slice(index * 4, index * 4 + 4)
)
</script>

<style scoped>
.projects-section {
  background: linear-gradient(180deg, #f5f7f5 0%, #edf3ee 100%);
}

.section-header {
  text-align: center;
}

.projects-grid {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
}

.project-col {
  display: flex;
}

.projects-carousel-shell {
  position: relative;
}

.projects-carousel {
  width: 100%;
}

.projects-carousel :deep(.v-carousel__controls) {
  margin-top: 26px;
  padding-bottom: 0;
  background: transparent !important;
  box-shadow: none !important;
  border: none !important;
}

.projects-carousel :deep(.v-carousel__controls .v-btn) {
  box-shadow: none !important;
  background: transparent !important;
  border: none !important;
  min-width: 8px;
  width: 8px;
  height: 8px;
  padding: 0;
  border-radius: 50%;
  opacity: 0.15;
  color: rgba(13, 59, 92, 0.3) !important;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.projects-carousel :deep(.v-carousel__controls .v-btn--active) {
  background: transparent !important;
  opacity: 1;
  transform: scale(1.3);
  color: #1a7b3c !important;
}

.project-carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(26, 123, 60, 0.2);
  color: #1a7b3c;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 3;
  transition: transform 0.2s ease;
}

.project-carousel-btn:hover {
  transform: translateY(-50%) scale(1.03);
}

.project-carousel-prev {
  left: -50px;
}

.project-carousel-next {
  right: -50px;
}

.project-carousel-btn .v-icon {
  font-size: 1.1rem;
}

.project-card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(13, 59, 92, 0.08);
  box-shadow: 0 10px 22px rgba(13, 59, 92, 0.08);
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: none;
}

.project-image-wrap {
  position: relative;
}

.project-image {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.project-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(10, 61, 37, 0.85);
  color: white;
  padding: 0.4rem 0.75rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06rem;
  text-transform: uppercase;
}

.project-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0.65rem 0.8rem 0.8rem;
  min-height: 0;
}

.project-title {
  font-size: 0.9rem;
  font-weight: 700;
  color: #0d3b5c;
  margin-bottom: 0.35rem;
  line-height: 1.25;
}

.project-description {
  color: #4b5563;
  line-height: 1.35;
  margin-bottom: 0.35rem;
  flex: 1;
  font-size: 0.75rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-bottom: 0.5rem;
}

.project-tag {
  margin: 0;
}

.project-link {
  margin-top: auto;
  width: fit-content;
  color: #1a7b3c;
  font-size: 0.75rem;
  font-weight: 700;
  text-decoration: none;
  letter-spacing: 0.03rem;
  transition: opacity 0.2s ease;
}

.project-link:hover {
  opacity: 0.8;
}

@media (max-width: 960px) {
  .project-card {
    height: 100%;
  }
}
</style>
