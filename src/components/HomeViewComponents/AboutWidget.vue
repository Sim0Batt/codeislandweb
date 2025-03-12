<template>
  <div>
    <h1 class="title">About</h1>
    <p v-if="stateLang == 'it-IT'">
      {{ aboutTextIt }}
    </p>
    <p v-else>
      {{ aboutTextEn }}
    </p>
  </div>
</template>
<script>
import { aboutTextEn, aboutTextIt } from '@/api/text_languages'
import { language } from '@/api/variables'

export default {
  data() {
    return {
      aboutTextIt: aboutTextIt,
      aboutTextEn: aboutTextEn,
      stateLang: language,
    }
  },
}
</script>
<style scoped>
div {
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
</style>
