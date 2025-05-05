<template>
  <img class="logo" src="@/assets/logo.png" alt="">
  <div class="title-container">
    <h1 v-if="lang == 'it-IT'" class="title">Progetti di CodeIsland</h1>
    <h1 v-if="lang == 'en-EN'" class="title">CodeIsland Projects</h1>
    <h1 v-if="lang == 'es-ES'" class="title">Proyectos de CodeIsland</h1>
  </div>
  <LanguageSelectorWidget/>
  <div class="horizontal-container">
    <div v-for="prj in sanitizedProjects" :key="prj.id">
      <ProjectSample
        :ProjectId="prj.id"
        :ProjectName="prj.titleIt"
        :ProjectShortDescription="prj.short_descriptionIt"
        :imageUrl="getImageUrl(prj.image)"
        v-if="prj.visible == true && lang == 'it-IT'"
      />
      <ProjectSample
        :ProjectId="prj.id"
        :ProjectName="prj.titleEn"
        :ProjectShortDescription="prj.short_descriptionEn"
        v-if="prj.visible == true && lang == 'en-EN'"
        :imageUrl="getImageUrl(prj.image)"

      />
      <ProjectSample
        :ProjectId="prj.id"
        :ProjectName="prj.title_es"
        :ProjectShortDescription="prj.short_description_es"
        v-if="prj.visible == true && lang == 'es-ES'"
        :imageUrl="getImageUrl(prj.image)"
      />
    </div>
  </div>
  <ContactSection class="contact-container" id="contacts"/>
  <NavBarProjects/>
</template>
<script>
import { fetchProjects } from '@/api/api';
import { language } from '@/api/variables';
import ContactSection from '@/components/ContactSection.vue';
import LanguageSelectorWidget from '@/components/LanguageSelectorWidget.vue';
import NavBarProjects from '@/components/ProjectViewComponents/NavBarProjects.vue';
import ProjectSample from '@/components/ProjectViewComponents/ProjectSample.vue';
import { ref } from 'vue';

export default {
  components: {
    NavBarProjects,
    ProjectSample,
    LanguageSelectorWidget,
    ContactSection,
  },
  data() {
    return {
      prjList: ref([]),
      lang: language,
    };
  },
  computed: {
    sanitizedProjects() {
      return this.prjList.map((prj) => ({
        ...prj,
        short_descriptionIt: prj.short_descriptionIt?.replace(/<\/?p>/g, ''),
        short_descriptionEn: prj.short_descriptionEn?.replace(/<\/?p>/g, ''),
        short_description_es: prj.short_description_es?.replace(/<\/?p>/g, ''),
      }));
    },
  },
  mounted() {
    this.fetchProjects();
  },
  methods: {
    async fetchProjects() {
      try {
        const projects = await fetchProjects();
        this.prjList = projects || 'No message received';
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
};
</script>
<style scoped>
  .title-container {
    position: relative;
    text-align: center;
    margin: 20px auto;
    border-radius: 15px;
  }
  .title-container::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100px;
    background: url('@/assets/title_images/photo3.png') no-repeat center;
    background-size: cover;
    z-index: -1;
  }
  .title {
    font-size: 2.5em;
    color: #9dc12a;
    font-weight: bold;
    position: relative;
    z-index: 1;
  }
  .divider {
    display: block;
    margin: 10px auto;
    width: 100%;
    height: 100px;
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
  .logo{
    width: 15%;
    margin: 15px;
  }

</style>
