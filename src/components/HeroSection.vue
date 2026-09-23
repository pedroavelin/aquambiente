<template>
  <section class="hero-section">
    <v-progress-linear
      class="hero-loading"
      color="green-accent-4"
      height="3"
      :indeterminate="isLoading"
      :model-value="slideProgress"
    />

    <v-carousel
      v-model="activeSlide"
      class="hero-background"
      color="green-accent-4"
      cycle
      height="500"
      hide-delimiters
      :interval="6000"
      show-arrows="always"
      @update:model-value="handleSlideChange"
    >
      <v-carousel-item
        v-for="image in heroImages"
        :key="image"
      >
        <div
          class="hero-slide"
          :style="{ backgroundImage: `url('${image}')` }"
        />
      </v-carousel-item>
    </v-carousel>

    <div class="hero-overlay"></div>
    <v-container class="hero-content-container h-100 d-flex align-center">
      <v-row class="w-100 align-center">
        <!-- Left Content -->
        <v-col cols="12" md="6" class="hero-content">
          <h1 class="hero-title mb-2">
            <span class="hero-title-blue">SOLUÇÕES AMBIENTAIS</span>
            <br />
            PARA UM FUTURO
            <br />
            SUSTENTÁVEL
          </h1>
          <div class="hero-divider mb-6"></div>

          <p class="hero-description mb-6">
            Consultoria ambiental, gestão de resíduos, monitorização e formação para empresas e comunidades comprometidas com o meio ambiente.
          </p>

          <!-- CTA Buttons -->
          <div class="cta-buttons">
            <v-btn
            rounded
              size="small"
              class="font-weight-bold"
              color="green-accent-4"
              href="#services"
            >
              <v-icon class="me-1" color="white">mdi-briefcase-outline</v-icon>
              NOSSOS SERVIÇOS
            </v-btn>
            <v-btn
            rounded
              size="small"
              variant="outlined"
              color="white"
              class="font-weight-bold"
              href="#contact"
            >
              <v-icon class="me-1" color="green">mdi-whatsapp </v-icon>
              FALAR CONNOSCO
            </v-btn>
          </div>
        </v-col>

        <!-- Right Content - Pillars Card -->
        <v-col cols="12" md="6" class="d-flex justify-end">
          <div class="pillars-card">
            <div class="pillar-item">
              <div class="pillar-icon">
                <v-icon color="green-accent-4" size="28">mdi-leaf</v-icon>
              </div>
              <div>
                <h4 class="pillar-title">Sustentabilidade</h4>
                <p class="pillar-desc">Práticas responsáveis sustentáveis para proteger o planeta.</p>
              </div>
            </div>

            <div class="pillar-item">
              <div class="pillar-icon">
                <v-icon color="green-accent-4" size="28">mdi-chart-box</v-icon>
              </div>
              <div>
                <h4 class="pillar-title">Qualidade</h4>
                <p class="pillar-desc">Serviços com rigor técnico e enquadramentos de alta precisão.</p>
              </div>
            </div>

            <div class="pillar-item">
              <div class="pillar-icon">
                <v-icon color="green-accent-4" size="28">mdi-handshake</v-icon>
              </div>
              <div>
                <h4 class="pillar-title">Compromisso</h4>
                <p class="pillar-desc">Dedicação e responsabilidade em cada solução ambiental.</p>
              </div>
            </div>

            <div class="pillar-item">
              <div class="pillar-icon">
                <v-icon color="green-accent-4" size="28">mdi-shield-check</v-icon>
              </div>
              <div>
                <h4 class="pillar-title">Conformidade</h4>
                <p class="pillar-desc">Alinhamento de acordo com a legislação ambiental vigente.</p>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts" setup>
  import { onMounted, onUnmounted, ref } from 'vue'
  import bg1 from '@/assets/hero/bg1.png'
  import bg2 from '@/assets/hero/bg2.png'
  import bg3 from '@/assets/hero/bg3.png'
  
  const heroImages = [bg1, bg2, bg3]

  const isLoading = ref(true)
  const activeSlide = ref(0)
  const slideProgress = ref(0)
  const slideInterval = 6000
  let progressTimer: ReturnType<typeof setInterval> | undefined
  let progressStartedAt = 0

  function handleSlideChange () {
    startSlideProgress()
  }

  function startSlideProgress () {
    slideProgress.value = 0
    progressStartedAt = Date.now()

    if (progressTimer) {
      clearInterval(progressTimer)
    }

    progressTimer = setInterval(() => {
      slideProgress.value = Math.min(
        ((Date.now() - progressStartedAt) / slideInterval) * 100,
        100,
      )
    }, 50)
  }

  onMounted(async () => {
    await Promise.all([
      Promise.all(heroImages.map(imageSource => new Promise<void>(resolve => {
        const image = new Image()
        image.addEventListener('load', () => resolve(), { once: true })
        image.addEventListener('error', () => resolve(), { once: true })
        image.src = imageSource
      }))),
      new Promise(resolve => setTimeout(resolve, 700)),
    ])

    isLoading.value = false
    startSlideProgress()
  })

  onUnmounted(() => {
    if (progressTimer) {
      clearInterval(progressTimer)
    }
  })
</script>

<style scoped>
.hero-section {
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.hero-loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 4;
  box-shadow: 0 0 8px rgba(102, 187, 106, 0.8);
}

.hero-background {
  position: relative;
  z-index: 0;
  margin: 0;
  opacity: 0.85;
  height: 500px !important;
}

.hero-slide {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.4;
}

.hero-background :deep(.v-window__left .v-btn),
.hero-background :deep(.v-window__right .v-btn) {
  color: #66bb6a !important;
  background-color: rgba(255, 255, 255, 0.9) !important;
}

.hero-background :deep(.v-window__left .v-btn .v-icon),
.hero-background :deep(.v-window__right .v-btn .v-icon) {
  color: #66bb6a !important;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    linear-gradient(
      90deg,
      rgba(2, 18, 28, 0.72) 0%,
      rgba(2, 18, 28, 0.45) 38%,
      rgba(2, 18, 28, 0.58) 100%
    ),
    rgba(0, 0, 0, 0.18);
  z-index: 1;
  pointer-events: none;
}

.hero-content-container {
  position: absolute;
  inset: 0;
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: 2.3rem;
  font-weight: 700;
  line-height: 1.3;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  color: #66bb6a;
}
.hero-title-blue {
  font-family: 'Black Ops One', cursive;
  color: #0d90ed;
}

.hero-divider {
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #0d3b5c 0%, #66bb6a 100%);
  border-radius: 2px;
}

.hero-description {
  color: white;
  font-size: 1.05rem;
  line-height: 1.6;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
}

.pillars-card {
  background: rgba(13, 60, 92, 0.58);
  backdrop-filter: blur(16px) saturate(140%);
  -webkit-backdrop-filter: blur(26px) saturate(140%);
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 12px;
  padding: 2rem;
  color: white;
  max-width: 350px;
  position: relative;
  z-index: 2;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18);
  animation:
    glass-card-in 800ms cubic-bezier(0.22, 1, 0.36, 1) both,
    glass-card-float 5s ease-in-out 800ms infinite;
  will-change: transform, opacity;
}

@keyframes glass-card-in {
  from {
    opacity: 0;
    transform: translateY(18px) scale(0.98);
    backdrop-filter: blur(0);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    backdrop-filter: blur(16px) saturate(140%);
  }
}

@keyframes glass-card-float {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-5px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .pillars-card {
    animation: none;
  }
}

.pillar-item {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
}

.pillar-item:last-child {
  margin-bottom: 0;
}

.pillar-icon {
  min-width: 50px;
  height: 50px;
  border-radius: 8px;
  background: rgba(102, 187, 106, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.pillar-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.1rem;
  color: white;
}

h4.pillar-title {
    margin: 0 0 0 0px;
}
.pillar-desc {
  font-size: 0.85rem;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

@media (max-width: 768px) {
  .hero-background {
    height: 420px !important;
  }

  .hero-title {
    font-size: 2rem;
  }

  .cta-buttons {
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 0.5rem;
  }

  .cta-buttons .v-btn {
    width: auto;
    flex: 1;
    min-width: 0;
  }

  .pillars-card {
    display: none;
  }

  .hero-background :deep(.v-window__left),
  .hero-background :deep(.v-window__right) {
    display: none;
  }
}

@media (max-width: 480px) {
  .hero-background {
    height: 360px !important;
  }

  .hero-title {
    font-size: 1.7rem;
  }

  .hero-description {
    font-size: 0.95rem;
  }
}
</style>
