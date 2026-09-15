<template>
  <section id="laboratory" class="laboratory-section py-16">
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="5" class="content-column">
          <div class="section-kicker-wrap">
            <p class="section-kicker">LABORATÓRIO E MONITORIZAÇÃO</p>
            <span class="section-kicker-line" />
          </div>
          <p class="section-description">
            Contamos com equipamentos de última geração para análises laboratoriais.
          </p>  
          <v-btn
            class="section-cta"
            color="green-accent-4"
            variant="outlined"
            rounded
            size="large"
            href="#contact"
          >
            CONHECER LABORATÓRIO
          </v-btn>
        </v-col>

        <v-col cols="12" md="7">
          <div class="devices-layout">
            <div class="device-stack device-stack-left">
              <div
                v-for="device in devices.slice(0, 2)"
                :key="device.title"
                class="device-card"
              >
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
              </div>
            </div>

            <div class="device-card device-card-center">
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
            </div>

            <div class="device-stack device-stack-right">
              <div
                v-for="device in devices.slice(2, 4)"
                :key="device.title"
                class="device-card"
              >
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
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts" setup>
const devices = [
  {
    title: 'Analisador de\nQualidade da Água',
    image: new URL('@/assets/laboratorio_monitorizacao/e1.png', import.meta.url).href,
  },
  {
    title: 'Amostrador de\nPartículas (PM2.5 / PM10)',
    image: new URL('@/assets/laboratorio_monitorizacao/e2.png', import.meta.url).href,
  },
  {
    title: 'Medidor de\nGases e VOCs',
    image: new URL('@/assets/laboratorio_monitorizacao/e3.png', import.meta.url).href,
  },
  {
    title: 'Sonómetro\nIntegrador',
    image: new URL('@/assets/laboratorio_monitorizacao/e4.png', import.meta.url).href,
  },
  {
    title: 'GPS / Equipamento\nde Campo',
    image: new URL('@/assets/laboratorio_monitorizacao/e5.png', import.meta.url).href,
  },
]
</script>

<style scoped>
.laboratory-section {
  position: relative;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.92), rgba(246, 250, 255, 0.88));
  border: 1px solid rgba(255, 255, 255, 0.75);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), 0 18px 38px rgba(109, 164, 191, 0.12);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding-block: 3.5rem;
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

.section-description {
  margin: 0 0 1.75rem;
  max-width: 37rem;
  color: #4b5d67;
  font-size: 1.05rem;
  line-height: 1.7;
}

.section-cta {
  font-weight: 700;
  letter-spacing: 0.02em;
  border-width: 1px;
  border-color: rgba(13, 59, 92, 0.35);
  color: rgba(13, 59, 92, 0.9);
  background: rgba(255, 255, 255, 0.15);
  min-width: 260px;
  transition: border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
}

.section-cta:hover {
  background: rgba(102, 187, 106, 0.04);
  border-color: rgba(13, 59, 92, 0.6);
  transform: translateY(-1px);
}

.devices-layout {
  display: grid;
  grid-template-columns: minmax(120px, 1fr) minmax(170px, 1.3fr) minmax(120px, 1fr);
  align-items: center;
  justify-items: center;
  gap: 0rem;
}

.device-stack {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0;
  width: 100%;
  align-items: center;
}

.device-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 240px;
  width: 100%;
  background: linear-gradient(135deg, rgba(132, 181, 214, 0.23), rgba(102, 187, 106, 0.12));
  border: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: 0px;
  padding: 0;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5), 0 10px 24px rgba(13, 59, 92, 0.08);
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.device-card:hover {
  transform: translateY(-4px);
  opacity: 0.96;
}

.device-card-center {
  height: 310px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(110, 186, 146, 0.28), rgba(131, 178, 216, 0.16));
}

.device-visual {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 170px;
  border-radius: 18px;
  background: transparent;
  overflow: hidden;
  padding-inline: 0.25rem;
}

.device-card-center .device-visual {
  height: 200px;
  align-items: center;
}

.device-image {
  display: block;
  width: auto;
  max-width: 100%;
  height: 100%;
  max-height: 190px;
  object-fit: contain;
  object-position: center center;
  filter: drop-shadow(0 8px 16px rgba(13, 59, 92, 0.12));
}

.device-card-center .device-image {
  max-height: 220px;
}

.device-title-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 2.8rem;
  padding: 0.4rem 0.5rem 0;
  text-align: center;
}

.device-title {
  margin: 0;
  color: #0d3b5c;
  font-size: 0.7rem;
  font-weight: 700;
  line-height: 1.25;
  text-align: center;
  white-space: pre-line;
}

@media (max-width: 1200px) {
  .devices-layout {
    grid-template-columns: minmax(120px, 1fr) minmax(140px, 1.2fr) minmax(120px, 1fr);
  }
}

@media (max-width: 960px) {
  .content-column {
    padding-right: 0;
    margin-bottom: 1rem;
  }

  .section-cta {
    min-width: 0;
    width: 100%;
  }

  .devices-layout {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem 1rem;
  }

  .device-card-center {
    order: -1;
    grid-column: 1 / -1;
    height: 300px;
  }

  .device-stack-left {
    grid-column: 1;
  }

  .device-stack-right {
    grid-column: 2;
  }
}

@media (max-width: 600px) {
  .laboratory-section {
    padding-block: 2.5rem;
  }

  .devices-layout {
    grid-template-columns: 1fr;
  }

  .device-card,
  .device-card-center {
    height: 240px;
  }

  .device-visual {
    min-height: 140px;
  }

  .device-card-center {
    order: 0;
    grid-column: auto;
  }
}
</style>
