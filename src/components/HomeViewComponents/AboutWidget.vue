<template>
  <div class="with-shadows">
    <h1 class="title">About Us</h1>
    <p v-if="stateLang == 'it-IT'">
      {{ aboutTextIt }}
    </p>
    <p v-if="stateLang == 'en-EN'">
      <!-- {{ aboutTextEn }} -->
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nesciunt aspernatur, labore non recusandae, qui necessitatibus, fuga eligendi ut quaerat maxime repudiandae id sequi reprehenderit dicta et mollitia ad temporibus?
    </p>
    <p v-if="stateLang == 'es-ES'">
      {{ aboutTextEs }}
    </p>
    <div class="img-container">
      <img src="@/assets/title_images/photo2.png" alt="ptrn1" class="partner-img" />
      <img src="@/assets/title_images/photo3.png" alt="ptrn2" class="partner-img" />
    </div>
  </div>
</template>
<script>
import { fetchTexts } from '@/api/api';
import { language } from '@/api/variables'

export default {
  data() {
    return {
      aboutTextIt: '',
      aboutTextEn: '',
      aboutTextEs: '',
      stateLang: language,
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
        this.aboutTextEn = texList.about_text_en;
        this.aboutTextIt = texList.about_text_it;
        this.aboutTextEs = texList.about_text_es;
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
.with-shadows {
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
