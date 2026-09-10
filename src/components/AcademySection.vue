<template>
  <section id="academy" class="academy-section py-16">
    <v-container>
      <v-row align="stretch">
        <!-- Left - Image -->
        <v-col cols="12" md="4" class="mb-6 mb-md-0">
          <v-img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=500&fit=crop"
            height="500"
            cover
            class="rounded-lg"
          />
        </v-col>

        <!-- Middle - Content -->
        <v-col cols="12" md="4" class="mb-6 mb-md-0 px-md-4">
          <h3 class="academy-label text-green-accent-4 font-weight-bold mb-3">
            ACADEMIA AQUAMBIENTE
          </h3>
          <h2 class="text-h4 font-weight-bold mb-4">
            Formação Profissional para Desafios Ambientais
          </h2>
          <p class="text-body2 text-grey-darken-1 mb-4 line-height-lg">
            Formação profissional para especialistas em desafios ambientais e segurança.
          </p>

          <!-- Course Features -->
          <div class="features-list">
            <div class="feature-item mb-3">
              <v-icon size="20" color="green-accent-4" class="mr-2">mdi-check-circle</v-icon>
              <span class="text-body2">Cursos Certificados</span>
            </div>
            <div class="feature-item mb-3">
              <v-icon size="20" color="green-accent-4" class="mr-2">mdi-check-circle</v-icon>
              <span class="text-body2">Modalidades Online e Presencial</span>
            </div>
            <div class="feature-item mb-3">
              <v-icon size="20" color="green-accent-4" class="mr-2">mdi-check-circle</v-icon>
              <span class="text-body2">Certificação Profissional</span>
            </div>
          </div>

          <v-btn
            color="green-accent-4"
            class="text-white font-weight-bold mt-6"
            size="large"
          >
            SAIBA MAIS
          </v-btn>
        </v-col>

        <!-- Right - Courses Box -->
        <v-col cols="12" md="4">
          <div class="courses-box">
            <h3 class="courses-title mb-6">PRÓXIMOS CURSOS</h3>

            <div class="course-item mb-5" v-for="(course, index) in upcomingCourses" :key="index">
              <div class="course-icon mb-2">
                <v-icon size="24" color="green-accent-4">mdi-calendar-check</v-icon>
              </div>
              <h4 class="course-name mb-1">{{ course.name }}</h4>
              <p class="course-date">{{ course.date }}</p>
            </div>

            <v-btn
              color="white"
              text-color="green-accent-4"
              class="font-weight-bold w-100"
              size="large"
            >
              VER TODOS OS CURSOS →
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts" setup>
const upcomingCourses = [
  {
    name: 'Gestão de Resíduos',
    date: '24 - 26 de Ago'
  },
  {
    name: 'Licenciamento Ambiental',
    date: '09 - 09 de Set'
  },
  {
    name: 'Higiene e Segurança no Trabalho',
    date: '18 - 17 de Out'
  }
]
</script>

<style scoped>
.academy-section {
  background: white;
}

.academy-label {
  font-size: 0.85rem;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.line-height-lg {
  line-height: 1.6;
}

.features-list {
  margin: 1.5rem 0;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  color: #333;
  font-size: 0.9rem;
}

.courses-box {
  background: linear-gradient(135deg, #0d3b5c 0%, #0f4a6b 100%);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.courses-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
}

.course-item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 1.5rem;
}

.course-item:last-child {
  border-bottom: none;
  padding-bottom: 1.5rem;
}

.course-icon {
  width: 40px;
  height: 40px;
  background: rgba(102, 187, 106, 0.2);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.course-name {
  font-size: 0.95rem;
  font-weight: 600;
  color: white;
}

.course-date {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

@media (max-width: 768px) {
  .courses-box {
    padding: 1.5rem;
  }

  .course-item {
    padding-bottom: 1rem;
  }
}
</style>
