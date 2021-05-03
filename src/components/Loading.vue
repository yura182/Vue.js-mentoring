<template>
  <div class="vld-parent">
    <loading
      :active="loading"
      :is-full-page="fullPage"
      :loader="loader"
    ></loading>
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import { mapGetters } from "vuex";
import { GETTERS } from "@/store/storeConstants";
import { LOADER_TYPE } from "@/core/constants";

export default {
  data() {
    return {
      fullPage: true,
      loader: LOADER_TYPE
    };
  },
  components: {
    Loading
  },
  computed: {
    ...mapGetters([GETTERS.IS_DATA_LOADING]),
    loading() {
      return this[GETTERS.IS_DATA_LOADING];
    }
  }
};
</script>
