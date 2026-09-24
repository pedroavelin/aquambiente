<template>
  <div class="services-page">
    <!-- ===================== HERO ===================== -->
    <section class="services-hero">
      <div class="hero-overlay" aria-hidden="true" />

      <div class="hero-content">
        <div class="hero-inner">
          <div class="hero-breadcrumb">
            <span>Início</span>
            <v-icon icon="mdi-chevron-right" size="16" />
            <span class="is-active">Serviços</span>
          </div>

          <div class="hero-kicker-row">
            <span class="hero-line" aria-hidden="true" />
            <p class="hero-kicker">SERVIÇOS</p>
          </div>

          <h1 class="hero-title">
            Soluções ambientais com
            <em>visão de futuro</em>
          </h1>

          <p class="hero-description">
            A Aquambiente combina experiência técnica, rigor regulatório e execução prática para
            entregar resultados sustentáveis e confiáveis.
          </p>
        </div>
      </div>

      <div class="hero-scroll">
        <span>Explorar</span>
        <span class="hero-scroll-line" aria-hidden="true" />
      </div>
    </section>

    <!-- ===================== HIGHLIGHTS ===================== -->
    <section class="services-highlights">
      <v-container>
        <header class="highlights-heading" v-reveal>
          <div class="highlights-heading__row">
            <div class="highlights-heading__title">
              <span class="highlights-eyebrow">Serviços</span>
              <h2>
                Serviços em
                <em>destaque.</em>
              </h2>
            </div>

            <p class="highlights-subtitle">
              Uma abordagem técnica e prática para apoiar decisões, reduzir riscos e construir
              resultados ambientais consistentes.
            </p>
          </div>
        </header>

        <v-row>
          <v-col
            v-for="(highlight, i) in highlights"
            :key="highlight.title"
            cols="12"
            md="4"
            v-reveal="{ delay: i * 120 }"
          >
            <div class="highlight-card">
              <div class="highlight-card__border" aria-hidden="true"></div>
              <div class="highlight-icon">
                <v-icon :icon="highlight.icon" color="green-accent-4" size="30" />
              </div>
              <h3>{{ highlight.title }}</h3>
              <p>{{ highlight.text }}</p>
              <span class="highlight-card__index">0{{ i + 1 }}</span>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- ===================== BROWSE ===================== -->
    <section class="service-browse">
      <v-container>
        <div class="section-header" v-reveal>
          <p class="section-kicker">ÁREAS DE INTERVENÇÃO</p>
          <h2>Escolha a solução que melhor responde ao seu desafio</h2>
          <p class="section-sub">
            Filtre por área e explore as frentes em que atuamos com profundidade técnica.
          </p>
        </div>

        <div class="filter-bar" role="tablist" v-reveal="{ delay: 100 }">
          <button
            v-for="category in categories"
            :key="category"
            type="button"
            role="tab"
            :aria-selected="selectedCategory === category"
            class="filter-btn"
            :class="{ 'filter-btn--active': selectedCategory === category }"
            @click="selectCategory(category)"
          >
            {{ category }}
            <span class="filter-btn__count">
              {{ countByCategory(category) }}
            </span>
          </button>
        </div>

        <TransitionGroup name="card" tag="div" class="service-grid">
          <article
            v-for="service in filteredServices"
            :key="service.title"
            class="service-panel"
            :class="{ 'service-panel--featured': service.featured }"
            @mousemove="onTilt($event)"
            @mouseleave="resetTilt"
          >
            <div class="service-panel__border" aria-hidden="true"></div>

            <div class="service-panel__header">
              <div class="service-panel__icon">
                <v-icon :icon="service.icon" color="white" />
              </div>
              <span>{{ service.category }}</span>
            </div>

            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>

            <ul>
              <li v-for="item in service.points" :key="item">
                <v-icon icon="mdi-arrow-right-thin" size="16" />
                {{ item }}
              </li>
            </ul>

            <div class="service-panel__footer">
              <span class="delivery">
                <v-icon icon="mdi-clock-outline" size="14" />
                {{ service.delivery }}
              </span>
            </div>
          </article>
        </TransitionGroup>
      </v-container>
    </section>

    <!-- ===================== CTA ===================== -->
    <section class="cta-strip">
      <v-container>
        <div class="cta-strip__content" v-reveal>
          <div class="cta-strip__glow" aria-hidden="true"></div>
          <div class="cta-strip__text">
            <p class="cta-strip__eyebrow">PARCERIA E CONFIANÇA</p>
            <h3>Precisando de um diagnóstico ambiental completo e executado com rigor?</h3>
          </div>
          <v-btn color="white" class="cta-strip__button" rounded size="large" to="/contactos">
            Falar com a equipa
            <v-icon end icon="mdi-arrow-right" />
          </v-btn>
        </div>
      </v-container>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

/* ---------- Reveal on scroll (directive local) ---------- */
const vReveal = {
  mounted(el: HTMLElement, binding: { value?: { delay?: number } }) {
    el.classList.add('reveal')
    const delay = binding.value?.delay ?? 0
    el.style.transitionDelay = `${delay}ms`

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('reveal--in')
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.15 },
    )
    io.observe(el)
  },
}

/* ---------- Dados ---------- */
const categories = [
  'Todos',
  'Consultoria',
  'Resíduos',
  'Monitorização',
  'Licenciamento',
  'Segurança',
  'Formação',
] as const

type Category = (typeof categories)[number]
const selectedCategory = ref<Category>('Todos')

const summaryItems = [
  'Licenciamento e conformidade regulatória',
  'Monitorização ambiental e relatórios',
  'Gestão de resíduos e sustentabilidade',
  'Formação e apoio à decisão',
]

const highlights = [
  {
    title: 'Diagnóstico preciso',
    text: 'Mapeamos riscos e oportunidades com base em dados, legislação e contexto operacional.',
    icon: 'mdi-magnify',
  },
  {
    title: 'Implementação clara',
    text: 'Transformamos planos em ações práticas, com acompanhamento focado em resultados.',
    icon: 'mdi-cogs',
  },
  {
    title: 'Acompanhamento contínuo',
    text: 'Apoiamos a evolução dos indicadores e a conformidade em cada etapa do projeto.',
    icon: 'mdi-chart-line',
  },
]

const services = [
  {
    title: 'Consultoria Ambiental',
    category: 'Consultoria' as Category,
    featured: true,
    icon: 'mdi-leaf',
    delivery: 'Diagnóstico + plano de ação',
    description:
      'Estratégias personalizadas para licenciamento, estudos e apoio à tomada de decisão sustentável.',
    points: ['Avaliação ambiental', 'Planeamento estratégico', 'Recomendações operacionais'],
  },
  {
    title: 'Gestão de Resíduos',
    category: 'Resíduos' as Category,
    featured: false,
    icon: 'mdi-recycle',
    delivery: 'Fluxos + otimização',
    description:
      'Apoio à segregação, triagem, redução e monitorização dos fluxos de resíduos e materiais.',
    points: ['Inventário de resíduos', 'Plano de redução', 'Acompanhamento de recolha'],
  },
  {
    title: 'Monitorização Ambiental',
    category: 'Monitorização' as Category,
    featured: true,
    icon: 'mdi-eye-check',
    delivery: 'Relatórios periódicos',
    description:
      'Acompanhamento contínuo de indicadores ambientais para reforçar controlo e desempenho.',
    points: ['Coleta de dados', 'Indicadores e relatórios', 'Risco e conformidade'],
  },
  {
    title: 'Licenciamento',
    category: 'Licenciamento' as Category,
    featured: false,
    icon: 'mdi-file-document-check',
    delivery: 'Conformidade regulatória',
    description: 'Suporte técnico e documental para processos junto às autoridades competentes.',
    points: ['Documentação ambiental', 'Tramitação', 'Suporte técnico'],
  },
  {
    title: 'Higiene e Segurança',
    category: 'Segurança' as Category,
    featured: false,
    icon: 'mdi-shield-check',
    delivery: 'Programas de prevenção',
    description:
      'Soluções orientadas para ambientes mais seguros, saudáveis e conformes à legislação.',
    points: ['Avaliação de riscos', 'Boas práticas', 'Mitigação de impactos'],
  },
  {
    title: 'Formação',
    category: 'Formação' as Category,
    featured: true,
    icon: 'mdi-book-open-variant',
    delivery: 'Sessões práticas',
    description:
      'Treinos e workshops de sensibilização para reforçar competências e boas práticas.',
    points: ['Capacitação técnica', 'Sensibilização', 'Ações de melhoria'],
  },
]

/* ---------- Computed ---------- */
const filteredServices = computed(() =>
  selectedCategory.value === 'Todos'
    ? services
    : services.filter((s) => s.category === selectedCategory.value),
)

const countByCategory = (cat: Category) =>
  cat === 'Todos' ? services.length : services.filter((s) => s.category === cat).length

/* ---------- Ações ---------- */
const selectCategory = (cat: Category) => {
  selectedCategory.value = cat
  // Scroll suave até a grelha ao trocar de filtro (opcional)
  if (typeof document !== 'undefined') {
    document.querySelector('.service-grid')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

/* ---------- Tilt 3D ---------- */
const onTilt = (e: MouseEvent) => {
  const el = e.currentTarget as HTMLElement
  const rect = el.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width - 0.5
  const y = (e.clientY - rect.top) / rect.height - 0.5
  el.style.setProperty('--rx', `${-y * 6}deg`)
  el.style.setProperty('--ry', `${x * 6}deg`)
  el.style.setProperty('--mx', `${(x + 0.5) * 100}%`)
  el.style.setProperty('--my', `${(y + 0.5) * 100}%`)
}
const resetTilt = (e: MouseEvent) => {
  const el = e.currentTarget as HTMLElement
  el.style.setProperty('--rx', '0deg')
  el.style.setProperty('--ry', '0deg')
}
</script>
<style lang="scss" scoped>
/* ===================== BASE ===================== */
.services-page {
  --brand-900: #0d3324;
  --brand-800: #123b2b;
  --brand-700: #1f5d4b;
  --brand-600: #2e7d32;
  --brand-500: #3fa356;
  --brand-300: #7dd696;
  --ink: #0f1e17;
  --muted: rgba(18, 59, 43, 0.72);

  background:
    radial-gradient(1200px 600px at 10% -10%, rgba(46, 125, 50, 0.08), transparent 60%),
    radial-gradient(900px 500px at 90% 20%, rgba(125, 214, 150, 0.12), transparent 60%),
    linear-gradient(180deg, #f5fbf6 0%, #ffffff 100%);
  color: var(--ink);
  font-family: 'Inter', sans-serif;
  overflow: hidden;
}

.services-page h1,
.services-page h2,
.services-page h3 {
  font-family: 'Manrope', sans-serif;
}

/* ===================== REVEAL ===================== */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.7s cubic-bezier(0.2, 0.7, 0.2, 1),
    transform 0.7s cubic-bezier(0.2, 0.7, 0.2, 1);
  will-change: opacity, transform;
}
.reveal--in {
  opacity: 1;
  transform: translateY(0);
}

/* ===================== HERO ===================== */
.services-hero {
  position: relative;
  display: flex;
  align-items: center;
  height: 235px;
  min-height: 235px;
  overflow: hidden;
  background-image: url('/src/assets/servicos/s1.png');
  background-size: 100% 100%;
  background-position: container;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(5, 31, 47, 0.92) 0%, rgba(5, 31, 47, 0.72) 50%, rgba(5, 31, 47, 0.35) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
}

.hero-inner {
  width: min(1200px, calc(100% - 48px));
  margin: 0 auto;
}

.hero-breadcrumb {
  display: flex;
  align-items: center;
  gap: 7px;
  margin-bottom: 8px;
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.66rem;
  font-weight: 500;
}

.hero-breadcrumb .is-active {
  color: #ffffff;
}

.hero-kicker-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 6px;
}

.hero-line {
  display: block;
  width: 34px;
  height: 1.5px;
  background: #52d094;
  border-radius: 4px;
}

.hero-container {
  position: relative;
  z-index: 2;
}

.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(46, 125, 50, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(46, 125, 50, 0.06) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(ellipse at 30% 20%, #000 40%, transparent 75%);
  pointer-events: none;
}

.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.5;
  pointer-events: none;
  animation: float 14s ease-in-out infinite;
}
.hero-orb--1 {
  width: 340px;
  height: 340px;
  background: radial-gradient(circle, rgba(63, 163, 86, 0.55), transparent 65%);
  top: -80px;
  left: -60px;
}
.hero-orb--2 {
  width: 420px;
  height: 420px;
  background: radial-gradient(circle, rgba(125, 214, 150, 0.5), transparent 65%);
  bottom: -140px;
  right: -80px;
  animation-delay: -6s;
}

@keyframes float {
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  50%      { transform: translate3d(20px, -24px, 0) scale(1.06); }
}

/* Kicker */
.hero-kicker,
.section-kicker,
.cta-strip__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin: 0;
  color: #52d094;
  font-size: 0.58rem;
  font-weight: 800;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}
.kicker-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--brand-500);
  box-shadow: 0 0 0 4px rgba(63, 163, 86, 0.2);
  animation: pulse 2.2s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 4px rgba(63, 163, 86, 0.2); }
  50%      { box-shadow: 0 0 0 8px rgba(63, 163, 86, 0.05); }
}

.hero-title {
  max-width: 720px;
  margin: 0;
  color: #ffffff;
  font-size: clamp(1rem, 4.4vw, 2.5rem);
  font-weight: 700;
  line-height: 1.06;
  letter-spacing: -0.035em;
}
.hero-title em {
  color: #7fe6b1;
  font-style: normal;
  font-weight: 700;
}

.hero-description {
  max-width: 580px;
  margin: 8px 0 0;
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.74rem;
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
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.58rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
}

.hero-scroll-line {
  display: block;
  width: 30px;
  height: 1px;
  background: rgba(255, 255, 255, 0.55);
}

/* Summary card */
.summary-card {
  position: relative;
  border: 1px solid rgba(46, 125, 50, 0.14);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  box-shadow:
    0 24px 48px rgba(35, 84, 59, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
  overflow: hidden;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.summary-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 32px 60px rgba(35, 84, 59, 0.14);
}
.summary-card__glow {
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  background: linear-gradient(120deg, rgba(46, 125, 50, 0.35), transparent 40%, rgba(125, 214, 150, 0.35));
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
  mask: linear-gradient(#000, #000) content-box, linear-gradient(#000, #000);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  padding: 1px;
}
.summary-card:hover .summary-card__glow { opacity: 1; }

.summary-card__header {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 1.1rem;
  color: var(--brand-800);
  font-weight: 800;
  letter-spacing: 0.01em;
}

.summary-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.summary-list li {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.55rem 0;
  color: rgba(18, 59, 43, 0.85);
  font-size: 0.98rem;
  border-bottom: 1px dashed rgba(46, 125, 50, 0.12);
  opacity: 0;
  transform: translateX(-8px);
  animation: slideIn 0.6s ease forwards;
  animation-delay: calc(var(--i) * 90ms + 300ms);
}
.summary-list li:last-child { border-bottom: none; }

@keyframes slideIn {
  to { opacity: 1; transform: translateX(0); }
}

/* ===================== HIGHLIGHTS ===================== */
.services-highlights {
  position: relative;
  padding: 4rem 0 2rem;
}

.services-highlights::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(46, 125, 50, 0.03), transparent 55%);
  pointer-events: none;
}

.highlights-heading {
  position: relative;
  margin-bottom: 3rem;
}

.highlights-heading__row {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 3.75rem;
  align-items: end;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid rgba(18, 59, 43, 0.12);
}

.highlights-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  margin-bottom: 0.75rem;
  color: var(--brand-600);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

.highlights-eyebrow::before {
  content: '';
  width: 26px;
  height: 1px;
  background: var(--brand-600);
  opacity: 0.55;
}

.highlights-heading h2 {
  margin: 0;
  color: var(--brand-900);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.04em;
}

.highlights-heading h2 em {
  color: var(--brand-600);
  font-style: normal;
  font-weight: 800;
}

.highlights-subtitle {
  margin: 0;
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.75;
}

.highlight-card {
  position: relative;
  height: 100%;
  padding: 2rem 1.7rem;
  border-radius: 24px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(247, 250, 248, 0.96));
  border: 1px solid rgba(18, 59, 43, 0.06);
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.05);
  transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
  overflow: hidden;
}
.highlight-card:hover {
  transform: translateY(-8px);
  border-color: rgba(46, 125, 50, 0.18);
  box-shadow: 0 28px 48px rgba(15, 23, 42, 0.1);
}
.highlight-card::before {
  content: '';
  position: absolute;
  inset: auto -15% -35% auto;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(46, 125, 50, 0.12), transparent 70%);
  pointer-events: none;
}
.highlight-card__border {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.5px;
  background: linear-gradient(120deg, transparent 35%, rgba(46, 125, 50, 0.72), transparent 65%);
  -webkit-mask: linear-gradient(#000, #000) content-box, linear-gradient(#000, #000);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#000, #000) content-box, linear-gradient(#000, #000);
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}
.highlight-card:hover .highlight-card__border { opacity: 1; }

.highlight-icon {
  position: relative;
  z-index: 1;
  display: inline-flex;
  width: 62px;
  height: 62px;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(46, 125, 50, 0.12), rgba(125, 214, 150, 0.18));
  margin-bottom: 1.1rem;
  transition: transform 0.4s cubic-bezier(0.2, 0.9, 0.2, 1.4), box-shadow 0.4s ease;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
}
.highlight-card:hover .highlight-icon {
  transform: rotate(-6deg) scale(1.08);
  box-shadow: 0 14px 28px rgba(46, 125, 50, 0.12);
}

.highlight-card h3 {
  position: relative;
  z-index: 1;
  margin: 0 0 0.55rem;
  color: var(--brand-800);
  font-size: 1.22rem;
  font-weight: 800;
  letter-spacing: -0.01em;
}
.highlight-card p {
  position: relative;
  z-index: 1;
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
  font-size: 0.98rem;
}
.highlight-card__index {
  position: absolute;
  top: 1.15rem;
  right: 1.3rem;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  color: rgba(46, 125, 50, 0.38);
}

/* ===================== SECTION HEADER ===================== */
.service-browse { padding: 3rem 0 4.5rem; }

.section-header {
  text-align: center;
  max-width: 760px;
  margin: 0 auto 2rem;
}
.section-header h2 {
  margin: 0;
  color: var(--brand-900);
  font-size: clamp(2rem, 3.2vw, 2.8rem);
  line-height: 1.15;
  font-weight: 900;
  letter-spacing: -0.035em;
  text-wrap: balance;
}
.section-sub {
  margin: 0.9rem auto 0;
  max-width: 560px;
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.75;
}

/* ===================== FILTER ===================== */
.filter-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.65rem;
  margin-top: 1.8rem;
}

.filter-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.1rem;
  border-radius: 999px;
  border: 1px solid rgba(18, 59, 43, 0.1);
  background: #fff;
  color: #1d4d3a;
  font-weight: 700;
  font-size: 0.88rem;
  letter-spacing: 0.01em;
  cursor: pointer;
  transition: transform 0.25s ease, background 0.25s ease, color 0.25s ease,
    border-color 0.25s ease, box-shadow 0.25s ease;
  position: relative;
  overflow: hidden;
}
.filter-btn:hover {
  transform: translateY(-2px);
  border-color: rgba(46, 125, 50, 0.4);
  box-shadow: 0 8px 18px rgba(46, 125, 50, 0.12);
}
.filter-btn--active {
  background: linear-gradient(135deg, #2e7d32, #3fa356);
  color: #fff !important;
  border-color: transparent;
  box-shadow: 0 14px 26px rgba(46, 125, 50, 0.3);
}
.filter-btn--active:hover {
  transform: translateY(-2px) scale(1.02);
}
.filter-btn__count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 22px;
  height: 20px;
  padding: 0 6px;
  border-radius: 999px;
  background: rgba(46, 125, 50, 0.12);
  color: #2e7d32;
  font-size: 0.7rem;
  font-weight: 800;
}
.filter-btn--active .filter-btn__count {
  background: rgba(255, 255, 255, 0.25);
  color: #fff;
}

/* ===================== SERVICE GRID ===================== */
.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.4rem;
  margin-top: 2.4rem;
  perspective: 1200px;
}

.service-panel {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.6rem 1.5rem;
  border-radius: 24px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(246, 250, 247, 0.96));
  border: 1px solid rgba(18, 59, 43, 0.08);
  box-shadow: 0 18px 36px rgba(17, 24, 39, 0.05);
  transform-style: preserve-3d;
  transform: rotateX(var(--rx, 0)) rotateY(var(--ry, 0));
  transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1),
    box-shadow 0.35s ease, border-color 0.35s ease;
  overflow: hidden;
  will-change: transform;
}
.service-panel::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    380px circle at var(--mx, 50%) var(--my, 50%),
    rgba(46, 125, 50, 0.12),
    transparent 45%
  );
  opacity: 0;
  transition: opacity 0.35s ease;
  pointer-events: none;
}
.service-panel:hover::before { opacity: 1; }
.service-panel:hover {
  border-color: rgba(46, 125, 50, 0.26);
  box-shadow: 0 28px 52px rgba(46, 125, 50, 0.12);
}
.service-panel__border {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.2px;
  background: linear-gradient(135deg, rgba(46, 125, 50, 0.35), transparent 45%, rgba(97, 211, 154, 0.42));
  -webkit-mask: linear-gradient(#000, #000) content-box, linear-gradient(#000, #000);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#000, #000) content-box, linear-gradient(#000, #000);
  mask-composite: exclude;
  pointer-events: none;
}

.service-panel--featured {
  border-color: rgba(46, 125, 50, 0.28);
  background: linear-gradient(180deg, rgba(240, 250, 243, 0.96), rgba(255, 255, 255, 0.98));
  box-shadow: 0 20px 42px rgba(46, 125, 50, 0.12);
}
.service-panel--featured::after {
  content: 'Destaque';
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #fff;
  background: linear-gradient(135deg, #2e7d32, #3fa356);
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  box-shadow: 0 10px 20px rgba(46, 125, 50, 0.25);
}

.service-panel__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 1.1rem;
}

.service-panel__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: linear-gradient(135deg, #2e7d32, #5abf73);
  box-shadow: 0 14px 26px rgba(46, 125, 50, 0.22);
  transition: transform 0.4s cubic-bezier(0.2, 0.9, 0.2, 1.4);
}
.service-panel:hover .service-panel__icon {
  transform: rotate(-8deg) scale(1.08);
}

.service-panel__header span {
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #2e7d32;
  background: rgba(46, 125, 50, 0.08);
  padding: 0.28rem 0.7rem;
  border-radius: 999px;
}

.service-panel h3 {
  margin: 0 0 0.7rem;
  color: var(--brand-900);
  font-size: 1.3rem;
  font-weight: 800;
  letter-spacing: -0.025em;
}
.service-panel p {
  margin: 0;
  color: var(--muted);
  line-height: 1.72;
  font-size: 0.95rem;
}

.service-panel ul {
  margin: 1rem 0 0;
  padding: 0;
  list-style: none;
}
.service-panel ul li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.32rem 0;
  color: rgba(18, 59, 43, 0.82);
  font-size: 0.93rem;
}
.service-panel ul li :deep(.v-icon) {
  color: #3fa356;
}

.service-panel__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.85rem;
  margin-top: auto;
  padding-top: 1.1rem;
  border-top: 1px dashed rgba(18, 59, 43, 0.12);
}
.delivery {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: #2e7d32;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.02em;
}
/* ===================== TRANSITION GROUP ===================== */
.card-enter-active,
.card-leave-active {
  transition: all 0.45s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.card-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.96);
}
.card-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.96);
}
.card-move {
  transition: transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1);
}

/* ===================== CTA ===================== */
.cta-strip { padding-bottom: 4.5rem; }

.cta-strip__content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.4rem;
  padding: 2.4rem 2.4rem;
  border-radius: 28px;
  background: linear-gradient(135deg, #0d3324 0%, #1f5d4b 55%, #2e7d32 100%);
  box-shadow: 0 26px 56px rgba(18, 59, 43, 0.28);
  color: #fff;
  overflow: hidden;
  isolation: isolate;
}
.cta-strip__content::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.12), transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(125, 214, 150, 0.18), transparent 45%);
  pointer-events: none;
}
.cta-strip__glow {
  position: absolute;
  top: -50%;
  left: -20%;
  width: 60%;
  height: 200%;
  background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.12), transparent);
  transform: rotate(20deg);
  animation: sweep 6s ease-in-out infinite;
  pointer-events: none;
}
@keyframes sweep {
  0%   { transform: translateX(-30%) rotate(20deg); }
  50%  { transform: translateX(60%) rotate(20deg); }
  100% { transform: translateX(-30%) rotate(20deg); }
}

.cta-strip__text { position: relative; z-index: 1; }
.cta-strip__eyebrow { color: #a7e6b8 !important; }
.cta-strip__content h3 {
  margin: 0;
  max-width: 720px;
  font-size: clamp(1.4rem, 2.2vw, 2.2rem);
  line-height: 1.3;
  font-weight: 800;
  letter-spacing: -0.01em;
}
.cta-strip__button {
  position: relative;
  z-index: 1;
  flex-shrink: 0;
  color: #123b2b !important;
  font-weight: 800;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.2);
}
.cta-strip__button:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 34px rgba(0, 0, 0, 0.28);
}

/* ===================== RESPONSIVE ===================== */
@media (max-width: 960px) {
  .highlights-heading__row {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  .cta-strip__content {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }
}
@media (max-width: 600px) {
  .service-grid { grid-template-columns: 1fr; }
  .filter-btn { padding: 0.5rem 0.9rem; font-size: 0.8rem; }
  .hero-orb { filter: blur(40px); opacity: 0.35; }

  .services-hero {
    background-position: 62% center;
  }

  .hero-overlay {
    background: linear-gradient(180deg, rgba(5, 31, 47, 0.72), rgba(5, 31, 47, 0.94));
  }

  .hero-inner {
    width: calc(100% - 32px);
  }

  .hero-breadcrumb {
    margin-bottom: 8px;
    font-size: 0.62rem;
  }

  .hero-line {
    width: 30px;
  }

  .hero-kicker {
    font-size: 0.52rem;
    letter-spacing: 0.12em;
  }

  .hero-title {
    max-width: 100%;
    font-size: clamp(1rem, 8vw, 2rem);
    line-height: 1.05;
  }

  .hero-description {
    max-width: 100%;
    margin-top: 7px;
    font-size: 0.68rem;
    line-height: 1.4;
  }

  .hero-scroll {
    display: none;
  }
}

/* ===================== A11Y ===================== */
.filter-btn:focus-visible,
.cta-strip__button:focus-visible {
  outline: 3px solid rgba(63, 163, 86, 0.55);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
  .reveal { opacity: 1; transform: none; }
}
</style>