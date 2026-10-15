<template>
  <main v-if="solution" class="solution-detail">
    <section class="detail-hero">
      <div class="detail-hero-content">
        <nav aria-label="Navegação estrutural" class="detail-breadcrumb">
          <router-link to="/">Início</router-link>
          <v-icon icon="mdi-chevron-right" size="16" />
          <router-link to="/servicos">Serviços</router-link>
          <v-icon icon="mdi-chevron-right" size="16" />
          <span aria-current="page">{{ solution.title }}</span>
        </nav>

        <div class="detail-heading">
          <span class="detail-index">Solução {{ String(solution.id).padStart(2, '0') }}</span>
          <h1 class="detail-breadcrumb-current">{{ solution.title }}</h1>
          <p>{{ solution.activity }}</p>
        </div>
      </div>
    </section>

    <section class="detail-content">
      <div class="detail-copy">
        <span class="detail-kicker">A nossa solução</span>
        <h2>{{ solution.title }}</h2>
        <div class="solution-description" v-html="solution.contentHtml" />

        <router-link class="back-link" to="/#services">
          <v-icon icon="mdi-arrow-left" size="18" />
          Voltar aos serviços
        </router-link>
      </div>
    </section>
  </main>

  <main v-else-if="solutionsStore.loading" class="solution-not-found">
    <span class="detail-kicker">A carregar</span>
    <h1>Estamos a preparar as informações da solução.</h1>
  </main>

  <main v-else-if="solutionsStore.error" class="solution-not-found">
    <span class="detail-kicker">Não foi possível carregar</span>
    <h1>{{ solutionsStore.error }}</h1>

    <router-link class="back-link" to="/servicos">
      <v-icon icon="mdi-arrow-left" size="18" />
      Voltar aos serviços
    </router-link>
  </main>

  <main v-else class="solution-not-found">
    <span class="detail-kicker">Solução indisponível</span>
    <h1>Não encontrámos esta solução.</h1>

    <router-link class="back-link" to="/servicos">
      <v-icon icon="mdi-arrow-left" size="18" />
      Voltar aos serviços
    </router-link>
  </main>
</template>

<script setup lang="ts">
  import { computed, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { useSolutionsStore } from '@/stores/solutions'

  const route = useRoute()
  const solutionsStore = useSolutionsStore()
  const solution = computed(() =>
    solutionsStore.solutions.find(item => item.id === Number(route.params.id)),
  )

  onMounted(() => {
    void solutionsStore.loadSolutions()
  })
</script>

<style scoped>
h1.detail-breadcrumb-current{
  color: #fff!important;
}
.solution-detail {
  --detail-ink: #123b48;
  --detail-green: #247548;
  --detail-muted: #64756f;
  min-height: 100vh;
  color: var(--detail-ink);
  background: #f7faf7;
}

.detail-hero {
  display: flex;
  min-height: 270px;
  align-items: center;
  padding: 24px max(6vw, calc((100vw - 1240px) / 2));
  color: #fff;
  background:
    linear-gradient(90deg, rgba(7, 29, 34, .88), rgba(7, 29, 34, .48) 68%, rgba(7, 29, 34, .2)),
    url('https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D') center 48% / cover no-repeat,
    linear-gradient(115deg, #123b48, #247548);
}

.detail-hero-content {
  width: min(100%, 1240px);
  margin: 0 auto;
}

.detail-breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 30px;
  color: rgba(255, 255, 255, .78);
  font-size: .85rem;
}

.detail-breadcrumb a {
  color: #fff;
  text-decoration: none;
}

.detail-breadcrumb span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.detail-index,
.detail-kicker {
  color: #68d391;
  font-size: .75rem;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
}

.detail-heading h1 {
  max-width: 850px;
  margin: 10px 0;
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.08;
}

.detail-heading p {
  margin: 0;
  color: rgba(255, 255, 255, .82);
  font-size: 1.05rem;
}

.detail-content {
  display: grid;
  grid-template-columns: minmax(0, 800px);
  justify-content: center;
  gap: 64px;
  padding: 72px 6vw 88px;
}

.detail-copy h2 {
  margin: 12px 0 24px;
  font-size: clamp(1.7rem, 3vw, 2.5rem);
}

.solution-description {
  color: #53675f;
  font-size: 1rem;
  line-height: 1.8;
}

.solution-description :deep(h2),
.solution-description :deep(h3) {
  margin: 1.8rem 0 .65rem;
  color: var(--detail-ink);
  font-size: 1.2rem;
}

.solution-description :deep(p) {
  margin: 0 0 1rem;
}

.solution-description :deep(ul) {
  margin: 0 0 1.25rem;
  padding-left: 1.4rem;
}

.solution-description :deep(li) {
  margin: .35rem 0;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 28px;
  color: var(--detail-green);
  font-weight: 700;
  text-decoration: none;
}

.solution-not-found {
  display: grid;
  min-height: 50vh;
  align-content: center;
  justify-items: start;
  gap: 12px;
  padding: 48px max(6vw, calc((100vw - 1000px) / 2));
  color: var(--detail-ink);
}

.solution-not-found h1 {
  max-width: 700px;
  margin: 0;
}

@media (max-width: 600px) {
  .detail-breadcrumb {
    margin-bottom: 22px;
  }

  .detail-content {
    padding-top: 48px;
  }
}
</style>
