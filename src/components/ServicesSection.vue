<template>
  <section id="services" class="services-section py-12">
    <v-container>
      <div class="section-heading">
        <div>
          <p class="section-kicker">O QUE FAZEMOS</p>
          <h2 class="section-title">Soluções ambientais para decisões mais sustentáveis</h2>
        </div>

        <p class="section-intro">
          Unimos conhecimento técnico e experiência prática para ajudar organizações a reduzir
          riscos e melhorar o seu desempenho ambiental.
        </p>
      </div>

      <v-row class="service-grid">
        <v-col
          v-for="service in services"
          :key="service.title"
          cols="12"
          lg="3"
          sm="6"
        >
          <article class="service-card" :style="{ '--service-accent': service.accent }">
            <div class="service-image">
              <v-img :alt="service.imageAlt" cover :src="service.image" />

              <div class="service-icon">
                <v-icon :icon="service.icon" size="25" />
              </div>
            </div>

            <div class="service-content">
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>

              <router-link
                :aria-label="`Saiba mais sobre ${service.title}`"
                class="service-more"
                :to="`/servicos/${service.id}`"
              >
                Saiba mais
                <v-icon end icon="mdi-arrow-right" size="small" />
              </router-link>
            </div>
          </article>
        </v-col>
      </v-row>

    </v-container>

    <div class="sectors-section">
      <v-container fluid>
        <div class="sectors-heading">
          <p class="section-kicker">ONDE ACTUAMOS</p>
          <h2 class="sectors-title">Sectores que atendemos</h2>

          <p class="sectors-intro">
            Adaptamos as nossas soluções ambientais aos desafios de cada actividade.
          </p>
        </div>

        <v-row class="sector-grid">
          <v-col
            v-for="sector in sectors"
            :key="sector.title"
            cols="12"
            lg="2"
            sm="6"
          >
            <article class="sector-card" :style="{ '--sector-accent': sector.accent }">
              <div class="sector-image">
                <v-img :alt="sector.imageAlt" cover :src="sector.image" />
              </div>

              <div class="sector-content">
                <div class="sector-title-row">
                  <div class="sector-icon">
                    <v-icon :icon="sector.icon" size="19" />
                  </div>

                  <h3>{{ sector.title }}</h3>
                </div>

                <p>{{ sector.description }}</p>
              </div>
            </article>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </section>
</template>

<script setup lang="ts">
  const services = [
    {
      id: 1,
      title: 'Consultoria Ambiental',
      description:
        'Licenciamento, estudos ambientais e apoio técnico para decisões responsáveis e conformes.',
      image:
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85',
      imageAlt: 'Profissionais a analisar um projeto numa sala de reuniões',
      icon: 'mdi-leaf',
      accent: '#87502e',
    },
    {
      id: 2,
      title: 'Gestão de Resíduos',
      description:
        'Segregação, recolha e valorização de resíduos para uma gestão mais eficiente e sustentável.',
      image:
        'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=900&q=85',
      imageAlt: 'Contentores de reciclagem para diferentes tipos de resíduos',
      icon: 'mdi-recycle',
      accent: '#328b3c',
    },
    {
      id: 3,
      title: 'Monitorização Ambiental',
      description:
        'Acompanhamento da qualidade do ar, água, solo e ruído com relatórios técnicos especializados.',
      image:
        'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=900&q=85',
      imageAlt: 'Técnico a realizar medições ambientais no terreno',
      icon: 'mdi-chart-box-outline',
      accent: '#176092',
    },
    {
      id: 4,
      title: 'Formação',
      description:
        'Cursos e capacitações em ambiente, gestão de resíduos, higiene e segurança no trabalho.',
      image:
        'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=85',
      imageAlt: 'Formador a orientar uma sessão de aprendizagem em sala',
      icon: 'mdi-school',
      accent: '#0872a5',
    },
  ]

  const sectors = [
    {
      title: 'Indústria',
      icon: 'mdi-factory',
      image:
        'https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1200&q=85',
      imageAlt: 'Instalação industrial com estruturas metálicas',
      accent: '#328b3c',
    },
    {
      title: 'Mineração',
      icon: 'mdi-pickaxe',
      image:
        'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1000&q=85',
      imageAlt: 'Instalações técnicas e equipamentos numa área de exploração',
      accent: '#176092',
    },
    {
      title: 'Petróleo e gás',
      icon: 'mdi-fish',
      image:
        'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1000&q=85',
      imageAlt: 'Oceano e actividade costeira ligados ao sector das pescas',
      accent: '#0872a5',
    },
    {
      title: 'Construção',
      icon: 'mdi-crane',
      image:
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=85',
      imageAlt: 'Profissionais a trabalhar num estaleiro de construção',
      accent: '#87502e',
    },
    {
      title: 'Comércio e serviço',
      icon: 'mdi-crane',
      image:
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=85',
      imageAlt: 'Profissionais a trabalhar num estaleiro de construção',
      accent: '#87502e',
    },
    {
      title: 'Instituições públicas',
      icon: 'mdi-crane',
      image:
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=85',
      imageAlt: 'Profissionais a trabalhar num estaleiro de construção',
      accent: '#87502e',
    },
  ]

</script>

<style scoped>
.services-section {
  background: #f5f7f8;
}

.section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2rem;
}

.section-kicker {
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  margin-bottom: 0.75rem;
}

.section-title {
  color: #16352b;
  font-size: clamp(1.75rem, 3vw, 2.75rem);
  line-height: 1.1;
  max-width: 620px;
}

.section-intro {
  color: #52635b;
  max-width: 380px;
}

.service-grid {
  row-gap: 1.25rem;
}

.service-card {
  overflow: hidden;
  height: 100%;
  background: #fff;
  border-radius: 9px;
  box-shadow: 0 3px 14px rgba(22, 53, 43, 0.1);
  transition: transform 220ms ease, box-shadow 220ms ease;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 24px rgba(22, 53, 43, 0.16);
}

.service-image {
  position: relative;
}

.service-image :deep(.v-img) {
  height: 148px;
}

.service-icon {
  position: absolute;
  left: 0.75rem;
  bottom: -1.25rem;
  display: grid;
  width: 46px;
  height: 46px;
  place-items: center;
  color: #fff;
  background: var(--service-accent);
  border: 3px solid #fff;
  border-radius: 50%;
}

.service-content {
  display: flex;
  min-height: 158px;
  flex-direction: column;
  padding: 0.9rem 0.9rem 0.8rem;
}

.service-content h3 {
  margin: 0 0 0.5rem;
  color: #18364e;
  font-size: 1rem;
  line-height: 1.3;
}

.service-content p {
  margin: 0 0 0.9rem;
  color: #5f6971;
  font-size: 0.85rem;
  line-height: 1.45;
}

.service-more {
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  justify-content: center;
  gap: 0.25rem;
  min-width: 128px;
  margin-top: auto;
  padding: 0.45rem 1rem;
  color: #fff;
  background: var(--service-accent);
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
  text-decoration: none;
  transition: filter 180ms ease, transform 180ms ease;
}

.service-more:hover {
  filter: brightness(0.9);
  transform: translateY(-1px);
}

.sectors-section {
  margin-top: 3rem;
  padding-top: 2rem;
  padding: 2rem;
  background-image:
    url('https://images.unsplash.com/photo-1498925008800-019c7d59d903?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-position: center;
  background-size: cover;
  border: 1px solid rgba(223, 231, 226, 0.8);
  border-radius: 0px;
}

.sectors-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.sectors-heading .section-kicker {
  margin-bottom: 0.5rem;
}

.sectors-title {
  margin: 0;
  color: #fff;
  font-size: clamp(1.6rem, 2.5vw, 2.25rem);
  line-height: 1.2;
}

.sectors-intro {
  max-width: 360px;
  margin: 0 0 0.2rem;
  color: #fff;
  line-height: 1.55;
}

.sector-grid {
  row-gap: 1rem;
}

.sector-card {
  position: relative;
  isolation: isolate;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  height: 100%;
  min-height: 180px;
  background: #16352b;
  border-radius: 9px;
  box-shadow: 0 3px 14px rgba(22, 53, 43, 0.1);
  transition: transform 220ms ease, box-shadow 220ms ease;
}

.sector-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 9px 22px rgba(22, 53, 43, 0.16);
}

.sector-image {
  position: absolute;
  z-index: -1;
  inset: 0;
}

.sector-image :deep(.v-img) {
  height: 100%;
}

.sector-image::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(12, 31, 28, 0.18), rgba(12, 31, 28, 0.82));
  content: '';
}

.sector-icon {
  display: grid;
  width: 34px;
  height: 34px;
  flex: 0 0 34px;
  place-items: center;
  color: #fff;
  background: var(--sector-accent);
  border: 2px solid #fff;
  border-radius: 50%;
}

.sector-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
}

.sector-title-row {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  margin-bottom: -7.6rem;
}

.sector-card h3 {
  margin: 0;
  color: #fff;
  font-size: 0.8rem;
  line-height: 1.25;
}

.sector-card p {
  margin: 0 0 0.6rem 2.9rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.76rem;
  line-height: 1.35;
}

.sector-more {
  display: inline-flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  gap: 0.25rem;
  min-width: 112px;
  margin-top: auto;
  padding: 0.35rem 0.85rem;
  color: #fff;
  background: var(--sector-accent);
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  text-decoration: none;
  transition: filter 180ms ease, transform 180ms ease;
}

.sector-more:hover {
  filter: brightness(0.9);
  transform: translateY(-1px);
}

@media (max-width: 700px) {
  .section-heading {
    align-items: start;
    flex-direction: column;
    gap: 1rem;
  }

  .sectors-heading {
    align-items: flex-start;
    flex-direction: column;
    gap: 0.75rem;
  }

  .sector-card {
    min-height: 170px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .service-card,
  .service-more,
  .sector-card,
  .sector-more {
    transition: none;
  }

  .service-card:hover,
  .service-more:hover,
  .sector-card:hover,
  .sector-more:hover {
    transform: none;
  }
}
</style>
