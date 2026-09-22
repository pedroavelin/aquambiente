<template>
  <section class="academia-page">
    <!-- HERO -->
    <section class="academia-hero">
      <div class="hero-overlay" />
      <div class="hero-grain" />

      <div class="hero-content">
        <div class="hero-inner">
          <nav class="hero-breadcrumb">
            <span>Início</span>
            <v-icon icon="mdi-chevron-right" size="14" />
            <span class="is-active">Academia</span>
          </nav>

          <div class="hero-kicker-row">
            <span class="hero-line" />
            <p class="hero-kicker">Academia Aquambiente</p>
          </div>

          <h1 class="hero-title">
            Formações que
            <em>transformam conhecimento em prática.</em>
          </h1>

          <p class="hero-description">
            Programas de capacitação técnica para profissionais, empresas e
            instituições que querem fortalecer competências em gestão,
            monitoramento, sustentabilidade e responsabilidade ambiental.
          </p>
        </div>
      </div>

      <div class="hero-scroll">
        <span>Explorar</span>
        <span class="hero-scroll-line" />
      </div>
    </section>

    <!-- CONTEÚDO -->
    <v-container class="academia-shell">
      <header class="section-header">
        <div class="section-header-left">
          <span class="section-number">01</span>
          <p class="section-kicker">Programas</p>
        </div>

        <div class="section-header-right">
          <h2 class="section-title">
            Capacitação profissional para
            <strong>desafios ambientais reais.</strong>
          </h2>

          <p class="section-description">
            Formação prática, acompanhamento técnico e conteúdos alinhados às
            exigências do mercado ambiental atual — para operar com mais
            segurança, eficiência e consciência ambiental.
          </p>
        </div>
      </header>

      <div class="course-grid">
        <article
          v-for="(course, index) in courses"
          :key="course.title"
          class="course-card"
          :style="{ '--delay': `${index * 40}ms` }"
        >
          <div class="course-media">
            <v-img class="course-image" cover :src="course.image" />
            <div class="course-gradient" />
          </div>

          <div class="course-body">
            <span class="course-badge">{{ course.badge }}</span>
            <h3 class="course-title">{{ course.title }}</h3>
            <p class="course-description">{{ course.description }}</p>

            <span class="course-cta">
              Saber mais
              <v-icon icon="mdi-arrow-right" size="16" />
            </span>
          </div>

          <span class="course-index">{{ String(index + 1).padStart(2, '0') }}</span>
        </article>
      </div>
    </v-container>

    <PartnersStrip :partners="partners" />
  </section>
</template>

<script lang="ts" setup>
  import c1 from '@/assets/flayer-course/c1.jpeg'
  import c2 from '@/assets/flayer-course/c2.jpeg'
  import c3 from '@/assets/flayer-course/c3.jpeg'
  import c4 from '@/assets/flayer-course/c4.jpeg'
  import c5 from '@/assets/flayer-course/c5.jpeg'
  import c6 from '@/assets/flayer-course/c6.jpeg'
  import PartnersStrip from '@/components/PartnersStrip.vue'

  const courses = [
    {
      image: c1,
      title: 'Gestão de Resíduos Sólidos',
      badge: 'Curso 01',
      description: 'Fundamentos para uma gestão eficiente, segura e regulamentada.',
    },
    {
      image: c2,
      title: 'Monitoramento Ambiental',
      badge: 'Curso 02',
      description: 'Acompanhamento técnico de variáveis ambientais e indicadores de desempenho.',
    },
    {
      image: c3,
      title: 'Licenciamento Ambiental',
      badge: 'Curso 03',
      description: 'Processos, requisitos e melhores práticas para adequação ambiental.',
    },
    {
      image: c4,
      title: 'Higiene e Segurança no Trabalho',
      badge: 'Curso 04',
      description: 'Estratégias para reduzir riscos e promover ambientes mais seguros.',
    },
    {
      image: c5,
      title: 'Estudo de Impacto Ambiental',
      badge: 'Curso 05',
      description: 'Metodologias para avaliação, diagnóstico e mitigação de impactos.',
    },
    {
      image: c6,
      title: 'Sustentabilidade e Compliance',
      badge: 'Curso 06',
      description: 'Aplicação de critérios de sustentabilidade e conformidade regulatória.',
    },
  ]

  const partners = [
    { label: 'Ministério do Ambiente', icon: 'mdi-bank-outline' },
    { label: 'INEMA', icon: 'mdi-shield-leaf-outline' },
    { label: 'Angola Cables', icon: 'mdi-server-network' },
    { label: 'Sonangol', icon: 'mdi-oil' },
    { label: 'Unitel', icon: 'mdi-signal-cellular-outline' },
    { label: 'Banco BAI', icon: 'mdi-bank' },
    { label: 'Refriango', icon: 'mdi-bottle-soda-outline' },
    { label: 'TAAG', icon: 'mdi-airplane' },
    { label: 'Porto de Luanda', icon: 'mdi-anchor' },
  ]
</script>

<style scoped>
  /* ============ BASE ============ */
  .academia-page {
    --c-ink: #0b2b3f;
    --c-ink-soft: #173d57;
    --c-muted: #5b6b7d;
    --c-line: rgba(11, 43, 63, 0.08);
    --c-green: #0f8a5f;
    --c-green-bright: #52d094;
    --c-bg: #f7faf8;
    --c-surface: #ffffff;

    background: var(--c-bg);
    color: var(--c-ink);
    -webkit-font-smoothing: antialiased;
  }

  /* ============ HERO (altura original) ============ */
  .academia-hero {
    position: relative;
    height: 235px;
    min-height: 235px;
    display: flex;
    align-items: center;
    overflow: hidden;
    background-image: url('@/assets/flayer-course/c1.jpeg');
    background-size: cover;
    background-position: center 55%;
    isolation: isolate;
  }

  .hero-overlay {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(120% 80% at 85% 20%, rgba(15, 138, 95, 0.28) 0%, transparent 55%),
      linear-gradient(
        100deg,
        rgba(4, 24, 37, 0.96) 0%,
        rgba(4, 24, 37, 0.82) 42%,
        rgba(4, 24, 37, 0.42) 100%
      );
    z-index: 1;
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
    background: var(--c-green-bright);
    border-radius: 4px;
  }

  .hero-kicker {
    margin: 0;
    color: var(--c-green-bright);
    font-size: 0.58rem;
    font-weight: 800;
    letter-spacing: 0.2em;
    text-transform: uppercase;
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
    color: rgba(255, 255, 255, 0.75);
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

  /* ============ SHELL ============ */
  .academia-shell {
    max-width: 1240px !important;
    padding: 80px 24px 110px !important;
  }

  /* ============ SECTION HEADER ============ */
  .section-header {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 60px;
    align-items: start;
    padding-bottom: 55px;
    margin-bottom: 55px;
    border-bottom: 1px solid var(--c-line);
  }

  .section-header-left {
    display: flex;
    align-items: center;
    gap: 14px;
    padding-top: 8px;
  }

  .section-number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    border: 1px solid rgba(15, 138, 95, 0.3);
    color: var(--c-green);
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.05em;
  }

  .section-kicker {
    margin: 0;
    color: var(--c-green);
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
  }

  .section-title {
    margin: 0;
    color: var(--c-ink-soft);
    font-size: clamp(1.8rem, 3.4vw, 2.9rem);
    font-weight: 600;
    line-height: 1.14;
    letter-spacing: -0.035em;
  }

  .section-title strong {
    display: block;
    color: var(--c-green);
    font-weight: 700;
  }

  .section-description {
    margin: 22px 0 0;
    max-width: 680px;
    color: var(--c-muted);
    font-size: 0.98rem;
    line-height: 1.75;
  }

  /* ============ GRID ============ */
  .course-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 28px;
  }

  /* ============ CARD ============ */
  .course-card {
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 24px;
    background: var(--c-surface);
    border: 1px solid var(--c-line);
    box-shadow: 0 1px 2px rgba(11, 43, 63, 0.04);
    cursor: pointer;
    transition:
      transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1),
      box-shadow 0.4s cubic-bezier(0.2, 0.8, 0.2, 1),
      border-color 0.3s ease;
  }

  .course-card:hover {
    transform: translateY(-6px);
    border-color: rgba(15, 138, 95, 0.22);
    box-shadow:
      0 24px 48px -18px rgba(11, 43, 63, 0.22),
      0 8px 16px -8px rgba(11, 43, 63, 0.1);
  }

  .course-media {
    position: relative;
    aspect-ratio: 4 / 5;
    overflow: hidden;
    background: #0b2b3f;
  }

  .course-image {
    width: 100%;
    height: 100%;
    transition: transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .course-card:hover .course-image {
    transform: scale(1.06);
  }

  .course-gradient {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      transparent 40%,
      rgba(5, 31, 47, 0.35) 70%,
      rgba(5, 31, 47, 0.85) 100%
    );
  }

  .course-body {
    position: relative;
    padding: 24px 26px 28px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .course-badge {
    display: inline-flex;
    align-self: flex-start;
    padding: 5px 12px;
    border-radius: 999px;
    background: rgba(15, 138, 95, 0.1);
    color: var(--c-green);
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .course-title {
    margin: 4px 0 0;
    color: var(--c-ink-soft);
    font-size: 1.28rem;
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: -0.025em;
  }

  .course-description {
    margin: 0;
    color: var(--c-muted);
    font-size: 0.88rem;
    line-height: 1.65;
  }

  .course-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 12px;
    color: var(--c-green);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    transition: gap 0.3s ease;
  }

  .course-card:hover .course-cta {
    gap: 14px;
  }

  .course-index {
    position: absolute;
    top: 20px;
    right: 22px;
    z-index: 2;
    color: rgba(255, 255, 255, 0.85);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  }

  /* ============ RESPONSIVO ============ */
  @media (max-width: 960px) {
    .academia-hero {
      height: 210px;
      min-height: 210px;
    }

    .academia-shell {
      padding: 60px 20px 80px !important;
    }

    .section-header {
      grid-template-columns: 1fr;
      gap: 20px;
      padding-bottom: 40px;
      margin-bottom: 40px;
    }

    .course-grid {
      gap: 22px;
    }
  }

  @media (max-width: 600px) {
    .hero-scroll {
      display: none;
    }

    .course-media {
      aspect-ratio: 5 / 4;
    }

    .course-body {
      padding: 20px 20px 24px;
    }
  }
</style>
