<template>
  <main class="about-page">
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
          <h1>Soluções ambientais <span>com impacto positivo.</span></h1>
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

    <AboutSection />

    <section class="services-section">
      <v-container>
        <div class="section-heading">
          <p class="section-kicker">OS NOSSOS SERVIÇOS</p>
          <h2>Soluções ambientais para diferentes necessidades</h2>
          <p class="section-description">
            Serviços técnicos orientados para a gestão ambiental, avaliação de impactos,
            monitorização e gestão responsável de resíduos.
          </p>
        </div>
        <v-row>
          <v-col v-for="service in services" :key="service.title" cols="12" md="6">
            <article class="service-card">
              <div class="service-icon"><v-icon size="32">{{ service.icon }}</v-icon></div>
              <div>
                <h3>{{ service.title }}</h3>
                <p>{{ service.description }}</p>
                <ul><li v-for="item in service.items" :key="item">{{ item }}</li></ul>
              </div>
            </article>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="training-section">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6">
            <p class="section-kicker">FORMAÇÃO ADMINISTRADA</p>
            <h2>Formação para profissionais e organizações</h2>
            <p class="training-description">
              Formação em segurança, ambiente, gestão de resíduos, sistemas de informação
              geográfica e avaliação de impacto ambiental.
            </p>
            <div class="training-list">
              <div v-for="item in training" :key="item.label" class="training-item">
                <v-icon>{{ item.icon }}</v-icon><span>{{ item.label }}</span>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="training-highlight">
              <v-icon size="54">mdi-school-outline</v-icon>
              <h3>Conhecimento que gera impacto</h3>
              <p>Competências técnicas para uma atuação ambientalmente responsável.</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="about-values">
      <v-container>
        <div class="section-heading">
          <p class="section-kicker">A NOSSA IDENTIDADE</p>
          <h2>Compromisso com o ambiente e com o desenvolvimento sustentável</h2>
        </div>
        <v-row>
          <v-col v-for="value in values" :key="value.title" cols="12" md="4">
            <article class="value-item">
              <div class="value-icon"><v-icon size="34">{{ value.icon }}</v-icon></div>
              <h3>{{ value.title }}</h3><p>{{ value.description }}</p>
            </article>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="contact-section">
      <v-container>
        <div class="contact-wrapper">
          <div class="contact-content">
            <p class="section-kicker">FALE CONNOSCO</p>
            <h2>Entre em contacto com a Aquambiente</h2>
            <p>Para informações sobre os nossos serviços, formação e soluções ambientais, entre em contacto connosco.</p>
          </div>
          <div class="contact-info">
            <div class="contact-item"><v-icon>mdi-phone-outline</v-icon><div><span>Telefone</span><strong>+244 925 668 789</strong></div></div>
            <div class="contact-item"><v-icon>mdi-clock-outline</v-icon><div><span>Horário</span><strong>Segunda a sexta: 08h às 17h</strong><strong>Sábado: 08h às 15h</strong></div></div>
          </div>
        </div>
      </v-container>
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
    { label: 'SHST', icon: 'mdi-shield-check-outline' },
    { label: 'SIG - Sistemas de Informação Geográfica', icon: 'mdi-map-marker-radius-outline' },
    { label: 'PGR - Plano de Gestão de Resíduos', icon: 'mdi-recycle' },
    { label: 'EIA - Estudo de Impacto Ambiental', icon: 'mdi-file-document-outline' },
  ]
  const values = [
    { title: 'Missão', icon: 'mdi-target', description: 'Prestar serviços ambientais de qualidade, contribuindo para a proteção do ambiente e um desenvolvimento sustentável.' },
    { title: 'Visão', icon: 'mdi-eye-outline', description: 'Ser uma referência na prestação de serviços ambientais, reconhecida pelo profissionalismo e responsabilidade.' },
    { title: 'Valores', icon: 'mdi-hand-heart-outline', description: 'Responsabilidade, ética, qualidade, inovação e respeito pelas pessoas e pelo meio ambiente.' },
  ]
</script>

<style scoped>
.about-page { background: #f7faf8; color: #263238; }
.about-hero { position: relative; height: 235px; min-height: 235px; display: flex; align-items: center; overflow: hidden; background: url("https://images.unsplash.com/photo-1538300342682-cf57afb97285?auto=format&fit=crop&w=2000&q=85") center 55% / cover; }
.hero-overlay { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(5,31,47,.92), rgba(5,31,47,.72) 50%, rgba(5,31,47,.35)); }
.hero-content { position: relative; z-index: 2; width: 100%; }
.hero-inner { width: min(1200px, calc(100% - 48px)); margin: 0 auto; }
.hero-breadcrumb { display: flex; align-items: center; gap: 7px; margin-bottom: 10px; color: rgba(255,255,255,.65); font-size: .68rem; font-weight: 500; }
.hero-breadcrumb span:last-child { color: #fff; }
.hero-line { width: 38px; height: 2px; margin-bottom: 9px; background: #52d094; border-radius: 4px; }
.hero-kicker, .section-kicker { margin: 0 0 4px; color: #52d094; font-size: .58rem; font-weight: 800; letter-spacing: .15rem; }
.about-hero h1 { max-width: 700px; margin: 0; color: #fff; font-size: clamp(1rem, 5vw, 2.7em); font-weight: 800; line-height: 1.05; letter-spacing: -.045em; }
.about-hero h1 span { color: #61d39a; }
.hero-description { max-width: 570px; margin: 8px 0 0; color: rgba(255,255,255,.78); font-size: .75rem; line-height: 1.45; }
.hero-scroll { position: absolute; right: 35px; bottom: 18px; z-index: 3; display: flex; align-items: center; gap: 7px; color: rgba(255,255,255,.55); font-size: .58rem; }
.section-heading { max-width: 780px; margin-bottom: 2.5rem; }
.section-heading h2, .training-section h2 { margin: 0; color: #0d3b5c; font-size: clamp(1.9rem, 3vw, 2.8rem); line-height: 1.15; }
.section-description, .training-description { margin-top: 1rem; color: #64727d; line-height: 1.7; }
.services-section, .about-values { padding: 5.5rem 0; background: #fff; }
.service-card { display: flex; gap: 1.25rem; height: 100%; padding: 1.8rem; border: 1px solid #e3ebe6; border-radius: 12px; background: #f8fbf9; }
.service-icon { flex: 0 0 58px; width: 58px; height: 58px; display: grid; place-items: center; border-radius: 12px; color: #2e7d32; background: #e4f4e5; }
.service-card h3 { margin: 0 0 .6rem; color: #0d3b5c; }.service-card p, .service-card ul { color: #52606d; line-height: 1.6; }.service-card p { margin: 0 0 1rem; }
.training-section { padding: 5.5rem 0; background: #edf7f0; }.training-list { display: grid; gap: .8rem; margin-top: 2rem; }.training-item { display: flex; align-items: center; gap: .8rem; padding: .85rem 1rem; background: #fff; color: #0d3b5c; font-weight: 600; }.training-item .v-icon { color: #2e7d32; }
.training-highlight { min-height: 330px; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 3rem; text-align: center; border-radius: 18px; color: #fff; background: linear-gradient(135deg, #0d3b5c, #176b4f); }.training-highlight .v-icon { margin-bottom: 1.25rem; color: #8ed58b; }.training-highlight h3 { margin: 0 0 .75rem; }.training-highlight p { max-width: 430px; color: rgba(255,255,255,.85); line-height: 1.7; }
.value-item { height: 100%; padding: 2rem; border-top: 4px solid #66bb6a; background: #f7faf8; }.value-icon { width: 58px; height: 58px; display: grid; place-items: center; border-radius: 50%; color: #2e7d32; background: #e5f4e7; }.value-item h3 { margin: 1.25rem 0 .65rem; color: #0d3b5c; }.value-item p { margin: 0; color: #52606d; line-height: 1.7; }
.contact-section { padding: 5rem 0; color: #fff; background: #0d3b5c; }.contact-wrapper { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }.contact-content h2 { max-width: 600px; margin: 0; font-size: clamp(2rem, 3vw, 3rem); line-height: 1.15; }.contact-content > p:last-child { max-width: 580px; margin-top: 1.25rem; color: rgba(255,255,255,.8); line-height: 1.7; }.contact-info { display: grid; gap: 1rem; }.contact-item { display: flex; align-items: flex-start; gap: 1rem; padding: 1.25rem; border: 1px solid rgba(255,255,255,.12); background: rgba(255,255,255,.06); }.contact-item > .v-icon { color: #8ed58b; }.contact-item div { display: flex; flex-direction: column; gap: .3rem; }.contact-item span { color: rgba(255,255,255,.65); font-size: .8rem; }.contact-item strong { color: #fff; font-size: .95rem; }
@media (max-width: 900px) { .contact-wrapper { grid-template-columns: 1fr; gap: 2.5rem; } }
@media (max-width: 600px) { .about-hero { height: 235px; min-height: 235px; background-position: 62% center; }.hero-overlay { background: linear-gradient(180deg, rgba(5,31,47,.72), rgba(5,31,47,.94)); }.hero-inner { width: calc(100% - 32px); }.hero-breadcrumb { margin-bottom: 8px; font-size: .62rem; }.hero-line { width: 30px; margin-bottom: 7px; }.hero-kicker { font-size: .52rem; letter-spacing: .12rem; }.about-hero h1 { max-width: 100%; font-size: clamp(1rem, 8vw, 2rem); }.hero-description { max-width: 100%; margin-top: 7px; font-size: .68rem; }.hero-scroll { display: none; }.services-section, .training-section, .about-values, .contact-section { padding: 3.5rem 0; }.service-card { flex-direction: column; }.training-highlight { min-height: 280px; margin-top: 1rem; padding: 2rem; } }
</style>
