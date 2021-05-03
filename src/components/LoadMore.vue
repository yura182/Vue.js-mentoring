<template>
  <div class="films-button-container">
    <button
      type="button"
      class="btn btn-primary films-button-load-more"
      @click="loadMore"
    >
      {{ buttonTitle }}
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { LOAD_MORE_BUTTON } from "@/core/constants";
import { ACTIONS } from "@/store/storeConstants";

export default {
  name: "LoadMore",
  data() {
    return {
      buttonTitle: LOAD_MORE_BUTTON.toUpperCase()
    };
  },
  methods: {
    ...mapActions([ACTIONS.UPDATE_MOVIES_SHOWN]),
    loadMore() {
      this[ACTIONS.UPDATE_MOVIES_SHOWN]();
    }
  }
};
</script>

<style scoped>
.films-button-load-more {
  font-size: 12px;
  padding: 9px 15px;
}

.films-button-container {
  margin: auto;
  width: 100px;
}
</style>
