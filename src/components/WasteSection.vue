<template>
  <section id="waste" class="waste-section py-16">
    <v-container>
      <v-row align="center">
        <!-- Left - Green Box with Content -->
        <v-col cols="12" md="6" class="mb-6 mb-md-0">
          <div class="waste-box">
            <h2 class="waste-title mb-4">DO RESÍDUO AO RECURSO.</h2>
            <p class="waste-text mb-6">
              Promovemos a redução, reclassificação, reciclagem ambiental e oportunidades sustentáveis ao transformar resíduos em recursos valiosos.
            </p>

            <!-- Process Flow -->
            <div class="process-flow">
              <div class="flow-item">
                <div class="flow-icon">
                  <v-icon size="32">mdi-recycle</v-icon>
                </div>
                <div class="flow-text">
                  <div class="flow-label">Recolha</div>
                </div>
              </div>

              <div class="flow-arrow">→</div>

              <div class="flow-item">
                <div class="flow-icon">
                  <v-icon size="32">mdi-sort-ascending</v-icon>
                </div>
                <div class="flow-text">
                  <div class="flow-label">Triagem</div>
                </div>
              </div>

              <div class="flow-arrow">→</div>

              <div class="flow-item">
                <div class="flow-icon">
                  <v-icon size="32">mdi-leaf</v-icon>
                </div>
                <div class="flow-text">
                  <div class="flow-label">Valorização</div>
                </div>
              </div>

              <div class="flow-arrow">→</div>

              <div class="flow-item">
                <div class="flow-icon">
                  <v-icon size="32">mdi-earth</v-icon>
                </div>
                <div class="flow-text">
                  <div class="flow-label">Destino Final<br/>Adequado</div>
                </div>
              </div>
            </div>

            <v-btn
              color="white"
              text-color="green-accent-4"
              class="font-weight-bold mt-8"
              size="large"
            >
              SAIBA MAIS SOBRE GESTÃO DE RESÍDUOS
            </v-btn>
          </div>
        </v-col>

        <!-- Right - Image -->
        <v-col cols="12" md="6">
          <v-img
            src="https://images.unsplash.com/photo-1532996122724-8f3c2cd83c5d?w=500&h=400&fit=crop"
            height="400"
            cover
            class="rounded-lg"
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.waste-section {
  background: white;
}

.waste-box {
  background: #1a7b3c;
  color: white;
  padding: 3rem;
  border-radius: 12px;
}

.waste-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
}

.waste-text {
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
}

.process-flow {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 2rem 0;
}

.flow-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  flex: 0 0 auto;
}

.flow-icon {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.flow-label {
  font-size: 0.75rem;
  font-weight: 600;
  text-align: center;
  color: white;
  min-width: 50px;
}

.flow-arrow {
  color: white;
  font-size: 1.5rem;
  margin: 1.5rem 0.25rem 0 0.25rem;
  font-weight: bold;
}

@media (max-width: 768px) {
  .waste-box {
    padding: 2rem;
  }

  .waste-title {
    font-size: 1.5rem;
  }

  .process-flow {
    gap: 0.25rem;
  }

  .flow-label {
    font-size: 0.7rem;
    min-width: 45px;
  }

  .flow-arrow {
    font-size: 1.2rem;
  }
}

.waste-section {
  background: #f5f5f5;
}

.section-header {
  text-align: center;
}

.process-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.process-step {
  text-align: center;
  position: relative;
  padding: 2rem 1rem;
}

.step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: #66bb6a;
  color: white;
  border-radius: 50%;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.step-icon {
  margin-bottom: 1rem;
}

.step-title {
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
}

.step-description {
  color: #666;
  font-size: 0.9rem;
  margin: 0;
}

.arrow-container {
  display: flex;
  justify-content: center;
  position: absolute;
  right: -30px;
  top: 50%;
  transform: translateY(-50%);
}

@media (max-width: 960px) {
  .arrow-container {
    display: none;
  }
}

.benefit-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: rgba(102, 187, 106, 0.2);
  border-radius: 50%;
}
</style>
