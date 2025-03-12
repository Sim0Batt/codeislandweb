<template>
  <div>
    <button class="white-button floating-button">Login</button>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.white-button {
  background-color: white;
}

.floating-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
