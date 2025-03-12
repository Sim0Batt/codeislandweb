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
  border-radius: 10px;
  border-color: #9dc12a;
  border-width: 5px;
  border-style: solid;
}
.tech-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.tech-name {
  font-size: 30px;
  color: white;
  margin: 0;
}
.tech-item {
  height: 80px; /* Increase the height of each list item */
  align-items: center;
}
.arrow-button {
  background-color: #363732;
  border: none;
  border-radius: 50%;
  width: 50px; /* Increased width */
  height: 50px; /* Increased height */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.arrow-button img {
  width: 30px; /* Increased width */
  height: 30px; /* Increased height */
}
</style>
