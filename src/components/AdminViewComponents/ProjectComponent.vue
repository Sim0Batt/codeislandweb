<template>
  <div class="horizontal-container">
    <img :src="image_url" alt="" class="prj-image" />
    <div class="prj-details">
      <p class="prj-title">{{title}}</p>
      <p class="prj-description">{{short_desc}}</p>
    </div>
    <div class="button-container">
      <button class="edit-button" @click="editProject()">Edit</button>
      <button class="delete-button" @click="deleteProject()">Delete</button>
    </div>
  </div>
</template>
<script>
import { deleteProject } from '@/api/api';
import { language } from '@/api/variables';

export default {
  data() {
    return {
      lang: language,
      title: this.title_prj,
      short_desc: this.short_desc_prj,
      prj_id: this.id_prj,
      image_url: this.prj_image,
    };
  },
  props: {
    title_prj: {
      type: String,
      required: true,
    },
    short_desc_prj: {
      type: String,
      required: true,
    },
    id_prj: {
      type: Number,
      required: true,
    },
    prj_image: {
      type: String,
      required: true,
    },
  },
  methods:{
    async deleteProject(){
    try{
      await deleteProject(this.prj_id);
      this.$emit('project-deleted');
    } catch (error){
      console.error('Error fetching data:', error);
      this.message = 'Error loading data';
    }
  },
  async editProject(){
    this.$router.push({ name: 'EditProject', params: { id: this.prj_id } });
  },

  }
};
</script>
<style scoped>
.horizontal-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin: 20px;
  border-width: 15px;
  border: solid;
  border-radius: 15px;
  border-color: #9dc12a;
  padding: 20px;
}

.prj-details {
  flex: 1;
  text-align: center;
}


.prj-title {
  color: white;
  font-weight: bold;
  font-size: 200%;
  margin: 10px 0;
}

.prj-description {
  color: white;
  font-weight: bold;
  font-size: 100%;
  margin: 10px 0;
}

.prj-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 20px;
}

.button-container {
  display: flex;
  flex-direction: column; /* Stacks buttons vertically */
  gap: 10px; /* Adds spacing between buttons */
}

.edit-button {
  background-color: white;
  color: black;
  border: none;
  padding: 10px 20px;
  border-radius: 15px;
  width: 150px;
}

.delete-button {
  background-color: red;
  color: black;
  border: none;
  padding: 10px 20px;
  border-radius: 15px;
  width: 150px;
}
</style>
