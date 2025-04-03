<template>
  <div>
    <TitleScreen id="home" />
    <div id="about-partners" >
      <h1 class="a-p-title">About & Partners</h1>
    </div>
    <div class="horizontal-containter">
      <AboutWidget />
      <PartnersWidget />
    </div>
    <div >
      <h1 class="tech-title" v-if="lang == 'it-IT'">Tecnologie Usate</h1>
      <h1 class="tech-title" v-if="lang == 'en-EN'">Technologies we Use</h1>
      <h1 class="tech-title" v-if="lang == 'es-ES'">Tecnologías Utilizadas</h1>
    </div>
    <TechonogiesWidget id="technologies" />
    <ContactSection id="contacts" class="contacts-section" />
    <NavBar />
  </div>
</template>
<script>
import AboutWidget from '@/components/HomeViewComponents/AboutWidget.vue'
import NavBar from '@/components/NavBar.vue'
import TitleScreen from '@/components/HomeViewComponents/TitleScreen.vue'
import PartnersWidget from '@/components/HomeViewComponents/PartnersWidget.vue'
import ContactSection from '@/components/ContactSection.vue'
import TechonogiesWidget from '@/components/HomeViewComponents/TechonogiesWidget.vue'

import { language } from '@/api/variables'
export default {
  components: {
    NavBar,
    AboutWidget,
    TitleScreen,
    PartnersWidget,
    ContactSection,
    TechonogiesWidget,
  },
  name: 'HomeView',
  data() {
    return {
      lang: language,
    }
  },
}
</script>
<style scoped>
.horizontal-containter {
  display: flex;
  align-items: space-around;
}

.a-p-title {
  text-align: center;
  font-size: 3.7em;
  font-weight: bold;
}

.contacts-section {
  padding-top: 2%;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  margin: 0 auto;
}

.tech-title {
  text-align: center;
  font-size: 3.7em;
  margin-top: 2%;
  font-weight: bold;
}


</style>
