<template>
  <div class="middle-block">
    <div class="info-block">
      <Info :message="foundMoviesMessage" />
    </div>
    <div class="buttons-block">
      <FilterButtons
        :message="sortByMessage"
        :firstButtonTitle="firstButtonMessage"
        :secondButtonTitle="secondButtonMessage"
        :firstOption="firstOption"
        :secondOption="secondOption"
        :options="options"
      />
    </div>
  </div>
</template>

<script>
import Info from "@/components/Info.vue";
import FilterButtons from "@/components/FilterButtons.vue";
import { I18Y, LOCALE } from "@/core/i18y";
import {
  RATING_OPTION,
  RELEASE_DATE_OPTION,
  SORT_INPUT
} from "@/core/constants";
import { mapGetters } from "vuex";

export default {
  name: "MiddleBlock",
  components: {
    Info,
    FilterButtons
  },
  data() {
    return {
      moviesFoundMessage: I18Y[LOCALE].MOVIES_FOUND,
      sortByMessage: I18Y[LOCALE].SORT_BY.toUpperCase(),
      firstButtonMessage: I18Y[LOCALE].RELEASE_DATE.toUpperCase(),
      secondButtonMessage: I18Y[LOCALE].RATING.toUpperCase(),
      firstOption: RELEASE_DATE_OPTION,
      secondOption: RATING_OPTION,
      options: SORT_INPUT
    };
  },
  computed: {
    ...mapGetters(["moviesCount"]),
    foundMoviesMessage() {
      if (!this.moviesCount) {
        return "No movies found";
      } else if (this.moviesCount === 1) {
        return this.moviesCount + " " + I18Y[LOCALE].MOVIE_FOUND;
      }
      return this.moviesCount + " " + I18Y[LOCALE].MOVIES_FOUND;
    }
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
