<template>
  <div class="input-group">
    <input type="text" class="form-control" v-model="searchText" />
    <div class="films-button-group">
      <button type="button" class="btn btn-primary films-button-search">
        SEARCH
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    onSubmit() {
      console.log("Search text: " + this.searchText);
    },
  },
};
</script>

<style scoped>
.films-button-group {
  margin-left: 10px;
}

input {
  border-radius: 5px !important;
  background-color: rgba(66, 66, 66, 0.8);
  color: white;
}

.form-control:focus {
  background-color: rgba(66, 66, 66, 0.8);
  color: white;
}
</style>
