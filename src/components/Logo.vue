<template>
  <div class="logo">
    <span>{{ firstPart }}</span
    >{{ secondPart }}
  </div>
</template>

<script>
export default {
  name: "Logo",
  props: {
    firstPart: {
      type: String,
      default: "First"
    },
    secondPart: {
      type: String,
      default: "Second"
    }
  }
};
</script>

<style scoped>
.logo {
  color: #f65261;
}

.logo span {
  font-weight: bold;
}
</style>
