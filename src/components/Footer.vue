<template>
  <footer id="contact" class="footer-section" ref="footerRef">
    <!-- Aurora / brilho de fundo animado -->
    <div class="footer-aurora" aria-hidden="true">
      <span class="aurora-blob blob-1"></span>
      <span class="aurora-blob blob-2"></span>
      <span class="aurora-blob blob-3"></span>
    </div>

    <!-- Partículas flutuantes -->
    <div class="footer-particles" aria-hidden="true">
      <span v-for="n in 12" :key="n" class="particle" :style="{ '--i': n }"></span>
    </div>

    <v-container class="footer-container">
      <div class="footer-main">
        <v-row class="footer-grid">
          <!-- MARCA -->
          <v-col cols="12" md="3" class="brand-column reveal" style="--d:0">
            <div class="brand-box">
              <img :src="companyLogo" alt="Aquambiente" class="brand-logo" />
            </div>

            <p class="brand-description">
              Soluções ambientais inovadoras para um futuro sustentável.
            </p>

            <div class="social-links">
              <v-btn
                v-for="(s, i) in socials"
                :key="s.icon"
                :icon="s.icon"
                size="small"
                variant="text"
                color="white"
                :href="s.href"
                target="_blank"
                class="social-btn"
                :style="{ '--i': i }"
                :aria-label="s.label"
              />
            </div>
          </v-col>

          <!-- NAVEGAÇÃO -->
          <v-col cols="12" md="2" class="reveal" style="--d:1">
            <h4 class="footer-title">Navegação</h4>
            <ul class="footer-list">
              <li v-for="l in navLinks" :key="l.label">
                <component :is="l.to ? 'router-link' : 'a'" :to="l.to" :href="l.href">
                  <span class="link-arrow">›</span>
                  <span class="link-text">{{ l.label }}</span>
                </component>
              </li>
            </ul>
          </v-col>

          <!-- SERVIÇOS -->
          <v-col cols="12" md="2" class="reveal" style="--d:2">
            <h4 class="footer-title">Serviços</h4>
            <ul class="footer-list">
              <li v-for="s in services" :key="s">
                <a href="#services">
                  <span class="link-arrow">›</span>
                  <span class="link-text">{{ s }}</span>
                </a>
              </li>
            </ul>
          </v-col>

          <!-- CONTACTOS -->
          <v-col cols="12" md="2" class="reveal" style="--d:3">
            <h4 class="footer-title">Contactos</h4>
            <div class="contact-list">
              <div
                v-for="(c, i) in contacts"
                :key="i"
                class="contact-info"
                :style="{ '--i': i }"
              >
                <v-icon size="18">{{ c.icon }}</v-icon>
                <a :href="c.href">{{ c.text }}</a>
              </div>
            </div>
          </v-col>

          <!-- MAPA -->
          <v-col cols="12" md="3" class="reveal" style="--d:4">
            <h4 class="footer-title">Localização</h4>
            <div class="map-frame">
              <GoogleAngolaMap />
            </div>
          </v-col>
        </v-row>
      </div>

      <div class="footer-bottom">
        <p>© 2024 <span class="brand-highlight">Aquambiente</span>. Todos os direitos reservados.</p>
        <div class="footer-legal-links">
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos e Condições</a>
        </div>
      </div>
    </v-container>
  </footer>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import GoogleAngolaMap from './GoogleAngolaMap.vue'
import companyLogo from '../assets/logo/logo2.png'

const footerRef = ref(null)
let observer = null

const socials = [
  { icon: 'mdi-facebook',  href: 'https://facebook.com',  label: 'Facebook'  },
  { icon: 'mdi-twitter',   href: 'https://twitter.com',   label: 'Twitter'   },
  { icon: 'mdi-linkedin',  href: 'https://linkedin.com',  label: 'LinkedIn'  },
  { icon: 'mdi-instagram', href: 'https://instagram.com', label: 'Instagram' },
]

const navLinks = [
  { label: 'Início',     to: '/' },
  { label: 'Empresa',    to: '/about' },
  { label: 'Serviços',   to: { path: '/', hash: '#services' } },
  { label: 'Projectos',  to: '/projects' },
  { label: 'Academia',   to: '/academia' },
  { label: 'Notícias',   to: { path: '/', hash: '#news' } },
  { label: 'Contactos', to: '/contactos' },
]

const services = [
  'Consultoria Ambiental',
  'Gestão de Resíduos',
  'Monitorização',
  'Licenciamento',
  'Formação',
  'Higiene e Segurança',
]

const contacts = [
  { icon: 'mdi-phone',                  text: '+244 912 345 678',            href: 'tel:+244912345678' },
  { icon: 'mdi-email-outline',          text: 'info@aquambiente.com',        href: 'mailto:info@aquambiente.com' },
  { icon: 'mdi-map-marker',             text: 'Luanda, Angola',              href: '#' },
  { icon: 'mdi-clock-time-four-outline',text: 'Seg - Sáb: 08:00 - 18:00',    href: '#' },
]

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible')
          observer.unobserve(e.target)
        }
      })
    },
    { threshold: 0.15 }
  )
  if (footerRef.value) {
    footerRef.value.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
  }
})

onBeforeUnmount(() => observer && observer.disconnect())
</script>

<style scoped>
/* =========================================================
   FOOTER BASE
========================================================= */
.footer-section {
  position: relative;
  overflow: hidden;
  padding: 2rem 0 0.85rem;
  color: #fff;
  background:
    radial-gradient(1200px 500px at 15% 0%,  rgba(53, 173, 114, 0.18), transparent 60%),
    radial-gradient(1000px 500px at 85% 100%, rgba(31, 122, 194, 0.20), transparent 60%),
    linear-gradient(120deg, #071f35 0%, #0b304a 35%, #0d4650 65%, #0b5a3c 100%);
  background-size: 200% 200%, 200% 200%, 100% 100%;
  animation: bgShift 18s ease-in-out infinite alternate;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

@keyframes bgShift {
  0%   { background-position: 0% 50%, 100% 50%, 0 0; }
  100% { background-position: 100% 50%, 0% 50%, 0 0; }
}

.footer-container { max-width: 1180px !important; }

/* =========================================================
   AURORA (blobs desfocados animados)
========================================================= */
.footer-aurora {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  filter: blur(70px);
  opacity: 0.55;
}
.aurora-blob {
  position: absolute;
  display: block;
  border-radius: 50%;
  mix-blend-mode: screen;
}
.blob-1 {
  width: 280px; height: 280px;
  top: -60px; left: 5%;
  background: #35ad72;
  animation: float1 14s ease-in-out infinite;
}
.blob-2 {
  width: 240px; height: 240px;
  bottom: -60px; right: 10%;
  background: #1f7ac2;
  animation: float2 16s ease-in-out infinite;
}
.blob-3 {
  width: 200px; height: 200px;
  top: 40%; left: 45%;
  background: #2ec4b6;
  animation: float3 20s ease-in-out infinite;
}
@keyframes float1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50%      { transform: translate(40px, 30px) scale(1.15); }
}
@keyframes float2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50%      { transform: translate(-30px, -25px) scale(1.1); }
}
@keyframes float3 {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
  50%      { transform: translate(-40%, -60%) scale(1.2); opacity: 0.9; }
}

/* =========================================================
   PARTÍCULAS FLUTUANTES
========================================================= */
.footer-particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}
.particle {
  position: absolute;
  width: 3px; height: 3px;
  border-radius: 50%;
  background: rgba(155, 227, 183, 0.55);
  box-shadow: 0 0 8px rgba(155, 227, 183, 0.8);
  left: calc((var(--i) * 8.3%) - 4%);
  bottom: -10px;
  animation: rise calc(10s + var(--i) * 0.9s) linear infinite;
  animation-delay: calc(var(--i) * -0.7s);
  opacity: 0;
}
@keyframes rise {
  0%   { transform: translateY(0) scale(0.6); opacity: 0; }
  15%  { opacity: 0.9; }
  100% { transform: translateY(-320px) scale(1.1); opacity: 0; }
}

/* conteúdo acima das camadas decorativas */
.footer-container { position: relative; z-index: 1; }

/* =========================================================
   REVEAL ON SCROLL
========================================================= */
.reveal {
  opacity: 0;
  transform: translateY(22px);
  transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: calc(var(--d, 0) * 90ms);
}
.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* =========================================================
   GRID
========================================================= */
.footer-grid { margin: 0 !important; }
.footer-grid :deep(.v-col) {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

/* =========================================================
   MARCA
========================================================= */
.brand-box { display: flex; align-items: center; margin-bottom: 0.55rem; }
.brand-logo {
  display: block;
  width: 155px; max-width: 100%; height: auto;
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), filter 0.4s ease;
  filter: drop-shadow(0 0 0 rgba(53, 173, 114, 0));
}
.brand-box:hover .brand-logo {
  transform: scale(1.06) rotate(-1.5deg);
  filter: drop-shadow(0 6px 14px rgba(53, 173, 114, 0.55));
}

.brand-description {
  max-width: 210px;
  margin: 0;
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.72rem;
  line-height: 1.45;
}

/* =========================================================
   REDES SOCIAIS
========================================================= */
.social-links {
  display: flex; align-items: center;
  gap: 0.35rem;
  margin-top: 0.75rem;
}
.social-btn {
  width: 30px !important; height: 30px !important; min-width: 30px !important;
  border-radius: 50% !important;
  background: rgba(255, 255, 255, 0.08) !important;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition:
    transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
    background 0.3s ease,
    box-shadow 0.35s ease;
  animation: popIn 0.5s backwards;
  animation-delay: calc(0.4s + var(--i) * 0.08s);
}
@keyframes popIn {
  from { opacity: 0; transform: scale(0.4); }
  to   { opacity: 1; transform: scale(1); }
}
.social-btn:hover {
  transform: translateY(-4px) scale(1.15) rotate(6deg);
  background: linear-gradient(135deg, #35ad72, #2ec4b6) !important;
  box-shadow: 0 8px 20px rgba(53, 173, 114, 0.5);
}
.social-btn:active { transform: scale(0.95); }

/* =========================================================
   TÍTULOS
========================================================= */
.footer-title {
  position: relative;
  margin: 0 0 0.85rem;
  color: #fff;
  font-size: 0.72rem; font-weight: 800;
  letter-spacing: 0.08rem;
  text-transform: uppercase;
}
.footer-title::after {
  content: '';
  display: block;
  width: 22px; height: 2px;
  margin-top: 6px;
  background: linear-gradient(90deg, #35ad72, #9be3b7);
  border-radius: 10px;
  transition: width 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
.footer-title:hover::after { width: 42px; }

/* =========================================================
   LISTAS DE LINKS
========================================================= */
.footer-list { list-style: none; padding: 0; margin: 0; }
.footer-list li { margin-bottom: 0.3rem; overflow: hidden; }

.footer-list a {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.72rem;
  transition: color 0.25s ease, transform 0.3s ease;
}
.footer-list a .link-arrow {
  display: inline-block;
  color: #9be3b7;
  opacity: 0;
  transform: translateX(-6px);
  transition: opacity 0.25s ease, transform 0.3s ease;
  font-weight: 800;
}
.footer-list a .link-text {
  position: relative;
  transition: transform 0.3s ease;
}
.footer-list a .link-text::after {
  content: '';
  position: absolute;
  left: 0; bottom: -2px;
  width: 0; height: 1px;
  background: linear-gradient(90deg, #9be3b7, #35ad72);
  transition: width 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
.footer-list a:hover { color: #eafff3; transform: translateX(2px); }
.footer-list a:hover .link-arrow { opacity: 1; transform: translateX(0); }
.footer-list a:hover .link-text::after { width: 100%; }

/* =========================================================
   CONTACTOS
========================================================= */
.contact-list { display: flex; flex-direction: column; gap: 0.5rem; }

.contact-info {
  display: flex; align-items: center;
  gap: 0.45rem;
  min-width: 0;
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.72rem;
  transition: transform 0.3s ease;
  animation: slideIn 0.5s backwards;
  animation-delay: calc(0.3s + var(--i) * 0.1s);
}
@keyframes slideIn {
  from { opacity: 0; transform: translateX(-10px); }
  to   { opacity: 1; transform: translateX(0); }
}
.contact-info:hover { transform: translateX(4px); }

.contact-info :deep(.v-icon) {
  flex-shrink: 0;
  font-size: 15px !important;
  color: #76c99b;
  transition: transform 0.3s ease, filter 0.3s ease;
}
.contact-info:hover :deep(.v-icon) {
  transform: scale(1.2);
  filter: drop-shadow(0 0 6px rgba(118, 201, 155, 0.9));
  animation: pulse 1s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { transform: scale(1.2); }
  50%      { transform: scale(1.35); }
}

.contact-info a {
  overflow: hidden;
  color: inherit;
  text-decoration: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: color 0.25s ease;
}
.contact-info a:hover { color: #9be3b7; }

/* =========================================================
   MAPA
========================================================= */
.map-frame {
  position: relative;
  border-radius: 0px;
  padding: 2px;
  /* background: linear-gradient(135deg, rgba(53, 173, 114, 0.6), rgba(46, 196, 182, 0.35)); */
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.map-frame::before {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 0px;
  /* background: linear-gradient(135deg, #35ad72, #2ec4b6, #1f7ac2); */
  opacity: 0;
  filter: blur(10px);
  z-index: -1;
  transition: opacity 0.4s ease;
}
.map-frame:hover { transform: translateY(-3px); }
.map-frame:hover::before { opacity: 0.7; }

.footer-grid :deep(.google-map-card) {
  width: 100%;
  overflow: hidden;
  border-radius: 0px;
}
.footer-grid :deep(.google-map) {
  width: 100%;
  height: 115px;
}

/* =========================================================
   FOOTER BOTTOM
========================================================= */
.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1.35rem;
  padding-top: 0.8rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
}
.footer-bottom::before {
  content: '';
  position: absolute;
  top: -1px; left: 0;
  width: 60px; height: 1px;
  background: linear-gradient(90deg, #35ad72, transparent);
}
.footer-bottom p {
  margin: 0;
  color: rgba(255, 255, 255, 0.58);
  font-size: 0.68rem;
}
.brand-highlight {
  color: #9be3b7;
  font-weight: 700;
  background: linear-gradient(90deg, #9be3b7, #35ad72, #9be3b7);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 3s linear infinite;
}
@keyframes shine {
  to { background-position: 200% center; }
}

.footer-legal-links {
  display: flex; align-items: center;
  gap: 1rem;
  font-size: 0.68rem;
}
.footer-legal-links a {
  position: relative;
  color: rgba(255, 255, 255, 0.58);
  text-decoration: none;
  transition: color 0.25s ease;
}
.footer-legal-links a::after {
  content: '';
  position: absolute;
  left: 0; bottom: -2px;
  width: 0; height: 1px;
  background: #9be3b7;
  transition: width 0.3s ease;
}
.footer-legal-links a:hover { color: #9be3b7; }
.footer-legal-links a:hover::after { width: 100%; }

/* =========================================================
   RESPONSIVO
========================================================= */
@media (max-width: 960px) {
  .footer-section { padding: 1.6rem 0 0.7rem; }
  .footer-grid :deep(.v-col) { margin-bottom: 1.35rem; }
  .footer-bottom { margin-top: 0.4rem; }
  .brand-description { max-width: 250px; }
}

@media (max-width: 600px) {
  .footer-section { padding: 1.4rem 0 0.6rem; }
  .footer-container { padding-left: 18px; padding-right: 18px; }
  .brand-logo { width: 145px; }
  .brand-description { max-width: 280px; font-size: 0.7rem; }
  .footer-title { margin-bottom: 0.7rem; }
  .contact-list { gap: 0.45rem; }
  .footer-grid :deep(.google-map-card),
  .footer-grid :deep(.google-map) { height: 150px; }
  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    margin-top: 0;
    padding-top: 0.7rem;
  }
  .footer-legal-links { flex-wrap: wrap; gap: 0.5rem 1rem; }
}

/* =========================================================
   ACESSIBILIDADE — respeitar prefers-reduced-motion
========================================================= */
@media (prefers-reduced-motion: reduce) {
  .footer-section,
  .aurora-blob,
  .particle,
  .social-btn,
  .brand-highlight,
  .contact-info,
  .contact-info :deep(.v-icon) {
    animation: none !important;
    transition: none !important;
  }
  .reveal { opacity: 1 !important; transform: none !important; }
}
</style>