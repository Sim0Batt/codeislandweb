<template>
  <div class="project-container">
    <h1 class="title">{{ project.titleIt }}</h1>
    <div class="horizontal-container">
      <img src="@/assets/logo.png" alt="">
      <div v-html="project.contentIt" class="full-page"></div>
    </div>
    <div style="margin: 30px;">
      <h2 style="color: white; font-weight: bold; font-size: 2em;">Tecnologie:</h2>
      <p style="font-size: 1.2em; color: white;">{{technologies}}</p>
    </div>
    <NavBarProjects/>
  </div>
</template>

<script>
import { fetchProjects } from '@/api/api';
import NavBarProjects from '@/components/ProjectViewComponents/NavBarProjects.vue';
import { ref } from 'vue';

export default {
  components: {
    NavBarProjects,
  },
  data(){
  return{
    prjList: ref([]),
    project: {},
    technologies: '',
  }
},
created(){
  this.fetchProjects();
},
methods:{
  async fetchProjects(){
    try{
      const projects = await fetchProjects();
      this.prjList = projects || 'No message received';
      this.project = this.prjList.find((prj) => prj.id == Number.parseInt(this.TitleEn))
      this.technologies = this.project.tech_list.join(',   ');
    } catch (error){
      console.error('Error fetching data:', error);
      this.message = 'Error loading data';
    }
  }
},
  props: {
    TitleEn: String,
    ProjectId: Number,
  },
}
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
</style>
