<template >
  <div v-if="isLoggedIn">
    <h1>Admin CMS</h1>
    <p>Benvenuto nel CMS di CodeIsland {{ user }}</p>
    <div class="edit-container" v-for="item in editableTexts" :key="item.name">
      <EditComponent :Title="item.name" :initialText="item.name"/>
    </div>
    <h1 class="title-prj">Progetti</h1>

    <div class="edit-container" v-for="project in projects" :key="project.id">
      <ProjectComponent :title_prj="project.titleIt" :short_desc_prj="project.short_descriptionIt" :id_prj="project.id"/>
    </div>
  </div>
  <div v-else>
    <h1>Access Denied</h1>
    <p>You must be logged in as an admin to view this page</p>
  </div>
  <NavBarAdmin/>
</template>


<script>
import { fetchProjects } from '@/api/api';
import { AdminUser, isAuthenticated } from '@/api/variables';
import EditComponent from '@/components/AdminViewComponents/EditComponent.vue';
import NavBarAdmin from '@/components/AdminViewComponents/NavBarAdmin.vue';
import ProjectComponent from '@/components/AdminViewComponents/ProjectComponent.vue';

export default {
  components: {
    EditComponent,
    NavBarAdmin,
    ProjectComponent
  },
  data(){
    return{
      isLoggedIn: isAuthenticated,
      editableTexts: [
        {name: 'AboutText', value: '/about-text'},
        {name: 'PartnersText', value: '/partners-text'},
        {name: 'TechnologiesText', value: '/texhnologies-text'},
      ],
      user: AdminUser,
      texts: [],
      message: '',
      projects: {},
    }
  },
  created(){
  this.fetchProjects();
},
methods:{
  async fetchProjects(){
    try{
      const projects = await fetchProjects();
      console.log(projects)
      this.projects = projects || 'No message received';
    } catch (error){
      console.error('Error fetching data:', error);
      this.message = 'Error loading data';
    }
  },


},

}
</script>
<style scoped>
.edit-container{
  padding-top: 30px;
}
.title-prj {
  color: #9dc12a;
  font-weight: bold;
  text-align: center;
  font-size: 250%;
  margin: 20px;
}
</style>
