<template>
  <div class="horizontal-container">
    <img class="image" src="@/assets/uk.png" alt="" @click="setLang('en-EN')" />
    <img class="image" src="@/assets/it.png" alt="" @click="setLang('it-IT')" />
    <img class="image" src="@/assets/es.png" alt="" @click="setLang('es-ES')" />
  </div>
</template>
<script>
import { setLanguage } from '@/api/variables.js'

export default {
  setup() {

    const setLang = (lang) => {
      setLanguage(lang)
    }

    return {
      setLang,
    }
  },
}
</script>
<style scoped>
.horizontal-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 10px;
}
.image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
