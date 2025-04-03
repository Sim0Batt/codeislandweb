<template>
  <div class="horizontal-container tech-item">
    <div class="content-wrapper">
      <img :src="`${iconName}`" class="tech-img" />
      <h1 class="tech-name">{{ techName }}</h1>
    </div>
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
  border-radius: 1rem;
  border-color: #9dc12a;
  border-width: 0.3125rem;
  border-style: solid;

}

.content-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 2rem;
  gap: 2rem;
}

.tech-img {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  object-fit: contain;
}

.tech-name {
  font-size: 1rem;
  color: white;
  margin: 0;
}

.tech-item {
  min-height: 5rem;
}

.arrow-button {
  background-color: white;
  border: none;
  border-radius: 50%;
  width: 3.5vw; /* Scalable width */
  height: 3.5vw; /* Scalable height */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.arrow-button img {
  width: 2.7vw; /* Scalable width */
  height: 2.7vw; /* Scalable height */
}
</style>
