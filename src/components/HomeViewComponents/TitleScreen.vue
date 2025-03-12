<template>
  <div class="photo-widget">
    <div class="photo-container-wrapper">
      <transition name="fade" mode="out-in">
        <div
          class="photo-container"
          :key="currentPhoto"
          :style="{ backgroundImage: `url(${currentPhoto})` }"
        >
          <div class="buttons">
            <button
              class="btn"
              v-for="(photo, index) in photos"
              :key="index"
              @click="changePhoto(index)"
            >
              Photo {{ index + 1 }}
            </button>
          </div>
          <div class="logo">
            <img src="@/assets/logo.png" alt="logocodeisland" />
          </div>
          <div class="last-projects-widget">
            <LastProjectsWidget />
          </div>
          <div>
            <LanguageSelectorWidget />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import photo1 from '@/assets/title_images/photo1.png'
import photo2 from '@/assets/title_images/photo2.png'
import photo3 from '@/assets/title_images/photo3.png'
import photo4 from '@/assets/title_images/photo4.png'
import logo from '@/assets/logo.png'
import LastProjectsWidget from '@/components/HomeViewComponents/LastProjectsWidget.vue'
import LanguageSelectorWidget from '@/components/LanguageSelectorWidget.vue'

export default {
  components: {
    LastProjectsWidget,
    LanguageSelectorWidget,
  },
  data() {
    return {
      photos: [photo1, photo2, photo3, photo4],
      currentIndex: 0,
      logocode: logo,
    }
  },
  computed: {
    currentPhoto() {
      return this.photos[this.currentIndex]
    },
  },
  methods: {
    changePhoto(index) {
      this.currentIndex = index
    },
  },
}
</script>

<style scoped>
.photo-widget {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.photo-container-wrapper {
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.photo-container {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border: 5px solid #363732;
  border-radius: 15px;
  position: absolute;
}

.buttons {
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.btn {
  padding: 10px 15px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white */
  color: black;
  border-radius: 10px;
  transition: 0.3s;
}

.btn:hover {
  background-color: rgba(255, 255, 255, 1);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.last-projects-widget {
  position: absolute;
  bottom: 20px;
  width: 50%;
  overflow-x: auto;
  white-space: break-word;
}
</style>
