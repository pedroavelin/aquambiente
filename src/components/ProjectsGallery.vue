<template>
  <section id="projects" class="cine-gallery" ref="sectionRef">
    <!-- Barra superior fixa com metadados -->
    <header class="cine-topbar">
      <span class="cine-topbar-label">Projectos</span>

      <span class="cine-topbar-count">
        <strong>{{ String(activeIndex + 1).padStart(2, '0') }}</strong>
        <span>/</span>
        <span>{{ String(projects.length).padStart(2, '0') }}</span>
      </span>
    </header>

    <!-- Índice lateral fixo -->
    <nav
      class="cine-rail"
      :class="{ 'is-hidden': !isSectionVisible }"
      aria-label="Projectos"
    >
      <button
        v-for="(project, index) in projects"
        :key="project.id"
        type="button"
        class="cine-rail-item"
        :class="{ 'is-active': activeIndex === index }"
        :aria-label="project.title"
        @click="scrollToProject(index)"
      >
        <span class="cine-rail-dot"></span>
        <span class="cine-rail-label">{{ String(index + 1).padStart(2, '0') }}</span>
      </button>

      <span class="cine-rail-progress" :style="railProgressStyle"></span>
    </nav>

    <!-- Palco dos projectos -->
    <div class="cine-stage">
      <article
        v-for="(project, index) in projects"
        :key="project.id"
        class="cine-scene"
        :class="{ 'is-visible': visibleIndexes.includes(index) }"
        :ref="(el) => setSceneRef(el, index)"
      >
        <!-- Media com parallax -->
        <div class="cine-scene-media">
          <div
            class="cine-scene-media-inner"
            :style="parallaxStyle(index)"
          >
            <v-img
              :src="project.image"
              :alt="project.title"
              cover
              class="cine-scene-image"
              :eager="index < 2"
            />
          </div>

          <div class="cine-scene-vignette"></div>
        </div>

        <!-- Conteúdo sobreposto -->
        <div class="cine-scene-content">
          <div class="cine-scene-meta">
            <span class="cine-scene-number">
              {{ String(index + 1).padStart(2, '0') }}
            </span>

            <span class="cine-scene-rule"></span>

            <span class="cine-scene-category">
              {{ project.tags[0] }}
            </span>
          </div>

          <h3 class="cine-scene-title">
            <span class="cine-scene-title-line">{{ project.title }}</span>
          </h3>

          <p class="cine-scene-subtitle">
            {{ project.description }}
          </p>

          <div class="cine-scene-footer">
            <dl class="cine-scene-facts">
              <div>
                <dt>Cliente</dt>
                <dd>{{ project.client || 'Confidencial' }}</dd>
              </div>
              <div>
                <dt>Ano</dt>
                <dd>{{ project.year || '2024' }}</dd>
              </div>
              <div>
                <dt>Localização</dt>
                <dd>{{ project.location || 'Angola' }}</dd>
              </div>
            </dl>

            <button type="button" class="cine-scene-link">
              <span>Ver projecto completo</span>
              <span class="cine-scene-link-line"></span>
            </button>
          </div>
        </div>
      </article>
    </div>

    <!-- Rodapé -->
    <footer class="cine-footer">
      <span class="cine-footer-mark">—</span>

      <a href="#" class="cine-footer-link" @click.prevent>
        Ver arquivo completo
        <span class="cine-footer-arrow">→</span>
      </a>
    </footer>
  </section>
</template>
<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import projectsGallery1 from '@/assets/projectos/1.jpeg'
import projectsGallery2 from '@/assets/projectos/2.jpeg'
import projectsGallery3 from '@/assets/projectos/3.jpeg'
import projectsGallery4 from '@/assets/projectos/4.jpeg'
import projectsGallery5 from '@/assets/projectos/5.jpeg'
import projectsGallery6 from '@/assets/projectos/6.jpeg'
const projects = [
  {
    id: 1,
    title: 'Monitorização Ambiental',
    description: 'Porto do Soyo.',
    image: projectsGallery1,
    tags: ['Monitorização', 'Auditoria', 'Conformidade'],
    client: 'Porto do Soyo', year: '2023', location: 'Soyo, Zaire'
  },
  {
    id: 2,
    title: 'Estudo de Impacte Ambiental',
    description: 'Projecto mineiro.',
    image: projectsGallery2,
    tags: ['Consultoria', 'Impacte', 'Sustentabilidade'],
    client: 'Sector Mineiro', year: '2022', location: 'Lunda Sul'
  },
  {
    id: 3,
    title: 'Monitorização Contínua',
    description: 'Município de Viana.',
    image: projectsGallery3,
    tags: ['Monitorização', 'Qualidade', 'Relatórios'],
    client: 'Administração Municipal', year: '2024', location: 'Viana, Luanda'
  },
  {
    id: 4,
    title: 'Laboratório Ambiental',
    description: 'Análise físico-química.',
    image: projectsGallery4,
    tags: ['Consultoria', 'Conformidade', 'Regulamentação'],
    client: 'Vários', year: '2023', location: 'Luanda'
  },
  {
    id: 5,
    title: 'Gestão de Resíduos Urbanos',
    description: 'Plano de recolha e valorização em cidade.',
    image: projectsGallery5,
    tags: ['Sustentabilidade', 'Resíduos', 'Logística'],
    client: 'Município', year: '2024', location: 'Luanda'
  },
  {
    id: 6,
    title: 'Avaliação de Impacte',
    description: 'Nova infraestrutura rodoviária.',
    image: projectsGallery6,
    tags: ['Consultoria', 'Impacte', 'Planeamento'],
    client: 'Sector Público', year: '2023', location: 'Benguela'
  },
]

const sectionRef = ref(null)
const isSectionVisible = ref(true)

const sceneRefs = ref([])

const visibleIndexes = ref([])

const activeIndex = ref(0)

const scrollProgress = ref(0)

const setSceneRef = (el, index) => {
  if (el) sceneRefs.value[index] = el
}

/* =========================================================
 * IntersectionObserver — revela cenas e define a activa
 * ========================================================= */

let observer = null
let sectionObserver = null

onMounted(() => {
  sectionObserver = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      isSectionVisible.value = Boolean(entry?.isIntersecting)
    },
    {
      threshold: [0.1, 0.5],
      rootMargin: '0px 0px -10% 0px'
    }
  )

  if (sectionRef.value) {
    sectionObserver.observe(sectionRef.value)
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = Number(entry.target.dataset.index)

        if (entry.isIntersecting) {
          if (!visibleIndexes.value.includes(index)) {
            visibleIndexes.value = [...visibleIndexes.value, index]
          }

          if (entry.intersectionRatio > 0.5) {
            activeIndex.value = index
          }
        }
      })
    },
    {
      root: null,
      threshold: [0.15, 0.5, 0.75],
      rootMargin: '-10% 0px -10% 0px'
    }
  )

  sceneRefs.value.forEach((el, index) => {
    if (el) {
      el.dataset.index = index
      observer.observe(el)
    }
  })

  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  observer?.disconnect()
  sectionObserver?.disconnect()
  window.removeEventListener('scroll', handleScroll)
})

/* =========================================================
 * Parallax por scroll
 * ========================================================= */

const scrollY = ref(0)

const handleScroll = () => {
  scrollY.value = window.scrollY

  if (sectionRef.value) {
    const rect = sectionRef.value.getBoundingClientRect()
    const total = sectionRef.value.offsetHeight - window.innerHeight
    const progress = Math.min(
      1,
      Math.max(0, -rect.top / total)
    )
    scrollProgress.value = progress
  }
}

const parallaxStyle = (index) => {
  const scene = sceneRefs.value[index]
  if (!scene) return {}

  const rect = scene.getBoundingClientRect()
  const viewportH = window.innerHeight

  // -1 (fora por baixo) → 0 (centro) → 1 (fora por cima)
  const relative = (rect.top + rect.height / 2 - viewportH / 2) / viewportH

  const translate = relative * 40 // px de parallax

  return {
    transform: `translate3d(0, ${translate}px, 0) scale(1.12)`
  }
}

/* =========================================================
 * Índice lateral
 * ========================================================= */

const scrollToProject = (index) => {
  sceneRefs.value[index]?.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  })
}

const railProgressStyle = computed(() => ({
  transform: `scaleY(${scrollProgress.value})`
}))
</script>

<style scoped>
/* =========================================================
   SECTION
========================================================= */

.cine-gallery {
  position: relative;
  background: #0e0e0c;
  color: #fafaf7;
  font-family: 'Inter', system-ui, sans-serif;
  padding: 0 0 6rem;
}

/* =========================================================
   TOPBAR FIXA
========================================================= */

.cine-topbar {
  position: sticky;
  top: 0;
  z-index: 30;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.5rem 2.5rem;

  background: linear-gradient(
    180deg,
    rgba(14, 14, 12, 0.92) 0%,
    rgba(14, 14, 12, 0) 100%
  );

  pointer-events: none;
}

.cine-topbar-label {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.34em;
  text-transform: uppercase;
  color: #fafaf7;
}

.cine-topbar-count {
  display: inline-flex;
  align-items: baseline;
  gap: 0.35rem;
  font-family: 'Cormorant Garamond', 'Playfair Display', serif;
  font-size: 0.9rem;
  font-style: italic;
  letter-spacing: 0.05em;
  color: #9a9a95;
}

.cine-topbar-count strong {
  font-style: normal;
  font-size: 1.05rem;
  color: #b8e986;
}

/* =========================================================
   RAIL LATERAL FIXO
========================================================= */

.cine-rail {
  position: sticky;
  top: 50vh;
  left: 2rem;
  z-index: 20;

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.1rem;
  margin-left: 20px;
  transform: translateY(-50%);
  opacity: 1;
  visibility: visible;
  transition: opacity 0.2s ease, visibility 0.2s ease;
}

.cine-rail.is-hidden {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.cine-rail-item {
  position: relative;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  padding: 0;
  border: none;
  background: none;

  color: #6b6b66;

  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.2em;

  cursor: pointer;

  transition: color 0.35s ease;
}

.cine-rail-dot {
  display: block;

  width: 6px;
  height: 6px;

  border-radius: 50%;

  background: currentColor;

  transition: transform 0.35s ease, background 0.35s ease;
}

.cine-rail-label {
  opacity: 0;
  transform: translateX(-4px);
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.cine-rail-item:hover,
.cine-rail-item.is-active {
  color: #b8e986;
}

.cine-rail-item:hover .cine-rail-label,
.cine-rail-item.is-active .cine-rail-label {
  opacity: 1;
  transform: translateX(0);
}

.cine-rail-item.is-active .cine-rail-dot {
  transform: scale(1.8);
  box-shadow: 0 0 0 4px rgba(184, 233, 134, 0.15);
}

/* Barra de progresso vertical */
.cine-rail-progress {
  position: absolute;

  top: 0;
  left: 50%;

  width: 1px;
  height: 100%;

  background: #b8e986;

  transform-origin: top center;

  transform: scaleY(0);

  opacity: 0.3;

  transition: transform 0.15s linear;

  pointer-events: none;
}

/* =========================================================
   STAGE
========================================================= */

.cine-stage {
  display: flex;
  flex-direction: column;
  gap: 0;
}

/* =========================================================
   SCENE — cada projecto ocupa 100vh
========================================================= */

.cine-scene {
  position: relative;

  display: flex;
  align-items: flex-end;

  width: 100%;
  height: 100vh;
  min-height: 640px;

  overflow: hidden;

  opacity: 0;
  transform: translateY(40px);

  transition:
    opacity 1s cubic-bezier(0.16, 1, 0.3, 1),
    transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.cine-scene.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Media */
.cine-scene-media {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.cine-scene-media-inner {
  position: absolute;
  inset: -6%;

  transition: transform 0.15s linear;

  will-change: transform;
}

.cine-scene-image {
  width: 100%;
  height: 100%;

  filter: grayscale(35%) brightness(0.82);

  transition: filter 1.4s ease;
}

.cine-scene.is-visible .cine-scene-image {
  filter: grayscale(15%) brightness(0.9);
}

.cine-scene:hover .cine-scene-image {
  filter: grayscale(0%) brightness(0.95);
}

.cine-scene-vignette {
  position: absolute;
  inset: 0;

  background:
    linear-gradient(
      180deg,
      rgba(14, 14, 12, 0.55) 0%,
      rgba(14, 14, 12, 0.1) 30%,
      rgba(14, 14, 12, 0.55) 70%,
      rgba(14, 14, 12, 0.95) 100%
    ),
    linear-gradient(
      90deg,
      rgba(14, 14, 12, 0.75) 0%,
      transparent 50%
    );

  pointer-events: none;
}

/* =========================================================
   CONTEÚDO SOBREPOSTO
========================================================= */

.cine-scene-content {
  position: relative;
  z-index: 5;

  width: 100%;
  max-width: 1360px;

  margin: 0 auto;

  padding: 0 2.5rem 5rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.cine-scene-meta {
  display: flex;
  align-items: center;
  gap: 1rem;

  opacity: 0;
  transform: translateY(16px);

  transition:
    opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.15s,
    transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.15s;
}

.cine-scene.is-visible .cine-scene-meta {
  opacity: 1;
  transform: translateY(0);
}

.cine-scene-number {
  font-family: 'Cormorant Garamond', 'Playfair Display', serif;
  font-size: 1rem;
  font-style: italic;
  color: #b8e986;
  letter-spacing: 0.05em;
}

.cine-scene-rule {
  flex: 0 0 56px;
  height: 1px;
  background: rgba(250, 250, 247, 0.35);
}

.cine-scene-category {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.34em;
  text-transform: uppercase;
  color: #fafaf7;
}

/* Título gigante com clip-path */
.cine-scene-title {
  margin: 0;

  font-family: 'Cormorant Garamond', 'Playfair Display', serif;
  font-size: clamp(3rem, 8vw, 7rem);
  font-weight: 400;
  line-height: 0.98;
  letter-spacing: -0.025em;

  color: #fafaf7;

  max-width: 18ch;
}

.cine-scene-title-line {
  display: inline-block;

  clip-path: inset(0 100% 0 0);

  transition: clip-path 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.25s;
}

.cine-scene.is-visible .cine-scene-title-line {
  clip-path: inset(0 0 0 0);
}

.cine-scene-subtitle {
  margin: 0;

  max-width: 48ch;

  font-size: 0.95rem;
  line-height: 1.6;

  color: rgba(250, 250, 247, 0.78);

  opacity: 0;
  transform: translateY(16px);

  transition:
    opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.5s,
    transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.5s;
}

.cine-scene.is-visible .cine-scene-subtitle {
  opacity: 1;
  transform: translateY(0);
}

/* Footer do scene */
.cine-scene-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;

  margin-top: 1.5rem;
  padding-top: 2rem;

  border-top: 1px solid rgba(250, 250, 247, 0.14);

  opacity: 0;
  transform: translateY(16px);

  transition:
    opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.7s,
    transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.7s;
}

.cine-scene.is-visible .cine-scene-footer {
  opacity: 1;
  transform: translateY(0);
}

.cine-scene-facts {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;

  margin: 0;
}

.cine-scene-facts > div {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.cine-scene-facts dt {
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: rgba(250, 250, 247, 0.5);
}

.cine-scene-facts dd {
  margin: 0;
  font-size: 0.85rem;
  font-weight: 600;
  color: #fafaf7;
}

/* Link */
.cine-scene-link {
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;

  padding: 0;
  border: none;
  background: none;

  color: #b8e986;

  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.26em;
  text-transform: uppercase;

  cursor: pointer;
}

.cine-scene-link-line {
  display: block;

  width: 32px;
  height: 1px;

  background: #b8e986;

  transition: width 0.55s cubic-bezier(0.16, 1, 0.3, 1);
}

.cine-scene-link:hover .cine-scene-link-line {
  width: 72px;
}

/* =========================================================
   FOOTER
========================================================= */

.cine-footer {
  max-width: 1360px;

  margin: 6rem auto 0;

  padding: 3rem 2.5rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid rgba(250, 250, 247, 0.1);
}

.cine-footer-mark {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem;
  color: #b8e986;
}

.cine-footer-link {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;

  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.26em;
  text-transform: uppercase;

  color: #fafaf7;
  text-decoration: none;

  transition: color 0.3s ease;
}

.cine-footer-arrow {
  transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}

.cine-footer-link:hover {
  color: #b8e986;
}

.cine-footer-link:hover .cine-footer-arrow {
  transform: translateX(10px);
}

/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 900px) {
  .cine-topbar {
    padding: 1.25rem 1.25rem;
  }

  .cine-rail {
    display: none;
  }

  .cine-scene {
    height: auto;
    min-height: 100vh;
    padding: 6rem 0 3rem;
  }

  .cine-scene-content {
    padding: 0 1.25rem 2rem;
  }

  .cine-scene-title {
    font-size: clamp(2.25rem, 9vw, 3.5rem);
  }

  .cine-scene-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }

  .cine-scene-facts {
    gap: 1.5rem;
  }

  .cine-footer {
    padding: 2rem 1.25rem 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
}

/* =========================================================
   REDUZIR MOVIMENTO
========================================================= */

@media (prefers-reduced-motion: reduce) {
  .cine-scene,
  .cine-scene-meta,
  .cine-scene-subtitle,
  .cine-scene-footer,
  .cine-scene-title-line,
  .cine-scene-media-inner,
  .cine-scene-link-line,
  .cine-footer-arrow {
    transition: none !important;
    transform: none !important;
    clip-path: none !important;
    opacity: 1 !important;
  }
}
</style>