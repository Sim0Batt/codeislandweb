<template>
  <div class="partners-container">
    <h1 class="title">Partners</h1>

    <p v-if="lang == 'it-IT'">
      {{ textIt }}
    </p>
    <p v-else>
      {{ textEn }}
    </p>

    <div class="img-container">
      <img src="@/assets/ptrn1.png" alt="ptrn1" class="partner-img" />
      <img src="@/assets/ptrn2.png" alt="ptrn2" class="partner-img" />
    </div>
  </div>
</template>
<script>
import { language } from '@/api/variables'
import { partnersTextEn, partnersTextIt } from '@/api/text_languages'
export default {
  data() {
    return {
      lang: language,
      textIt: partnersTextIt,
      textEn: partnersTextEn,
    }
  },
}
</script>
<style scoped>
.partners-container {
  background-color: #363732;
  border-radius: 10px;
  padding: 10px;
  width: 50vw;
  margin: 20px;
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
  width: 9em;
  max-width: 200px;
  height: auto;
}
</style>
