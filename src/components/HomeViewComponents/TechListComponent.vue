<template>
  <div class="horizontal-container tech-item">
    <img :src="`${iconName}`" class="tech-img" />
    <h1 class="tech-name">{{ techName }}</h1>
    <button class="arrow-button">
      <img src="@/assets/arrow-right-top.png" alt="arrow icon" />
    </button>
  </div>
</template>
<script>
export default {
  props: {
    iconName: {
      type: String,
      required: true,
    },
    techName: {
      type: String,
      required: true,
    },
  },
}
</script>
<style scoped>
.horizontal-container {
  display: flex;
  justify-content: space-around;
  border-radius: 1rem;
  border-color: #9dc12a;
  border-width: 0.3125rem;
  border-style: solid;
}
.tech-img {
  width: 10%;
  border-radius: 50%;
}
.tech-name {
  font-size: 150%;
  color: white;
  margin: 0;
}
.tech-item {
  height: 10vh; /* Scalable height */
  align-items: center;
}
.arrow-button {
  background-color: #363732;
  border: none;
  border-radius: 50%;
  width: 5vw; /* Scalable width */
  height: 5vw; /* Scalable height */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.arrow-button img {
  width: 3vw; /* Scalable width */
  height: 3vw; /* Scalable height */
}
</style>
