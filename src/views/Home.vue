<template>
  <div class="home-main">
    <MainPage />
  </div>
</template>

<script>
import MainPage from "@/components/mainPage/Page.vue";

export default {
  name: "Home",
  components: {
    MainPage
  }
};
</script>

<style scoped>
.home-main {
  padding: 40px 0;
  background-color: #555555;
  position: relative;
  z-index: 1;
}
</style>
