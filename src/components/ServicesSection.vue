<template>
  <section id="services" class="services-section py-16">
    <v-container>
      <div class="section-header mb-12">
        <h2 class="text-h3 font-weight-bold mb-4">O QUE FAZEMOS</h2>
        <p class="text-h6 text-grey-darken-1">
          Soluções completas e integradas para os seus desafios ambientais
        </p>
      </div>

      <!-- Services Grid -->
      <v-row>
        <v-col v-for="service in services" :key="service.id" cols="12" sm="6" md="3">
          <div class="service-card">
            <div class="service-icon">
              <v-icon :icon="service.icon" color="green-accent-4" size="48"></v-icon>
            </div>
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts" setup>
const services = [
  {
    id: 1,
    icon: 'mdi-leaf',
    title: 'Consultoria Ambiental',
    description: 'Assessoria especializada em questões ambientais e sustentabilidade'
  },
  {
    id: 2,
    icon: 'mdi-recycle',
    title: 'Gestão de Resíduos',
    description: 'Soluções completas para reciclagem e tratamento de resíduos'
  },
  {
    id: 3,
    icon: 'mdi-eye-check',
    title: 'Monitorização',
    description: 'Fiscalização contínua e relatórios de conformidade'
  },
  {
    id: 4,
    icon: 'mdi-wind-power',
    title: 'Qualidade do Ar',
    description: 'Análise e controlo de emissões atmosféricas'
  },
  {
    id: 5,
    icon: 'mdi-volume-mute',
    title: 'Ruído',
    description: 'Avaliação e controlo de níveis de ruído'
  },
  {
    id: 6,
    icon: 'mdi-file-document-check',
    title: 'Licenciamento',
    description: 'Gestão de documentos e licenças ambientais'
  },
  {
    id: 7,
    icon: 'mdi-medical-bag',
    title: 'Higiene e Segurança',
    description: 'Programas de segurança e higiene no trabalho'
  },
  {
    id: 8,
    icon: 'mdi-book-open-variant',
    title: 'Formação',
    description: 'Cursos e treinamentos especializados'
  }
]
</script>

<style scoped>
.services-section {
  background: #f5f5f5;
}

.section-header {
  text-align: center;
}

.service-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  height: 100%;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.service-icon {
  margin-bottom: 1rem;
  padding: 1rem;
  background: rgba(102, 187, 106, 0.1);
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
}

.service-title {
  font-weight: 600;
  color: #333;
  margin: 1rem 0 0.5rem 0;
  font-size: 1.1rem;
}

.service-description {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
}
</style>
