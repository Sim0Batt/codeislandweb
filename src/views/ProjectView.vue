<template>
  <img src="@/assets/logo.png" alt="">
  <h1 class="title">CodeIsland Projects</h1>
  <LanguageSelectorWidget/>
  <div class="horizontal-container">
    <div v-for="prj in prjList" :key="prj.id">
      <ProjectSample
        :ProjectId="prj.id"
        :ProjectName="prj.titleIt"
        :ProjectShortDescription="prj.short_descriptionIt"
        v-if="lang == 'it-IT'"
      />
      <ProjectSample
        :ProjectId="prj.id"
        :ProjectName="prj.titleEn"
        :ProjectShortDescription="prj.short_descriptionEn"
        v-if="lang == 'en-EN'"
      />
    </div>
  </div>
  <ContactSection class="contact-container"/>
  <NavBar/>
</template>
<script>
import { fetchProjects } from '@/api/api';
import { language } from '@/api/variables';
import ContactSection from '@/components/ContactSection.vue';
import LanguageSelectorWidget from '@/components/LanguageSelectorWidget.vue';
import NavBar from '@/components/NavBar.vue';
import ProjectSample from '@/components/ProjectViewComponents/ProjectSample.vue';
import { ref } from 'vue';
export default {
components:{
  NavBar,
  ProjectSample,
  LanguageSelectorWidget,
  ContactSection,
},
data(){
  return{
    prjList: ref([]),
    lang: language
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
    } catch (error){
      console.error('Error fetching data:', error);
      this.message = 'Error loading data';
    }
  }
}
}
</script>
<style scoped>
  .title {
    text-align: center;
    font-size: 2.5em;
    color: #9dc12a;
    font-weight: bold;
  }
  .horizontal-container{
    display: flex;
    align-items: space-around;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  .contact-container{
    bottom: 0;
    position: absolute;
    width: 100%;

  }

</style>
