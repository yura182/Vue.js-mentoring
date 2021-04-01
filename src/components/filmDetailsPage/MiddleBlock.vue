<template>
  <div class="middle-block">
    <div class="info-block">
      <Info message="Films by drama genre" />
    </div>
    <div class="buttons-block"></div>
  </div>
</template>

<script>
import Info from "@/components/Info.vue";

export default {
  components: {
    Info
  }
};
</script>

<style scoped>
.middle-block {
  background-color: #555555;
  width: 100%;
  display: flex;
  padding: 10px 5px;
  margin: 0 auto;
}

.info-block {
  padding-left: 40px;
  margin-bottom: auto;
  margin-top: auto;
}

.buttons-block {
  margin-bottom: auto;
  margin-top: auto;
  margin-left: auto;
  padding-right: 40px;
  order: 2;
}
</style>
