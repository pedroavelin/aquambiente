<template>
  <section id="academy" class="academy-section">
    <v-container class="academy-container">
      <div class="academy-banner">

        <!-- =====================================================
             IMAGEM
        ====================================================== -->
        <div class="academy-image-wrapper">
          <v-img
            class="academy-image"
            cover
            :src="formationImage"
          />
        </div>

        <!-- =====================================================
             CONTEÚDO CENTRAL
        ====================================================== -->
        <div class="academy-content">

          <h2 class="academy-title">
            ACADEMIA AQUAMBIENTE
          </h2>

          <div class="academy-title-line"></div>

          <p class="academy-description">
            Formação profissional para capacitar pessoas e organizações
            para os desafios ambientais e de segurança.
          </p>

          <!-- Características -->
          <div class="academy-features">

            <div class="feature-item">
              <v-icon icon="mdi-check" />
              <span>Cursos e Workshops</span>
            </div>

            <div class="feature-item">
              <v-icon icon="mdi-check" />
              <span>Certificação</span>
            </div>

            <div class="feature-item">
              <v-icon icon="mdi-check" />
              <span>Certificação</span>
            </div>

            <div class="feature-item">
              <v-icon icon="mdi-check" />
              <span>Instrutores Qualificados</span>
            </div>

          </div>

          <!-- Botão -->
          <v-btn
            class="academy-button"
            variant="outlined"
            size="small"
          >
            SAIBA MAIS
          </v-btn>

        </div>

        <!-- =====================================================
             PRÓXIMOS CURSOS
        ====================================================== -->
        <div class="courses-panel">

          <h3 class="courses-title">
            PRÓXIMOS CURSOS
          </h3>

          <div class="courses-title-line"></div>

          <div class="courses-list">

            <div
              v-for="(course, index) in upcomingCourses"
              :key="index"
              class="course-item"
            >

              <div class="course-left">
                <div class="course-icon">
                  <v-icon icon="mdi-calendar-outline" />
                </div>

                <span class="course-name">
                  {{ course.name }}
                </span>
              </div>

              <span class="course-date">
                {{ course.date }}
              </span>

            </div>

          </div>

          <button class="all-courses">
            VER TODOS OS CURSOS
            <v-icon icon="mdi-arrow-right" />
          </button>

        </div>

      </div>
    </v-container>
  </section>
</template>


<script lang="ts" setup>
  import formationImage from '@/assets/empresa/formacao.jpeg'

const upcomingCourses = [
  {
    name: 'Gestão de Resíduos Sólidos',
    date: '24 – 26 JUN'
  },
  {
    name: 'Licenciamento Ambiental',
    date: '01 – 03 JUL'
  },
  {
    name: 'Higiene e Segurança no Trabalho',
    date: '15 – 17 JUL'
  }
]

</script>


<style scoped>

/* =========================================================
   SECTION
========================================================= */

.academy-section {
  width: 100%;
  padding: 20px 0;
  background: #ffffff;
}

.academy-container {
  max-width: 1180px !important;
  padding: 0 12px;
}


/* =========================================================
   BANNER PRINCIPAL
========================================================= */

.academy-banner {
  width: 100%;
  min-height: 265px;

  display: grid;

  grid-template-columns:
    37%
    36%
    27%;

  overflow: hidden;

  border-radius: 9px;

  background: #ffffff;

  box-shadow:
    0 7px 24px rgba(0, 0, 0, 0.08);
}


/* =========================================================
   IMAGEM
========================================================= */

.academy-image-wrapper {
  position: relative;

  min-height: 265px;

  overflow: hidden;
}

.academy-image {
  width: 100%;
  height: 100%;

  min-height: 265px;

  object-fit: cover;
}


/* =========================================================
   CONTEÚDO CENTRAL
========================================================= */

.academy-content {
  padding: 23px 27px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: #ffffff;
}


/* Título */

.academy-title {
  margin: 0;

  color: #153b66;

  font-size: 17px;
  font-weight: 800;

  line-height: 1.2;
}


/* Linha verde */

.academy-title-line {
  width: 30px;
  height: 3px;

  margin: 8px 0 12px;

  background: #39a96b;

  border-radius: 5px;
}


/* Descrição */

.academy-description {
  max-width: 330px;

  margin: 0 0 14px;

  color: #59636d;

  font-size: 10.5px;
  font-weight: 400;

  line-height: 1.55;
}


/* =========================================================
   FEATURES
========================================================= */

.academy-features {
  display: grid;

  grid-template-columns: 1fr 1fr;

  column-gap: 22px;
  row-gap: 9px;

  margin-bottom: 17px;
}

.feature-item {
  display: flex;
  align-items: center;

  gap: 7px;

  color: #4a5055;

  font-size: 10px;
  font-weight: 500;

  white-space: nowrap;
}

.feature-item .v-icon {
  color: #35a96a;

  font-size: 17px;
}


/* =========================================================
   BOTÃO
========================================================= */

.academy-button {
  align-self: flex-start;

  height: 31px !important;
  min-height: 31px !important;

  padding: 0 16px !important;

  color: #398f69 !important;

  border: 1px solid #8cc9ac;

  border-radius: 5px;

  font-size: 9px !important;
  font-weight: 700;

  letter-spacing: 0.02em;
}


/* =========================================================
   PAINEL CURSOS
========================================================= */

.courses-panel {
  min-height: 265px;

  padding: 19px 17px;

  display: flex;
  flex-direction: column;

  background: #073d70;

  color: #ffffff;
}


/* =========================================================
   TÍTULO CURSOS
========================================================= */

.courses-title {
  margin: 0;

  color: #ffffff;

  font-size: 14px;
  font-weight: 800;

  line-height: 1.2;
}

.courses-title-line {
  width: 30px;
  height: 3px;

  margin: 7px 0 11px;

  background: #28a967;

  border-radius: 5px;
}


/* =========================================================
   LISTA
========================================================= */

.courses-list {
  display: flex;
  flex-direction: column;

  gap: 6px;
}


/* =========================================================
   CURSO
========================================================= */

.course-item {
  min-height: 38px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 7px;

  padding: 5px 7px;

  border: 1px solid rgba(255, 255, 255, 0.28);

  border-radius: 6px;

  background: rgba(255, 255, 255, 0.025);
}


/* lado esquerdo */

.course-left {
  min-width: 0;

  display: flex;
  align-items: center;

  gap: 7px;
}


/* =========================================================
   ÍCONE
========================================================= */

.course-icon {
  width: 22px;
  height: 22px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #37b574;

  border-radius: 5px;

  color: #43c47d;
}

.course-icon .v-icon {
  font-size: 14px;
}


/* =========================================================
   NOME
========================================================= */

.course-name {
  overflow: hidden;

  color: #ffffff;

  font-size: 8.5px;
  font-weight: 500;

  line-height: 1.25;

  text-overflow: ellipsis;
}


/* =========================================================
   DATA
========================================================= */

.course-date {
  flex-shrink: 0;

  color: #ffffff;

  font-size: 8px;
  font-weight: 700;

  white-space: nowrap;
}


/* =========================================================
   TODOS OS CURSOS
========================================================= */

.all-courses {
  display: flex;
  align-items: center;

  gap: 4px;

  margin-top: auto;
  padding: 8px 0 0;

  border: none;

  background: transparent;

  color: #22a968;

  font-family: inherit;

  font-size: 10px;
  font-weight: 800;

  cursor: pointer;

  text-align: left;
}

.all-courses .v-icon {
  font-size: 15px;
}


/* =========================================================
   HOVER
========================================================= */

.course-item {
  transition:
    background 0.2s ease,
    border-color 0.2s ease;
}

.course-item:hover {
  background: rgba(255, 255, 255, 0.08);

  border-color: rgba(255, 255, 255, 0.45);
}

.academy-button {
  transition: all 0.2s ease;
}

.academy-button:hover {
  background: #eaf7f0 !important;
}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 1000px) {

  .academy-banner {
    grid-template-columns:
      34%
      38%
      28%;
  }

  .academy-content {
    padding: 20px;
  }

  .academy-features {
    column-gap: 10px;
  }

  .feature-item {
    font-size: 9px;
  }

  .course-name {
    font-size: 8px;
  }

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 768px) {

  .academy-section {
    padding: 15px;
  }

  .academy-banner {
    display: flex;
    flex-direction: column;

    min-height: auto;
  }

  .academy-image-wrapper {
    width: 100%;
    height: 230px;

    min-height: 230px;
  }

  .academy-image {
    min-height: 230px;
  }

  .academy-content {
    padding: 25px;
  }

  .academy-title {
    font-size: 18px;
  }

  .academy-description {
    max-width: none;

    font-size: 11px;
  }

  .feature-item {
    font-size: 10px;
  }

  .courses-panel {
    min-height: 265px;

    padding: 22px;
  }

}


/* =========================================================
   SMALL MOBILE
========================================================= */

@media (max-width: 480px) {

  .academy-features {
    grid-template-columns: 1fr;
  }

  .course-name {
    font-size: 9px;
  }

  .course-date {
    font-size: 8px;
  }

}

</style>