<template>
  <div>
    <TitleScreen id="home" />
    <div id="about-partners" class="a-p-title">
      <h1>About & Partners</h1>
    </div>
    <div class="horizontal-containter">
      <AboutWidget />
      <PartnersWidget />
    </div>
    <div class="tech-title">
      <h1 v-if="lang == 'it-IT'">{{ techIt }}</h1>
      <h1 v-else>{{ techEn }}</h1>
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
import { titleTechEn, titleTechIt } from '@/api/text_languages'
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
      techIt: titleTechIt,
      techEn: titleTechEn,
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
  font-size: 1.5em;
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
  font-size: 1.5em;
  margin-top: 2%;
}
</style>
