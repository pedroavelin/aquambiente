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
</style>
