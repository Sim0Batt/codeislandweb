<template>
  <h1 v-if="lang=='it-IT'" class="title">Ultimi Progetti</h1>
  <h1 v-if="lang=='en-EN'" class="title">Last Projects</h1>
  <h1 v-if="lang=='es-ES'" class="title">Últimos Proyectos</h1>
  <div class="tabs-container">
    <div class="tabs">
      <div v-for="tab in sanitizedProjects" :key="tab.id">
        <div v-if="tab.visible" class="tab">
          <h1 v-if="lang=='it-IT'" class="title-prj">{{ tab.titleIt }}</h1>
          <h1 v-if="lang=='en-EN'" class="title-prj">{{ tab.titleEn }}</h1>
          <h1 v-if="lang=='es-ES'" class="title-prj">{{ tab.title_es }}</h1>
          <img :src="getImageUrl(tab.image)" />
          <div class="project-text-container">
            <p v-if="lang == 'it-IT'">
              {{ tab.short_descriptionIt }}
            </p>
            <p v-if="lang == 'en-EN'">
              {{ tab.short_descriptionEn }}
            </p>
            <p v-if="lang == 'es-ES'">
              {{ tab.short_description_es }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { fetchProjects } from '@/api/api';
import { language } from '@/api/variables';
export default {
  data() {
    return {
      lang: language,
      tabs: [],
    }
  },
  methods:{
    async fetchProj(){
      try {
        const projects = await fetchProjects();

        this.tabs = projects.slice(-2) || 'No message received';
        for(var item in this.tabs){
          if(item.visible == false){
            this.tabs.remove(item);
          }
        }
      } catch (error){
        console.error('Error fetching data:', error);
        this.message = 'Error loading data';
      }
    },
    getImageUrl(imagePath) {
      const baseUrl = 'http://127.0.0.1:8000'; // Replace with your backend's base URL
      return `${baseUrl}/${imagePath}`;
    },
  },
  computed: {
    sanitizedProjects() {
      return this.tabs.map((prj) => ({
        ...prj,
        short_descriptionIt: prj.short_descriptionIt?.replace(/<\/?p>/g, ''),
        short_descriptionEn: prj.short_descriptionEn?.replace(/<\/?p>/g, ''),
        short_description_es: prj.short_description_es?.replace(/<\/?p>/g, ''),
      }));
    },
  },
  mounted(){
    this.fetchProj();
  }
}
</script>
<style scoped>
.tabs-container {
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
}
.tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 5px;
}
.tab {
  flex: 0 0 calc(45% - 10px);
  max-width: 300px;
  padding: 10px;
  margin: 0;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.project-text-container {
  color: black;
  max-width: 100%;
  overflow-wrap: break-word;
  word-wrap: break-word;
  white-space: normal;
  font-size: 14px;
  text-align: center;
}

.title-prj {
  text-align: center;
  font-size: 1em;
  color: #9dc12a;
  font-weight: bold;
  margin: 5px 0;
}

.title {
  font-size: 1.5em;
  color: black;
  font-weight: bold;
  margin: 5px 0;
}
</style>
