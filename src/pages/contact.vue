<template>
  <section class="contact-page">
    <!-- =========================================================
         HERO / BANNER
    ========================================================== -->
    <section class="contact-hero">
      <div class="hero-overlay"></div>

      <div class="hero-content">
        <div class="hero-inner">

          <div class="hero-breadcrumb">
            <span>Início</span>
            <v-icon icon="mdi-chevron-right" size="16" />
            <span>Contactos</span>
          </div>

          <div class="hero-line"></div>

          <p class="hero-kicker">
            FALE CONNOSCO
          </p>

          <h1>
            Vamos transformar
            <span>ideias em soluções.</span>
          </h1>

          <p class="hero-description">
            Entre em contacto com a Aquambiente e descubra como podemos
            desenvolver soluções eficientes e sustentáveis para o seu projecto.
          </p>

        </div>
      </div>

      <div class="hero-scroll">
        <span>Deslize para explorar</span>
        <v-icon icon="mdi-arrow-down" size="18" />
      </div>
    </section>


    <!-- =========================================================
         CONTACT CONTENT
    ========================================================== -->
    <v-container class="contact-shell">

      <v-row class="intro-row">
        <v-col cols="12" md="8">
          <div class="section-heading">
            <span class="section-number">01</span>

            <div>
              <p class="section-kicker">
                CONTACTOS
              </p>

              <h2>
                Fale connosco e vamos desenvolver
                <strong>a melhor solução para si.</strong>
              </h2>

              <p class="section-description">
                Tem um projecto em mente ou precisa de mais informações?
                A nossa equipa está disponível para esclarecer as suas
                questões e encontrar a solução mais adequada às suas
                necessidades.
              </p>
            </div>
          </div>
        </v-col>
      </v-row>


      <!-- =========================================================
           CONTACT CARDS + FORM
      ========================================================== -->
      <v-row class="contact-grid">

        <!-- CONTACT INFORMATION -->
        <v-col cols="12" md="5">

          <div class="info-panel">

            <div class="panel-header">
              <div>
                <span class="panel-kicker">
                  CONTACTE-NOS
                </span>

                <h3>
                  Dados de contacto
                </h3>
              </div>

              <div class="panel-symbol">
                <v-icon icon="mdi-compass-outline" />
              </div>
            </div>


            <div class="contact-list">

              <!-- TELEFONE -->
              <a
                href="tel:+244925668789"
                class="contact-item"
              >
                <div class="contact-icon">
                  <v-icon icon="mdi-phone-outline" />
                </div>

                <div class="contact-content">
                  <span class="label">
                    Telefone
                  </span>

                  <strong>
                    +244 925 668 789
                  </strong>

                  <small>
                    Fale directamente connosco
                  </small>
                </div>

                <v-icon
                  class="item-arrow"
                  icon="mdi-arrow-top-right"
                  size="18"
                />
              </a>


              <!-- EMAIL -->
              <a
                href="mailto:geral@aquambiente.ao"
                class="contact-item"
              >
                <div class="contact-icon">
                  <v-icon icon="mdi-email-outline" />
                </div>

                <div class="contact-content">
                  <span class="label">
                    Email
                  </span>

                  <strong>
                    geral@aquambiente.ao
                  </strong>

                  <small>
                    Envie-nos a sua mensagem
                  </small>
                </div>

                <v-icon
                  class="item-arrow"
                  icon="mdi-arrow-top-right"
                  size="18"
                />
              </a>


              <!-- LOCALIZAÇÃO -->
              <div class="contact-item static-item">

                <div class="contact-icon">
                  <v-icon icon="mdi-map-marker-outline" />
                </div>

                <div class="contact-content">
                  <span class="label">
                    Localização
                  </span>

                  <strong>
                    Luanda, Angola
                  </strong>

                  <small>
                    Angola
                  </small>
                </div>

              </div>


              <!-- HORÁRIO -->
              <div class="contact-item static-item">

                <div class="contact-icon">
                  <v-icon icon="mdi-clock-outline" />
                </div>

                <div class="contact-content">
                  <span class="label">
                    Horário
                  </span>

                  <strong>
                    Segunda a Sábado
                  </strong>

                  <small>
                    08:00 — 18:00
                  </small>
                </div>

              </div>

            </div>


            <!-- SOCIAL -->
            <div class="social-area">

              <span>
                Siga-nos
              </span>

              <div class="social-links">

                <a href="#" aria-label="LinkedIn">
                  <v-icon icon="mdi-linkedin" />
                </a>

                <a href="#" aria-label="Facebook">
                  <v-icon icon="mdi-facebook" />
                </a>

                <a href="#" aria-label="Instagram">
                  <v-icon icon="mdi-instagram" />
                </a>

              </div>

            </div>

          </div>

        </v-col>


        <!-- FORM -->
        <v-col cols="12" md="7">

          <div class="form-panel">

            <div class="panel-header">

              <div>
                <span class="panel-kicker">
                  PEDIDO DE CONTACTO
                </span>

                <h3>
                  Solicite uma proposta
                </h3>
              </div>

              <div class="form-icon">
                <v-icon icon="mdi-send-outline" />
              </div>

            </div>


            <p class="form-intro">
              Preencha o formulário abaixo e a nossa equipa
              entrará em contacto consigo brevemente.
            </p>


            <v-form class="contact-form">

              <v-row>

                <v-col cols="12" md="6">
                  <v-text-field
                    label="Nome completo"
                    placeholder="O seu nome"
                    prepend-inner-icon="mdi-account-outline"
                    variant="outlined"
                    density="comfortable"
                    hide-details="auto"
                  />
                </v-col>


                <v-col cols="12" md="6">
                  <v-text-field
                    label="Email"
                    placeholder="nome@empresa.com"
                    type="email"
                    prepend-inner-icon="mdi-email-outline"
                    variant="outlined"
                    density="comfortable"
                    hide-details="auto"
                  />
                </v-col>


                <v-col cols="12" md="6">
                  <v-text-field
                    label="Telefone"
                    placeholder="+244 900 000 000"
                    prepend-inner-icon="mdi-phone-outline"
                    variant="outlined"
                    density="comfortable"
                    hide-details="auto"
                  />
                </v-col>


                <v-col cols="12" md="6">
                  <v-text-field
                    label="Assunto"
                    placeholder="Como podemos ajudar?"
                    prepend-inner-icon="mdi-text-box-outline"
                    variant="outlined"
                    density="comfortable"
                    hide-details="auto"
                  />
                </v-col>


                <v-col cols="12">

                  <v-textarea
                    label="Mensagem"
                    placeholder="Descreva brevemente o seu projecto ou necessidade..."
                    rows="5"
                    auto-grow
                    prepend-inner-icon="mdi-message-text-outline"
                    variant="outlined"
                    hide-details="auto"
                  />

                </v-col>

              </v-row>


              <div class="form-footer">

                <div class="privacy-note">
                  <v-icon
                    icon="mdi-shield-check-outline"
                    size="18"
                  />

                  <span>
                    Os seus dados serão tratados de forma confidencial.
                  </span>
                </div>


                <v-btn
                  class="submit-btn"
                  color="#16865b"
                  size="large"
                  rounded="lg"
                  type="submit"
                  elevation="0"
                >
                  Enviar mensagem

                  <v-icon
                    icon="mdi-arrow-right"
                    class="btn-icon"
                  />
                </v-btn>

              </div>

            </v-form>

          </div>

        </v-col>

      </v-row>


      <!-- =========================================================
           MAP
      ========================================================== -->
      <v-row class="map-section">

        <v-col cols="12">

          <div class="map-header">

            <div>
              <span class="section-kicker">
                ONDE ESTAMOS
              </span>

              <h2>
                A nossa localização
              </h2>
            </div>

            <div class="map-location">
              <v-icon icon="mdi-map-marker" />
              <span>Luanda, Angola</span>
            </div>

          </div>


          <div class="map-panel">
            <GoogleAngolaMap />
          </div>

        </v-col>

      </v-row>

    </v-container>

  </section>
</template>


<script setup lang="ts">

import GoogleAngolaMap from '@/components/GoogleAngolaMap.vue'

</script>


<style scoped>

/* =========================================================
   BASE
========================================================= */

.contact-page {
  background:
    linear-gradient(
      180deg,
      #f5f9f7 0%,
      #ffffff 45%,
      #f4f8f6 100%
    );

  color: #123a54;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes floatSoft {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-3px);
  }
}


/* =========================================================
   HERO / BANNER — 235px
========================================================= */

.contact-hero {
  position: relative;

  height: 235px;
  min-height: 235px;

  display: flex;
  align-items: center;

  overflow: hidden;

  background-image:
    url("https://images.unsplash.com/photo-1538300342682-cf57afb97285?auto=format&fit=crop&w=2000&q=85");

  background-size: cover;
  background-position: center 55%;
  animation: fadeUp 0.8s ease-out both;
}

.hero-overlay {
  position: absolute;
  inset: 0;

  background:
    linear-gradient(
      90deg,
      rgba(5, 31, 47, 0.92) 0%,
      rgba(5, 31, 47, 0.72) 50%,
      rgba(5, 31, 47, 0.35) 100%
    );
}

.hero-content {
  position: relative;
  z-index: 2;

  width: 100%;
}

.hero-inner {
  width: min(1200px, calc(100% - 48px));

  margin: 0 auto;

  padding: 0;
}


/* Breadcrumb */

.hero-breadcrumb {
  display: flex;
  align-items: center;
  gap: 7px;

  margin-bottom: 10px;

  color: rgba(255, 255, 255, 0.65);

  font-size: 0.68rem;
  font-weight: 500;
}

.hero-breadcrumb span:last-child {
  color: #ffffff;
}


/* Pequena linha verde */

.hero-line {
  width: 38px;
  height: 2px;

  margin-bottom: 9px;

  background: #52d094;

  border-radius: 4px;
}


/* Kicker */

.hero-kicker {
  margin: 0 0 4px;

  color: #52d094;

  font-size: 0.58rem;

  font-weight: 800;

  letter-spacing: 0.15rem;
}


/* Título */

.contact-hero h1 {
  max-width: 700px;

  margin: 0;

  color: #ffffff;

  font-size: clamp(1rem, 5vw, 2.7em);

  font-weight: 800;

  line-height: 1.05;

  letter-spacing: -0.045em;
}

.contact-hero h1 span {
  color: #61d39a;
}


/* Descrição */

.hero-description {
  max-width: 570px;

  margin: 8px 0 0;

  color: rgba(255, 255, 255, 0.78);

  font-size: 0.75rem;

  line-height: 1.45;
}


/* Scroll */

.hero-scroll {
  position: absolute;

  right: 35px;
  bottom: 18px;

  z-index: 3;

  display: flex;
  align-items: center;

  gap: 7px;

  color: rgba(255, 255, 255, 0.55);

  font-size: 0.58rem;

  text-transform: uppercase;

  letter-spacing: 0.08rem;
}


/* =========================================================
   CONTAINER
========================================================= */

.contact-shell {
  max-width: 1200px;

  padding-top: 55px;
  padding-bottom: 90px;
}


/* =========================================================
   INTRO
========================================================= */

.intro-row {
  margin-bottom: 35px;
}


.section-heading {
  display: flex;
  gap: 25px;
}


.section-number {
  color: #16865b;

  font-size: 0.8rem;

  font-weight: 800;

  letter-spacing: 0.12rem;
}


.section-kicker {
  display: block;

  margin-bottom: 10px;

  color: #16865b;

  font-size: 0.72rem;

  font-weight: 800;

  letter-spacing: 0.16rem;

  text-transform: uppercase;
}


.section-heading h2 {
  max-width: 850px;

  margin: 0;

  color: #0d3b5c;

  font-size: clamp(2rem, 3.2vw, 3rem);

  line-height: 1.12;

  letter-spacing: -0.04em;
}


.section-heading h2 strong {
  color: #16865b;

  font-weight: inherit;
}


.section-description {
  max-width: 720px;

  margin: 20px 0 0;

  color: #668094;

  font-size: 1rem;

  line-height: 1.8;
}


/* =========================================================
   PANELS
========================================================= */

.info-panel,
.form-panel {
  height: 100%;

  padding: 32px;

  background: rgba(255, 255, 255, 0.92);

  border: 1px solid rgba(13, 59, 92, 0.08);

  border-radius: 26px;

  box-shadow:
    0 20px 60px rgba(13, 59, 92, 0.07);
  animation: fadeUp 0.9s ease-out both;
}

.info-panel {
  animation-delay: 0.1s;
}

.form-panel {
  animation-delay: 0.2s;
}


.panel-header {
  display: flex;

  align-items: flex-start;

  justify-content: space-between;

  gap: 20px;

  margin-bottom: 30px;
}


.panel-kicker {
  display: block;

  margin-bottom: 7px;

  color: #7c98a9;

  font-size: 0.67rem;

  font-weight: 800;

  letter-spacing: 0.14rem;

  text-transform: uppercase;
}


.panel-header h3 {
  margin: 0;

  color: #0d3b5c;

  font-size: 1.5rem;

  font-weight: 800;

  letter-spacing: -0.025em;
}


.panel-symbol,
.form-icon {
  width: 48px;
  height: 48px;

  display: flex;

  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  border-radius: 15px;

  background: #edf8f3;

  color: #16865b;
  animation: floatSoft 4s ease-in-out infinite;
}


/* =========================================================
   CONTACT ITEMS
========================================================= */

.contact-list {
  display: flex;

  flex-direction: column;

  gap: 12px;
}


.contact-item {
  position: relative;

  display: flex;

  align-items: center;

  gap: 15px;

  padding: 15px;

  border-radius: 17px;

  text-decoration: none;

  border: 1px solid transparent;

  background: #f6f9fa;

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    background 0.25s ease;
  animation: fadeUp 0.8s ease-out both;
}

.contact-item:nth-child(1) { animation-delay: 0.2s; }
.contact-item:nth-child(2) { animation-delay: 0.3s; }
.contact-item:nth-child(3) { animation-delay: 0.4s; }
.contact-item:nth-child(4) { animation-delay: 0.5s; }


.contact-item:hover {
  transform: translateX(5px);

  background: #ffffff;

  border-color: rgba(22, 134, 91, 0.16);
}


.contact-icon {
  width: 45px;
  height: 45px;

  display: flex;

  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  border-radius: 13px;

  background: #e8f6ef;

  color: #16865b;
}


.contact-content {
  min-width: 0;

  display: flex;

  flex-direction: column;
}


.contact-content .label {
  margin-bottom: 3px;

  color: #8498a5;

  font-size: 0.66rem;

  font-weight: 800;

  letter-spacing: 0.09rem;

  text-transform: uppercase;
}


.contact-content strong {
  overflow: hidden;

  color: #123a54;

  font-size: 0.93rem;

  font-weight: 700;

  text-overflow: ellipsis;

  white-space: nowrap;
}


.contact-content small {
  margin-top: 2px;

  color: #8a9ba5;

  font-size: 0.72rem;
}


.item-arrow {
  margin-left: auto;

  color: #9db0ba;

  transition: transform 0.2s ease;
}


.contact-item:hover .item-arrow {
  transform: translate(3px, -3px);

  color: #16865b;
}


.static-item:hover {
  transform: none;
}


/* =========================================================
   SOCIAL
========================================================= */

.social-area {
  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-top: 25px;

  padding-top: 23px;

  border-top: 1px solid #e7edef;
}


.social-area > span {
  color: #8498a5;

  font-size: 0.72rem;

  font-weight: 700;

  text-transform: uppercase;

  letter-spacing: 0.1rem;
}


.social-links {
  display: flex;

  gap: 8px;
}


.social-links a {
  width: 34px;
  height: 34px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: #f0f5f6;

  color: #527284;

  text-decoration: none;

  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;
}


.social-links a:hover {
  background: #16865b;

  color: white;

  transform: translateY(-3px);
}


/* =========================================================
   FORM
========================================================= */

.form-intro {
  margin: -10px 0 25px;

  color: #718896;

  font-size: 0.9rem;

  line-height: 1.6;
}


.contact-form :deep(.v-field) {
  border-radius: 13px;

  background: #fbfcfc;
}


.contact-form :deep(.v-field--focused) {
  background: white;
}


.contact-form :deep(.v-field__input) {
  color: #123a54;

  font-size: 0.9rem;
}


.contact-form :deep(.v-label) {
  color: #78909d;

  font-size: 0.84rem;
}


.form-footer {
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 20px;

  margin-top: 8px;
}


.privacy-note {
  display: flex;

  align-items: center;

  gap: 8px;

  color: #81939d;

  font-size: 0.7rem;

  line-height: 1.4;
}


.privacy-note .v-icon {
  color: #16865b;
}


.submit-btn {
  min-width: 190px;

  color: white !important;

  font-weight: 700;

  letter-spacing: 0;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
  animation: fadeUp 0.9s ease-out both;
  animation-delay: 0.3s;
}


.submit-btn:hover {
  transform: translateY(-3px);

  box-shadow:
    0 12px 25px rgba(22, 134, 91, 0.25) !important;
}


.btn-icon {
  margin-left: 8px;

  transition: transform 0.2s ease;
}


.submit-btn:hover .btn-icon {
  transform: translateX(4px);
}


/* =========================================================
   MAP
========================================================= */

.map-section {
  margin-top: 85px;
}


.map-header {
  display: flex;

  align-items: flex-end;

  justify-content: space-between;

  margin-bottom: 22px;
}


.map-header h2 {
  margin: 0;

  color: #0d3b5c;

  font-size: 2rem;

  font-weight: 800;

  letter-spacing: -0.035em;
}


.map-location {
  display: flex;

  align-items: center;

  gap: 7px;

  color: #69818e;

  font-size: 0.85rem;
}


.map-location .v-icon {
  color: #16865b;
}


.map-panel {
  overflow: hidden;
  background: transparent;
  border-radius: 0px;
}

/* =========================================================
   TABLET
========================================================= */

@media (max-width: 960px) {

  .contact-hero {
    min-height: 430px;
  }

  .contact-shell {
    padding-top: 65px;
  }

  .info-panel,
  .form-panel {
    padding: 25px;
  }

  .form-footer {
    align-items: flex-start;

    flex-direction: column;
  }

  .submit-btn {
    width: 100%;
  }

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 599px) {

  .contact-hero {
    height: 235px;
    min-height: 235px;

    background-position: 62% center;
  }

  .hero-overlay {
    background:
      linear-gradient(
        180deg,
        rgba(5, 31, 47, 0.72),
        rgba(5, 31, 47, 0.94)
      );
  }

  .hero-inner {
    width: calc(100% - 32px);
  }

  .hero-breadcrumb {
    margin-bottom: 8px;

    font-size: 0.62rem;
  }

  .hero-line {
    width: 30px;

    margin-bottom: 7px;
  }

  .hero-kicker {
    font-size: 0.52rem;

    letter-spacing: 0.12rem;
  }

  .contact-hero h1 {
    max-width: 100%;

    font-size: clamp(1rem, 8vw, 2rem);

    line-height: 1.05;
  }

  .hero-description {
    max-width: 100%;

    margin-top: 7px;

    font-size: 0.68rem;

    line-height: 1.4;
  }

  .hero-scroll {
    display: none;
  }

  .contact-shell {
    padding-top: 45px;
  }
}

</style>
```
