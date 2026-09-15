<template>
  <footer id="contact" class="footer-section">
    <v-container class="footer-container">
      <div class="footer-main">
        <v-row class="footer-grid">
          <v-col cols="12" md="3" class="brand-column">
            <div class="brand-box">
              <img :src="companyLogo" alt="Aquambiente" class="brand-logo" />
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
              <li><router-link to="/contactos">Contactos</router-link></li>
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

<script setup>
import GoogleAngolaMap from './GoogleAngolaMap.vue'
import companyLogo from '../assets/logo/logo2.png'
</script>
<style scoped>
/* =========================================================
   FOOTER
========================================================= */

.footer-section {
  background: linear-gradient(
    120deg,
    #071f35 0%,
    #0b304a 35%,
    #0d4650 65%,
    #0b5a3c 100%
  );

  color: #ffffff;
  padding: 1.5rem 0 0.65rem;

  border-top: 1px solid rgba(255, 255, 255, 0.1);

  position: relative;
  overflow: hidden;
}
.footer-container {
  max-width: 1180px !important;
}


/* =========================================================
   MAIN
========================================================= */

.footer-main {
  padding: 0;
}


/* =========================================================
   GRID VUETIFY
========================================================= */

.footer-grid {
  margin: 0 !important;
}

.footer-grid :deep(.v-col) {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}


/* =========================================================
   MARCA
========================================================= */

.brand-box {
  display: flex;
  align-items: center;

  margin-bottom: 0.45rem;
}

.brand-logo {
  display: block;

  width: 155px;
  max-width: 100%;

  height: auto;
}

.brand-description {
  max-width: 210px;

  margin: 0;

  color: rgba(255, 255, 255, 0.68);

  font-size: 0.72rem;
  line-height: 1.45;
}


/* =========================================================
   REDES SOCIAIS
========================================================= */

.social-links {
  display: flex;
  align-items: center;

  gap: 0.25rem;

  margin-top: 0.65rem;
}

.social-btn {
  width: 29px !important;
  height: 29px !important;
  min-width: 29px !important;

  border-radius: 50% !important;

  background: rgba(255, 255, 255, 0.09) !important;

  border: 1px solid rgba(255, 255, 255, 0.08);

  transition:
    background 0.2s ease,
    transform 0.2s ease;
}

.social-btn:hover {
  background: rgba(255, 255, 255, 0.18) !important;

  transform: translateY(-2px);
}


/* =========================================================
   TÍTULOS
========================================================= */

.footer-title {
  position: relative;

  margin: 0 0 0.65rem;

  color: #ffffff;

  font-size: 0.72rem;
  font-weight: 800;

  letter-spacing: 0.05rem;

  text-transform: uppercase;
}


/* pequena linha decorativa */

.footer-title::after {
  content: '';

  display: block;

  width: 22px;
  height: 2px;

  margin-top: 5px;

  background: #35ad72;

  border-radius: 10px;
}


/* =========================================================
   NAVEGAÇÃO / SERVIÇOS
========================================================= */

.footer-list {
  list-style: none;

  padding: 0;
  margin: 0;
}

.footer-list li {
  margin-bottom: 0.3rem;
}

.footer-list a {
  color: rgba(255, 255, 255, 0.67);

  text-decoration: none;

  font-size: 0.72rem;

  transition:
    color 0.2s ease,
    padding-left 0.2s ease;
}

.footer-list a:hover {
  color: #9be3b7;

  padding-left: 3px;
}


/* =========================================================
   CONTACTOS
========================================================= */

.contact-list {
  display: flex;
  flex-direction: column;

  gap: 0.45rem;
}

.contact-info {
  display: flex;
  align-items: center;

  gap: 0.4rem;

  min-width: 0;

  color: rgba(255, 255, 255, 0.68);

  font-size: 0.72rem;
}

.contact-info .v-icon {
  flex-shrink: 0;

  font-size: 15px !important;

  color: #76c99b;

  opacity: 1;
}

.contact-info a {
  overflow: hidden;

  color: rgba(255, 255, 255, 0.68);

  text-decoration: none;

  white-space: nowrap;

  text-overflow: ellipsis;

  transition: color 0.2s ease;
}

.contact-info a:hover {
  color: #9be3b7;
}


/* =========================================================
   MAPA
========================================================= */

.footer-grid :deep(.google-map-card) {
  width: 100%;
  height: 115px;

  overflow: hidden;

  border-radius: 8px;
}

.footer-grid :deep(.google-map) {
  width: 100%;
  height: 115px;
}


/* =========================================================
   MAPA ANTIGO / FALLBACK
========================================================= */

.location-card {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.location-map {
  position: relative;

  width: 100%;
  max-width: 190px;

  height: 115px;

  border-radius: 9px;

  background:
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.15),
      rgba(255, 255, 255, 0.05)
    ),
    linear-gradient(
      135deg,
      #103b63 0%,
      #0f4f7a 100%
    );

  overflow: hidden;

  border: 1px solid rgba(255, 255, 255, 0.12);
}

.location-map::before {
  content: '';

  position: absolute;

  inset: 0;

  background-image:
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.1) 1px,
      transparent 1px
    ),
    linear-gradient(
      rgba(255, 255, 255, 0.1) 1px,
      transparent 1px
    );

  background-size: 18px 18px;

  opacity: 0.45;
}

.angola-map {
  position: absolute;

  inset: 0;

  width: 100%;
  height: 100%;

  padding: 0.35rem;

  opacity: 0.9;
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

  width: 8px;
  height: 8px;

  border-radius: 50%;

  background: #f7b955;

  border: 2px solid rgba(255, 255, 255, 0.9);
}

.province-marker span {
  position: absolute;

  top: -11px;
  left: 12px;

  font-size: 0.48rem;
  font-weight: 700;

  white-space: nowrap;

  color: #edf7ff;
}


/* =========================================================
   POSIÇÕES DOS MARCADORES
========================================================= */

.marker-luanda {
  left: 49%;
  top: 54%;
}

.marker-bengo {
  left: 42%;
  top: 48%;
}

.marker-cuanza-norte {
  left: 60%;
  top: 48%;
}

.marker-cuanza-sul {
  left: 58%;
  top: 63%;
}

.marker-benguela {
  left: 64%;
  top: 76%;
}

.marker-huila {
  left: 52%;
  top: 84%;
}

.marker-cunene {
  left: 36%;
  top: 93%;
}

.marker-namibe {
  left: 26%;
  top: 83%;
}

.marker-malange {
  left: 70%;
  top: 42%;
}

.marker-moxico {
  left: 80%;
  top: 58%;
}

.marker-lunda-norte {
  left: 87%;
  top: 32%;
}

.marker-lunda-sul {
  left: 86%;
  top: 46%;
}

.marker-cuando-cubango {
  left: 74%;
  top: 88%;
}

.marker-bie {
  left: 67%;
  top: 66%;
}


/* =========================================================
   FOOTER BOTTOM
========================================================= */

.footer-bottom {
  display: flex;

  align-items: center;
  justify-content: space-between;

  gap: 1rem;

  margin-top: 1.15rem;

  padding-top: 0.7rem;

  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom p {
  margin: 0;

  color: rgba(255, 255, 255, 0.55);

  font-size: 0.68rem;
}

.footer-legal-links {
  display: flex;
  align-items: center;

  gap: 1rem;

  font-size: 0.68rem;
}

.footer-legal-links a {
  color: rgba(255, 255, 255, 0.55);

  text-decoration: none;

  transition: color 0.2s ease;
}

.footer-legal-links a:hover {
  color: #9be3b7;
}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 960px) {

  .footer-section {
    padding: 1.4rem 0 0.6rem;
  }

  .footer-grid :deep(.v-col) {
    margin-bottom: 1.25rem;
  }

  .footer-bottom {
    margin-top: 0.3rem;
  }

  .brand-description {
    max-width: 250px;
  }
}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 600px) {

  .footer-section {
    padding: 1.25rem 0 0.5rem;
  }

  .footer-container {
    padding-left: 18px;
    padding-right: 18px;
  }

  .brand-logo {
    width: 145px;
  }

  .brand-description {
    max-width: 280px;

    font-size: 0.7rem;
  }

  .footer-title {
    margin-bottom: 0.55rem;
  }

  .footer-list li {
    margin-bottom: 0.28rem;
  }

  .contact-list {
    gap: 0.4rem;
  }

  .footer-grid :deep(.google-map-card),
  .footer-grid :deep(.google-map) {
    height: 150px;
  }

  .footer-bottom {
    flex-direction: column;

    align-items: flex-start;

    gap: 0.45rem;

    margin-top: 0;

    padding-top: 0.65rem;
  }

  .footer-legal-links {
    flex-wrap: wrap;

    gap: 0.5rem 1rem;
  }
}

</style>
