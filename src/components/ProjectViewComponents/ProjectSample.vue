<template>
  <div class="floating-island" @click="handleClick">
    <h1 class="title">{{ ProjectName }}</h1>
    <div class="img-text-container">
      <img class="img-container" :src="imageUrl" alt="">
      <p>{{ ProjectShortDescription }}</p>
    </div>
  </div>
</template>
<script>
import { useRouter } from 'vue-router';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    ProjectName: String,
    ProjectShortDescription: String,
    ProjectId: Number,
    imageUrl: String,
  },
  setup(props) {
    const router = useRouter();

    const goToArticle = () => {
      router.push({
        name: 'ProjectPage',
        params: {
          title: props.ProjectId
        },
        props: {
          ProjectId: props.ProjectId,
        },
    });
    };

    const handleClick = () => {
      goToArticle();
    };

    return {
      handleClick,
    };
  },
});
</script>
<style scoped>
  .floating-island {
    background-color: #363732;
    border-radius: 10px;
    padding: 10px;
    width: 22vw;
    margin: 20px;
  }
  .title{
    text-align: center;
    font-size: 1.5em;
    color: #9dc12a;
    font-weight: bold;
    margin: 10px;
  }
  .img-text-container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .img-container{
    max-width: 300px
  }
</style>
