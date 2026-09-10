<template>
  <footer id="contact" class="footer-section">
    <v-container class="footer-container">
      <div class="newsletter-strip">
        <div class="newsletter-icon">
          <v-icon size="30" color="#0d3b5c">mdi-email-outline</v-icon>
        </div>

        <div class="newsletter-copy">
          <p class="newsletter-title">Receba as nossas novidades</p>
          <p class="newsletter-subtitle">
            Receba as últimas informações sobre projectos, cursos e soluções ambientais.
          </p>
        </div>

        <form class="newsletter-form" @submit.prevent>
          <input type="email" placeholder="Seu e-mail" />
          <button type="submit">INSCREVER-SE</button>
        </form>
      </div>

      <div class="footer-main">
        <v-row class="footer-grid">
          <v-col cols="12" md="3" class="brand-column">
            <div class="brand-box">
              <div class="brand-mark">
                <span class="brand-mark-text">A</span>
              </div>
              <div class="brand-wordmark">
                <span class="brand-wordmark-top">AQUAMBIENTE</span>
              </div>
            </div>

            <p class="brand-description">
              Soluções ambientais inovadoras para um futuro sustentável.
            </p>

            <div class="social-links">
              <v-btn
                icon="mdi-facebook"
                size="small"
                variant="text"
                color="white"
                href="https://facebook.com"
                target="_blank"
                class="social-btn"
              />
              <v-btn
                icon="mdi-twitter"
                size="small"
                variant="text"
                color="white"
                href="https://twitter.com"
                target="_blank"
                class="social-btn"
              />
              <v-btn
                icon="mdi-linkedin"
                size="small"
                variant="text"
                color="white"
                href="https://linkedin.com"
                target="_blank"
                class="social-btn"
              />
              <v-btn
                icon="mdi-instagram"
                size="small"
                variant="text"
                color="white"
                href="https://instagram.com"
                target="_blank"
                class="social-btn"
              />
            </div>
          </v-col>

          <v-col cols="12" md="2">
            <h4 class="footer-title">NAVEGAÇÃO</h4>
            <ul class="footer-list">
              <li><a href="/">Início</a></li>
              <li><a href="#about">Empresa</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#projects">Projectos</a></li>
              <li><a href="#academy">Academia</a></li>
              <li><a href="#news">Notícias</a></li>
              <li><a href="#contact">Contactos</a></li>
            </ul>
          </v-col>

          <v-col cols="12" md="2">
            <h4 class="footer-title">SERVIÇOS</h4>
            <ul class="footer-list">
              <li><a href="#services">Consultoria Ambiental</a></li>
              <li><a href="#services">Gestão de Resíduos</a></li>
              <li><a href="#services">Monitorização</a></li>
              <li><a href="#services">Licenciamento</a></li>
              <li><a href="#services">Formação</a></li>
              <li><a href="#services">Higiene e Segurança</a></li>
            </ul>
          </v-col>

          <v-col cols="12" md="2">
            <h4 class="footer-title">CONTACTOS</h4>
            <div class="contact-list">
              <div class="contact-info">
                <v-icon size="18">mdi-phone</v-icon>
                <a href="tel:+244912345678">+244 912 345 678</a>
              </div>
              <div class="contact-info">
                <v-icon size="18">mdi-email-outline</v-icon>
                <a href="mailto:info@aquambiente.com">info@aquambiente.com</a>
              </div>
              <div class="contact-info">
                <v-icon size="18">mdi-map-marker</v-icon>
                <a href="#">Luanda, Angola</a>
              </div>
              <div class="contact-info">
                <v-icon size="18">mdi-clock-time-four-outline</v-icon>
                <a href="#">Seg - Sáb: 08:00 - 18:00</a>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="3">
            <h4 class="footer-title">LOCALIZAÇÃO</h4>
            <GoogleAngolaMap />
          </v-col>
        </v-row>
      </div>

      <div class="footer-bottom">
        <p>© 2024 Aquambiente. Todos os direitos reservados.</p>
        <div class="footer-legal-links">
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos e Condições</a>
        </div>
      </div>
    </v-container>
  </footer>
</template>

<script setup lang="ts">
import GoogleAngolaMap from './GoogleAngolaMap.vue'
</script>

<style scoped>
.footer-section {
  background: linear-gradient(180deg, #0c2d4c 0%, #0d3b5c 48%, #0a2b46 100%);
  color: #ffffff;
  padding: 2.5rem 0 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-container {
  max-width: 1280px;
}

.newsletter-strip {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 1.1rem 1.25rem;
  color: #0d3b5c;
  margin-bottom: 2rem;
  box-shadow: 0 18px 35px rgba(8, 47, 76, 0.15);
}

.newsletter-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 62px;
  height: 62px;
  border-radius: 16px;
  background: linear-gradient(145deg, #d7f0e4 0%, #bfe6d2 100%);
  flex-shrink: 0;
}

.newsletter-copy {
  flex: 1;
  min-width: 0;
}

.newsletter-title {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 800;
  letter-spacing: 0.02rem;
}

.newsletter-subtitle {
  margin: 0.2rem 0 0;
  font-size: 0.82rem;
  color: rgba(13, 59, 92, 0.8);
}

.newsletter-form {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  width: min(100%, 420px);
}

.newsletter-form input {
  flex: 1;
  border: 1px solid rgba(13, 59, 92, 0.18);
  border-radius: 999px;
  background: #ffffff;
  padding: 0.82rem 1rem;
  font-size: 0.9rem;
  color: #0d3b5c;
}

.newsletter-form input:focus {
  outline: none;
  border-color: rgba(26, 123, 60, 0.7);
  box-shadow: 0 0 0 3px rgba(26, 123, 60, 0.15);
}

.newsletter-form button {
  border: 0;
  border-radius: 999px;
  background: linear-gradient(135deg, #1a7b3c 0%, #4db36d 100%);
  color: #ffffff;
  padding: 0.82rem 1.4rem;
  font-weight: 800;
  letter-spacing: 0.03rem;
  font-size: 0.82rem;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(26, 123, 60, 0.2);
}

.footer-main {
  padding-top: 0.25rem;
}

.brand-box {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.brand-mark {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: linear-gradient(135deg, #7fd1ae 0%, #1aaa7b 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.2);
}

.brand-mark-text {
  font-size: 2rem;
  font-weight: 900;
  line-height: 1;
  color: #ffffff;
  transform: translateY(-2px);
}

.brand-wordmark-top {
  display: block;
  font-size: 1.1rem;
  font-weight: 900;
  letter-spacing: 0.06rem;
  color: #ffffff;
}

.brand-description {
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.9rem;
  line-height: 1.6;
  max-width: 260px;
}

.social-links {
  display: flex;
  gap: 0.5rem;
  margin-top: 1.25rem;
}

.social-btn {
  width: 34px !important;
  height: 34px !important;
  min-width: 34px !important;
  border-radius: 50% !important;
  background: rgba(255, 255, 255, 0.12) !important;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-title {
  margin: 0 0 1rem;
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 0.06rem;
  text-transform: uppercase;
  color: #f5f7fb;
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-list li {
  margin-bottom: 0.55rem;
}

.footer-list a,
.contact-info a,
.footer-legal-links a {
  color: rgba(255, 255, 255, 0.78);
  text-decoration: none;
  transition: color 0.2s ease, opacity 0.2s ease;
}

.footer-list a:hover,
.contact-info a:hover,
.footer-legal-links a:hover {
  color: #9be3b7;
}

.contact-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contact-info {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.78);
}

.contact-info .v-icon {
  opacity: 0.9;
}

.location-card {
  display: flex;
  align-items: center;
  justify-content: center;
}

.location-map {
  position: relative;
  width: 100%;
  max-width: 200px;
  height: 140px;
  border-radius: 18px;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.06)),
    linear-gradient(135deg, #103b63 0%, #0f4f7a 100%);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.06);
}

.location-map::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(90deg, rgba(255, 255, 255, 0.12) 1px, transparent 1px),
    linear-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px);
  background-size: 18px 18px;
  opacity: 0.5;
}

.angola-map {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  padding: 0.4rem;
  opacity: 0.95;
}

.angola-map path {
  fill: rgba(127, 209, 174, 0.38);
  stroke: rgba(255, 255, 255, 0.85);
  stroke-width: 2;
  stroke-linejoin: round;
}

.province-marker {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
}

.province-marker::before {
  content: '';
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f7b955;
  border: 2px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 0 4px rgba(247, 185, 85, 0.24);
}

.province-marker span {
  position: absolute;
  top: -12px;
  left: 14px;
  font-size: 0.54rem;
  font-weight: 700;
  letter-spacing: 0.01rem;
  white-space: nowrap;
  color: #edf7ff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
}

.marker-luanda { left: 49%; top: 54%; }
.marker-bengo { left: 42%; top: 48%; }
.marker-cuanza-norte { left: 60%; top: 48%; }
.marker-cuanza-sul { left: 58%; top: 63%; }
.marker-benguela { left: 64%; top: 76%; }
.marker-huila { left: 52%; top: 84%; }
.marker-cunene { left: 36%; top: 93%; }
.marker-namibe { left: 26%; top: 83%; }
.marker-malange { left: 70%; top: 42%; }
.marker-moxico { left: 80%; top: 58%; }
.marker-lunda-norte { left: 87%; top: 32%; }
.marker-lunda-sul { left: 86%; top: 46%; }
.marker-cuando-cubango { left: 74%; top: 88%; }
.marker-bie { left: 67%; top: 66%; }

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  margin-top: 2rem;
  padding-top: 1.25rem;
}

.footer-bottom p {
  margin: 0;
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.85rem;
}

.footer-legal-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 0.85rem;
}

@media (max-width: 960px) {
  .newsletter-strip {
    flex-direction: column;
    align-items: stretch;
  }

  .newsletter-copy {
    width: 100%;
  }

  .newsletter-form {
    width: 100%;
    max-width: 100%;
  }

  .brand-description {
    max-width: none;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-legal-links {
    flex-wrap: wrap;
    gap: 0.75rem 1.25rem;
  }
}

@media (max-width: 600px) {
  .footer-section {
    padding-top: 1.5rem;
  }

  .newsletter-strip {
    padding: 1rem;
    border-radius: 16px;
    gap: 0.85rem;
  }

  .newsletter-icon {
    width: 50px;
    height: 50px;
  }

  .newsletter-form {
    flex-direction: column;
    width: 100%;
  }

  .newsletter-form input,
  .newsletter-form button {
    width: 100%;
  }

  .newsletter-form button {
    margin-top: 0.15rem;
  }

  .footer-main {
    padding-top: 0;
  }

  .brand-box {
    align-items: center;
  }

  .brand-wordmark-top {
    font-size: 1rem;
  }

  .contact-info {
    font-size: 0.85rem;
  }
}
</style>
