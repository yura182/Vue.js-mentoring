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
        :checked="isChecked"
        @[ON_CHANGE_INPUT]="changeSortOption"
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
import { mapGetters, mapActions } from "vuex";
import { ACTIONS, GETTERS } from "@/store/storeConstants";
import { ON_CHANGE_INPUT } from "@/core/events";

export default {
  name: "MiddleBlock",
  components: {
    Info,
    FilterButtons
  },
  data() {
    return {
      moviesFoundMessage: I18Y[LOCALE].MOVIES_FOUND,
      movieFoundMessage: I18Y[LOCALE].MOVIE_FOUND,
      noMovieFoundMessage: I18Y[LOCALE].NO_MOVIES_FOUND,
      sortByMessage: I18Y[LOCALE].SORT_BY.toUpperCase(),
      firstButtonMessage: I18Y[LOCALE].RELEASE_DATE.toUpperCase(),
      secondButtonMessage: I18Y[LOCALE].RATING.toUpperCase(),
      firstOption: RELEASE_DATE_OPTION,
      secondOption: RATING_OPTION,
      options: SORT_INPUT,
      ON_CHANGE_INPUT
    };
  },
  computed: {
    ...mapGetters([GETTERS.GET_MOVIES_COUNT, GETTERS.GET_SORT_OPTION]),
    isChecked() {
      return this[GETTERS.GET_SORT_OPTION];
    },
    foundMoviesMessage() {
      if (!this[GETTERS.GET_MOVIES_COUNT]) {
        return this.noMovieFoundMessage;
      } else if (this[GETTERS.GET_MOVIES_COUNT] === 1) {
        return `${this[GETTERS.GET_MOVIES_COUNT]} ${this.movieFoundMessage}`;
      }
      return `${this[GETTERS.GET_MOVIES_COUNT]} ${this.movieFoundMessage}`;
    }
  },
  methods: {
    ...mapActions([ACTIONS.UPDATE_SORT_OPTION]),
    changeSortOption(sortOption) {
      this[ACTIONS.UPDATE_SORT_OPTION](sortOption);
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
