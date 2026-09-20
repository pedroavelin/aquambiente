<template>
  <!-- Scroll Progress Bar -->
  <div class="scroll-progress" :style="{ transform: `scaleX(${scrollProgress})` }" />
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
          <span class="icon-ring">
            <v-icon icon="mdi-phone" size="x-small" />
          </span>
          <span class="contact-text">+244 925 668 789</span>
        </a>
        <span aria-hidden="true" class="divider" />
        <a
          aria-label="Enviar email para Aquambiente"
          class="contact-link"
          href="mailto:geral@aquambiente.ao"
        >
          <span class="icon-ring">
            <v-icon icon="mdi-email" size="x-small" />
          </span>
          <span class="contact-text">geral@aquambiente.ao</span>
        </a>
      </div>
      <!-- Social Media -->
      <div aria-label="Redes sociais" class="social-links d-flex align-center gap-2">
        <span class="follow-label">Siga-nos</span>
        <a
          v-for="s in topSocials"
          :key="s.icon"
          :aria-label="s.label"
          class="social-link"
          :href="s.href"
          rel="noopener noreferrer"
          target="_blank"
        >
          <v-icon :icon="s.icon" size="x-small" />
        </a>
      </div>
    </v-container>
  </div>
  <!-- Main Navigation Bar -->
  <v-app-bar
    class="main-navbar"
    :class="{ 'is-scrolled': isScrolled }"
    color="white"
    :elevation="isScrolled ? 4 : 1"
    height="70"
  >
    <v-container class="navbar-container">
      <!-- Logo -->
      <router-link to="/" class="logo-link">
        <img
          alt="Aquambiente - Consultoria Ambiental"
          class="brand-logo"
          src="@/assets/logo/logo2.png"
        >
      </router-link>
      <!-- Navigation Menu (Desktop) -->
      <nav
  class="nav-menu d-none d-md-flex"
  aria-label="Menu principal"
>
  <router-link
    v-for="item in navItems"
    :key="item.label"
    :to="item.to"
    class="nav-link"
    :class="{
      'has-children': item.children,
      'is-active': isActive(item)
    }"
  >
    <span class="nav-link-label">
      {{ item.label }}
    </span>

    <v-icon
      v-if="item.children"
      size="small"
      class="chevron"
    />
  </router-link>
</nav>
      <!-- CTA + Mobile -->
      <div class="navbar-actions">
        <v-btn
          rounded
          class="text-white font-weight-bold d-none d-sm-flex cta-btn"
          color="green-accent-4"
          size="small"
          height="34"
          elevation="4"
          variant="flat"
          to="/contactos"
        >
          <span class="cta-shine" />
          <span class="cta-text">SOLICITAR PROPOSTA</span>
        </v-btn>

        <v-btn
          class="d-md-none hamburger-btn"
          :class="{ 'is-open': mobileMenu }"
          icon
          variant="text"
          aria-label="Abrir menu"
          @click="openMobileMenu"
        >
          <span class="hamburger">
            <span /><span /><span />
          </span>
        </v-btn>

        <transition name="mobile-overlay-transition">
          <div
            v-if="mobileMenu"
            class="mobile-offcanvas-overlay"
            @click="closeMobileMenu"
          />
        </transition>

        <transition name="mobile-panel-transition">
          <aside
            v-if="mobileMenu"
            class="mobile-offcanvas-panel"
            aria-label="Menu mobile"
          >
            <div class="drawer-header">
              <router-link to="/" class="drawer-brand" @click="closeMobileMenu">
                <img
                  alt="Aquambiente"
                  class="drawer-logo"
                  src="@/assets/logo/logo2.png"
                >
              </router-link>

              <v-btn
                aria-label="Fechar menu"
                icon="mdi-close"
                variant="text"
                class="drawer-close"
                @click="closeMobileMenu"
              />
            </div>

            <v-divider />

            <v-list nav density="comfortable" class="mobile-nav-list">
              <v-list-item
                v-for="(item, i) in mobileNavItems"
                :key="item.title"
                :title="item.title"
                :to="item.to"
                :prepend-icon="item.icon"
                :active="isActive(item)"
                :style="{ '--i': i }"
                @click="closeMobileMenu"
              />
            </v-list>

            <div class="drawer-footer">
              <v-btn
                class="drawer-cta"
                color="green-accent-4"
                rounded
                block
                size="large"
                to="/contactos"
                @click="closeMobileMenu"
              >
                SOLICITAR PROPOSTA
              </v-btn>

              <div class="drawer-info">
                <p class="drawer-info-title">AQUAMBIENTE</p>

                <a class="drawer-info-link" href="tel:+244925668789">
                  <v-icon icon="mdi-phone" size="x-small" />
                  <span>+244 925 668 789</span>
                </a>

                <a class="drawer-info-link" href="mailto:geral@aquambiente.ao">
                  <v-icon icon="mdi-email" size="x-small" />
                  <span>geral@aquambiente.ao</span>
                </a>
              </div>
            </div>
          </aside>
        </transition>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts" setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const mobileMenu = ref(false)
  const isScrolled = ref(false)
  const scrollProgress = ref(0)

  const topSocials = [
    { icon: 'mdi-facebook',  href: '#',  label: 'Facebook'  },
    { icon: 'mdi-linkedin',  href: '#',  label: 'LinkedIn'  },
    { icon: 'mdi-instagram', href: '#', label: 'Instagram' },
  ]

  const navItems = [
    { label: 'INÍCIO', to: '/' },
    {
      label: 'EMPRESA',
      to: '/about',
      children: [
        { label: 'Quem Somos',    to: '/about',    icon: 'mdi-account-group-outline' },
        { label: 'Missão & Visão', to: { path: '/', hash: '#mission' }, icon: 'mdi-target' },
        { label: 'Equipa',         to: { path: '/', hash: '#team' },    icon: 'mdi-account-tie-outline' },
      ],
    },
    {
      label: 'SERVIÇOS',
      to: { path: '/', hash: '#services' },
      children: [
        { label: 'Consultoria Ambiental', to: { path: '/', hash: '#services' }, icon: 'mdi-leaf' },
        { label: 'Gestão de Resíduos',    to: { path: '/', hash: '#services' }, icon: 'mdi-recycle' },
        { label: 'Monitorização',         to: { path: '/', hash: '#services' }, icon: 'mdi-chart-line' },
        { label: 'Licenciamento',         to: { path: '/', hash: '#services' }, icon: 'mdi-file-document-check-outline' },
      ],
    },
    { label: 'PROJECTOS', to: { path: '/', hash: '#projects' } },
    { label: 'ACADEMIA',  to: { path: '/', hash: '#academy' } },
    { label: 'NOTÍCIAS',  to: { path: '/', hash: '#news' } },
    { label: 'CONTACTOS', to: '/contactos' },
  ]

  const mobileNavItems = [
    { title: 'INÍCIO',     to: '/',          icon: 'mdi-home' },
    { title: 'EMPRESA',    to: '/about',     icon: 'mdi-domain' },
    { title: 'SERVIÇOS',   to: { path: '/', hash: '#services' }, icon: 'mdi-tools' },
    { title: 'PROJECTOS',  to: { path: '/', hash: '#projects' }, icon: 'mdi-folder-multiple-outline' },
    { title: 'ACADEMIA',   to: { path: '/', hash: '#academy' }, icon: 'mdi-school-outline' },
    { title: 'NOTÍCIAS',   to: { path: '/', hash: '#news' }, icon: 'mdi-newspaper-variant-outline' },
    { title: 'CONTACTOS',  to: '/contactos', icon: 'mdi-phone' },
  ]

  const isActive = (item: any) => {
    const target = item.to

    if (typeof target === 'string') {
      return route.path === target
    }

    if (target && typeof target === 'object') {
      const pathMatches = route.path === target.path
      const hashMatches = target.hash ? route.hash === target.hash : true
      return pathMatches && hashMatches
    }

    if (route.path !== '/') {
      return false
    }

    const hrefs = [
      item.href,
      ...(item.children?.map((child: { href?: string; to?: string | { path?: string; hash?: string } }) => child.href ?? (typeof child.to === 'object' ? child.to.hash : child.to)) ?? [])
    ].filter(Boolean)

    return hrefs.includes(route.hash)
  }

  const onScroll = () => {
    const y = window.scrollY
    isScrolled.value = y > 30
    const h = document.documentElement.scrollHeight - window.innerHeight
    scrollProgress.value = h > 0 ? Math.min(y / h, 1) : 0
  }

  const openMobileMenu = () => (mobileMenu.value = true)
  const closeMobileMenu = () => (mobileMenu.value = false)

  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
  })
  onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>
<style scoped>
/* =========================================================
   SCROLL PROGRESS
========================================================= */
.scroll-progress {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 2px;
  background: linear-gradient(90deg, #35ad72, #2ec4b6, #1f7ac2);
  transform-origin: 0 50%;
  transform: scaleX(0);
  z-index: 2000;
  transition: transform 0.15s linear;
  box-shadow: 0 0 10px rgba(53, 173, 114, 0.6);
}

/* =========================================================
   TOP BAR
========================================================= */
.top-bar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1001;
  color: #fff;
  font-size: 0.75rem;
  line-height: 1;
  border-bottom: 1px solid rgba(102, 187, 106, 0.35);
  background: linear-gradient(90deg, #003d7a 0%, #0d3b5c 50%, #003d7a 100%);
  background-size: 200% 100%;
  animation: topbarShift 12s ease-in-out infinite alternate;
}
@keyframes topbarShift {
  0%   { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}

.top-bar-container {
  min-height: 26px;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.contact-list { min-width: 0; }

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: inherit;
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.3s ease, transform 0.3s ease;
}
.contact-link:hover { color: #a5d6a7; transform: translateY(-1px); }

.icon-ring {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px; height: 18px;
  border-radius: 50%;
  background: rgba(165, 214, 167, 0.12);
  transition: background 0.3s ease, transform 0.3s ease;
}
.contact-link:hover .icon-ring {
  background: rgba(165, 214, 167, 0.28);
  transform: scale(1.1);
  animation: ringPulse 1.2s ease-in-out infinite;
}
@keyframes ringPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(165, 214, 167, 0.55); }
  50%      { box-shadow: 0 0 0 6px rgba(165, 214, 167, 0); }
}

.contact-text { font-weight: 500; letter-spacing: 0.3px; }

.divider {
  display: inline-block;
  width: 1px; height: 12px;
  background: linear-gradient(180deg, transparent, rgba(165, 214, 167, 0.7), transparent);
  opacity: 0.8;
}

.follow-label {
  font-size: 0.68rem;
  opacity: 0.7;
  letter-spacing: 0.4px;
  margin-right: 0.15rem;
}

.social-links { gap: 0.35rem !important; }

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px; height: 22px;
  border-radius: 50%;
  color: #fff;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
              background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
}
.social-link:hover {
  background: linear-gradient(135deg, #35ad72, #2ec4b6);
  color: #fff;
  transform: translateY(-2px) scale(1.12) rotate(-6deg);
  box-shadow: 0 4px 12px rgba(53, 173, 114, 0.5);
}

/* =========================================================
   MAIN NAVBAR
========================================================= */
.main-navbar {
  padding: 0 !important;
  position: fixed !important;
  top: 26px !important;
  left: 0;
  right: 0;
  z-index: 1000;

  transition:
    background 0.35s ease,
    box-shadow 0.35s ease,
    backdrop-filter 0.35s ease;
}

.main-navbar.is-scrolled {
  background: rgba(255, 255, 255, 0.85) !important;
  backdrop-filter: saturate(180%) blur(14px);
  -webkit-backdrop-filter: saturate(180%) blur(14px);

  box-shadow:
    0 8px 24px rgba(0, 61, 122, 0.12) !important;
}

.navbar-container {
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;

  column-gap: clamp(0.75rem, 1.8vw, 2rem);

  padding: 0 2rem !important;
}

/* =========================================================
   LOGO
========================================================= */
.logo-link {
  display: flex;
  align-items: center;
  justify-content: flex-start;

  text-decoration: none;
  flex-shrink: 0;

  transition:
    transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.logo-link:hover {
  transform: scale(1.04);
}

.brand-logo {
  display: block;

  width: 190px;
  height: 60px;

  object-fit: contain;
  object-position: left center;

  transition: filter 0.4s ease;
}

.logo-link:hover .brand-logo {
  filter:
    drop-shadow(
      0 4px 10px rgba(53, 173, 114, 0.35)
    );
}

/* =========================================================
   NAV MENU
========================================================= */
.nav-menu {
  min-width: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: clamp(0.05rem, 0.25vw, 0.25rem);

  overflow: hidden;
}

.nav-link {
  position: relative;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  flex: 0 1 auto;
  cursor: pointer;
  min-width: 0;

  padding:
    0.55rem
    clamp(0.38rem, 0.65vw, 0.85rem);

  border-radius: 8px;

  color: #2a3a48;

  font-size: clamp(0.66rem, 0.7vw, 0.78rem);
  font-weight: 600;

  letter-spacing: clamp(0.15px, 0.04vw, 0.5px);

  text-decoration: none;

  white-space: nowrap;

  transition:
    color 0.3s ease,
    background 0.3s ease,
    transform 0.3s ease;
}

.nav-link:hover {
  color: #1a7b3c;

  background:
    rgba(102, 187, 106, 0.1);

  transform: translateY(-1px);
}

.nav-link-label {
  position: relative;
  z-index: 1;
}

.nav-link::after {
  content: '';

  position: absolute;

  bottom: 4px;
  left: 50%;

  width: 0;
  height: 2px;

  background:
    linear-gradient(
      90deg,
      #35ad72,
      #2ec4b6
    );

  border-radius: 2px;

  transform: translateX(-50%);

  transition:
    width 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.nav-link:hover::after,
.nav-link.is-active::after {
  width: 55%;
}

.nav-link.is-active {
  color: #1a7b3c;

  background:
    rgba(102, 187, 106, 0.1);
}


.chevron {
  flex-shrink: 0;

  margin-left: 0.15rem;

  transition:
    transform 0.35s ease;
}

.nav-link.has-children:hover .chevron {
  transform: rotate(180deg);
}
.navbar-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: 0.5rem;

  flex-shrink: 0;
}


/* =========================================================
   DROPDOWN
========================================================= */
.dropdown {
  position: absolute;
  top: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  min-width: 220px;
  padding: 0.4rem;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: saturate(180%) blur(14px);
  border-radius: 12px;
  border: 1px solid rgba(0, 61, 122, 0.08);
  box-shadow: 0 14px 40px rgba(0, 61, 122, 0.18);
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  z-index: 20;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.55rem 0.75rem;
  border-radius: 8px;
  color: #2a3a48;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.2px;
  text-decoration: none;
  transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease;
}
.dropdown-item:hover {
  background: linear-gradient(90deg, rgba(53, 173, 114, 0.12), rgba(46, 196, 182, 0.08));
  color: #1a7b3c;
  transform: translateX(3px);
}
.dropdown-icon { color: #35ad72; }

.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-8px);
}

/* =========================================================
   CTA BUTTON
========================================================= */
.cta-btn {
  position: relative;

  flex-shrink: 0;

  overflow: hidden;

  min-width: max-content;

  font-size: 0.7rem;
  font-weight: 800;

  letter-spacing: 0.6px;

  padding: 0 1rem !important;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  box-shadow:
    0 6px 18px rgba(53, 173, 114, 0.35) !important;
}

.cta-btn:hover {
  transform: translateY(-2px);

  box-shadow:
    0 10px 24px rgba(53, 173, 114, 0.5) !important;
}

.cta-text {
  position: relative;
  z-index: 1;

  white-space: nowrap;
}
/* =========================================================
   HAMBURGER (animado)
========================================================= */
.hamburger-btn {
  width: 42px !important; height: 42px !important;
  border-radius: 50% !important;
  transition: background 0.3s ease;
}
.hamburger-btn:hover { background: rgba(102, 187, 106, 0.1) !important; }

.hamburger {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  width: 20px; height: 16px;
}
.hamburger span {
  display: block;
  height: 2px;
  width: 100%;
  background: #0d3b5c;
  border-radius: 2px;
  transition: transform 0.35s ease, opacity 0.25s ease, width 0.35s ease;
  transform-origin: center;
}
.hamburger span:nth-child(2) { width: 75%; }

.hamburger-btn.is-open .hamburger span:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}
.hamburger-btn.is-open .hamburger span:nth-child(2) {
  opacity: 0;
  transform: translateX(-6px);
}
.hamburger-btn.is-open .hamburger span:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

/* =========================================================
   MOBILE OFF-CANVAS
========================================================= */
.mobile-offcanvas-overlay {
  position: fixed;
  inset: 0;
  background: rgba(13, 59, 92, 0.35);
  backdrop-filter: blur(4px);
  z-index: 1300;
}

.mobile-offcanvas-panel {
  position: fixed;
  top: 0; right: 0;
  width: min(300px, 84vw);
  height: 100vh;
  background: #ffffff;
  border-left: 1px solid rgba(0, 61, 122, 0.12);
  box-shadow: -20px 0 40px rgba(0, 61, 122, 0.2);
  z-index: 1400;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.mobile-overlay-transition-enter-active,
.mobile-overlay-transition-leave-active {
  transition: opacity 0.3s ease;
}
.mobile-overlay-transition-enter-from,
.mobile-overlay-transition-leave-to {
  opacity: 0;
}

.mobile-panel-transition-enter-active,
.mobile-panel-transition-leave-active {
  transition: opacity 0.3s ease, transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
.mobile-panel-transition-enter-from,
.mobile-panel-transition-leave-to {
  opacity: 0;
  transform: translateX(110%);
}

/* Header */
.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.85rem 1rem;
  background: linear-gradient(90deg, rgba(0, 61, 122, 0.06), rgba(102, 187, 106, 0.1));
  border-bottom: 1px solid rgba(0, 61, 122, 0.08);
}
.drawer-brand { display: flex; align-items: center; text-decoration: none; }
.drawer-logo {
  width: 150px; height: 48px;
  object-fit: contain;
  object-position: left center;
  filter: drop-shadow(0 4px 4px rgba(0, 61, 122, 0.08));
}
.drawer-close {
  transition: transform 0.3s ease, background 0.3s ease;
}
.drawer-close:hover {
  background: rgba(102, 187, 106, 0.12) !important;
  transform: rotate(90deg);
}

/* Lista */
.mobile-nav-list {
  background: #ffffff;
  min-height: 0;
  padding: 0.75rem 0.25rem 0.5rem;
  flex: 1 1 auto;
  overflow-y: auto;
}
.mobile-nav-list :deep(.v-list-item) {
  margin: 0.2rem 0.5rem;
  border-radius: 14px;
  padding: 0.15rem 0.6rem;
  gap: 0.75rem;
  opacity: 0;
  transform: translateX(20px);
  animation: itemSlideIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: calc(var(--i) * 60ms + 0.15s);
  transition: transform 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
}
@keyframes itemSlideIn {
  to { opacity: 1; transform: translateX(0); }
}
.mobile-nav-list :deep(.v-list-item:hover) {
  background: linear-gradient(90deg, rgba(102, 187, 106, 0.14), rgba(0, 61, 122, 0.04));
  transform: translateX(-3px);
  box-shadow: inset 0 0 0 1px rgba(102, 187, 106, 0.2);
}
.mobile-nav-list :deep(.v-list-item__prepend) {
  display: grid;
  place-items: center;
  width: 2.5rem; height: 2.5rem;
  min-width: 2.5rem;
  color: #1b7d44;
  background: linear-gradient(135deg, rgba(0, 61, 122, 0.06), rgba(102, 187, 106, 0.2));
  border-radius: 999px;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}
.mobile-nav-list :deep(.v-list-item:hover .v-list-item__prepend) {
  transform: scale(1.08) rotate(-4deg);
}
.mobile-nav-list :deep(.v-list-item__prepend .v-icon) {
  display: flex !important;
  align-items: center;
  justify-content: center;
  margin: 0 auto -20px;
  font-size: 0.95rem;
}
.mobile-nav-list :deep(.v-list-item-title) {
  color: #0d3b5c;
  letter-spacing: 0.4px;
  font-weight: 700;
}

/* Footer do drawer */
.drawer-footer {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 0.85rem;
  padding: 1rem 1rem 3rem;
  border-top: 1px solid rgba(0, 61, 122, 0.08);
  background: linear-gradient(180deg, rgba(102, 187, 106, 0.04), rgba(0, 61, 122, 0.05));
}
.drawer-cta {
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  box-shadow: 0 10px 22px rgba(102, 187, 106, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.drawer-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 28px rgba(102, 187, 106, 0.42);
}
.drawer-info {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding-top: 0.75rem;
  border-top: 1px solid rgba(0, 61, 122, 0.08);
}
.drawer-info-title {
  margin: 0;
  color: #0d3b5c;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.drawer-info-link {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: #0d3b5c;
  font-size: 0.76rem;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s ease, transform 0.2s ease;
}
.drawer-info-link:hover { color: #1b7d44; transform: translateX(3px); }

/* =========================================================
   RESPONSIVO
========================================================= */
@media (max-width: 768px) {
  .navbar-container { padding: 0 1rem !important; }
  .top-bar-container {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
  .brand-logo { width: 155px; height: 52px; }
  .nav-menu { margin-left: 0; }
  .top-bar { font-size: 0.7rem; }
  .contact-list { gap: 0.6rem !important; }
  .contact-list .contact-link:last-child,
  .contact-list .divider { display: none; }
  .follow-label { display: none; }
}

@media (min-width: 960px) and (max-width: 1279px) {
  .cta-btn { display: none !important; }
}

@media (max-width: 959px) {
  .cta-btn { display: none !important; }
}

@media (max-width: 420px) {
  .contact-text { display: none; }
  .contact-link { justify-content: center; }
}

/* =========================================================
   ACESSIBILIDADE
========================================================= */
@media (prefers-reduced-motion: reduce) {
  .top-bar,
  .cta-shine,
  .icon-ring,
  .mobile-nav-list :deep(.v-list-item) {
    animation: none !important;
    transition: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}

/* ============================================================
   PARTNERS STRIP — MOBILE (rotação contínua garantida)
============================================================ */

/* Impede que o "toque" pause a animação em ecrãs táteis.
   Em mobile não há hover real, mas o :active pode disparar
   acidentalmente durante o scroll da página. */
@media (hover: none) {
  .partners-strip:hover .partners-strip__track,
  .partners-strip:active .partners-strip__track {
    animation-play-state: running !important;
  }
}

/* Ajustes visuais em mobile, mantendo a animação ativa */
@media (max-width: 780px) {
  .partners-strip {
    padding: 20px 0;
    /* mantém o fade lateral, mas mais suave */
    -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
    mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
  }

  .partners-strip__group {
    gap: 36px;
    padding-right: 36px;
  }

  .partner {
    gap: 8px;
    font-size: .78rem;
  }

  .partner :deep(.v-icon) {
    font-size: 22px;
  }

  /* Rotação um pouco mais rápida em ecrãs pequenos
     (o percurso é menor, por isso compensa) */
  .partners-strip__track {
    animation-duration: 26s;
    animation-play-state: running !important;
  }
}

/* Garante também que "reduzir movimento" NÃO desativa
   a rotação, caso queiras forçar sempre.
   (Remove este bloco se preferires respeitar a acessibilidade) */
@media (prefers-reduced-motion: reduce) {
  .partners-strip__track {
    animation: partners-scroll 26s linear infinite !important;
  }
}

/* Esconder menu desktop em ecrãs < 960px */
@media (max-width: 959px) {
  .nav-menu {
    display: none !important;
  }
}

/* Garantir visibilidade do menu desktop em ecrãs ≥ 960px */
@media (min-width: 960px) {
  .nav-menu {
    display: flex !important;
  }
}
@media (min-width: 960px) {
  .hamburger-btn {
    display: none !important;
  }
}
</style>