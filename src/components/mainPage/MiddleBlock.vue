<template>
  <div class="middle-block">
    <div class="info-block">
      <Info message="6 movies found" />
    </div>
    <div class="buttons-block">
      <FilterButtons
        message="SORT BY"
        firstButtonTitle="RELEASE DATE"
        secondButtonTitle="RATING"
        firstOption="releaseDate"
        secondOption="rating"
        options="sort-option"
      />
    </div>
  </div>
</template>

<script>
import Info from "@/components/Info.vue";
import FilterButtons from "@/components/FilterButtons.vue";

export default {
  components: {
    Info,
    FilterButtons
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
