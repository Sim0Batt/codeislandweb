<template>
  <div class="contacts-container">
    <div class="contacts-content">
      <img src="@/assets/canarie-italia-logo.png" alt="canarieitalia" />
      <div class="contact-us-container">
        <h1 v-if="lang == 'it-IT'">Contattaci</h1>
        <h1 v-else>Contact Us</h1>
        <a href="/contact" class="contact-link">Contact Page</a>
        <a href="/privacy" class="privacy-link">[Privacy and GDPR]</a>
        <a href="/admin" class="admin-link">Admin CMS</a>
      </div>
    </div>
  </div>
</template>
<script>
import { language } from '@/api/variables'

export default {
  data() {
    return {
      lang: language,
    }
  },
}
</script>
<style scoped>
.contacts-container {
  background-color: #363732;
  border-radius: 10px;
  padding: 10px;
  width: 98vw;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contacts-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-us-container {
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.privacy-link {
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}
.admin-link {
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(119, 12, 182);
}
</style>
