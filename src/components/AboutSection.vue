<template>
  <section id="mission" class="about-section py-12">
    <v-container fluid>
      <!-- About and Vision Section -->
      <v-row align="stretch" class="mb-12 about-row">
        <!-- Left - Dark Box with About -->
        <v-col class="mb-2 mb-md-0 about-col" cols="12" md="6">
          <div class="about-box">
            <h2 class="about-title mb-4">SOBRE A AQUAMBIENTE</h2>

            <p class="about-text mb-4">
              A Aquambiente – Consultoria Ambiental & Gestão de Resíduos, Lda. é uma empresa angolana especializada em soluções ambientais.
            </p>

            <p class="about-text mb-2">
              Trabalhamos para promover o desenvolvimento sustentável através de serviços de consultoria, gestão de resíduos, monitorização ambiental e oportunidades sustentáveis.
            </p>
            <v-btn
              class="text-white font-weight-bold"
              color="green-accent-4"
            >
              CONHEÇA A EMPRESA
            </v-btn>
          </div>
        </v-col>

        <!-- Center - Image -->
        <v-col cols="12" md="3" class="mb-2 mb-md-0 about-col">
          <div
            class="about-visual"
            :style="{ backgroundImage: `linear-gradient(135deg, rgba(17, 94, 66, 0.25), rgba(15, 45, 61, 0.6)), url('${aboutImage}')` }"
          >
            <div class="about-visual__overlay">
            </div>
          </div>
        </v-col>

        <!-- Right - Green Box with Vision -->
        <v-col cols="12" md="3" class="about-col">
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
      <v-row id="team" class="stats-row">
        <v-col cols="6" sm="3">
          <div class="stat-card">
            <v-icon
              class="stat-icon"
              color="green-accent-4"
              size="48"
            >
              mdi-leaf
            </v-icon>
            <div class="stat-content">
              <div class="stat-number">6+</div>
              <div class="stat-label">EXPERIÊNCIA</div>
            </div>
          </div>
        </v-col>

        <v-col cols="6" sm="3">
          <div class="stat-card">
            <v-icon
              class="stat-icon"
              color="green-accent-4"
              size="48"
            >
              mdi-file-check
            </v-icon>
            <div class="stat-content">
              <div class="stat-number">200+</div>
              <div class="stat-label">PROJECTOS REALIZADOS</div>
            </div>
          </div>
        </v-col>

        <v-col cols="6" sm="3">
          <div class="stat-card">
            <v-icon
              class="stat-icon"
              color="green-accent-4"
              size="48"
            >
              mdi-account-multiple
            </v-icon>
            <div class="stat-content">
              <div class="stat-number">100+</div>
              <div class="stat-label">CLIENTES SATISFEITOS</div>
            </div>
          </div>
        </v-col>

        <v-col cols="6" sm="3">
          <div class="stat-card">
            <v-icon
              class="stat-icon"
              color="green-accent-4"
              size="48"
            >
              mdi-map-marker
            </v-icon>
            <div class="stat-content">
              <div class="stat-number">18</div>
              <div class="stat-label">PROVÍNCIAS ATENDIDAS</div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
  import aboutImage from '@/assets/empresa/about-in-index.jpeg'
</script>

<style scoped>
.about-section {
  background: white;
}

.about-row {
  margin-left: 0;
  margin-right: 0;
  gap: 0;
  justify-content: center;
}

.about-col {
  display: flex;
  align-items: start;
  justify-content: start;
  padding: 0 !important;
  margin: 0;
}

.about-box {
  background: linear-gradient(135deg, #0f2d3d 0%, #0d4a62 60%, #0c6b52 100%);
  color: white;
  padding: 1.5rem 1.25rem;
  border-radius: 12px 0 0 12px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.about-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  width: 100%;
  text-align: left;
}

.about-box .v-btn {
  align-self: flex-start;
}

.about-text {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 0.75rem;
  width: 100%;
  text-align: left;
}

.about-visual {
  position: relative;
  min-height: 100%;
  height: 100%;
  min-height: 190px;
  width: 100%;
  border-radius: 0;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  box-shadow: 0 18px 36px rgba(17, 24, 39, 0.12);
}

.about-visual__overlay {
  position: absolute;
  inset: auto 0 0 0;
  padding: 1rem 1.25rem;
  background: linear-gradient(180deg, transparent, rgba(12, 27, 22, 0.72));
}

.about-visual__label {
  color: white;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.08rem;
  text-transform: uppercase;
}

.vision-box {
  background: linear-gradient(135deg, #1a7b3c 0%, #2f9d5c 55%, #78b76c 100%);
  color: white;
  padding: 1.5rem 1.25rem;
  border-radius: 0 12px 12px 0;
  min-height: 190px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
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
  margin-top: 0.75rem;
  gap: 0.5rem;
  justify-content: center;
}

.stat-card {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  gap: 0.75rem;
  padding: 0.9rem 0.6rem;
  background: linear-gradient(180deg, #f7faf7 0%, #edf3ee 100%);
  border: 1px solid rgba(13, 59, 92, 0.08);
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.stat-icon {
  margin-bottom: 0 !important;
  flex-shrink: 0;
}

.stat-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  border-color: rgba(26, 123, 60, 0.28);
}

.stat-number {
  font-size: 1.8rem;
  font-weight: 700;
  color: #0d3b5c;
  margin: 0.35rem 0;
}

.stat-label {
  color: #4b5563;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08rem;
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
