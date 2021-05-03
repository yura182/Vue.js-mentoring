<template>
  <div v-if="isError" class="info-block">
    {{ message }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { ERROR_MESSAGE } from "@/core/constants";
import { GETTERS } from "@/store/storeConstants";

export default {
  name: "Error",
  data() {
    return {
      message: ERROR_MESSAGE
    };
  },
  computed: {
    ...mapGetters([GETTERS.IS_API_ERROR]),
    isError() {
      return this[GETTERS.IS_API_ERROR];
    }
  }
};
</script>

<style scoped>
.info-block {
  text-align: center;
  color: white;
  font-size: 20px;
}
</style>
