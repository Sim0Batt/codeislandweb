<template>
  <div class="partners-container">
    <h1 class="title">Partners</h1>

    <p v-if="lang == 'it-IT'">
      {{ partnersTextIt }}
    </p>
    <p v-if="lang == 'en-EN'">
      {{ partnersTextEn }}
    </p>
    <p v-if="lang == 'es-ES'">
      {{ partnersTextEs }}
    </p>

    <div class="img-container">
      <img src="@/assets/ptrn1.png" alt="ptrn1" class="partner-img" />
      <img src="@/assets/ptrn2.png" alt="ptrn2" class="partner-img" />
    </div>
  </div>
</template>
<script>
import { language } from '@/api/variables'
import { fetchTexts } from '@/api/api';
export default {
  data() {
    return {
      lang: language,
      partnersTextEn: '',
      partnersTextIt: '',
      partnersTextEs: ''
    }
  },
  methods:{
    async fetchTextes(){
      try{
        const texList = await fetchTexts();
        if (typeof texList === 'string') {
          console.error('API Error:', texList);
          return;
        }
        this.partnersTextEn = texList.partners_text_en;
        this.partnersTextIt = texList.partners_text_it;
        this.partnersTextEs = texList.partners_text_es;
      } catch (error){
        console.error('Error fetching data:', error);
        this.message = 'Error loading data';
      }
    },
  },
  created(){
    this.fetchTextes()
  }
}
</script>
<style scoped>
.partners-container {
  background-color: #363732;
  border-radius: 10px;
  padding: 10px;
  width: 50vw;
  margin: 20px;
  box-shadow: -4px -4px 8px rgba(55, 51, 51, 0.76),
              4px -4px 8px rgba(55, 51, 51, 0.76),
              -4px 4px 8px rgba(55, 51, 51, 0.76),
              4px 4px 8px rgba(55, 51, 51, 0.76);

}
.title {
  text-align: center;
  font-size: 2.5em;
  color: #9dc12a;
  font-weight: bold;
  margin: 10px;
}

.img-container {
  margin: 3em;
  display: flex;
  justify-content: space-around;
}

.partner-img {
  border: 5px solid #9dc12a;
  border-radius: 15px;
  width: 50%;
  max-width: 200px;
  height: auto;
}
</style>
