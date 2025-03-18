<template>
  <div>
    <h1 class="title">Modifica: {{ Title }}</h1>
    <div>
    <form class="form-container" form @submit.prevent="submitForm">
      <textarea class="message-input" id="message" v-model="EditedText" required></textarea>
    </form>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    Title: {
      type: String,
      default: ''
    },
    initialText: {
      type: String,
      default: ''
    }
  },
  created() {
    this.EditedText = this.initialText;
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', this.EditedText);
    }
  },
  data(){
    return{
      EditedText: '',
    }
  }
}
</script>
<style scoped>
.title{
  color: #9dc12a;
  font-weight: bold;
  text-align: center;
  font-size: 250%;
  margin: 20px;
}

.message-input{
  background-color: white;
  width: 100%;
  border-radius: 10px;
}

.form-container{
  margin: 10px;
}
</style>
