<template>
  <div class="home-main">
   <FilmDetailsPage />
  </div>
</template>

<script>
import FilmDetailsPage from "@/components/FilmDetailsPage.vue";

export default {
  name: "Details",
  components: {
    FilmDetailsPage
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
