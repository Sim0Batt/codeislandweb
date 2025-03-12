<template>
  <div>
    <h1 class="title">{{ TitleEn }}</h1>
    <div v-html="project.contentIt" class="full-page"></div>
  </div>
</template>

<script>
import { fetchProjects } from '@/api/api';
import { language } from '@/api/variables';
import { ref } from 'vue';

export default {
  data(){
  return{
    prjList: ref([]),
    lang: language,
    project: {}
  }
},
mounted(){
  this.fetchProjects();
},
methods:{
  async fetchProjects(){
    try{
      const projects = await fetchProjects();
      this.prjList = projects || 'No message received';
      this.project = this.prjList.find((prj) => prj.id == Number.parseInt(this.TitleEn))
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
}

.text-area{
  color: white;
}

.full-page {
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 20px;
  box-sizing: border-box;
}
</style>
