<template>
  <h1 class="title">Last 3 Projects</h1>
  <div class="tabs-container">
    <div class="tabs">
      <div class="tab" v-for="tab in tabs" :key="tab.id">
        <h1 v-if="lang=='it-IT'" class="title-prj">{{ tab.titleIt }}</h1>
        <h1 v-else class="title-prj">{{ tab.titleEn }}</h1>
        <img src="@/assets/logo.png" />
        <div class="project-text-container">
          <p v-if="lang == 'it-IT'">
            {{ tab.short_descriptionIt }}
          </p>
          <p v-else>
            {{ tab.short_descriptionEn }}
          </p>
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
        this.tabs = projects.slice(0, 3) || 'No message received';
      } catch (error){
        console.error('Error fetching data:', error);
        this.message = 'Error loading data';
      }
    }
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
  width: 100%;
}
.tab {
  flex: 0 0 50%; /* Decrease the width of each tab */
  padding: 30px; /* Increase the height of each tab */
  margin-right: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 18px;
  box-sizing: border-box;
  max-width: 400px;
  overflow: hidden; /* Prevent content overflow */
  display: flex;
  flex-direction: column;
}

.project-text-container {
  color: black;
  max-width: 100%;
  overflow-wrap: break-word;
  word-wrap: break-word;
  white-space: normal; /* Ensure text wraps inside */
  font-size: 14px;
}

.title-prj{
  text-align: center;
  font-size: 1.5em;
  color: #9dc12a;
  font-weight: bold;
  margin: 10px;
}

.title{
  font-size: 2em;
  color: black;
  font-weight: bold;
  margin: 10px;
}
</style>
