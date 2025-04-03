<template >
  <div v-if="isLoggedIn">
    <h1>Admin CMS</h1>
    <p>Benvenuto nel CMS di CodeIsland {{ user }}</p>
    <div class="edit-container" v-for="item in editableTexts" :key="item.name">
      <EditComponent :Title="item.name" :initialText="item.name"/>
    </div>
  </div>
  <div v-else>
    <h1>Access Denied</h1>
    <p>You must be logged in as an admin to view this page</p>
  </div>
  <NavBarAdmin/>
</template>


<script>
import { AdminUser, isAuthenticated } from '@/api/variables';
import EditComponent from '@/components/AdminViewComponents/EditComponent.vue';
import NavBarAdmin from '@/components/AdminViewComponents/NavBarAdmin.vue';

export default {
  components: {
    EditComponent,
    NavBarAdmin
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
      message: ''
    }
  },

}
</script>
<style scoped>
.edit-container{
  padding-top: 30px;
}
</style>
