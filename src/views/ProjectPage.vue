<template>
  <LanguageSelectorWidget />
  <div class="project-container">
    <h1 v-if="this.lang == 'it-IT'" class="title">{{ project.titleIt }}</h1>
    <h1 v-if="this.lang == 'en-EN'" class="title">{{ project.titleEn }}</h1>
    <h1 v-if="this.lang == 'es-ES'" class="title">{{ project.title_es }}</h1>

    <div class="horizontal-container">
      <img :src="getImageUrl(project.image)" alt="Project Image" class="image" />

      <div v-if="this.lang == 'it-IT'" v-html="project.contentIt" class="full-page"></div>
      <div v-if="this.lang == 'en-EN'" v-html="project.contentEn" class="full-page"></div>
      <div v-if="this.lang == 'es-ES'" v-html="project.description_es" class="full-page"></div>
    </div>

    <div style="margin: 30px;">
      <h2 v-if="this.lang == 'it-IT'" style="color: white; font-weight: bold; font-size: 2em;">Tecnologie:</h2>
      <h2 v-if="this.lang == 'en-EN'" style="color: white; font-weight: bold; font-size: 2em;">Technologies:</h2>
      <h2 v-if="this.lang == 'es-ES'" style="color: white; font-weight: bold; font-size: 2em;">Tecnologías:</h2>
      <p style="font-size: 1.2em; color: white;">{{ technologies }}</p>
    </div>
    <NavBarProjects />
  </div>
</template>

<script>
import { fetchProjects } from '@/api/api';
import LanguageSelectorWidget from '@/components/LanguageSelectorWidget.vue';
import NavBarProjects from '@/components/ProjectViewComponents/NavBarProjects.vue';
import { ref } from 'vue';
import { language } from '@/api/variables';

export default {
  components: {
    NavBarProjects,
    LanguageSelectorWidget,
  },
  data() {
    return {
      prjList: ref([]),
      project: {},
      technologies: '',
      lang: language,
    };
  },
  created() {
    this.fetchProjects();
  },
  methods: {
    async fetchProjects() {
      try {
        const projects = await fetchProjects();
        this.prjList = projects || 'No message received';
        this.project = this.prjList.find((prj) => prj.id == Number.parseInt(this.TitleEn));
        this.technologies = this.project.tech_list.join(', ');
      } catch (error) {
        console.error('Error fetching data:', error);
        this.message = 'Error loading data';
      }
    },
    getImageUrl(imagePath) {
      const baseUrl = 'http://127.0.0.1:8000'; // Replace with your backend's base URL
      return `${baseUrl}/${imagePath}`;
    },
  },
  props: {
    TitleEn: String,
    ProjectId: Number,
  },
};
</script>

<style scoped>
.title{
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  font-weight: bold;
  margin-top: 25px;
}

.text-area{
  color: rgb(255, 255, 255);
}

.full-page {
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 20px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  margin: 10px;
  color: white;
}

.horizontal-container {
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 10px;
}
.project-container{
  margin-top: 80px;
}

.image{
  width: 300px;
  height: 300px;
  border-radius: 15px;
  margin-left: 20px;
  border-width: 5px;
  border-color: #9dc12a;
  border-style: solid;
  top: 0;
  position: sticky;
}
</style>
