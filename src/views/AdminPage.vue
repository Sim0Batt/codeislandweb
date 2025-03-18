<template >
  <div v-if="isLoggedIn">
    <h1>Admin CMS</h1>
    <p>Welcome to the admin page</p>
    <div class="edit-container" v-for="item in editableTexts" :key="item.name">
      <EditComponent :Title="item.name" :initialText="item.name"/>
    </div>

  </div>
  <div v-else>
    <h1>Access Denied</h1>
    <p>You must be logged in as an admin to view this page</p>
  </div>
</template>
<script>
import { isAuthenticated } from '@/api/variables';
import EditComponent from '@/components/AdminViewComponents/EditComponent.vue';

export default {
  components: {
    EditComponent,
  },
  data(){
    return{
      isLoggedIn: isAuthenticated,
      editableTexts: [
        {name: 'AboutText', value: '/about-text'},
        {name: 'PartnersText', value: '/partners-text'},
        {name: 'TechnologiesText', value: '/texhnologies-text'},
      ],
    }
  }
}
</script>
<style scoped>
.edit-container{
  padding-top: 30px;
}
</style>
