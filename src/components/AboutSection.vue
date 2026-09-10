<template>
  <section id="about" class="about-section py-12">
    <v-container>
      <!-- About and Vision Section -->
      <v-row align="center" class="mb-12">
        <!-- Left - Dark Box with About -->
        <v-col
          class="mb-6 mb-md-0"
          cols="12"
          md="6"
        >
          <div class="about-box">
            <h2 class="about-title mb-4">SOBRE A AQUAMBIENTE</h2>

            <p class="about-text mb-4">
              A Aquambiente – Consultoria Ambiental & Gestão de Resíduos, Lda. é uma empresa angolana especializada em soluções ambientais.
            </p>

            <p class="about-text mb-6">
              Trabalhamos para promover o desenvolvimento sustentável através de serviços de consultoria, gestão de resíduos, monitorização ambiental e oportunidades sustentáveis.
            </p>

            <v-btn
              class="text-white font-weight-bold"
              color="green-accent-4"
            >
              COMECE A EMPRESA
            </v-btn>
          </div>
        </v-col>

        <!-- Right - Green Box with Vision -->
        <v-col cols="12" md="6">
          <div class="vision-box">
            <div class="vision-quote">❝</div>

            <p class="vision-text mb-4">
              Ser referência nacional em soluções ambientais, contribuindo para um Angola limpo, sustentável e com maior qualidade de vida.
            </p>

            <h4 class="vision-title">A NOSSA VISÃO</h4>
          </div>
        </v-col>
      </v-row>

      <!-- Statistics Section -->
      <v-row class="stats-row">
        <v-col cols="6" sm="3">
          <div class="stat-card">
            <v-icon
              class="mb-2"
              color="green-accent-4"
              size="48"
            >
              mdi-leaf
            </v-icon>
            <div class="stat-number">6+</div>
            <div class="stat-label">EXPERIÊNCIA</div>
          </div>
        </v-col>

        <v-col cols="6" sm="3">
          <div class="stat-card">
            <v-icon
              class="mb-2"
              color="green-accent-4"
              size="48"
            >
              mdi-file-check
            </v-icon>
            <div class="stat-number">200+</div>
            <div class="stat-label">PROJECTOS REALIZADOS</div>
          </div>
        </v-col>

        <v-col cols="6" sm="3">
          <div class="stat-card">
            <v-icon
              class="mb-2"
              color="green-accent-4"
              size="48"
            >
              mdi-account-multiple
            </v-icon>
            <div class="stat-number">100+</div>
            <div class="stat-label">CLIENTES SATISFEITOS</div>
          </div>
        </v-col>

        <v-col cols="6" sm="3">
          <div class="stat-card">
            <v-icon
              class="mb-2"
              color="green-accent-4"
              size="48"
            >
              mdi-map-marker
            </v-icon>
            <div class="stat-number">18</div>
            <div class="stat-label">PROVÍNCIAS ATENDIDAS</div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.about-section {
  background: white;
}

.about-box {
  background: linear-gradient(135deg, #0d3b5c 0%, #0f4a6b 100%);
  color: white;
  padding: 3rem;
  border-radius: 12px;
}

.about-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
}

.about-text {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.vision-box {
  background: #1a7b3c;
  color: white;
  padding: 3rem;
  border-radius: 12px;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.vision-quote {
  font-size: 4rem;
  color: rgba(255, 255, 255, 0.3);
  line-height: 1;
  margin-bottom: 1rem;
}

.vision-text {
  font-size: 1.1rem;
  line-height: 1.6;
  font-style: italic;
  color: white;
}

.vision-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
}

.stats-row {
  margin-top: 3rem;
  gap: 1rem;
}

.stat-card {
  text-align: center;
  padding: 2rem 1rem;
  background: #f5f5f5;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.stat-number {
  font-size: 2.2rem;
  font-weight: 700;
  color: #0d3b5c;
  margin: 0.5rem 0;
}

.stat-label {
  color: #666;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

@media (max-width: 768px) {
  .about-box,
  .vision-box {
    padding: 2rem;
  }

  .about-title {
    font-size: 1.5rem;
  }

  .vision-text {
    font-size: 1rem;
  }
}
</style>
