<template>
  <div>
    <h1 class="title">Modifica: {{ Title }}</h1>
    <div>
      <div class="horizontal-container">
        <img class="image" src="@/assets/it.png" alt=""/>
        <h2 class="subtitle">Italiano</h2>
      </div>
      <form class="form-container" form @submit.prevent="submitForm">
        <textarea class="message-input" id="message" v-model="EditedTextIt" required></textarea>
      </form>


      <div class="horizontal-container">
        <img class="image" src="@/assets/uk.png" alt=""/>
        <h2 class="subtitle">Inglese</h2>
      </div>
      <form class="form-container" form @submit.prevent="submitForm">
        <textarea class="message-input" id="message" v-model="EditedTextEn" required></textarea>
      </form>


      <div class="horizontal-container">
        <img class="image" src="@/assets/es.png" alt=""/>
        <h2 class="subtitle">Spagnolo</h2>
      </div>
      <form class="form-container" form @submit.prevent="submitForm">
        <textarea class="message-input" id="message" v-model="EditedTextEs" required></textarea>
      </form>
      <div class="button-container">
        <button class="submit-btn" type="submit" @click="submitForm">Salva</button>
      </div>
    </div>
  </div>
</template>
<script>
import { fetchTexts, updateAboutTexts, updatePartnersTexts, updateTechTexts } from '@/api/api';

export default {
  props:{
    Title: {
      type: String,
      default: ''
    },

  },
  created() {
    this.fetchTextes();
  },
  methods: {
    async submitForm() {
      try {
        if (this.Title === "AboutText") {
          await updateAboutTexts('it', this.EditedTextIt);
          await updateAboutTexts('en', this.EditedTextEn);
          await updateAboutTexts('es', this.EditedTextEs);
        }
        if (this.Title === "PartnersText") {
          await updatePartnersTexts('it', this.EditedTextIt);
          await updatePartnersTexts('en', this.EditedTextEn);
          await updatePartnersTexts('es', this.EditedTextEs);
        }
        if (this.Title === "TechnologiesText") {
          await updateTechTexts('it', this.EditedTextIt);
          await updateTechTexts('en', this.EditedTextEn);
          await updateTechTexts('es', this.EditedTextEs);
        }
        // Add similar conditions for other text types if needed
      } catch (error) {
        console.error('Error updating texts:', error);
      }
    },
    async fetchTextes(){
      try{
        const texList = await fetchTexts();
        if (typeof texList === 'string') {
          // Handle error case when API returns error string
          console.error('API Error:', texList);
          return;
        }

        if(this.Title == "AboutText"){
          this.EditedTextIt = texList.about_text_it;
          this.EditedTextEn = texList.about_text_en;
          this.EditedTextEs = texList.about_text_es;
        }
        if(this.Title == "PartnersText"){
          this.EditedTextIt = texList.partners_text_it;
          this.EditedTextEn = texList.partners_text_en;
          this.EditedTextEs = texList.partners_text_es;
        }
        if(this.Title == "TechnologiesText"){
          this.EditedTextIt = texList.tech_text_it;
          this.EditedTextEn = texList.tech_text_en;
          this.EditedTextEs = texList.tech_text_es;
        }
      } catch (error){
        console.error('Error fetching data:', error);
        this.message = 'Error loading data';
      }
    },

  },
  data(){
    return{
      EditedTextIt: '',
      EditedTextEn: '',
      EditedTextEs: '',
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
  height: 150px; /* Added height */
  resize: vertical; /* Allow vertical resizing */
  padding: 10px; /* Optional: for better text spacing */
}

.form-container{
  margin: 10px;
}

.submit-btn{
  background-color: white;
  color: #9dc12a;
  width: 200px;
  border-radius: 10px;
  height: 50px;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
  cursor: pointer;
  border: 2px solid #9dc12a;
}

.submit-btn:hover {
  background-color: #9dc12a;
  color: white;
}

.subtitle {
  text-align: center;
  font-size: 1.5em;
  color: white;
  margin: 15px 0;
}

.button-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
}

.image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.horizontal-container {
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 10px;
}
</style>
