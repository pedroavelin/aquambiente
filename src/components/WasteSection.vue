<template>
  <section id="waste" class="waste-section">
    <v-container class="waste-container" fluid>
      <div class="waste-banner">

        <!-- CONTEÚDO -->
        <div class="waste-content">
          <h2 class="waste-title">
            DO RESÍDUO AO RECURSO.
          </h2>

          <p class="waste-text">
            Promovemos a redução, reutilização, reciclagem e valorização
            de resíduos, transformando desafios ambientais em oportunidades
            sustentáveis.
          </p>

          <v-btn
            class="waste-button"
            variant="flat"
            size="small"
          >
            SAIBA MAIS SOBRE GESTÃO DE RESÍDUOS
          </v-btn>
        </div>

        <!-- PROCESSO -->
        <div class="process-flow">

          <!-- RECOLHA -->
          <div class="process-step">
            <div class="process-circle">
              <v-icon icon="mdi-truck-outline" />
            </div>

            <span>Recolha</span>
          </div>

          <div class="process-arrow">
            <v-icon icon="mdi-arrow-right" />
          </div>

          <!-- TRIAGEM -->
          <div class="process-step">
            <div class="process-circle">
              <v-icon icon="mdi-trash-can-outline" />
            </div>

            <span>Triagem</span>
          </div>

          <div class="process-arrow">
            <v-icon icon="mdi-arrow-right" />
          </div>

          <!-- VALORIZAÇÃO -->
          <div class="process-step">
            <div class="process-circle">
              <v-icon icon="mdi-leaf" />
            </div>

            <span>Valorização</span>
          </div>

          <div class="process-arrow">
            <v-icon icon="mdi-arrow-right" />
          </div>

          <!-- DESTINO FINAL -->
          <div class="process-step final-step">
            <div class="process-circle">
              <v-icon icon="mdi-earth" />
            </div>

            <span>
              Destino Final<br />
              Adequado
            </span>
          </div>
        </div>

        <!-- IMAGEM -->
        <div class="waste-image-wrapper">
          <img
            :src="wasteImageUrl"
            alt="Gestão de resíduos"
            class="waste-image"
          >
        </div>

      </div>
    </v-container>
  </section>
</template>

<script lang="ts" setup>
  import wasteImageUrl from '@/assets/empresa/do-resido-ao-recursos.jpeg'
</script>

<style scoped>
/* =========================================================
   SECTION
========================================================= */

.waste-section {
  width: 100%;
  background: #fff;
}

/* =========================================================
   BANNER
========================================================= */

.waste-banner {
  position: relative;
  width: 100%;
  min-height: 210px;

  display: grid;
  grid-template-columns:
    minmax(300px, 1.35fr)
    minmax(480px, 2fr)
    230px;

  align-items: center;

  overflow: hidden;

  background: #005b2b;

  border-radius: 8px;

  box-shadow:
    0 8px 25px rgba(0, 0, 0, 0.10);
}

/* =========================================================
   CONTENT
========================================================= */

.waste-content {
  height: 100%;
  padding: 28px 24px 24px 34px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  z-index: 2;
}

.waste-title {
  margin: 0 0 12px;

  color: #ffffff;

  font-size: 20px;
  font-weight: 800;
  line-height: 1.1;

  letter-spacing: -0.02em;
}

.waste-text {
  max-width: 315px;

  margin: 0 0 17px;

  color: rgba(255, 255, 255, 0.78);

  font-size: 10.5px;
  font-weight: 400;
  line-height: 1.7;
}

/* =========================================================
   BUTTON
========================================================= */

.waste-button {
  align-self: flex-start;

  height: 32px !important;
  min-height: 32px !important;

  padding: 0 16px !important;

  color: #ffffff !important;
  background: #16a34a !important;

  border-radius: 5px;

  font-size: 9px !important;
  font-weight: 700;

  letter-spacing: 0.01em;

  box-shadow: none !important;
}

.waste-button:hover {
  background: #22b455 !important;
}

/* =========================================================
   PROCESS FLOW
========================================================= */

.process-flow {
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

/* =========================================================
   STEP
========================================================= */

.process-step {
  min-width: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 7px;

  color: #ffffff;

  text-align: center;
}

.process-step span {
  min-height: 27px;

  color: rgba(255, 255, 255, 0.92);

  font-size: 10px;
  font-weight: 600;
  line-height: 1.35;
}

/* =========================================================
   CIRCLE
========================================================= */

.process-circle {
  width: 70px;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(255, 255, 255, 0.28);

  border-radius: 50%;

  color: #ffffff;

  background: rgba(0, 80, 38, 0.25);

  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.03);
}

.process-circle .v-icon {
  font-size: 30px;
}

/* =========================================================
   ARROWS
========================================================= */

.process-arrow {
  display: flex;
  align-items: center;
  justify-content: center;

  color: rgba(255, 255, 255, 0.8);

  flex-shrink: 0;
}

.process-arrow .v-icon {
  font-size: 19px;
}

/* =========================================================
   IMAGE
========================================================= */

.waste-image-wrapper {
  position: relative;
  height: 100%;
  min-height: 210px;
  overflow: hidden;
  border-radius: 0 8px 8px 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
}

.waste-image {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 210px;
  object-fit: cover;
  object-position: center;
  filter: saturate(0.92) contrast(1.04);
}

/* =========================================================
   TABLET
========================================================= */

@media (max-width: 1050px) {
  .waste-banner {
    grid-template-columns:
      1.1fr
      1.8fr
      190px;
  }

  .waste-content {
    padding-left: 24px;
  }

  .process-circle {
    width: 60px;
    height: 60px;
  }

  .process-circle .v-icon {
    font-size: 26px;
  }

  .process-step {
    min-width: 65px;
  }

  .process-arrow {
    margin: 0 -3px;
  }

  .waste-image-wrapper,
  .waste-image {
    min-height: 210px;
  }
}

/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 800px) {
  .waste-section {
    padding: 15px;
  }

  .waste-banner {
    display: flex;
    flex-direction: column;

    min-height: auto;

    border-radius: 8px;
  }

  .waste-content {
    width: 100%;
    padding: 28px 25px 20px;
  }

  .waste-title {
    font-size: 21px;
  }

  .waste-text {
    max-width: 100%;
    font-size: 11px;
  }

  .process-flow {
    width: 100%;

    min-height: 130px;

    padding: 10px 15px 25px;

    gap: 4px;
  }

  .process-circle {
    width: 55px;
    height: 55px;
  }

  .process-circle .v-icon {
    font-size: 24px;
  }

  .process-step {
    min-width: 60px;
  }

  .process-step span {
    font-size: 9px;
  }

  .process-arrow .v-icon {
    font-size: 16px;
  }

  .waste-image-wrapper {
    width: 100%;
    height: 220px;

    min-height: 220px;

    border-radius: 0 0 8px 8px;
  }

  .waste-image {
    min-height: 220px;
  }
}

/* =========================================================
   SMALL MOBILE
========================================================= */

@media (max-width: 480px) {
  .process-flow {
    gap: 1px;
  }

  .process-circle {
    width: 48px;
    height: 48px;
  }

  .process-circle .v-icon {
    font-size: 21px;
  }

  .process-step {
    min-width: 52px;
  }

  .process-step span {
    font-size: 8px;
  }

  .process-arrow .v-icon {
    font-size: 13px;
  }
}
</style>