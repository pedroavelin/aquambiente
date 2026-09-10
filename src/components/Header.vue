<template>
  <!-- Top Info Bar -->
  <div class="top-bar">
    <v-container class="top-bar-container d-flex align-center justify-space-between">
      <!-- Contact Info -->
      <div class="contact-list d-flex align-center gap-3 text-white text-caption">
        <a
          aria-label="Ligar para Aquambiente"
          class="contact-link"
          href="tel:+244925668789"
        >
          <v-icon icon="mdi-phone" size="x-small" />
          <span class="contact-text">+244 925 668 789</span>
        </a>

        <span aria-hidden="true" class="divider">|</span>

        <a
          aria-label="Enviar email para Aquambiente"
          class="contact-link"
          href="mailto:geral@aquambiente.ao"
        >
          <v-icon icon="mdi-email" size="x-small" />
          <span class="contact-text">geral@aquambiente.ao</span>
        </a>
      </div>

      <!-- Social Media -->
      <div aria-label="Redes sociais" class="social-links d-flex align-center gap-2">
        <span>Siga-nos</span>
        <a
          aria-label="Facebook"
          class="social-link"
          href="https://facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <v-icon icon="mdi-facebook" size="x-small" />
        </a>

        <a
          aria-label="LinkedIn"
          class="social-link"
          href="https://linkedin.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <v-icon icon="mdi-linkedin" size="x-small" />
        </a>

        <a
          aria-label="Instagram"
          class="social-link"
          href="https://instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <v-icon icon="mdi-instagram" size="x-small" />
        </a>
      </div>
    </v-container>
  </div>

  <!-- Main Navigation Bar -->
  <v-app-bar
    class="main-navbar"
    color="white"
    elevation="2"
    height="70"
  >
    <v-container class="navbar-container d-flex align-center justify-space-between">
      <!-- Logo -->
      <router-link to="/" class="logo-link">
        <img
          alt="Aquambiente - Consultoria Ambiental"
          class="brand-logo"
          src="@/assets/logo/logo2.png"
        >
      </router-link>

      <!-- Navigation Menu (Desktop) -->
      <div class="d-none d-md-flex gap-1 nav-menu">
        <router-link to="/" class="nav-link">
          INÍCIO
        </router-link>

        <div class="nav-link-group">
          <a
            href="#about"
            class="nav-link"
          >
            EMPRESA
            <v-icon icon="mdi-chevron-down" size="small" class="ml-1" />
          </a>
        </div>

        <div class="nav-link-group">
          <a
            href="#services"
            class="nav-link"
          >
            SERVIÇOS
            <v-icon icon="mdi-chevron-down" size="small" class="ml-1" />
          </a>
        </div>

        <a
          href="#projects"
          class="nav-link"
        >
          PROJECTOS
        </a>

        <a
          href="#academy"
          class="nav-link"
        >
          ACADEMIA
        </a>

        <a
          href="#news"
          class="nav-link"
        >
          NOTÍCIAS
        </a>

        <a
          href="#contact"
          class="nav-link"
        >
          CONTACTOS
        </a>
      </div>

      <!-- CTA Button & Mobile Menu -->
      <div class="d-flex align-center gap-2">
        <v-btn
          rounded
          class="text-white font-weight-bold d-none d-sm-flex cta-btn"
          color="green-accent-4"
          size="small"
          height="30"
          elevation="10"
          variant="flat"
        >
          SOLICITAR PROPOSTA
        </v-btn>

        <!-- Mobile Menu Button -->
        <v-menu
          v-model="mobileMenu"
          location="bottom"
        >
          <template #activator="{ props }">
            <v-btn
              v-bind="props"
              class="d-md-none"
              icon="mdi-menu"
              variant="text"
            />
          </template>
          <v-list class="mobile-menu-list">
            <v-list-item
              title="INÍCIO"
              to="/"
            />
            <v-list-item
              href="#about"
              title="EMPRESA"
            />
            <v-list-item
              href="#services"
              title="SERVIÇOS"
            />
            <v-list-item
              href="#projects"
              title="PROJECTOS"
            />
            <v-list-item
              href="#academy"
              title="ACADEMIA"
            />
            <v-list-item
              href="#news"
              title="NOTÍCIAS"
            />
            <v-list-item
              href="#contact"
              title="CONTACTOS"
            />
          </v-list>
        </v-menu>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const mobileMenu = ref(false)
</script>

<style scoped>
.top-bar {
  background: linear-gradient(90deg, #003d7a 0%, #0d3b5c 100%);
  color: white;
  font-size: 0.75rem;
  line-height: 1;
  border-bottom: 1px solid rgba(102, 187, 106, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1001;
}

.top-bar-container {
  min-height: 25px;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.contact-list {
  min-width: 0;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: inherit;
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: #a5d6a7;
}

.contact-text {
  font-weight: 500;
  letter-spacing: 0.3px;
}

.divider {
  opacity: 0.5;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  width: 12px;
  height: 12px;
  border-radius: 3px;
}

.social-link:hover {
  background: rgba(102, 187, 106, 0.2);
  color: #66bb6a;
}

.main-navbar {
  padding: 0 !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  position: fixed !important;
  top: 25px !important;
  left: 0;
  right: 0;
  z-index: 1000;
}

.navbar-container {
  height: 100%;
  padding: 0 2rem !important;
}

.logo-link {
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: opacity 0.3s ease;
  flex-shrink: 0;
}

.logo-link:hover {
  opacity: 0.8;
}

.brand-logo {
  display: block;
  width: 190px;
  height: 60px;
  object-fit: contain;
  object-position: left center;
}

.nav-menu {
  margin-left: 2rem;
  align-items: center;
}

.nav-link-group {
  display: inline-flex;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 0.8rem;
  transition: all 0.3s ease;
  padding: 0.5rem 0.8rem;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  letter-spacing: 0.3px;
  position: relative;
}

.nav-link:hover {
  color: #1a7b3c;
  background: rgba(102, 187, 106, 0.08);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #66bb6a, transparent);
  transform: translateX(-50%);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 80%;
}

.ml-1 {
  margin-left: 0.25rem;
}

.cta-btn {
  font-size: 0.70rem;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  padding: 0 0.9rem !important;
}

.cta-btn:hover {
  box-shadow: 0 4px 12px rgba(102, 187, 106, 0.3) !important;
  transform: translateY(-2px);
}

.mobile-menu-list {
  min-width: 200px;
}

@media (max-width: 768px) {
  .navbar-container {
    padding: 0 1rem !important;
  }

  .top-bar-container {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }

  .brand-logo {
    width: 155px;
    height: 52px;
  }

  .nav-menu {
    margin-left: 0;
  }

  .top-bar {
    font-size: 0.7rem;
    padding: 0 !important;
  }

  .contact-list {
    gap: 0.6rem !important;
  }

  .contact-list .contact-link:last-child {
    display: none;
  }

  .contact-list .divider {
    display: none;
  }

  .social-link {
    width: 12px;
    height: 12px;
  }
}

@media (max-width: 420px) {
  .contact-text {
    display: none;
  }

  .contact-link {
    width: 22px;
    height: 22px;
    justify-content: center;
  }
}
</style>
