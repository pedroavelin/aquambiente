<template>
  <footer id="contact" class="footer-section py-12">
    <v-container>
      <v-row class="mb-12">
        <!-- Column 1: About -->
        <v-col cols="12" sm="6" md="3">
          <h4 class="text-h6 font-weight-bold mb-4">AQUAMBIENTE</h4>
          <p class="text-body2 text-grey-lighten-1 mb-4">
            Soluções ambientais inovadoras para um futuro sustentável.
          </p>
          <!-- Social Links -->
          <div class="social-links">
            <v-btn
              icon="mdi-facebook"
              size="small"
              variant="text"
              color="white"
              href="https://facebook.com"
              target="_blank"
            />
            <v-btn
              icon="mdi-twitter"
              size="small"
              variant="text"
              color="white"
              href="https://twitter.com"
              target="_blank"
            />
            <v-btn
              icon="mdi-linkedin"
              size="small"
              variant="text"
              color="white"
              href="https://linkedin.com"
              target="_blank"
            />
            <v-btn
              icon="mdi-instagram"
              size="small"
              variant="text"
              color="white"
              href="https://instagram.com"
              target="_blank"
            />
          </div>
        </v-col>

        <!-- Column 2: Navigation -->
        <v-col cols="12" sm="6" md="3">
          <h4 class="text-h6 font-weight-bold mb-4">NAVEGAÇÃO</h4>
          <ul class="footer-list">
            <li>
              <a href="/">Início</a>
            </li>
            <li>
              <a href="#about">Empresa</a>
            </li>
            <li>
              <a href="#services">Serviços</a>
            </li>
            <li>
              <a href="#projects">Projectos</a>
            </li>
            <li>
              <a href="#academy">Academia</a>
            </li>
          </ul>
        </v-col>

        <!-- Column 3: Services -->
        <v-col cols="12" sm="6" md="3">
          <h4 class="text-h6 font-weight-bold mb-4">SERVIÇOS</h4>
          <ul class="footer-list">
            <li>
              <a href="#services">Consultoria Ambiental</a>
            </li>
            <li>
              <a href="#services">Gestão de Resíduos</a>
            </li>
            <li>
              <a href="#services">Monitorização</a>
            </li>
            <li>
              <a href="#services">Licenciamento</a>
            </li>
            <li>
              <a href="#services">Formação</a>
            </li>
          </ul>
        </v-col>

        <!-- Column 4: Contact -->
        <v-col cols="12" sm="6" md="3">
          <h4 class="text-h6 font-weight-bold mb-4">CONTACTO</h4>
          <div class="contact-info mb-3">
            <v-icon size="20" class="mr-2">mdi-phone</v-icon>
            <a href="tel:+244912345678">+244 91 234 5678</a>
          </div>
          <div class="contact-info mb-3">
            <v-icon size="20" class="mr-2">mdi-email</v-icon>
            <a href="mailto:info@aquambiente.com">info@aquambiente.com</a>
          </div>
          <div class="contact-info mb-3">
            <v-icon size="20" class="mr-2">mdi-map-marker</v-icon>
            <a href="#">Luanda, Angola</a>
          </div>
        </v-col>
      </v-row>

      <!-- Divider -->
      <v-divider class="my-8" />

      <!-- Bottom Footer -->
      <v-row align="center">
        <v-col cols="12" md="6" class="mb-4 mb-md-0">
          <p class="text-body2 text-grey-lighten-1 mb-0">
            &copy; 2024 Aquambiente. Todos os direitos reservados.
          </p>
        </v-col>
        <v-col cols="12" md="6" class="text-md-right">
          <a href="#" class="text-grey-lighten-1 text-body2 mr-4">Política de Privacidade</a>
          <a href="#" class="text-grey-lighten-1 text-body2">Termos de Serviço</a>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<script lang="ts" setup>
//
</script>

<style scoped>
.footer-section {
  background: linear-gradient(135deg, #0d3b5c 0%, #0f4a6b 100%);
  color: white;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-list li {
  margin-bottom: 0.8rem;
}

.footer-list a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s;
  font-size: 0.9rem;
}

.footer-list a:hover {
  color: #66bb6a;
}

.contact-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
}

.contact-info a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s;
}

.contact-info a:hover {
  color: #66bb6a;
}

.social-links {
  display: flex;
  gap: 0.5rem;
}

h4 {
  font-weight: 700;
  font-size: 0.95rem;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .footer-section {
    padding: 2rem 1rem !important;
  }
}
</style>
