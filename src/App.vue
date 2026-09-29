<template>
  <v-app>
    <Header />
    <v-main class="main-content">
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts" setup>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
</script>

<style scoped>
.main-content {
  padding-top: 95px !important;
}

:deep(section[id]) {
  scroll-margin-top: 110px;
}
.cine-scene-title {
    margin: 0;
    font-family: 'Cormorant Garamond', 'Playfair Display', serif;
    font-size: clamp(0.1rem, 2vw, 3rem);
    font-weight: 400;
    line-height: 0.98;
    letter-spacing: 0.025em;
    color: #fafaf7;
    max-width: 40ch!important;
}
</style>
