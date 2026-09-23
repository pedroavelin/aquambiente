<template>
  <section id="projects" class="projects-section">
    <!-- ================= HERO ================= -->
    <section class="projects-hero">
      <div class="hero-overlay" />
      <div class="hero-grain" />

      <div class="hero-content">
        <div class="hero-inner">
          <div class="hero-breadcrumb">
            <span>Início</span>
            <v-icon icon="mdi-chevron-right" size="14" />
            <span class="is-active">Projectos</span>
          </div>

          <div class="hero-kicker-row">
            <span class="hero-line" />
            <p class="hero-kicker">Projectos</p>
          </div>

          <h1 class="hero-title">
            Ideias que geram
            <span>impacto real.</span>
          </h1>

          <p class="hero-description">
            Conheça os projectos que apoiamos em monitorização ambiental,
            gestão de resíduos e soluções sustentáveis.
          </p>
        </div>
      </div>

      <div class="hero-scroll">
        <span>Explorar</span>
        <span class="hero-scroll-line" />
      </div>
    </section>

    <!-- ================= CONTEÚDO ================= -->
    <v-container class="projects-shell">
      <!-- Header -->
      <header class="section-heading">
        <div class="heading-row">
          <div class="heading-left">
            <span class="section-eyebrow">Portefólio</span>
            <h2 class="section-header">
              Projectos em
              <em>destaque.</em>
            </h2>
          </div>

          <p class="section-subtitle">
            Uma selecção de iniciativas desenvolvidas nas áreas de
            monitorização, ambiente e sustentabilidade — do diagnóstico
            à implementação.
          </p>
        </div>

        <div class="section-stats">
          <div class="stat">
            <strong>{{ String(projects.length).padStart(2, '0') }}</strong>
            <span>Projectos</span>
          </div>
          <div class="stat-divider" />
          <div class="stat">
            <strong>08</strong>
            <span>Áreas técnicas</span>
          </div>
          <div class="stat-divider" />
          <div class="stat">
            <strong>100%</strong>
            <span>Impacto local</span>
          </div>
        </div>
      </header>

      <!-- ================= FEATURED + LISTA ================= -->
      <div class="showcase">
        <!-- Projecto em destaque -->
        <article class="featured">
          <div class="featured-media">
            <transition name="fade-slide" mode="out-in">
              <v-img
                :key="activeProject.id"
                :src="activeProject.image"
                :alt="activeProject.title"
                cover
                class="featured-image"
                eager
              />
            </transition>

            <div class="featured-gradient" />

            <span class="featured-number">
              {{ String(activeProject.id).padStart(2, '0') }}
              <em>/ {{ String(projects.length).padStart(2, '0') }}</em>
            </span>

            <div class="featured-tags">
              <span
                v-for="tag in activeProject.tags"
                :key="tag"
                class="featured-tag"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <div class="featured-body">
            <transition name="fade-slide" mode="out-in">
              <div :key="activeProject.id" class="featured-copy">
                <span class="featured-kicker">Projecto em destaque</span>

                <h3 class="featured-title">
                  {{ activeProject.title }}
                </h3>

                <p class="featured-description">
                  {{ activeProject.description }}
                </p>
              </div>
            </transition>

            <a href="#" class="featured-cta" @click.prevent>
              <span>Ver projecto completo</span>
              <v-icon icon="mdi-arrow-right" size="16" />
            </a>

            <div class="featured-progress">
              <span
                class="featured-progress-bar"
                :style="{ width: `${((activeIndex + 1) / projects.length) * 100}%` }"
              />
            </div>
          </div>
        </article>

        <!-- Lista interactiva de projectos (com scroll) -->
        <aside class="project-list" role="tablist" aria-label="Lista de projectos">
          <div class="project-list-header">
            <span>Todos os projectos</span>
            <span class="project-list-count">
              {{ String(activeIndex + 1).padStart(2, '0') }} —
              {{ String(projects.length).padStart(2, '0') }}
            </span>
          </div>

          <div class="project-list-scroll">
            <ul class="project-list-items">
              <li
                v-for="(project, index) in projects"
                :key="project.id"
                class="project-list-item"
                :class="{ 'is-active': index === activeIndex }"
                :style="{ '--delay': `${index * 40}ms` }"
              >
                <button
                  type="button"
                  role="tab"
                  :aria-selected="index === activeIndex"
                  :aria-controls="`project-${project.id}`"
                  class="project-list-btn"
                  @click="setActiveProject(index)"
                  @keydown.enter.prevent="setActiveProject(index)"
                  @keydown.space.prevent="setActiveProject(index)"
                >
                  <span class="item-index">
                    {{ String(project.id).padStart(2, '0') }}
                  </span>

                  <span class="item-thumb">
                    <v-img
                      :src="project.image"
                      :alt="project.title"
                      cover
                      class="item-thumb-img"
                    />
                  </span>

                  <span class="item-copy">
                    <strong>{{ project.title }}</strong>
                    <em>{{ project.description }}</em>
                  </span>

                  <span class="item-arrow">
                    <v-icon icon="mdi-arrow-right" size="16" />
                  </span>
                </button>
              </li>
            </ul>
          </div>

          <div class="project-list-hint">
            <v-icon icon="mdi-mouse-scroll-wheel" size="14" />
            <span>Deslize para ver mais</span>
          </div>
        </aside>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

import project1 from '@/assets/projectos/1.jpeg'
import project2 from '@/assets/projectos/2.jpeg'
import project3 from '@/assets/projectos/3.jpeg'
import project4 from '@/assets/projectos/4.jpeg'
import project5 from '@/assets/projectos/5.jpeg'
import project6 from '@/assets/projectos/6.jpeg'
import project7 from '@/assets/projectos/7.jpeg'
import project8 from '@/assets/projectos/8.jpeg'

const projects = [
  {
    id: 1,
    title: 'Monitorização Ambiental',
    description: 'Porto do Soyo.',
    image: project1,
    tags: ['Auditoria', 'Conformidade', 'Relatório'],
  },
  {
    id: 2,
    title: 'Estudo de Impacte Ambiental',
    description: 'Projecto mineiro.',
    image: project2,
    tags: ['Reciclagem', 'Resíduos', 'Sustentabilidade'],
  },
  {
    id: 3,
    title: 'Monitorização Ambiental Contínua',
    description: 'Município de Viana.',
    image: project3,
    tags: ['Monitorização', 'Qualidade', 'Relatórios'],
  },
  {
    id: 4,
    title: 'Laboratório Ambiental',
    description: 'Análise físico-química.',
    image: project4,
    tags: ['Conformidade', 'Regulamentação', 'Consultoria'],
  },
  {
    id: 5,
    title: 'Gestão de Resíduos Urbanos',
    description: 'Plano de recolha e valorização em cidade.',
    image: project5,
    tags: ['Resíduos', 'Logística', 'Sustentabilidade'],
  },
  {
    id: 6,
    title: 'Avaliação de Impacte Ambiental',
    description: 'Estudo para implementação de nova infraestrutura.',
    image: project6,
    tags: ['Impacte', 'Planeamento', 'Consultoria'],
  },
  {
    id: 7,
    title: 'Monitorização de Qualidade do Ar',
    description: 'Análise contínua para zonas industriais.',
    image: project7,
    tags: ['Ar', 'Monitorização', 'Tecnologia'],
  },
  {
    id: 8,
    title: 'Formação Ambiental',
    description: 'Programas para equipas e comunidades locais.',
    image: project8,
    tags: ['Formação', 'Comunidades', 'Educação'],
  },
]

const activeIndex = ref(0)
const isPaused = ref(false)

let autoplayTimer = null

const activeProject = computed(() => projects[activeIndex.value])

const setActiveProject = (index) => {
  if (index === activeIndex.value) return
  activeIndex.value = index
  restartAutoPlay()
}

const nextProject = () => {
  activeIndex.value = (activeIndex.value + 1) % projects.length
}

const startAutoPlay = () => {
  stopAutoPlay()
  autoplayTimer = setInterval(() => {
    if (!isPaused.value) nextProject()
  }, 5500)
}

const stopAutoPlay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

const restartAutoPlay = () => {
  stopAutoPlay()
  startAutoPlay()
}

const pauseAutoPlay = () => { isPaused.value = true }
const resumeAutoPlay = () => { isPaused.value = false }

onMounted(() => {
  startAutoPlay()
})

onBeforeUnmount(() => {
  stopAutoPlay()
})
</script>

<style scoped>
/* =========================================================
   BASE
========================================================= */
.projects-section {
  --ink: #0d3b5c;
  --ink-soft: #1a4a6b;
  --muted: #667085;
  --green: #1a7b3c;
  --green-bright: #52d094;
  --line: rgba(13, 59, 92, 0.08);
  --bg: #f7faf8;

  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 8% 12%, rgba(26, 123, 60, 0.06), transparent 32%),
    radial-gradient(circle at 92% 85%, rgba(26, 123, 60, 0.05), transparent 40%),
    linear-gradient(180deg, #f7faf8 0%, #eef5f0 100%);
  -webkit-font-smoothing: antialiased;
}
/* =========================================================
   HERO
========================================================= */
.projects-hero {
  position: relative;
  height: 235px;
  min-height: 235px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-image: url('@/assets/projectos/hero-projectos.jpeg');
  background-size: cover;
  background-position: center 55%;
  isolation: isolate;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    radial-gradient(120% 90% at 85% 15%, rgba(26, 123, 60, 0.3), transparent 55%),
    linear-gradient(
      100deg,
      rgba(4, 24, 37, 0.96) 0%,
      rgba(4, 24, 37, 0.82) 45%,
      rgba(4, 24, 37, 0.42) 100%
    );
}

.hero-grain {
  position: absolute;
  inset: 0;
  z-index: 2;
  opacity: 0.08;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

.hero-content {
  position: relative;
  z-index: 3;
  width: 100%;
}

.hero-inner {
  width: min(1240px, calc(100% - 48px));
  margin: 0 auto;
}

.hero-breadcrumb {
  display: flex;
  align-items: center;
  gap: 7px;
  margin-bottom: 8px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.66rem;
  font-weight: 500;
}

.hero-breadcrumb .is-active { color: #fff; }

.hero-kicker-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
}

.hero-line {
  width: 34px;
  height: 1.5px;
  background: var(--green-bright);
  border-radius: 4px;
}

.hero-kicker {
  margin: 0;
  color: var(--green-bright);
  font-size: 0.58rem;
  font-weight: 800;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.hero-title {
  max-width: 720px;
  margin: 0;
  color: #fff;
  font-size: clamp(1rem, 4.6vw, 2.5rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.035em;
}

.hero-title span { color: #7fe6b1; }

.hero-description {
  max-width: 560px;
  margin: 7px 0 0;
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.73rem;
  line-height: 1.45;
}

.hero-scroll {
  position: absolute;
  right: 35px;
  bottom: 18px;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.58rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.hero-scroll-line {
  display: block;
  width: 42px;
  height: 1px;
  background: rgba(255, 255, 255, 0.35);
  animation: scrollPulse 2.4s ease-in-out infinite;
}

@keyframes scrollPulse {
  0%, 100% { transform: scaleX(1); opacity: 0.5; }
  50% { transform: scaleX(1.35); opacity: 1; }
}

/* =========================================================
   SHELL
========================================================= */
.projects-shell {
  max-width: 1280px !important;
  padding: 90px 24px 110px !important;
}

/* =========================================================
   HEADER
========================================================= */
.section-heading {
  margin-bottom: 3.5rem;
}

.heading-row {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 60px;
  align-items: end;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid var(--line);
}

.section-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  margin-bottom: 0.75rem;
  color: var(--green);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

.section-eyebrow::before {
  content: '';
  width: 26px;
  height: 1px;
  background: var(--green);
  opacity: 0.55;
}

.section-header {
  margin: 0;
  color: var(--ink);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.04em;
}

.section-header em {
  color: var(--green);
  font-style: normal;
  font-weight: 800;
}

.section-subtitle {
  margin: 0;
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.75;
}

.section-stats {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.stat strong {
  color: var(--ink);
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: -0.03em;
}

.stat span {
  color: var(--muted);
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 600;
}

.stat-divider {
  width: 1px;
  height: 30px;
  background: var(--line);
}

/* =========================================================
   SHOWCASE (featured + lista)
========================================================= */
.showcase {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 28px;
  align-items: stretch;
  /* Altura unificada para featured e lista */
  height: 540px;
}

/* ---------- Featured (mais compacto) ---------- */
.featured {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 22px;
  background: #0b2b3f;
  height: 100%;
  box-shadow:
    0 25px 50px -25px rgba(13, 59, 92, 0.32),
    0 8px 20px -8px rgba(13, 59, 92, 0.14);
  animation: featuredRise 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
}

@keyframes featuredRise {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}

.featured-media {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.featured-image {
  width: 100%;
  height: 100%;
}

.featured-gradient {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      180deg,
      rgba(5, 31, 47, 0.1) 0%,
      rgba(5, 31, 47, 0.35) 45%,
      rgba(5, 31, 47, 0.95) 100%
    );
}

.featured-number {
  position: absolute;
  top: 22px;
  left: 24px;
  z-index: 2;
  color: #fff;
  font-size: 0.95rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
}

.featured-number em {
  color: rgba(255, 255, 255, 0.55);
  font-style: normal;
  font-weight: 600;
  font-size: 0.78rem;
}

.featured-tags {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  max-width: 60%;
  justify-content: flex-end;
}

.featured-tag {
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.22);
  color: #fff;
  font-size: 0.58rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  backdrop-filter: blur(10px);
}

.featured-body {
  position: relative;
  z-index: 2;
  margin-top: auto;
  padding: 30px 30px 26px;
  color: #fff;
}

.featured-kicker {
  display: inline-block;
  margin-bottom: 10px;
  color: #7fe6b1;
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

.featured-title {
  margin: 0 0 10px;
  font-size: clamp(1.35rem, 2.1vw, 1.85rem);
  font-weight: 800;
  line-height: 1.12;
  letter-spacing: -0.03em;
}

.featured-description {
  max-width: 480px;
  margin: 0 0 18px;
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.86rem;
  line-height: 1.6;
}

.featured-cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 11px 20px;
  border-radius: 999px;
  background: #7fe6b1;
  color: #041826;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  transition:
    gap 0.35s ease,
    background 0.35s ease,
    transform 0.35s ease;
}

.featured-cta:hover {
  gap: 16px;
  background: #a4f0c7;
  transform: translateY(-2px);
}

.featured-progress {
  position: relative;
  height: 3px;
  margin-top: 22px;
  overflow: hidden;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.15);
}

.featured-progress-bar {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #52d094, #a4f0c7);
  transition: width 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

/* ---------- Lista com scroll ---------- */
.project-list {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 22px 22px 0;
  border-radius: 22px;
  background: #fff;
  border: 1px solid var(--line);
  box-shadow: 0 20px 40px -25px rgba(13, 59, 92, 0.18);
  animation: featuredRise 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.1s both;
  overflow: hidden;
}

.project-list-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 14px;
  margin-bottom: 6px;
  border-bottom: 1px solid var(--line);
  color: var(--muted);
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  flex-shrink: 0;
}

.project-list-count {
  color: var(--green);
  font-variant-numeric: tabular-nums;
}

/* Wrapper com scroll */
.project-list-scroll {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 8px;
  margin-right: -8px;
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: rgba(26, 123, 60, 0.3) transparent;

  /* Máscaras suaves topo/base */
  mask-image: linear-gradient(
    180deg,
    transparent 0,
    #000 12px,
    #000 calc(100% - 12px),
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    180deg,
    transparent 0,
    #000 12px,
    #000 calc(100% - 12px),
    transparent 100%
  );
}

/* Scrollbar WebKit */
.project-list-scroll::-webkit-scrollbar {
  width: 6px;
}

.project-list-scroll::-webkit-scrollbar-track {
  background: transparent;
}

.project-list-scroll::-webkit-scrollbar-thumb {
  background: rgba(26, 123, 60, 0.25);
  border-radius: 999px;
  transition: background 0.3s ease;
}

.project-list-scroll::-webkit-scrollbar-thumb:hover {
  background: rgba(26, 123, 60, 0.5);
}

.project-list-items {
  list-style: none;
  padding: 6px 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.project-list-item {
  opacity: 0;
  transform: translateX(-12px);
  animation: itemIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: calc(200ms + var(--delay, 0ms));
}

@keyframes itemIn {
  to { opacity: 1; transform: translateX(0); }
}

.project-list-btn {
  display: grid;
  grid-template-columns: 26px 48px 1fr 22px;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 10px 10px;
  border: none;
  background: transparent;
  border-radius: 12px;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  transition:
    background 0.35s ease,
    transform 0.35s ease;
}

.project-list-btn:hover {
  background: rgba(26, 123, 60, 0.06);
  transform: translateX(2px);
}

.project-list-item.is-active .project-list-btn {
  background: linear-gradient(
    90deg,
    rgba(26, 123, 60, 0.09) 0%,
    rgba(26, 123, 60, 0.02) 100%
  );
}

.item-index {
  color: #98a2b3;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  font-variant-numeric: tabular-nums;
  transition: color 0.35s ease;
}

.project-list-item.is-active .item-index {
  color: var(--green);
}

.item-thumb {
  position: relative;
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 10px;
  overflow: hidden;
  background: #dfe8e2;
  flex-shrink: 0;
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.project-list-item.is-active .item-thumb {
  transform: scale(1.08);
}

.item-thumb-img {
  width: 100%;
  height: 100%;
  filter: grayscale(0.35);
  transition: filter 0.4s ease;
}

.project-list-item.is-active .item-thumb-img,
.project-list-btn:hover .item-thumb-img {
  filter: grayscale(0);
}

.item-copy {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.item-copy strong {
  color: var(--ink);
  font-size: 0.84rem;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: -0.01em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item-copy em {
  color: var(--muted);
  font-style: normal;
  font-size: 0.7rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cbd5e1;
  transition:
    color 0.35s ease,
    transform 0.35s ease;
}

.project-list-item.is-active .item-arrow {
  color: var(--green);
  transform: translateX(4px);
}

.project-list-btn:hover .item-arrow {
  color: var(--green);
  transform: translateX(4px);
}

/* Hint no fundo da lista */
.project-list-hint {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 0 12px;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  flex-shrink: 0;
  pointer-events: none;
}

/* =========================================================
   TRANSIÇÕES
========================================================= */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition:
    opacity 0.5s ease,
    transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(12px) scale(1.02);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px) scale(0.99);
}

/* =========================================================
   RESPONSIVO
========================================================= */
@media (max-width: 1100px) {
  .showcase {
    grid-template-columns: 1fr;
    height: auto;
  }

  .featured {
    height: 480px;
  }

  .project-list {
    height: auto;
    max-height: 520px;
    padding-bottom: 0;
  }

  .project-list-scroll {
    max-height: 400px;
  }
}

@media (max-width: 960px) {
  .projects-shell {
    padding: 70px 20px 90px !important;
  }

  .heading-row {
    grid-template-columns: 1fr;
    gap: 24px;
    padding-bottom: 2rem;
  }

  .section-stats {
    gap: 1.6rem;
  }
}

@media (max-width: 780px) {
  .projects-hero {
    background-position: 62% center;
  }

  .hero-overlay {
    background: linear-gradient(
      180deg,
      rgba(5, 31, 47, 0.72),
      rgba(5, 31, 47, 0.94)
    );
  }

  .hero-inner { width: calc(100% - 32px); }
  .hero-scroll { display: none; }

  .featured-body {
    padding: 26px 22px 22px;
  }

  .featured-tags {
    max-width: 90%;
    position: static;
    padding: 20px 22px 0;
    justify-content: flex-start;
  }

  .featured-number {
    position: static;
    display: inline-block;
    padding: 20px 0 0 22px;
  }
}

@media (max-width: 600px) {
  .projects-shell {
    padding: 60px 16px 80px !important;
  }

  .section-stats {
    gap: 1rem;
  }

  .stat-divider { display: none; }

  .featured {
    height: 420px;
  }

  .featured-title {
    font-size: 1.4rem;
  }

  .featured-description {
    font-size: 0.82rem;
  }

  .featured-cta {
    padding: 10px 18px;
    font-size: 0.68rem;
  }

  .project-list {
    padding: 18px 14px 0;
    max-height: 460px;
  }

  .project-list-scroll {
    max-height: 340px;
  }

  .project-list-btn {
    grid-template-columns: 22px 44px 1fr 18px;
    gap: 10px;
    padding: 9px 8px;
  }

  .item-thumb {
    width: 44px;
    height: 44px;
  }

  .item-copy strong { font-size: 0.78rem; }
  .item-copy em { font-size: 0.66rem; }
}

/* =========================================================
   ACESSIBILIDADE
========================================================= */
@media (prefers-reduced-motion: reduce) {
  .featured,
  .project-list,
  .project-list-item,
  .featured-cta,
  .project-list-btn,
  .item-thumb,
  .item-arrow,
  .hero-scroll-line,
  .fade-slide-enter-active,
  .fade-slide-leave-active,
  .project-list-scroll {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }

  .project-list-item {
    opacity: 1;
    transform: none;
  }
}
</style>