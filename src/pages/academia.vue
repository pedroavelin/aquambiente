<template>
  <section class="academia-page">
    <!-- HERO (inalterado) -->
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
    <section class="academia-shell">
      <div class="academia-inner">
        <!-- INTRO EDITORIAL -->
        <header class="intro">
          <div class="intro-meta">
            <span class="intro-number">01</span>
            <span class="intro-divider" />
            <span class="intro-label">Programas de Formação</span>
          </div>

          <div class="intro-grid">
            <h2 class="intro-title">
              Capacitação profissional para
              <em>desafios ambientais reais.</em>
            </h2>

            <div class="intro-aside">
              <p class="intro-description">
                Formação prática, acompanhamento técnico e conteúdos alinhados
                às exigências do mercado ambiental atual — para operar com mais
                segurança, eficiência e consciência ambiental.
              </p>

              <ul class="intro-stats">
                <li>
                  <strong>06</strong>
                  <span>Programas ativos</span>
                </li>
                <li>
                  <strong>100%</strong>
                  <span>Foco prático</span>
                </li>
                <li>
                  <strong>B2B</strong>
                  <span>Empresas & Instituições</span>
                </li>
              </ul>
            </div>
          </div>
        </header>

        <!-- LISTA EDITORIAL -->
        <div
          class="course-list"
          @mousemove="onMouseMove"
          @mouseleave="onMouseLeave"
        >
          <div class="course-list-head">
            <span class="col-index">Nº</span>
            <span class="col-title">Programa</span>
            <span class="col-tag">Área</span>
            <span class="col-action" />
          </div>

          <article
            v-for="(course, index) in courses"
            :key="course.title"
            class="course-row"
            :class="{ 'is-active': activeIndex === index }"
            @mouseenter="onMouseEnter(index)"
          >
            <span class="row-index">{{ String(index + 1).padStart(2, '0') }}</span>

            <div class="row-main">
              <h3 class="row-title">{{ course.title }}</h3>
              <p class="row-description">{{ course.description }}</p>
            </div>

            <span class="row-tag">{{ course.badge }}</span>

            <span class="row-arrow">
              <v-icon icon="mdi-arrow-right" size="20" />
            </span>
          </article>

          <!-- PREVIEW FLUTUANTE -->
          <div
            class="course-preview"
            :class="{ 'is-visible': activeIndex !== null }"
            :style="{
              transform: `translate3d(${mouseX}px, ${mouseY}px, 0)`,
            }"
          >
            <div
              v-for="(course, index) in courses"
              :key="course.title"
              class="preview-image"
              :class="{ 'is-active': activeIndex === index }"
              :style="{ backgroundImage: `url(${course.image})` }"
            />
          </div>
        </div>

        <!-- CTA FINAL -->
        <footer class="academia-cta">
          <div class="cta-inner">
            <p class="cta-kicker">Pronto para começar?</p>
            <h3 class="cta-title">
              Fale com a nossa equipa e desenhe o
              <em>programa certo para a sua organização.</em>
            </h3>
            <a class="cta-button" href="#contactos">
              Solicitar proposta
              <v-icon icon="mdi-arrow-right" size="18" />
            </a>
          </div>
        </footer>
      </div>
    </section>

    <PartnersStrip />
  </section>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
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
      badge: 'Gestão',
      description: 'Fundamentos para uma gestão eficiente, segura e regulamentada.',
    },
    {
      image: c2,
      title: 'Monitoramento Ambiental',
      badge: 'Técnico',
      description: 'Acompanhamento técnico de variáveis ambientais e indicadores de desempenho.',
    },
    {
      image: c3,
      title: 'Licenciamento Ambiental',
      badge: 'Regulatório',
      description: 'Processos, requisitos e melhores práticas para adequação ambiental.',
    },
    {
      image: c4,
      title: 'Higiene e Segurança no Trabalho',
      badge: 'Segurança',
      description: 'Estratégias para reduzir riscos e promover ambientes mais seguros.',
    },
    {
      image: c5,
      title: 'Estudo de Impacto Ambiental',
      badge: 'Avaliação',
      description: 'Metodologias para avaliação, diagnóstico e mitigação de impactos.',
    },
    {
      image: c6,
      title: 'Sustentabilidade e Compliance',
      badge: 'Compliance',
      description: 'Aplicação de critérios de sustentabilidade e conformidade regulatória.',
    },
  ]

  const activeIndex = ref<number | null>(null)
  const mouseX = ref(0)
  const mouseY = ref(0)

  const onMouseEnter = (index: number) => {
    activeIndex.value = index
  }

  const onMouseMove = (e: MouseEvent) => {
    const target = e.currentTarget as HTMLElement
    const rect = target.getBoundingClientRect()
    mouseX.value = e.clientX - rect.left
    mouseY.value = e.clientY - rect.top
  }

  const onMouseLeave = () => {
    activeIndex.value = null
  }
</script>

<style scoped>
  /* ============ BASE ============ */
  .academia-page {
    --c-ink: #0b2b3f;
    --c-ink-soft: #173d57;
    --c-muted: #5b6b7d;
    --c-line: rgba(11, 43, 63, 0.1);
    --c-green: #0f8a5f;
    --c-green-bright: #52d094;
    --c-bg: #f7faf8;
    --c-surface: #ffffff;

    background: var(--c-bg);
    color: var(--c-ink);
    -webkit-font-smoothing: antialiased;
  }

  /* ============ HERO (INALTERADO) ============ */
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
    background: var(--c-bg);
    padding: 110px 24px 130px;
  }

  .academia-inner {
    max-width: 1240px;
    margin: 0 auto;
  }

  /* ============ INTRO ============ */
  .intro {
    margin-bottom: 80px;
  }

  .intro-meta {
    display: flex;
    align-items: center;
    gap: 18px;
    margin-bottom: 44px;
  }

  .intro-number {
    color: var(--c-green);
    font-size: 0.85rem;
    font-weight: 800;
    letter-spacing: 0.1em;
  }

  .intro-divider {
    display: block;
    width: 48px;
    height: 1px;
    background: var(--c-line);
  }

  .intro-label {
    color: var(--c-muted);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.28em;
    text-transform: uppercase;
  }

  .intro-grid {
    display: grid;
    grid-template-columns: 1.35fr 1fr;
    gap: 80px;
    align-items: start;
  }

  .intro-title {
    margin: 0;
    color: var(--c-ink);
    font-size: clamp(2.2rem, 4.5vw, 4rem);
    font-weight: 500;
    line-height: 1.04;
    letter-spacing: -0.045em;
  }

  .intro-title em {
    display: block;
    color: var(--c-green);
    font-style: normal;
    font-weight: 700;
  }

  .intro-aside {
    padding-top: 12px;
  }

  .intro-description {
    margin: 0;
    color: var(--c-muted);
    font-size: 1.05rem;
    line-height: 1.75;
  }

  .intro-stats {
    list-style: none;
    padding: 0;
    margin: 36px 0 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    border-top: 1px solid var(--c-line);
    padding-top: 28px;
  }

  .intro-stats li {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .intro-stats strong {
    color: var(--c-ink);
    font-size: 1.6rem;
    font-weight: 700;
    letter-spacing: -0.03em;
  }

  .intro-stats span {
    color: var(--c-muted);
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  /* ============ LISTA EDITORIAL ============ */
  .course-list {
    position: relative;
    border-top: 1px solid var(--c-line);
  }

  .course-list-head {
    display: grid;
    grid-template-columns: 60px 1fr 140px 60px;
    gap: 28px;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid var(--c-line);
    color: var(--c-muted);
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
  }

  .course-row {
    display: grid;
    grid-template-columns: 60px 1fr 140px 60px;
    gap: 28px;
    align-items: center;
    padding: 32px 0;
    border-bottom: 1px solid var(--c-line);
    cursor: pointer;
    position: relative;
    z-index: 2;
    transition: padding 0.4s ease;
  }

  .course-row::before {
    content: '';
    position: absolute;
    left: -24px;
    right: -24px;
    top: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      rgba(15, 138, 95, 0.05) 0%,
      rgba(15, 138, 95, 0) 100%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
    z-index: -1;
  }

  .course-row.is-active::before {
    opacity: 1;
  }

  .course-row.is-active {
    padding-left: 12px;
  }

  .row-index {
    color: var(--c-muted);
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    transition: color 0.3s ease;
  }

  .course-row.is-active .row-index {
    color: var(--c-green);
  }

  .row-main {
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-width: 0;
  }

  .row-title {
    margin: 0;
    color: var(--c-ink);
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: -0.025em;
    transition: color 0.3s ease;
  }

  .course-row.is-active .row-title {
    color: var(--c-green);
  }

  .row-description {
    margin: 0;
    color: var(--c-muted);
    font-size: 0.9rem;
    line-height: 1.55;
    max-width: 560px;
  }

  .row-tag {
    justify-self: start;
    padding: 6px 14px;
    border: 1px solid var(--c-line);
    border-radius: 999px;
    color: var(--c-ink-soft);
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    transition: border-color 0.3s ease, color 0.3s ease, background 0.3s ease;
  }

  .course-row.is-active .row-tag {
    border-color: var(--c-green);
    color: var(--c-green);
    background: rgba(15, 138, 95, 0.06);
  }

  .row-arrow {
    justify-self: end;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1px solid var(--c-line);
    color: var(--c-ink-soft);
    transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .course-row.is-active .row-arrow {
    background: var(--c-green);
    border-color: var(--c-green);
    color: #ffffff;
    transform: rotate(-45deg);
  }

  /* ============ PREVIEW FLUTUANTE ============ */
  .course-preview {
    position: absolute;
    top: 0;
    left: 0;
    width: 340px;
    height: 240px;
    pointer-events: none;
    z-index: 5;
    opacity: 0;
    margin-left: -170px;
    margin-top: -120px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow:
      0 40px 80px -20px rgba(11, 43, 63, 0.4),
      0 20px 40px -20px rgba(11, 43, 63, 0.3);
    transition:
      opacity 0.35s ease,
      transform 0.15s cubic-bezier(0.2, 0.8, 0.2, 1);
    will-change: transform, opacity;
  }

  .course-preview.is-visible {
    opacity: 1;
  }

  .preview-image {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    opacity: 0;
    transform: scale(1.08);
    transition: opacity 0.4s ease, transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .preview-image.is-active {
    opacity: 1;
    transform: scale(1);
  }

  /* ============ CTA FINAL ============ */
  .academia-cta {
    margin-top: 100px;
  }

  .cta-inner {
    position: relative;
    overflow: hidden;
    padding: 70px 60px;
    border-radius: 32px;
    background: linear-gradient(135deg, #0b2b3f 0%, #0f3a52 100%);
    color: #ffffff;
  }

  .cta-inner::after {
    content: '';
    position: absolute;
    top: -50%;
    right: -10%;
    width: 60%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(82, 208, 148, 0.18) 0%,
      transparent 60%
    );
    pointer-events: none;
  }

  .cta-kicker {
    margin: 0 0 20px;
    color: var(--c-green-bright);
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.28em;
    text-transform: uppercase;
  }

  .cta-title {
    position: relative;
    z-index: 1;
    margin: 0;
    max-width: 680px;
    font-size: clamp(1.6rem, 2.8vw, 2.4rem);
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -0.03em;
  }

  .cta-title em {
    display: block;
    color: var(--c-green-bright);
    font-style: normal;
    font-weight: 700;
  }

  .cta-button {
    position: relative;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-top: 40px;
    padding: 16px 32px;
    border-radius: 999px;
    background: var(--c-green-bright);
    color: #04202c;
    font-size: 0.85rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-decoration: none;
    transition: gap 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 12px 32px -8px rgba(82, 208, 148, 0.5);
  }

  .cta-button:hover {
    gap: 18px;
    transform: translateY(-2px);
    box-shadow: 0 20px 40px -8px rgba(82, 208, 148, 0.6);
  }

  /* ============ RESPONSIVO ============ */
  @media (max-width: 1024px) {
    .intro-grid {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .course-list-head,
    .course-row {
      grid-template-columns: 50px 1fr 120px 50px;
      gap: 20px;
    }
  }

  @media (max-width: 768px) {
    .academia-hero {
      height: 210px;
      min-height: 210px;
    }

    .academia-shell {
      padding: 70px 20px 90px;
    }

    .intro {
      margin-bottom: 50px;
    }

    .intro-stats {
      grid-template-columns: 1fr 1fr;
    }

    .course-list-head {
      display: none;
    }

    .course-row {
      grid-template-columns: 40px 1fr 44px;
      grid-template-areas:
        'index title arrow'
        'index tag tag';
      gap: 8px 16px;
      align-items: start;
      padding: 24px 0;
    }

    .row-index {
      grid-area: index;
      padding-top: 4px;
    }

    .row-main {
      grid-area: title;
    }

    .row-title {
      font-size: 1.1rem;
    }

    .row-description {
      font-size: 0.85rem;
      margin-top: 6px;
    }

    .row-tag {
      grid-area: tag;
      margin-top: 12px;
    }

    .row-arrow {
      grid-area: arrow;
      width: 38px;
      height: 38px;
    }

    .course-row.is-active {
      padding-left: 0;
    }

    .course-row::before {
      left: 0;
      right: 0;
    }

    /* Preview desativado no mobile (sem hover) */
    .course-preview {
      display: none;
    }

    .cta-inner {
      padding: 50px 32px;
      border-radius: 24px;
    }

    .cta-button {
      width: 100%;
      justify-content: center;
    }
  }

  @media (max-width: 480px) {
    .academia-shell {
      padding: 50px 16px 70px;
    }

    .intro-stats {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }
</style>  