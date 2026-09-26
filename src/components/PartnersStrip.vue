<template>
  <section
    aria-label="Parceiros e clientes"
    class="partners-strip"
    :class="{ 'partners-strip--paused': isPaused }"
  >
    <!-- Header sutil -->
    <div class="partners-header">
      <div class="partners-header__line" aria-hidden="true" />
      <p class="partners-header__kicker">
        <span class="kicker-dot" aria-hidden="true" />
        PARCEIROS &amp; CLIENTES
      </p>
      <div class="partners-header__line" aria-hidden="true" />
    </div>

    <!-- Marquee -->
    <div class="partners-viewport">
      <div class="partners-track" :style="{ '--speed': `${speed}s` }">
        <div
          v-for="(group, groupIndex) in partnerGroups"
          :key="groupIndex"
          class="partners-group"
          :aria-hidden="groupIndex === 1 ? 'true' : 'false'"
        >
          <div
            v-for="partner in group"
            :key="`${groupIndex}-${partner.label}`"
            class="partner-item"
            :title="partner.label"
          >
            <span class="partner-item__glow" aria-hidden="true" />
            <img
              :alt="partner.label"
              class="partner-logo"
              :src="partner.image"
              loading="lazy"
              decoding="async"
            >
          </div>
        </div>
      </div>

      <!-- Fades laterais reforçados -->
      <div class="partners-fade partners-fade--left" aria-hidden="true" />
      <div class="partners-fade partners-fade--right" aria-hidden="true" />
    </div>

    <!-- Rodapé informativo opcional -->
    <p class="partners-footnote">
      <v-icon icon="mdi-handshake-outline" size="14" />
      Mais de <strong>{{ partners.length }}</strong> organizações confiam na Aquambiente
    </p>
  </section>
</template>
<script setup>
import { ref } from 'vue'

import partner1 from '@/assets/parceiros/1.webp'
import partner2 from '@/assets/parceiros/2.png'
import partner3 from '@/assets/parceiros/3.jpg'
import partner4 from '@/assets/parceiros/4.png'
import partner5 from '@/assets/parceiros/5.webp'
import partner6 from '@/assets/parceiros/6.png'
import partner7 from '@/assets/parceiros/7.jpg'
import partner8 from '@/assets/parceiros/8.png'
import partner9 from '@/assets/parceiros/9.png'
import partner10 from '@/assets/parceiros/10.png'
import partner11 from '@/assets/parceiros/11.jpg'
import partner12 from '@/assets/parceiros/12.jpg'
import partner13 from '@/assets/parceiros/13.jpg'
import partner14 from '@/assets/parceiros/14.png'
import partner15 from '@/assets/parceiros/15.jpg'

/* Velocidade do marquee em segundos (maior = mais devagar). */
const speed = ref(45)

/* Estado de pausa controlado por prefers-reduced-motion */
const isPaused = ref(false)
if (typeof window !== 'undefined') {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
  isPaused.value = mq.matches
  mq.addEventListener?.('change', (e) => (isPaused.value = e.matches))
}

const partners = [
  { image: partner1 },
  { image: partner2 },
  { image: partner3 },
  { image: partner4 },
  { image: partner5 },
  { image: partner6 },
  { image: partner7 },
  { image: partner8 },
  { image: partner9 },
  {  image: partner10 },
  {  image: partner11 },
  {  image: partner12 },
  {  image: partner13 },
  {  image: partner14 },
  {  image: partner15 },
]
const partnerGroups = [partners, partners]
</script>
<style lang="scss" scoped>
/* ===================== BASE ===================== */
.partners-strip {
  --brand-900: #0d3324;
  --brand-800: #123b2b;
  --brand-600: #2e7d32;
  --brand-500: #3fa356;
  --muted: rgba(18, 59, 43, 0.62);

  position: relative;
  overflow: hidden;
  padding: 28px 0 22px;
  background:
    radial-gradient(900px 300px at 50% -20%, rgba(46, 125, 50, 0.06), transparent 70%),
    linear-gradient(180deg, #ffffff 0%, #f7fbf8 100%);
  // border-top: 1px solid rgba(18, 59, 43, 0.08);
  border-bottom: 1px solid rgba(18, 59, 43, 0.06);
  // box-shadow:
  //   0 -18px 40px -30px rgba(11, 43, 63, 0.28),
  //   0 18px 40px -30px rgba(11, 43, 63, 0.18);
}

/* ===================== HEADER ===================== */
.partners-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 720px;
  margin: 0 auto 18px;
  padding: 0 1.5rem;
}

.partners-header__line {
  flex: 1;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(46, 125, 50, 0.28) 30%,
    rgba(46, 125, 50, 0.28) 70%,
    transparent
  );
}

.partners-header__kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  margin: 0;
  color: var(--brand-600);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.24em;
  white-space: nowrap;
}

.kicker-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--brand-500);
  box-shadow: 0 0 0 4px rgba(63, 163, 86, 0.18);
  animation: partners-pulse 2.4s ease-in-out infinite;
}

@keyframes partners-pulse {
  0%, 100% { box-shadow: 0 0 0 4px rgba(63, 163, 86, 0.18); }
  50%      { box-shadow: 0 0 0 8px rgba(63, 163, 86, 0.04); }
}

/* ===================== VIEWPORT / TRACK ===================== */
.partners-viewport {
  position: relative;
  overflow: hidden;
  /* Fades internos para reforçar suavidade nas bordas. */
  -webkit-mask-image: linear-gradient(
    90deg,
    transparent 0,
    #000 8%,
    #000 92%,
    transparent 100%
  );
  mask-image: linear-gradient(
    90deg,
    transparent 0,
    #000 8%,
    #000 92%,
    transparent 100%
  );
}

.partners-track {
  display: flex;
  width: max-content;
  animation: partners-scroll var(--speed, 45s) linear infinite;
  will-change: transform;
}

/* Pausa no hover e quando o usuário prefere menos movimento. */
.partners-viewport:hover .partners-track,
.partners-strip--paused .partners-track {
  animation-play-state: paused;
}

.partners-group {
  display: flex;
  align-items: center;
  gap: 44px;
  padding-right: 44px;
  white-space: nowrap;
}

/* ===================== ITEM ===================== */
.partner-item {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 140px;
  height: 76px;
  padding: 0 22px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(18, 59, 43, 0.06);
  box-shadow:
    0 6px 16px -10px rgba(11, 43, 63, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(4px);
  opacity: 0.86;
  filter: grayscale(1) contrast(0.95);
  transition:
    opacity 0.35s ease,
    filter 0.45s ease,
    transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1),
    box-shadow 0.35s ease,
    border-color 0.35s ease,
    background 0.35s ease;
  cursor: default;
}

/* Glow interno que aparece no hover */
.partner-item__glow {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(
    120px circle at 50% 50%,
    rgba(46, 125, 50, 0.18),
    transparent 60%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.partner-item:hover {
  opacity: 1;
  filter: grayscale(0) contrast(1);
  transform: translateY(-4px) scale(1.03);
  border-color: rgba(46, 125, 50, 0.32);
  background: rgba(255, 255, 255, 0.95);
  box-shadow:
    0 18px 34px -18px rgba(46, 125, 50, 0.45),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
}
.partner-item:hover .partner-item__glow { opacity: 1; }

.partner-logo {
  position: relative;
  z-index: 1;
  display: block;
  max-height: 44px;
  max-width: 118px;
  width: auto;
  height: auto;
  object-fit: contain;
  transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.partner-item:hover .partner-logo {
  transform: scale(1.04);
}

/* ===================== FADES LATERAIS ===================== */
.partners-fade {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 90px;
  pointer-events: none;
  z-index: 2;
}
.partners-fade--left {
  left: 0;
  background: linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
}
.partners-fade--right {
  right: 0;
  background: linear-gradient(270deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
}

/* ===================== FOOTNOTE ===================== */
.partners-footnote {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  margin: 18px 0 0;
  color: var(--muted);
  font-size: 0.82rem;
  letter-spacing: 0.02em;
}
.partners-footnote strong {
  color: var(--brand-800);
  font-weight: 800;
}
.partners-footnote :deep(.v-icon) {
  color: var(--brand-600);
}

/* ===================== KEYFRAMES ===================== */
@keyframes partners-scroll {
  from { transform: translate3d(0, 0, 0); }
  to   { transform: translate3d(-50%, 0, 0); }
}

/* ===================== RESPONSIVE ===================== */
@media (max-width: 768px) {
  .partners-strip { padding: 22px 0 18px; }
  .partners-group { gap: 28px; padding-right: 28px; }
  .partner-item {
    min-width: 116px;
    height: 64px;
    padding: 0 16px;
    border-radius: 14px;
  }
  .partner-logo { max-height: 36px; max-width: 96px; }
  .partners-fade { width: 56px; }
  .partners-footnote { font-size: 0.76rem; }
}

@media (max-width: 480px) {
  .partners-header { margin-bottom: 14px; }
  .partners-header__kicker { font-size: 0.66rem; letter-spacing: 0.2em; }
}

/* ===================== A11Y ===================== */
@media (prefers-reduced-motion: reduce) {
  .partners-track {
    animation: none;
    transform: none;
  }
  .partners-strip { overflow-x: auto; }
  .kicker-dot { animation: none; }
}
</style>