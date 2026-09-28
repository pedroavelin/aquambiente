<template>
  <main v-if="project" class="project-detail">
    <section class="detail-hero" :style="{ '--project-image': `url(${project.image})` }">
      <div class="detail-hero-shade" />
      <div class="detail-hero-content">
        <nav class="detail-breadcrumb" aria-label="Navegação estrutural">
          <router-link to="/">Início</router-link>
          <v-icon icon="mdi-chevron-right" size="16" />
          <router-link to="/projectos">Projectos</router-link>
          <v-icon icon="mdi-chevron-right" size="16" />
          <span aria-current="page">{{ project.title }}</span>
        </nav>

        <div class="detail-heading">
          <span class="detail-index">Projecto {{ String(project.id).padStart(2, '0') }}</span>
          <h1 class="text-white">{{ project.title }}</h1>
          <p>{{ project.activity }}</p>
        </div>
      </div>
    </section>

    <section class="detail-content">
      <div class="detail-copy">
        <span class="detail-kicker">Âmbito da intervenção</span>
        <h2>O que este projecto abrange</h2>
        <p class="project-description">{{ project.description }}</p>
        <router-link to="/projectos" class="back-link">
          <v-icon icon="mdi-arrow-left" size="18" />
          Voltar aos projectos
        </router-link>
      </div>

      <aside class="detail-facts" aria-label="Áreas do projecto">
        <div class="facts-heading">
          <span>Áreas de intervenção</span>
          <span class="facts-number">{{ String(project.tags.length).padStart(2, '0') }}</span>
        </div>
        <ul>
          <li v-for="(tag, index) in project.tags" :key="tag">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <strong>{{ tag }}</strong>
            <v-icon icon="mdi-arrow-up-right" size="16" />
          </li>
        </ul>
      </aside>
    </section>

    <nav class="project-pagination" aria-label="Navegar entre projectos">
      <router-link
        v-if="previousProject"
        :to="`/projectos/${previousProject.id}`"
        class="pagination-link"
      >
        <span><v-icon icon="mdi-arrow-left" size="16" /> Projecto anterior</span>
        <strong>{{ previousProject.title }}</strong>
      </router-link>
      <span v-else />

      <router-link
        v-if="nextProject"
        :to="`/projectos/${nextProject.id}`"
        class="pagination-link pagination-next"
      >
        <span>Projecto seguinte <v-icon icon="mdi-arrow-right" size="16" /></span>
        <strong>{{ nextProject.title }}</strong>
      </router-link>
    </nav>
  </main>

  <main v-else-if="projectsStore.loading" class="project-not-found">
    <span class="detail-kicker">A carregar</span>
    <h1>Estamos a preparar os dados do projecto.</h1>
  </main>

  <main v-else class="project-not-found">
    <span class="detail-kicker">Projecto indisponível</span>
    <h1>Não encontrámos este projecto.</h1>
    <router-link to="/projectos" class="back-link">
      <v-icon icon="mdi-arrow-left" size="18" />
      Voltar aos projectos
    </router-link>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useProjectsStore } from '@/stores/projects'

const route = useRoute()
const projectsStore = useProjectsStore()
const project = computed(() => projectsStore.projects.find(item => item.id === Number(route.params.id)))
const projectIndex = computed(() => projectsStore.projects.findIndex(item => item.id === project.value?.id))
const previousProject = computed(() => projectsStore.projects[projectIndex.value - 1])
const nextProject = computed(() => projectsStore.projects[projectIndex.value + 1])

onMounted(() => {
  void projectsStore.loadProjects()
})
</script>

<style scoped>
.project-detail {
  --detail-ink: #123b48;
  --detail-green: #247548;
  --detail-muted: #64756f;
  color: var(--detail-ink);
  background: #f7faf7;
  min-height: 100vh;
}

.detail-hero {
  position: relative;
  display: flex;
  align-items: center;
  height: 235px;
  min-height: 235px;
  overflow: hidden;
  padding: 20px max(6vw, calc((100vw - 1240px) / 2));
  color: #fff;
  background-image: var(--project-image);
  background-size: cover;
  background-position: center 48%;
  isolation: isolate;
}

.detail-hero-shade {
  position: absolute;
  z-index: -1;
  inset: 0;
  background: linear-gradient(90deg, rgba(7, 29, 34, .9), rgba(7, 29, 34, .43) 68%, rgba(7, 29, 34, .15)),
    linear-gradient(0deg, rgba(7, 29, 34, .48), transparent 60%);
}

.detail-hero-content {
  width: min(100%, 1240px);
  margin: 0 auto;
}

.detail-breadcrumb {
  display: flex;
  align-items: center;
  gap: 9px;
  color: rgba(255, 255, 255, .78);
  font-size: .82rem;
}

.detail-breadcrumb a {
  color: inherit;
  text-decoration: none;
}

.detail-breadcrumb a:hover { color: #a9e0a8; }
.detail-heading { max-width: 750px; margin-top: 18px; }

.detail-index,
.detail-kicker {
  color: #318755;
  font-size: .76rem;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
}

.detail-index { color: #a9e0a8; }
.detail-heading h1 { margin: 8px 0 6px; font-size: clamp(1rem, 5vw, 2.7rem); line-height: 1.05; color: #fff; }
.detail-heading p { margin: 0; color: rgba(255, 255, 255, .82); font-size: .85rem; }

.detail-content {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(300px, .8fr);
  gap: clamp(48px, 9vw, 140px);
  max-width: 1240px;
  margin: 0 auto;
  padding: 88px 28px 96px;
}

.detail-copy { max-width: 680px; }
.detail-copy h2 { margin: 16px 0 18px; font-size: clamp(1.8rem, 3vw, 2.7rem); line-height: 1.12; }
.detail-copy p { max-width: 460px; color: var(--detail-muted); font-size: 1.05rem; line-height: 1.8; }
.detail-copy .project-description { max-width: 680px; color: #53675f; font-size: 1rem; line-height: 1.9; text-align: justify; text-justify: inter-word; white-space: pre-line; }

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 28px;
  color: var(--detail-green);
  font-size: .9rem;
  font-weight: 700;
  text-decoration: none;
}

.back-link:hover { color: var(--detail-ink); }
.detail-facts { align-self: start; border-top: 1px solid #d8e3dc; }
.facts-heading { display: flex; justify-content: space-between; padding: 17px 0; color: var(--detail-muted); font-size: .78rem; text-transform: uppercase; }
.facts-number { color: var(--detail-green); font-weight: 700; }
.detail-facts ul { margin: 0; padding: 0; list-style: none; }
.detail-facts li { display: grid; grid-template-columns: 36px 1fr 20px; align-items: center; gap: 12px; min-height: 58px; border-top: 1px solid #d8e3dc; }
.detail-facts li > span { color: #86958e; font-size: .74rem; }
.detail-facts li strong { font-size: .95rem; font-weight: 600; }
.detail-facts li .v-icon { color: var(--detail-green); }

.project-pagination {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding: 26px max(6vw, calc((100vw - 1184px) / 2));
  border-top: 1px solid #d8e3dc;
  background: #eef4ef;
}

.pagination-link { display: grid; gap: 8px; color: var(--detail-ink); text-decoration: none; }
.pagination-link > span { display: flex; align-items: center; gap: 7px; color: var(--detail-muted); font-size: .76rem; text-transform: uppercase; }
.pagination-link strong { font-size: .95rem; }
.pagination-next { text-align: right; }
.pagination-next > span { justify-content: end; }

.project-not-found { display: grid; justify-items: start; align-content: center; min-height: 70vh; padding: 60px max(7vw, calc((100vw - 1100px) / 2)); }
.project-not-found h1 { max-width: 650px; margin: 14px 0 0; font-size: clamp(2rem, 5vw, 3.5rem); }

@media (max-width: 720px) {
  .detail-hero { padding: 20px 22px; }
  .detail-breadcrumb { flex-wrap: wrap; font-size: .72rem; }
  .detail-heading { margin-top: 16px; }
  .detail-content { grid-template-columns: 1fr; gap: 54px; padding: 62px 22px 68px; }
  .project-pagination { padding: 22px; }
  .pagination-link strong { max-width: 155px; line-height: 1.3; }
}

@media (min-width: 600px) and (max-width: 960px) {
  .detail-hero { min-height: 430px; }
}
</style>