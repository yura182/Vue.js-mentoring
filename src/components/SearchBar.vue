<template>
  <div class="input-group">
    <input type="text" class="form-control" v-model="searchText" />
    <div class="films-button-group">
      <button type="button" class="btn btn-primary films-button-search">
        {{ searchButtonMessage }}
      </button>
    </div>
  </div>
</template>

<script>
import { I18Y, LOCALE } from "@/core/i18y";

export default {
  name: "SearchBar",
  data() {
    return {
      searchText: "",
      searchButtonMessage: I18Y[LOCALE].SEARCH.toUpperCase()
    };
  }
};
</script>

<style scoped>
.films-button-group {
  margin-left: 10px;
}

input {
  border-radius: 5px !important;
  border-color: rgba(35, 35, 35, 0.8);
  background-color: rgba(35, 35, 35, 0.8);
  color: white;
  padding: 0 10px;
}

.form-control:focus {
  background-color: rgba(35, 35, 35, 0.8);
  border-color: rgba(35, 35, 35, 0.8);
  color: white;
  box-shadow: 0 0 0 0.1rem rgb(246 82 97 / 25%);
}

.btn-primary:focus {
  box-shadow: 0 0 0 0.1rem rgb(247 108 121 / 50%);
}

.films-button-search {
  font-size: 12px;
  padding: 9px 35px;
}
</style>
