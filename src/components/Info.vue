<template>
  <div class="info-block">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "Info",
  props: {
    message: {
      type: String
    }
  }
};
</script>

<style scoped>
.info-block {
  color: white;
  font-weight: bold;
  font-size: 10px;
}
</style>
