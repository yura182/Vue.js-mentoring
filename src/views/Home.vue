<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <FirstComponent msg="Vue-mentoring" />
  </div>
</template>

<script>
import FirstComponent from "@/components/FirstComponent.vue";

export default {
  name: "Home",
  components: {
    FirstComponent
  }
};
</script>
