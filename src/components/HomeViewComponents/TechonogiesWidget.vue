<template>
  <div class="horizontal-container">
    <div class="tech-text">
      <h1 class="title">Technologies</h1>
      <p v-if="lang == 'it-IT'">
        {{ textIt }}
      </p>
      <p v-else>
        {{ textEn }}
      </p>
    </div>
    <ul class="tech-list">
      <li v-for="tech in technologiesList" :key="tech.name" style="list-style-type: none">
        <TechListComponent :iconName="tech.url" :techName="tech.name" />
      </li>
    </ul>
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
import { techTextEn, techTextIt } from '@/api/text_languages'
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
      textEn: techTextEn,
      textIt: techTextIt,
      lang: language,
    }
  },
}
</script>
<style scoped>
.horizontal-container {
  display: flex;
  justify-content: space-around;
}
.tech-text {
  background-color: #363732;
  border-radius: 10px;
  padding: 10px;
  width: 50vw;
  margin: 20px;
}
.tech-list {
  background-color: #363732;
  border-radius: 10px;
  padding: 10px;
  width: 50vw;
  margin: 20px;
  max-height: 300px; /* Set a max height for the list */
  overflow-y: auto; /* Enable vertical scrolling */
  gap: 20px;
  display: flex;
  flex-direction: column;
}
.title {
  text-align: center;
  font-size: 2.5em;
  color: #9dc12a;
  font-weight: bold;
  margin: 10px;
}
</style>
