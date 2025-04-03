<template>
  <div class="horizontal-container">
    <div class="text-container">
    <h1 v-if="lang == 'it-IT'" class="title">Cosa facciamo</h1>
    <h1 v-if="lang == 'en-EN'" class="title">What we do</h1>
    <h1 v-if="lang == 'es-ES'" class="title">Qué hacemos</h1>
      <div class="tech-text">
        <div >
          <img class="image-container" src="@/assets/title_images/photo3.png" alt="sad" />
        </div>
        <p v-if="lang == 'it-IT'">
        {{ techTextIt }}
        </p>
        <p v-if="lang == 'en-EN'">
          <!-- {{ techTextEn }} -->
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quasi ea qui a vel aspernatur accusantium, iusto repellat repudiandae! Fugit sapiente ea ipsam eos natus quam, porro consectetur obcaecati! Excepturi.
        </p>
        <p v-if="lang == 'es-ES'">
          {{ techTextEs }}
        </p>

      </div>
    </div>
    <div class="tech-list-container">
      <ul class="tech-list">
      <li v-for="tech in technologiesList" :key="tech.name" style="list-style-type: none">
        <TechListComponent :iconName="tech.url" :techName="tech.name" class="text-list" />
      </li>
    </ul>
    </div>
  </div>
</template>
<script>
import TechListComponent from '@/components/HomeViewComponents/TechListComponent.vue'
import AngularIcon from '@/assets/tech_icons/angular.png'
import NetIcon from '@/assets/tech_icons/microsoft_net.png'
import TypescriptIcon from '@/assets/tech_icons/typescript.png'
import XamarinIcon from '@/assets/tech_icons/xamarin.png'
import JavascriptIcon from '@/assets/tech_icons/javascript.png'
import NodeIcon from '@/assets/tech_icons/node.png'
import AndroidIcon from '@/assets/tech_icons/android.png'
import NativescriptIcon from '@/assets/tech_icons/nativescript.png'
import IosIcon from '@/assets/tech_icons/ios.png'
import JqueryIcon from '@/assets/tech_icons/jquery.png'
import HtmlIcon from '@/assets/tech_icons/html5.png'
import CssIcon from '@/assets/tech_icons/css3.png'
import JavaIcon from '@/assets/tech_icons/java.png'
import MysqlIcon from '@/assets/tech_icons/mysql.png'
import MssqlIcon from '@/assets/tech_icons/mssql.png'
import SqliteIcon from '@/assets/tech_icons/sqlite.png'

import { language } from '@/api/variables'
import { fetchTexts } from '@/api/api'
export default {
  components: {
    TechListComponent,
  },
  data() {
    return {
      technologiesList: [
        { name: 'Angular', url: AngularIcon },
        { name: '.NET', url: NetIcon },
        { name: 'Typescript', url: TypescriptIcon },
        { name: 'Xamarin', url: XamarinIcon },
        { name: 'Javascript', url: JavascriptIcon },
        { name: 'Node', url: NodeIcon },
        { name: 'Android', url: AndroidIcon },
        { name: 'Nativescript', url: NativescriptIcon },
        { name: 'iOS', url: IosIcon },
        { name: 'jQuery', url: JqueryIcon },
        { name: 'HTML', url: HtmlIcon },
        { name: 'CSS', url: CssIcon },
        { name: 'Java', url: JavaIcon },
        { name: 'MySQL', url: MysqlIcon },
        { name: 'Microsoft SQL', url: MssqlIcon },
        { name: 'SQLite', url: SqliteIcon },
      ],
      techTextIt: '',
      techTextEn: '',
      techTextEs: '',
      lang: language,
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
        this.techTextEn = texList.tech_text_en;
        this.techTextIt = texList.tech_text_it;
        this.techTextEs = texList.tech_text_es;
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
.horizontal-container {
  display: flex;
  justify-content: space-around;
}
.tech-text {
  display: flex;
  align-items: center;
  margin: 20px;
  max-height: 500px;

}
.tech-list {
  background-color: #363732;
  border-radius: 10px;
  padding: 10px;
  width: 30vw;
  margin: 20px;
  max-height: 500px;
  overflow-y: auto;
  gap: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: -4px -4px 8px rgba(55, 51, 51, 0.76),
              4px -4px 8px rgba(55, 51, 51, 0.76),
              -4px 4px 8px rgba(55, 51, 51, 0.76),
              4px 4px 8px rgba(55, 51, 51, 0.76);
}
.title {
  text-align: center;
  font-size: 2em;
  color: #9dc12a;
  font-weight: bold;
  margin: 10px;
}

.image-container {
  width: 80%;
  border-radius: 15px;
  margin-top: 20px;
}

.text-container{
  background-color: #363732;
  border-radius: 10px;
  padding: 10px;
  margin: 20px;
  box-shadow: -4px -4px 8px rgba(55, 51, 51, 0.76),
              4px -4px 8px rgba(55, 51, 51, 0.76),
              -4px 4px 8px rgba(55, 51, 51, 0.76),
              4px 4px 8px rgba(55, 51, 51, 0.76);
}
</style>

