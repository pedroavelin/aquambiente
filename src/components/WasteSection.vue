<template>
  <section id="waste" class="waste-section py-16">
    <v-container>
      <v-row align="center" class="waste-row">
        <v-col cols="12" md="6" class="content-column">
          <div class="section-kicker-wrap">
            <p class="section-kicker">GESTÃO DE RESÍDUOS</p>
            <span class="section-kicker-line" />
          </div>

          <h2 class="waste-title">DO RESÍDUO AO RECURSO.</h2>

          <p class="waste-text">
            Promovemos a redução, reclassificação, reciclagem ambiental e oportunidades sustentáveis ao transformar resíduos em recursos valiosos.
          </p>

          <div class="process-flow">
            <div class="flow-item">
              <div class="flow-icon">
                <v-icon size="28">mdi-recycle</v-icon>
              </div>
              <div class="flow-label">Recolha</div>
            </div>

            <div class="flow-item">
              <div class="flow-icon">
                <v-icon size="28">mdi-sort-ascending</v-icon>
              </div>
              <div class="flow-label">Triagem</div>
            </div>

            <div class="flow-item">
              <div class="flow-icon">
                <v-icon size="28">mdi-leaf</v-icon>
              </div>
              <div class="flow-label">Valorização</div>
            </div>

            <div class="flow-item">
              <div class="flow-icon">
                <v-icon size="28">mdi-earth</v-icon>
              </div>
              <div class="flow-label">Destino Final Adequado</div>
            </div>
          </div>

          <v-btn
            class="section-cta"
            color="green-accent-4"
            variant="outlined"
            size="large"
          >
            SAIBA MAIS SOBRE GESTÃO DE RESÍDUOS
          </v-btn>
        </v-col>

        <v-col cols="12" md="6">
          <div class="image-shell">
            <v-img
              src="https://images.unsplash.com/photo-1532996122724-8f3c2cd83c5d?w=500&h=400&fit=crop"
              height="420"
              cover
              class="waste-image"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.waste-section {
  position: relative;
  background: linear-gradient(180deg, #f8faf8 0%, #eef4ef 100%);
  padding-block: 3.5rem;
}

.waste-row {
  gap: 1rem;
}

.content-column {
  padding-right: clamp(1rem, 3vw, 3rem);
}

.section-kicker-wrap {
  display: inline-flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.section-kicker {
  margin: 0;
  color: #0d3b5c;
  font-size: clamp(1.3rem, 2vw, 2.2rem);
  font-weight: 800;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  line-height: 1;
}

.section-kicker-line {
  display: block;
  width: 86px;
  height: 4px;
  background: linear-gradient(90deg, #66bb6a, rgba(102, 187, 106, 0.5));
  border-radius: 999px;
}

.waste-title {
  margin: 0 0 1rem;
  font-size: clamp(2rem, 2.5vw, 3rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.04em;
  color: #0f172a;
}

.waste-text {
  margin: 0;
  max-width: 34rem;
  font-size: 1.05rem;
  line-height: 1.7;
  color: #4b5d67;
}

.process-flow {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem;
  margin: 2rem 0 1.5rem;
}

.flow-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  min-height: 120px;
  padding: 1rem 0.75rem;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(13, 59, 92, 0.08);
  border-radius: 16px;
  box-shadow: 0 12px 24px rgba(13, 59, 92, 0.06);
}

.flow-icon {
  width: 58px;
  height: 58px;
  background: linear-gradient(135deg, rgba(102, 187, 106, 0.18), rgba(102, 187, 106, 0.32));
  border: 1px solid rgba(102, 187, 106, 0.28);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1a7b3c;
}

.flow-label {
  font-size: 0.8rem;
  font-weight: 700;
  text-align: center;
  line-height: 1.3;
  color: #0d3b5c;
}

.section-cta {
  min-width: 0;
  border-radius: 999px;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.image-shell {
  background: linear-gradient(180deg, rgba(102, 187, 106, 0.06), rgba(13, 59, 92, 0.02));
  border: 1px solid rgba(13, 59, 92, 0.08);
  border-radius: 22px;
  padding: 0.75rem;
  box-shadow: 0 18px 38px rgba(17, 24, 39, 0.08);
}

.waste-image {
  border-radius: 18px;
  overflow: hidden;
}

@media (max-width: 960px) {
  .waste-section {
    padding-block: 2.5rem;
  }

  .content-column {
    padding-right: 0;
    margin-bottom: 1rem;
  }

  .process-flow {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .process-flow {
    grid-template-columns: 1fr;
  }
}
</style>
