<template>
  <section
    id="laboratory"
    ref="laboratorySection"
    class="laboratory-section"
  >
    <!-- Elementos decorativos -->
    <div class="laboratory-glow laboratory-glow-one" />
    <div class="laboratory-glow laboratory-glow-two" />
    <div class="laboratory-grid" />

    <v-container class="laboratory-container">
      <v-row align="center">

        <!-- =====================================================
             CONTEÚDO
        ====================================================== -->
        <v-col
          cols="12"
          md="5"
          class="content-column"
        >
          <div class="content-inner">

            <div class="section-kicker-wrap">
              <h2 class="section-kicker">
                LABORATÓRIO E
                <span>MONITORIZAÇÃO</span>
              </h2>

              <span class="section-kicker-line" />
            </div>

            <p class="section-description">
              Contamos com equipamentos de última geração para análises
              laboratoriais e monitorização ambiental, garantindo dados
              precisos, fiáveis e tecnicamente fundamentados.
            </p>

            <div class="laboratory-features">

              <div class="laboratory-feature">
                <div class="feature-icon">
                  <v-icon icon="mdi-flask-outline" />
                </div>

                <div>
                  <strong>Análises precisas</strong>
                  <span>Resultados fiáveis e rastreáveis</span>
                </div>
              </div>

              <div class="laboratory-feature">
                <div class="feature-icon">
                  <v-icon icon="mdi-chart-line" />
                </div>

                <div>
                  <strong>Monitorização ambiental</strong>
                  <span>Dados para suporte à decisão</span>
                </div>
              </div>

            </div>
          </div>
        </v-col>


        <!-- =====================================================
             EQUIPAMENTOS
        ====================================================== -->
        <v-col
          cols="12"
          md="7"
          class="devices-column"
        >
          <div class="devices-area">

            <!-- Linha decorativa -->
            <div class="devices-line" />

            <div class="devices-layout">

              <!-- ESQUERDA -->
              <div class="device-stack device-stack-left">

                <div
                  v-for="(device, index) in devices.slice(0, 2)"
                  :key="device.title"
                  class="device-card"
                  :style="{ '--delay': `${index * 120}ms` }"
                >
                  <div class="device-number">
                    0{{ index + 1 }}
                  </div>

                  <div class="device-visual">
                    <img
                      :src="device.image"
                      :alt="device.title"
                      class="device-image"
                    >
                  </div>

                  <div class="device-title-wrap">
                    <p class="device-title">
                      {{ device.title }}
                    </p>
                  </div>

                  <div class="device-card-line" />
                </div>

              </div>


              <!-- CENTRO -->
              <div
                class="device-card device-card-center"
                style="--delay: 240ms"
              >
                <div class="device-number">
                  05
                </div>

                <div class="device-featured-label">
                  EQUIPAMENTO DE CAMPO
                </div>

                <div class="device-visual">
                  <img
                    :src="devices[4].image"
                    :alt="devices[4].title"
                    class="device-image"
                  >
                </div>

                <div class="device-title-wrap">
                  <p class="device-title">
                    {{ devices[4].title }}
                  </p>
                </div>

                <div class="device-card-line" />
              </div>


              <!-- DIREITA -->
              <div class="device-stack device-stack-right">

                <div
                  v-for="(device, index) in devices.slice(2, 4)"
                  :key="device.title"
                  class="device-card"
                  :style="{ '--delay': `${360 + index * 120}ms` }"
                >
                  <div class="device-number">
                    0{{ index + 3 }}
                  </div>

                  <div class="device-visual">
                    <img
                      :src="device.image"
                      :alt="device.title"
                      class="device-image"
                    >
                  </div>

                  <div class="device-title-wrap">
                    <p class="device-title">
                      {{ device.title }}
                    </p>
                  </div>

                  <div class="device-card-line" />
                </div>

              </div>

            </div>
          </div>
        </v-col>

      </v-row>
    </v-container>
  </section>
</template>


<script lang="ts" setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const laboratorySection = ref<HTMLElement | null>(null)

const devices = [
  {
    title: 'Analisador de\nQualidade da Água',
    image: new URL(
      '@/assets/laboratorio_monitorizacao/e1.png',
      import.meta.url
    ).href,
  },
  {
    title: 'Amostrador de\nPartículas (PM2.5 / PM10)',
    image: new URL(
      '@/assets/laboratorio_monitorizacao/e2.png',
      import.meta.url
    ).href,
  },
  {
    title: 'Medidor de\nGases e VOCs',
    image: new URL(
      '@/assets/laboratorio_monitorizacao/e3.png',
      import.meta.url
    ).href,
  },
  {
    title: 'Sonómetro\nIntegrador',
    image: new URL(
      '@/assets/laboratorio_monitorizacao/e4.png',
      import.meta.url
    ).href,
  },
  {
    title: 'GPS / Equipamento\nde Campo',
    image: new URL(
      '@/assets/laboratorio_monitorizacao/e5.png',
      import.meta.url
    ).href,
  },
]

let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!laboratorySection.value) return

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          laboratorySection.value?.classList.add('is-visible')

          observer?.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.15,
    }
  )

  observer.observe(laboratorySection.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>


<style scoped>

/* =========================================================
   SECTION
========================================================= */

.laboratory-section {
  position: relative;
  isolation: isolate;

  overflow: hidden;

  padding: 5rem 0;

  background:
    linear-gradient(
      135deg,
      #f8fbfc 0%,
      #ffffff 45%,
      #f2f8f5 100%
    );

  color: #0d3b5c;
}

.laboratory-container {
  position: relative;
  z-index: 2;
}


/* =========================================================
   BACKGROUND DECORATION
========================================================= */

.laboratory-grid {
  position: absolute;
  inset: 0;

  z-index: -2;

  opacity: 0.3;

  background-image:
    linear-gradient(
      rgba(13, 59, 92, 0.035) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(13, 59, 92, 0.035) 1px,
      transparent 1px
    );

  background-size: 50px 50px;

  mask-image: linear-gradient(
    90deg,
    transparent,
    black 25%,
    black 75%,
    transparent
  );
}

.laboratory-glow {
  position: absolute;

  width: 320px;
  height: 320px;

  border-radius: 50%;

  filter: blur(70px);

  opacity: 0.18;

  pointer-events: none;

  z-index: -1;
}

.laboratory-glow-one {
  top: -150px;
  left: -100px;

  background: #53b77c;
}

.laboratory-glow-two {
  right: -130px;
  bottom: -150px;

  background: #3c88b3;
}


/* =========================================================
   CONTEÚDO
========================================================= */

.content-column {
  padding-right: clamp(1rem, 4vw, 4rem);
}

.content-inner {
  max-width: 470px;
}


/* =========================================================
   KICKER
========================================================= */

.section-kicker-wrap {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-bottom: 1.4rem;
}

.section-kicker-tag {
  display: inline-flex;

  margin-bottom: 0.65rem;

  color: #3b9b68;

  font-size: 0.68rem;
  font-weight: 800;

  letter-spacing: 0.12em;

  text-transform: uppercase;
}

.section-kicker {
  margin: 0;

  color: #0d3b5c;

  font-size: clamp(1.8rem, 3vw, 2.65rem);

  font-weight: 850;

  line-height: 1.05;

  letter-spacing: -0.055em;
}

.section-kicker span {
  display: block;

  color: #27875a;
}

.section-kicker-line {
  width: 58px;
  height: 4px;

  margin-top: 1rem;

  border-radius: 20px;

  background: linear-gradient(
    90deg,
    #35a96b,
    #87d5ae
  );
}


/* =========================================================
   DESCRIÇÃO
========================================================= */

.section-description {
  max-width: 430px;

  margin: 0 0 1.6rem;

  color: #536570;

  font-size: 0.95rem;

  line-height: 1.75;
}


/* =========================================================
   FEATURES
========================================================= */

.laboratory-features {
  display: flex;
  flex-direction: column;

  gap: 0.8rem;

  margin-bottom: 1.8rem;
}

.laboratory-feature {
  display: flex;
  align-items: center;

  gap: 0.75rem;
}

.feature-icon {
  width: 38px;
  height: 38px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;

  color: #2e9863;

  background: rgba(53, 169, 107, 0.09);

  border: 1px solid rgba(53, 169, 107, 0.15);
}

.feature-icon .v-icon {
  font-size: 19px;
}

.laboratory-feature strong {
  display: block;

  margin-bottom: 2px;

  color: #173e58;

  font-size: 0.78rem;
  font-weight: 750;
}

.laboratory-feature span {
  display: block;

  color: #75828a;

  font-size: 0.7rem;
}


/* =========================================================
   CTA
========================================================= */

.section-cta {
  min-width: 235px;

  color: #0d3b5c !important;

  border: 1px solid rgba(13, 59, 92, 0.28) !important;

  background: rgba(255, 255, 255, 0.65);

  font-size: 0.75rem;

  font-weight: 750;

  letter-spacing: 0.025em;

  box-shadow: 0 5px 15px rgba(13, 59, 92, 0.04);

  transition:
    transform 0.25s ease,
    background 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}

.section-cta:hover {
  transform: translateY(-3px);

  border-color: #35a96b !important;

  background: #ffffff;

  box-shadow:
    0 10px 25px rgba(13, 59, 92, 0.1);
}


/* =========================================================
   EQUIPAMENTOS
========================================================= */

.devices-column {
  padding-left: 0;
}

.devices-area {
  position: relative;

  padding: 1rem 0;
}

.devices-line {
  position: absolute;

  left: 5%;
  right: 5%;

  top: 50%;

  height: 1px;

  background: linear-gradient(
    90deg,
    transparent,
    rgba(53, 169, 107, 0.25),
    transparent
  );
}


/* =========================================================
   LAYOUT
========================================================= */

.devices-layout {
  position: relative;
  z-index: 2;

  display: grid;

  grid-template-columns:
    minmax(120px, 1fr)
    minmax(165px, 1.3fr)
    minmax(120px, 1fr);

  align-items: center;

  gap: 0.6rem;
}


/* =========================================================
   STACK
========================================================= */

.device-stack {
  display: flex;
  flex-direction: column;

  gap: 0.45rem;

  width: 100%;
}


/* =========================================================
   DEVICE CARD
========================================================= */

.device-card {
  position: relative;

  width: 100%;
  height: 155px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: flex-end;

  padding: 0.55rem;

  overflow: hidden;

  border: 1px solid rgba(13, 59, 92, 0.08);

  border-radius: 13px;

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.95),
      rgba(238, 248, 244, 0.82)
    );

  box-shadow:
    0 8px 25px rgba(13, 59, 92, 0.07);

  opacity: 0;

  transform:
    translateY(35px)
    scale(0.96);

  transition:
    transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.7s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;

  transition-delay: var(--delay);
}

.is-visible .device-card {
  opacity: 1;

  transform:
    translateY(0)
    scale(1);
}

.device-card:hover {
  z-index: 5;

  transform:
    translateY(-8px)
    scale(1.025);

  border-color: rgba(53, 169, 107, 0.25);

  box-shadow:
    0 18px 35px rgba(13, 59, 92, 0.13);
}


/* =========================================================
   NÚMERO
========================================================= */

.device-number {
  position: absolute;

  top: 8px;
  left: 10px;

  color: rgba(13, 59, 92, 0.28);

  font-size: 0.58rem;
  font-weight: 800;

  letter-spacing: 0.08em;
}


/* =========================================================
   FEATURED
========================================================= */

.device-card-center {
  height: 260px;

  background:
    linear-gradient(
      145deg,
      #ffffff 0%,
      #edf8f2 100%
    );

  box-shadow:
    0 15px 35px rgba(13, 59, 92, 0.1);
}

.device-featured-label {
  position: absolute;

  top: 10px;
  right: 10px;

  padding: 4px 7px;

  border-radius: 20px;

  color: #258556;

  background: rgba(53, 169, 107, 0.09);

  font-size: 0.47rem;
  font-weight: 800;

  letter-spacing: 0.05em;
}


/* =========================================================
   VISUAL
========================================================= */

.device-visual {
  width: 100%;
  height: 105px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: visible;
}

.device-card-center .device-visual {
  height: 190px;
}

.device-image {
  display: block;

  width: auto;
  height: 100%;

  max-width: 100%;
  max-height: 125px;

  object-fit: contain;

  filter:
    drop-shadow(
      0 9px 12px rgba(13, 59, 92, 0.14)
    );

  transition:
    transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.3s ease;
}

.device-card-center .device-image {
  max-height: 185px;
}

.device-card:hover .device-image {
  transform: translateY(-5px) scale(1.035);

  filter:
    drop-shadow(
      0 14px 17px rgba(13, 59, 92, 0.18)
    );
}


/* =========================================================
   TÍTULO EQUIPAMENTO
========================================================= */

.device-title-wrap {
  width: 100%;

  min-height: 2.35rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.25rem 0.3rem 0;
}

.device-title {
  margin: 0;

  color: #173e58;

  font-size: 0.61rem;
  font-weight: 750;

  line-height: 1.3;

  text-align: center;

  white-space: pre-line;
}


/* =========================================================
   LINHA INFERIOR
========================================================= */

.device-card-line {
  width: 20px;
  height: 2px;

  margin-top: 4px;

  border-radius: 10px;

  background: #4bb379;

  transition:
    width 0.3s ease;
}

.device-card:hover .device-card-line {
  width: 38px;
}


/* =========================================================
   ANIMAÇÃO DO CONTEÚDO
========================================================= */

.content-inner {
  opacity: 0;

  transform: translateX(-30px);

  transition:
    opacity 0.8s ease,
    transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.is-visible .content-inner {
  opacity: 1;

  transform: translateX(0);
}


/* =========================================================
   ANIMAÇÃO DA LINHA
========================================================= */

.section-kicker-line {
  transform-origin: left;

  transform: scaleX(0);

  transition:
    transform 0.8s ease 0.45s;
}

.is-visible .section-kicker-line {
  transform: scaleX(1);
}


/* =========================================================
   RESPONSIVE
========================================================= */

@media (max-width: 1200px) {

  .devices-layout {
    grid-template-columns:
      minmax(105px, 1fr)
      minmax(145px, 1.25fr)
      minmax(105px, 1fr);
  }

  .device-card {
    height: 145px;
  }

  .device-card-center {
    height: 240px;
  }

}


@media (max-width: 960px) {

  .laboratory-section {
    padding: 3.5rem 0;
  }

  .content-column {
    padding-right: 1rem;
    margin-bottom: 2rem;
  }

  .content-inner {
    max-width: 650px;
  }

  .devices-column {
    padding-left: 0.75rem;
  }

  .section-cta {
    min-width: 220px;
  }

}


@media (max-width: 700px) {

  .laboratory-section {
    padding: 3rem 0;
  }

  .devices-layout {
    grid-template-columns: 1fr 1fr;

    gap: 0.6rem;
  }

  .device-card-center {
    grid-column: 1 / -1;

    order: -1;

    height: 250px;
  }

  .device-stack {
    display: contents;
  }

  .device-card {
    height: 160px;
  }

  .device-card-center .device-visual {
    height: 185px;
  }

}


@media (max-width: 500px) {

  .laboratory-section {
    padding: 2.5rem 0;
  }

  .content-column {
    padding-right: 0;
  }

  .section-kicker {
    font-size: 1.8rem;
  }

  .section-description {
    font-size: 0.88rem;
  }

  .laboratory-features {
    gap: 0.65rem;
  }

  .section-cta {
    width: 100%;
  }

  .devices-layout {
    grid-template-columns: 1fr 1fr;

    gap: 0.45rem;
  }

  .device-card {
    height: 145px;

    border-radius: 10px;
  }

  .device-card-center {
    height: 220px;
  }

  .device-card-center .device-visual {
    height: 160px;
  }

  .device-image {
    max-height: 105px;
  }

  .device-card-center .device-image {
    max-height: 155px;
  }

  .device-title {
    font-size: 0.56rem;
  }

  .device-featured-label {
    display: none;
  }

}


/* =========================================================
   ACESSIBILIDADE
========================================================= */

@media (prefers-reduced-motion: reduce) {

  .device-card,
  .content-inner,
  .section-kicker-line,
  .device-image,
  .section-cta {
    transition: none !important;
  }

  .device-card {
    opacity: 1;
    transform: none;
  }

  .content-inner {
    opacity: 1;
    transform: none;
  }

  .section-kicker-line {
    transform: none;
  }

}

</style>