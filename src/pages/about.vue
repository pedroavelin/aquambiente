<template>
  <main class="about-page">
    <!-- ================= HERO ================= -->
    <section class="about-hero">
      <div class="hero-overlay" />

      <div class="hero-content">
        <div class="hero-inner">
          <div class="hero-breadcrumb">
            <span>Início</span>
            <v-icon icon="mdi-chevron-right" size="16" />
            <span>Empresa</span>
          </div>

          <div class="hero-line" />
          <p class="hero-kicker">SOBRE A AQUAMBIENTE</p>

          <h1>
            Soluções ambientais
            <span>com impacto positivo.</span>
          </h1>

          <p class="hero-description">
            Conheça a Aquambiente, uma empresa angolana dedicada à consultoria
            ambiental e à gestão responsável de resíduos.
          </p>
        </div>
      </div>

      <div class="hero-scroll">
        <span>Deslize para explorar</span>
        <v-icon icon="mdi-arrow-down" size="18" />
      </div>
    </section>

    <!-- ================= PARTNERS STRIP ================= -->
    <section class="partners-strip" aria-label="Parceiros">
      <div class="partners-strip__track">
        <div
          v-for="(group, g) in [0, 1]"
          :key="g"
          class="partners-strip__group"
          :aria-hidden="g === 1 ? 'true' : 'false'"
        >
          <div
            v-for="p in partners"
            :key="`${g}-${p.label}`"
            class="partner"
          >
            <v-icon size="26">{{ p.icon }}</v-icon>
            <span>{{ p.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <AboutSection />

    <!-- ================= SERVICES ================= -->
    <section id="servicos" class="services">
      <div class="services__aura" />
      <div class="container">
        <header class="section-head">
          <div class="section-head__left">
            <span class="tag">01 — Serviços</span>
            <h2>
              Disciplinas técnicas para<br />
              <em>cada desafio ambiental.</em>
            </h2>
          </div>
          <p class="section-head__right">
            Da avaliação de impacto à gestão operacional de resíduos — entregamos
            serviços auditáveis, documentados e alinhados com a legislação angolana
            e as melhores práticas internacionais.
          </p>
        </header>

        <div class="services__grid">
          <article
            v-for="(s, i) in services"
            :key="s.title"
            class="svc"
            :style="{ '--i': i }"
          >
            <div class="svc__top">
              <span class="svc__index">0{{ i + 1 }}</span>
              <div class="svc__icon">
                <v-icon size="26">{{ s.icon }}</v-icon>
              </div>
            </div>

            <h3 class="svc__title">{{ s.title }}</h3>
            <p class="svc__desc">{{ s.description }}</p>

            <ul class="svc__list">
              <li v-for="it in s.items" :key="it">
                <span class="svc__bullet" />
                <span>{{ it }}</span>
              </li>
            </ul>

            <div class="svc__foot">
              <span>Saber mais</span>
              <v-icon icon="mdi-arrow-right" size="16" />
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ================= TRAINING ================= -->
    <section class="training">
      <div class="container">
        <div class="training__grid">
          <div class="training__left">
            <span class="tag">02 — Formação</span>
            <h2>
              Capacitação técnica<br />
              <em>para profissionais exigentes.</em>
            </h2>
            <p>
              Programas desenhados por especialistas, com componente prática,
              casos reais e atualização legislativa permanente.
            </p>

            <ul class="training__items">
              <li v-for="t in training" :key="t.label">
                <div class="training__itemIcon">
                  <v-icon size="20">{{ t.icon }}</v-icon>
                </div>
                <div class="training__itemBody">
                  <strong>{{ t.label }}</strong>
                  <span>{{ t.meta }}</span>
                </div>
                <v-icon class="training__itemArrow" icon="mdi-arrow-top-right" size="18" />
              </li>
            </ul>
          </div>

          <aside class="training__panel">
            <div class="panel__glow" />
            <div class="panel__ring" />
            <div class="panel__icon">
              <v-icon size="44">mdi-school-outline</v-icon>
            </div>
            <h3>Conhecimento que gera impacto</h3>
            <p>
              Certificação reconhecida, formadores com experiência de campo e
              metodologia orientada a resultados.
            </p>
            <ul class="panel__badges">
              <li>Certificado</li>
              <li>Prático</li>
              <li>Presencial & Online</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>

    <!-- ================= VALUES ================= -->
    <section class="values">
      <div class="container">
        <header class="section-head section-head--center">
          <span class="tag">03 — Identidade</span>
          <h2>
            Compromisso com o ambiente e com o<br />
            <em>desenvolvimento sustentável.</em>
          </h2>
        </header>

        <div class="values__grid">
          <article v-for="(v, i) in values" :key="v.title" class="val" :style="{ '--i': i }">
            <div class="val__icon">
              <v-icon size="26">{{ v.icon }}</v-icon>
            </div>
            <h3>{{ v.title }}</h3>
            <p>{{ v.description }}</p>
            <span class="val__line" />
          </article>
        </div>
      </div>
    </section>

    <!-- ================= CONTACT ================= -->
    <section id="contacto" class="contact">
      <div class="contact__aura" />
      <div class="contact__noise" />
      <div class="container">
        <div class="contact__grid">
          <div class="contact__left">
            <span class="tag tag--light">04 — Contacto</span>
            <h2>
              Vamos construir<br />
              <em>algo sustentável.</em>
            </h2>
            <p>
              Fale com a nossa equipa técnica para uma avaliação inicial sem
              compromisso.
            </p>
            <a class="btn btn--solid" href="mailto:geral@aquambiente.ao">
              <span>Enviar mensagem</span>
              <v-icon icon="mdi-send-outline" size="18" />
            </a>
          </div>

          <ul class="contact__list">
            <li>
              <div class="contact__ico"><v-icon>mdi-phone-outline</v-icon></div>
              <div>
                <span>Telefone</span>
                <strong>+244 925 668 789</strong>
              </div>
            </li>
            <li>
              <div class="contact__ico"><v-icon>mdi-email-outline</v-icon></div>
              <div>
                <span>Email</span>
                <strong>geral@aquambiente.ao</strong>
              </div>
            </li>
            <li>
              <div class="contact__ico"><v-icon>mdi-map-marker-outline</v-icon></div>
              <div>
                <span>Escritório</span>
                <strong>Luanda, Angola</strong>
              </div>
            </li>
            <li>
              <div class="contact__ico"><v-icon>mdi-clock-outline</v-icon></div>
              <div>
                <span>Horário</span>
                <strong>Seg–Sex · 08h–17h</strong>
                <strong>Sáb · 08h–15h</strong>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
  import AboutSection from '@/components/AboutSection.vue'

  const services = [
    { title: 'Consultoria Ambiental', icon: 'mdi-leaf-circle-outline', description: 'Apoio técnico especializado para empresas e organizações na gestão das suas responsabilidades ambientais.', items: ['Estudo de Impacto Ambiental', 'Auditoria Ambiental', 'Plano de Gestão de Resíduos'] },
    { title: 'Monitorização Ambiental', icon: 'mdi-chart-line', description: 'Avaliação de parâmetros ambientais para apoiar decisões técnicas e proteger o ambiente.', items: ['Qualidade do ar', 'Qualidade do solo', 'Qualidade da água'] },
    { title: 'Gestão de Resíduos', icon: 'mdi-recycle', description: 'Soluções para a gestão adequada e responsável dos resíduos.', items: ['Planos de Gestão de Resíduos', 'Gestão ambiental', 'Acompanhamento técnico'] },
    { title: 'Direito Ambiental', icon: 'mdi-scale-balance', description: 'Abordagem das questões legais relacionadas com a proteção ambiental e conformidade.', items: ['Direito Ambiental', 'Gestão Ambiental', 'Conformidade ambiental'] },
  ]
  const training = [
    { label: 'SHST — Segurança e Saúde no Trabalho', icon: 'mdi-shield-check-outline', meta: '24h · Certificado' },
    { label: 'SIG — Sistemas de Informação Geográfica', icon: 'mdi-map-marker-radius-outline', meta: '32h · Prático' },
    { label: 'PGR — Plano de Gestão de Resíduos', icon: 'mdi-recycle', meta: '16h · Aplicado' },
    { label: 'EIA — Estudo de Impacto Ambiental', icon: 'mdi-file-document-outline', meta: '40h · Avançado' },
  ]
  const values = [
    { title: 'Missão', icon: 'mdi-target', description: 'Prestar serviços ambientais de qualidade, contribuindo para a proteção do ambiente e um desenvolvimento sustentável.' },
    { title: 'Visão', icon: 'mdi-eye-outline', description: 'Ser uma referência na prestação de serviços ambientais, reconhecida pelo profissionalismo e responsabilidade.' },
    { title: 'Valores', icon: 'mdi-hand-heart-outline', description: 'Responsabilidade, ética, qualidade, inovação e respeito pelas pessoas e pelo meio ambiente.' },
  ]
  const partners = [
    { label: 'Ministério do Ambiente', icon: 'mdi-bank-outline' },
    { label: 'INEMA', icon: 'mdi-shield-leaf-outline' },
    { label: 'Angola Cables', icon: 'mdi-server-network' },
    { label: 'Sonangol', icon: 'mdi-oil' },
    { label: 'Unitel', icon: 'mdi-signal-cellular-outline' },
    { label: 'Banco BAI', icon: 'mdi-bank' },
    { label: 'Refriango', icon: 'mdi-bottle-soda-outline' },
    { label: 'Cuca', icon: 'mdi-beer-outline' },
    { label: 'TAAG', icon: 'mdi-airplane' },
    { label: 'Porto de Luanda', icon: 'mdi-anchor' },
  ]
</script>

<style scoped>
/* ============================================================
   DESIGN TOKENS
============================================================ */
.about-page {
  --ink: #0a1f2e;
  --ink-2: #102e42;
  --muted: #5b6b78;
  --muted-2: #7c8a95;
  --line: #e2ece5;
  --line-2: #d3e1d8;
  --bg: #f6faf7;
  --bg-2: #ffffff;
  --brand: #2e7d32;
  --brand-2: #52d094;
  --brand-3: #8ed58b;
  --radius: 20px;
  --shadow-1: 0 1px 2px rgba(10,31,46,.04), 0 8px 24px -12px rgba(10,31,46,.12);
  --shadow-2: 0 2px 4px rgba(10,31,46,.05), 0 24px 60px -24px rgba(10,31,46,.28);
  --shadow-3: 0 40px 80px -40px rgba(10,31,46,.45);

  background: var(--bg);
  color: var(--ink);
  font-family: 'Inter', 'Manrope', system-ui, -apple-system, sans-serif;
  font-feature-settings: 'ss01', 'cv11';
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

/* Keep the About banner aligned with the Contact page hero. */
.about-hero {
  position: relative;
  height: 235px;
  min-height: 235px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-image: url("https://images.unsplash.com/photo-1538300342682-cf57afb97285?auto=format&fit=crop&w=2000&q=85");
  background-size: cover;
  background-position: center 55%;
  animation: riseIn 0.8s ease-out both;
}

.about-hero .hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(5, 31, 47, 0.92) 0%, rgba(5, 31, 47, 0.72) 50%, rgba(5, 31, 47, 0.35) 100%);
}

.about-hero .hero-content { position: relative; z-index: 2; width: 100%; }
.about-hero .hero-inner { width: min(1200px, calc(100% - 48px)); margin: 0 auto; padding: 0; }
.about-hero .hero-breadcrumb { display: flex; align-items: center; gap: 7px; margin-bottom: 10px; color: rgba(255, 255, 255, 0.65); font-size: 0.68rem; font-weight: 500; }
.about-hero .hero-breadcrumb span:last-child { color: #fff; }
.about-hero .hero-line { width: 38px; height: 2px; margin-bottom: 9px; background: #52d094; border-radius: 4px; }
.about-hero .hero-kicker { margin: 0 0 4px; color: #52d094; font-size: 0.58rem; font-weight: 800; letter-spacing: 0.15rem; }
.about-hero h1 { max-width: 700px; margin: 0; color: #fff; font-size: clamp(1rem, 5vw, 2.7em); font-weight: 800; line-height: 1.05; letter-spacing: -0.045em; }
.about-hero h1 span { color: #61d39a; }
.about-hero .hero-description { max-width: 570px; margin: 8px 0 0; color: rgba(255, 255, 255, 0.78); font-size: 0.75rem; line-height: 1.45; }
.about-hero .hero-scroll { position: absolute; right: 35px; bottom: 18px; z-index: 3; display: flex; align-items: center; gap: 7px; color: rgba(255, 255, 255, 0.55); font-size: 0.58rem; }

.container {
  width: min(1240px, calc(100% - 48px));
  margin-inline: auto;
}

.tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: .72rem;
  font-weight: 700;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: var(--brand);
  padding: 6px 12px;
  border: 1px solid rgba(46,125,50,.18);
  border-radius: 999px;
  background: rgba(46,125,50,.05);
}
.tag--light {
  color: var(--brand-3);
  border-color: rgba(142,213,139,.28);
  background: rgba(142,213,139,.08);
}

em {
  font-style: normal;
  background: linear-gradient(120deg, var(--brand-2), var(--brand-3));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* ============================================================
   PARTNERS STRIP
============================================================ */
.partners-strip {
  position: relative;
  overflow: hidden;
  background: #ffffff;
  border-bottom: 1px solid var(--line);
  padding: 28px 0;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
}

.partners-strip__track {
  display: flex;
  width: max-content;
  animation: partners-scroll 38s linear infinite;
}

.partners-strip:hover .partners-strip__track {
  animation-play-state: paused;
}

.partners-strip__group {
  display: flex;
  align-items: center;
  gap: 56px;
  padding-right: 56px;
}

.partner {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--muted-2);
  font-size: .86rem;
  font-weight: 600;
  letter-spacing: .02em;
  white-space: nowrap;
  opacity: .7;
  transition: color .35s ease, opacity .35s ease, transform .35s ease;
}

.partner:hover {
  color: var(--brand);
  opacity: 1;
  transform: translateY(-2px);
}

.partner :deep(.v-icon) {
  color: inherit;
}

@keyframes partners-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
  .partners-strip__track { animation: none; }
}

/* ============================================================
   BUTTONS
============================================================ */
.btn {
  --h: 52px;
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  height: var(--h);
  padding: 0 26px;
  border-radius: 999px;
  font-size: .88rem;
  font-weight: 600;
  letter-spacing: .01em;
  text-decoration: none;
  cursor: pointer;
  transition: transform .35s cubic-bezier(.2,.8,.2,1),
              box-shadow .35s ease,
              background .35s ease,
              border-color .35s ease;
  white-space: nowrap;
}
.btn--solid {
  color: #fff;
  background: linear-gradient(120deg, #1f6b2b, #2e7d32 40%, #52d094);
  box-shadow:
    0 1px 0 rgba(255,255,255,.2) inset,
    0 12px 28px -12px rgba(46,125,50,.7);
}
.btn--solid:hover {
  transform: translateY(-3px);
  box-shadow:
    0 1px 0 rgba(255,255,255,.25) inset,
    0 22px 44px -14px rgba(46,125,50,.75);
}
.btn--ghost {
  color: #fff;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.22);
  backdrop-filter: blur(10px);
}
.btn--ghost:hover {
  background: rgba(255,255,255,.14);
  border-color: rgba(255,255,255,.4);
  transform: translateY(-3px);
}

/* ============================================================
   HERO
============================================================ */
.hero {
  position: relative;
  min-height: 100vh;
  min-height: 720px;
  display: flex;
  align-items: center;
  padding: 140px 0 100px;
  overflow: hidden;
  isolation: isolate;
}
.hero__media {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.hero__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 55%;
  transform: scale(1.06);
  animation: heroZoom 20s ease-in-out infinite alternate;
}
@keyframes heroZoom {
  from { transform: scale(1.06); }
  to { transform: scale(1.14); }
}
.hero__scrim {
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(180deg, rgba(4,20,32,.55) 0%, rgba(4,20,32,.35) 30%, rgba(4,20,32,.9) 100%),
    linear-gradient(100deg, rgba(4,20,32,.96) 0%, rgba(4,26,40,.82) 45%, rgba(4,26,40,.35) 100%);
}
.hero__noise {
  position: absolute;
  inset: 0;
  z-index: 2;
  opacity: .12;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>");
  pointer-events: none;
}
.hero__aura {
  position: absolute;
  z-index: 2;
  top: 20%;
  right: -10%;
  width: 700px;
  height: 700px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(82,208,148,.28), transparent 62%);
  filter: blur(40px);
  pointer-events: none;
}

.hero__inner {
  position: relative;
  z-index: 3;
  width: min(1240px, calc(100% - 48px));
  margin-inline: auto;
  animation: riseIn 1s cubic-bezier(.2,.8,.2,1) both;
}
@keyframes riseIn {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.hero__crumbs {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: .72rem;
  font-weight: 500;
  color: rgba(255,255,255,.55);
  letter-spacing: .02em;
  margin-bottom: 26px;
}
.hero__crumbs .is-current { color: #fff; }

.hero__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 7px 14px 7px 10px;
  border-radius: 999px;
  background: rgba(82,208,148,.1);
  border: 1px solid rgba(82,208,148,.25);
  color: var(--brand-3);
  font-size: .72rem;
  font-weight: 700;
  letter-spacing: .16em;
  text-transform: uppercase;
  margin-bottom: 24px;
}
.hero__eyebrow .dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--brand-2);
  box-shadow: 0 0 0 4px rgba(82,208,148,.22);
  animation: pulse 2s ease-in-out infinite;
}
@keyframes pulse {
  0%,100% { box-shadow: 0 0 0 4px rgba(82,208,148,.22); }
  50% { box-shadow: 0 0 0 8px rgba(82,208,148,.05); }
}

.hero__title {
  margin: 0;
  max-width: 900px;
  color: #fff;
  font-size: clamp(2.4rem, 6.4vw, 5.4rem);
  font-weight: 800;
  line-height: .98;
  letter-spacing: -.045em;
}
.hero__title em {
  display: block;
  background: linear-gradient(120deg, #8ed58b 0%, #b8f0c9 50%, #52d094 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero__lead {
  max-width: 620px;
  margin: 28px 0 0;
  color: rgba(255,255,255,.75);
  font-size: clamp(.95rem, 1.1vw, 1.08rem);
  line-height: 1.7;
  font-weight: 400;
}

.hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 40px;
}

.hero__metrics {
  display: grid;
  grid-template-columns: repeat(4, minmax(0,1fr));
  gap: 32px;
  max-width: 780px;
  margin: 64px 0 0;
  padding-top: 40px;
  border-top: 1px solid rgba(255,255,255,.12);
}
.hero__metrics div { display: flex; flex-direction: column; gap: 6px; }
.hero__metrics dt {
  font-size: clamp(1.6rem, 2.4vw, 2.2rem);
  font-weight: 800;
  color: #fff;
  letter-spacing: -.04em;
  line-height: 1;
}
.hero__metrics dd {
  margin: 0;
  font-size: .74rem;
  color: rgba(255,255,255,.55);
  letter-spacing: .04em;
  text-transform: uppercase;
}

.hero__scroll {
  position: absolute;
  right: 40px;
  bottom: 40px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: rgba(255,255,255,.5);
  font-size: .65rem;
  letter-spacing: .28em;
  text-transform: uppercase;
  writing-mode: vertical-rl;
}
.hero__scroll .line {
  width: 1px;
  height: 60px;
  background: linear-gradient(180deg, rgba(255,255,255,.5), transparent);
  animation: scrollLine 2.4s ease-in-out infinite;
}
@keyframes scrollLine {
  0%,100% { transform: scaleY(.4); transform-origin: top; opacity: .4; }
  50% { transform: scaleY(1); opacity: 1; }
}

/* ============================================================
   SECTION HEADS
============================================================ */
.section-head {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 60px;
  align-items: end;
  margin-bottom: 72px;
}
.section-head--center {
  grid-template-columns: 1fr;
  text-align: center;
  justify-items: center;
}
.section-head h2 {
  margin: 20px 0 0;
  color: var(--ink);
  font-size: clamp(2rem, 3.6vw, 3.2rem);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -.035em;
}
.section-head__right {
  margin: 0;
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.75;
  padding-bottom: 12px;
  border-left: 2px solid var(--brand-2);
  padding-left: 24px;
}

/* ============================================================
   SERVICES
============================================================ */
.services {
  position: relative;
  padding: 140px 0;
  background: var(--bg-2);
  overflow: hidden;
}
.services__aura {
  position: absolute;
  top: -200px;
  right: -200px;
  width: 620px;
  height: 620px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(82,208,148,.14), transparent 65%);
  filter: blur(20px);
  pointer-events: none;
}

.services__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0,1fr));
  gap: 24px;
}

.svc {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px 36px 32px;
  border-radius: var(--radius);
  background: linear-gradient(180deg, #ffffff 0%, #f7fbf8 100%);
  border: 1px solid var(--line);
  box-shadow: var(--shadow-1);
  overflow: hidden;
  transition:
    transform .5s cubic-bezier(.2,.8,.2,1),
    box-shadow .5s ease,
    border-color .5s ease;
  animation: riseIn .8s cubic-bezier(.2,.8,.2,1) both;
  animation-delay: calc(var(--i) * 90ms);
}
.svc::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(600px circle at var(--mx, 50%) var(--my, 0%), rgba(82,208,148,.14), transparent 40%);
  opacity: 0;
  transition: opacity .5s ease;
  pointer-events: none;
}
.svc:hover {
  transform: translateY(-8px);
  border-color: var(--line-2);
  box-shadow: var(--shadow-2);
}
.svc:hover::before { opacity: 1; }

.svc__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
}
.svc__index {
  font-size: .72rem;
  font-weight: 700;
  letter-spacing: .22em;
  color: var(--muted-2);
}
.svc__icon {
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  color: var(--brand);
  background:
    linear-gradient(180deg, #ffffff, #ecf6ee);
  border: 1px solid var(--line);
  box-shadow:
    0 1px 0 #fff inset,
    0 10px 20px -12px rgba(46,125,50,.25);
  transition: transform .5s cubic-bezier(.2,.8,.2,1), color .3s ease;
}
.svc:hover .svc__icon {
  transform: rotate(-6deg) scale(1.06);
  color: #1f6b2b;
}

.svc__title {
  margin: 0 0 12px;
  color: var(--ink);
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: -.02em;
}
.svc__desc {
  margin: 0 0 24px;
  color: var(--muted);
  font-size: .94rem;
  line-height: 1.7;
}

.svc__list {
  list-style: none;
  padding: 0;
  margin: 0 0 32px;
  display: grid;
  gap: 12px;
  flex: 1;
}
.svc__list li {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--ink-2);
  font-size: .9rem;
  font-weight: 500;
}
.svc__bullet {
  flex: 0 0 6px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--brand-2);
  box-shadow: 0 0 0 3px rgba(82,208,148,.18);
}

.svc__foot {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding-top: 20px;
  border-top: 1px solid var(--line);
  color: var(--brand);
  font-size: .82rem;
  font-weight: 700;
  letter-spacing: .06em;
  text-transform: uppercase;
  transition: gap .3s ease;
}
.svc:hover .svc__foot { gap: 14px; }

/* ============================================================
   TRAINING
============================================================ */
.training {
  position: relative;
  padding: 140px 0;
  background: linear-gradient(180deg, #eef7f1 0%, #e3f1e8 100%);
}
.training__grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 80px;
  align-items: center;
}
.training__left h2 {
  margin: 20px 0 20px;
  color: var(--ink);
  font-size: clamp(2rem, 3.4vw, 3rem);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -.035em;
}
.training__left > p {
  margin: 0 0 40px;
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.75;
  max-width: 520px;
}

.training__items {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
}
.training__items li {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 20px;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 14px;
  cursor: pointer;
  transition:
    transform .35s cubic-bezier(.2,.8,.2,1),
    box-shadow .35s ease,
    border-color .35s ease;
}
.training__items li:hover {
  transform: translateX(8px);
  border-color: var(--brand-2);
  box-shadow: 0 20px 40px -22px rgba(46,125,50,.4);
}
.training__itemIcon {
  flex: 0 0 42px;
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  color: var(--brand);
  background: #ecf6ee;
  border: 1px solid var(--line);
}
.training__itemBody {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
}
.training__itemBody strong {
  color: var(--ink);
  font-size: .94rem;
  font-weight: 600;
}
.training__itemBody span {
  color: var(--muted-2);
  font-size: .76rem;
  letter-spacing: .02em;
}
.training__itemArrow {
  color: var(--muted-2);
  transition: transform .35s ease, color .35s ease;
}
.training__items li:hover .training__itemArrow {
  color: var(--brand);
  transform: translate(4px, -4px);
}

.training__panel {
  position: relative;
  padding: 56px 44px;
  border-radius: 28px;
  color: #fff;
  background:
    radial-gradient(600px circle at 20% 0%, rgba(82,208,148,.25), transparent 45%),
    linear-gradient(160deg, #0a1f2e 0%, #0f3a4f 45%, #145a4a 100%);
  overflow: hidden;
  box-shadow: var(--shadow-3);
  isolation: isolate;
}
.panel__glow {
  position: absolute;
  top: -120px;
  right: -120px;
  width: 380px;
  height: 380px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(82,208,148,.5), transparent 65%);
  filter: blur(30px);
}
.panel__ring {
  position: absolute;
  inset: 24px;
  border: 1px solid rgba(255,255,255,.08);
  border-radius: 20px;
  pointer-events: none;
}
.panel__icon {
  position: relative;
  width: 88px;
  height: 88px;
  display: grid;
  place-items: center;
  border-radius: 22px;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.15);
  backdrop-filter: blur(10px);
  color: var(--brand-3);
  margin-bottom: 32px;
  animation: float 5s ease-in-out infinite;
}
@keyframes float {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.training__panel h3 {
  position: relative;
  margin: 0 0 14px;
  font-size: 1.7rem;
  font-weight: 700;
  letter-spacing: -.02em;
  line-height: 1.2;
}
.training__panel p {
  position: relative;
  margin: 0 0 32px;
  color: rgba(255,255,255,.78);
  line-height: 1.7;
  font-size: .95rem;
}
.panel__badges {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
}
.panel__badges li {
  padding: 8px 16px;
  border-radius: 999px;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.14);
  font-size: .74rem;
  font-weight: 600;
  letter-spacing: .06em;
  color: #d9f5e1;
}

/* ============================================================
   VALUES
============================================================ */
.values {
  padding: 140px 0;
  background: var(--bg-2);
}
.values__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0,1fr));
  gap: 24px;
  margin-top: 72px;
}
.val {
  position: relative;
  padding: 44px 36px 40px;
  border-radius: var(--radius);
  background: linear-gradient(180deg, #f7fbf8 0%, #eef6f0 100%);
  border: 1px solid var(--line);
  overflow: hidden;
  transition: transform .5s cubic-bezier(.2,.8,.2,1), box-shadow .5s ease;
  animation: riseIn .8s cubic-bezier(.2,.8,.2,1) both;
  animation-delay: calc(var(--i) * 110ms);
}
.val:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-2);
}
.val__icon {
  width: 64px;
  height: 64px;
  display: grid;
  place-items: center;
  border-radius: 18px;
  color: var(--brand);
  background: linear-gradient(180deg, #ffffff, #e6f2ea);
  border: 1px solid var(--line);
  box-shadow: 0 12px 24px -14px rgba(46,125,50,.35);
  transition: transform .5s cubic-bezier(.2,.8,.2,1);
}
.val:hover .val__icon {
  transform: rotate(6deg) scale(1.06);
}
.val h3 {
  margin: 28px 0 12px;
  color: var(--ink);
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: -.02em;
}
.val p {
  margin: 0;
  color: var(--muted);
  line-height: 1.75;
  font-size: .95rem;
}
.val__line {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, var(--brand-2), var(--brand));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform .5s cubic-bezier(.2,.8,.2,1);
}
.val:hover .val__line { transform: scaleX(1); }

/* ============================================================
   CONTACT
============================================================ */
.contact {
  position: relative;
  padding: 140px 0;
  color: #fff;
  background:
    radial-gradient(900px circle at 15% 20%, rgba(82,208,148,.18), transparent 45%),
    radial-gradient(700px circle at 90% 90%, rgba(82,208,148,.14), transparent 50%),
    linear-gradient(160deg, #071c2b 0%, #0a1f2e 55%, #0d3446 100%);
  overflow: hidden;
}
.contact__noise {
  position: absolute;
  inset: 0;
  opacity: .12;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>");
  pointer-events: none;
}
.contact__grid {
  position: relative;
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 80px;
  align-items: center;
}
.contact__left h2 {
  margin: 24px 0 20px;
  font-size: clamp(2.2rem, 4vw, 3.6rem);
  font-weight: 800;
  line-height: 1.02;
  letter-spacing: -.04em;
}
.contact__left p {
  margin: 0 0 36px;
  color: rgba(255,255,255,.7);
  font-size: 1rem;
  line-height: 1.75;
  max-width: 480px;
}

.contact__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 14px;
}
.contact__list li {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 22px 24px;
  border-radius: 16px;
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.08);
  backdrop-filter: blur(12px);
  transition:
    transform .35s cubic-bezier(.2,.8,.2,1),
    background .35s ease,
    border-color .35s ease;
}
.contact__list li:hover {
  transform: translateY(-4px);
  background: rgba(255,255,255,.08);
  border-color: rgba(82,208,148,.4);
}
.contact__ico {
  flex: 0 0 48px;
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(82,208,148,.18), rgba(82,208,148,.08));
  border: 1px solid rgba(82,208,148,.28);
  color: var(--brand-3);
}
.contact__list li > div:last-child {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.contact__list span {
  color: rgba(255,255,255,.55);
  font-size: .72rem;
  letter-spacing: .12em;
  text-transform: uppercase;
  font-weight: 600;
}
.contact__list strong {
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -.01em;
}

/* ============================================================
   RESPONSIVE
============================================================ */
@media (max-width: 1080px) {
  .section-head { grid-template-columns: 1fr; gap: 32px; align-items: start; }
  .section-head__right { border-left: none; padding-left: 0; border-top: 2px solid var(--brand-2); padding-top: 20px; }
  .training__grid,
  .contact__grid { grid-template-columns: 1fr; gap: 56px; }
  .values__grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 780px) {
  .about-hero {
    height: 235px;
    min-height: 235px;
    background-position: 62% center;
  }
  .about-hero .hero-overlay { background: linear-gradient(180deg, rgba(5, 31, 47, 0.72), rgba(5, 31, 47, 0.94)); }
  .about-hero .hero-inner { width: calc(100% - 32px); }
  .about-hero .hero-breadcrumb { margin-bottom: 8px; font-size: 0.62rem; }
  .about-hero .hero-line { width: 30px; margin-bottom: 7px; }
  .about-hero .hero-kicker { font-size: 0.52rem; letter-spacing: 0.12rem; }
  .about-hero h1 { max-width: 100%; font-size: clamp(1rem, 8vw, 2rem); }
  .about-hero .hero-description { max-width: 100%; margin-top: 7px; font-size: 0.68rem; line-height: 1.4; }
  .about-hero .hero-scroll { display: none; }

  .hero { min-height: 640px; padding: 120px 0 80px; }
  .hero__metrics {
    grid-template-columns: repeat(2, minmax(0,1fr));
    gap: 24px;
    margin-top: 48px;
    padding-top: 32px;
  }
  .hero__scroll { display: none; }
  .services__grid { grid-template-columns: 1fr; }
  .values__grid { grid-template-columns: 1fr; }
  .services, .training, .values, .contact { padding: 96px 0; }
  .svc { padding: 32px 26px 26px; }
  .training__panel { padding: 40px 28px; }
  .container { width: calc(100% - 32px); }
  .hero__inner { width: calc(100% - 32px); }
}
@media (max-width: 480px) {
  .hero__title { font-size: clamp(2rem, 9vw, 2.6rem); }
  .hero__cta { flex-direction: column; align-items: stretch; }
  .btn { justify-content: center; width: 100%; }
  .hero__metrics dt { font-size: 1.5rem; }
  .contact__list li { padding: 18px; }
}
</style>