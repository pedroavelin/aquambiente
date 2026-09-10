<template>
  <section id="projects" class="projects-section py-16">
    <v-container>
      <div class="section-header mb-12">
        <h2 class="text-h3 font-weight-bold mb-4">PROJECTOS EM DESTAQUE</h2>
        <p class="text-h6 text-grey-darken-1">
          Conheça alguns dos nossos projectos mais significativos
        </p>
      </div>

      <!-- Projects Carousel -->
      <v-carousel
        :show-arrows="true"
        height="500"
        class="rounded-lg"
      >
        <v-carousel-item
          v-for="project in projects"
          :key="project.id"
        >
          <v-row class="h-100 align-center">
            <!-- Project Image -->
            <v-col cols="12" md="6">
              <v-img
                :src="project.image"
                height="450"
                cover
                class="rounded-lg"
              />
            </v-col>

            <!-- Project Info -->
            <v-col cols="12" md="6" class="px-6">
              <h3 class="text-h4 font-weight-bold mb-4">{{ project.title }}</h3>
              <p class="text-body1 text-grey-darken-1 mb-4">
                {{ project.description }}
              </p>

              <div class="mb-6">
                <h4 class="text-subtitle1 font-weight-bold mb-2">SERVIÇOS INCLUSOS:</h4>
                <div class="d-flex flex-wrap gap-2">
                  <v-chip
                    v-for="(tag, index) in project.tags"
                    :key="index"
                    size="small"
                    color="green-accent-4"
                    text-color="white"
                  >
                    {{ tag }}
                  </v-chip>
                </div>
              </div>

              <v-btn
                color="green-accent-4"
                text-color="white"
                size="large"
              >
                VER PROJECTOS
              </v-btn>
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </section>
</template>

<script lang="ts" setup>
const projects = [
  {
    id: 1,
    title: 'Auditoria Ambiental Industrial',
    description:
      'Auditoria completa realizada numa grande indústria de transformação, incluindo avaliação de conformidade regulamentar e propostas de melhoria contínua.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=450&fit=crop',
    tags: ['Auditoria', 'Conformidade', 'Relatório']
  },
  {
    id: 2,
    title: 'Programa de Reciclagem Corporativo',
    description:
      'Implementação de um programa integrado de gestão de resíduos numa empresa multinacional, com redução de 60% dos resíduos para aterros.',
    image: 'https://images.unsplash.com/photo-1532996122724-8f3c2cd83c5d?w=600&h=450&fit=crop',
    tags: ['Reciclagem', 'Resíduos', 'Sustentabilidade']
  },
  {
    id: 3,
    title: 'Monitorização Ambiental Contínua',
    description:
      'Sistema de monitorização de qualidade do ar e água em área protegida, com relatórios mensais e alertas automáticos.',
    image: 'https://images.unsplash.com/photo-1497206365907-3ff1591cced1?w=600&h=450&fit=crop',
    tags: ['Monitorização', 'Qualidade', 'Relatórios']
  },
  {
    id: 4,
    title: 'Consultoria de Conformidade RGPD Ambiental',
    description:
      'Análise e implementação de conformidade com regulamentações ambientais internacionais e locais para multinacional europeia.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=450&fit=crop',
    tags: ['Conformidade', 'Regulamentação', 'Consultoria']
  }
]
</script>

<style scoped>
.projects-section {
  background: #f5f5f5;
}

.section-header {
  text-align: center;
}
</style>
