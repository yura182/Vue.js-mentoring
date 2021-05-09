<template>
  <div class="home-main">
    <div class="main-block">
      <img class="not-found" src="@/assets/404.png" alt="404" />
      <router-link to="/">Home page</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound"
};
</script>

<style scoped>
.main-block {
  width: 1000px;
  margin: 0 auto;
  -webkit-box-shadow: 0px 0px 15px 2px rgba(31, 30, 30, 0.8);
  -moz-box-shadow: 0px 0px 15px 2px rgba(31, 30, 30, 0.8);
  box-shadow: 0px 0px 20px 2px rgba(31, 30, 30, 0.8);
  text-align: center;
}

.home-main {
  padding: 40px 0;
  background-color: #555555;
  position: relative;
  z-index: 1;
}

.not-found {
  display: block;
  margin: 0 auto;
}
</style>
