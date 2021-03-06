<template>
  <div class="header">
    <div class="header-bg"></div>
    <div class="header-content">
      <div class="header-logo">
        <Logo :firstPart="logoFirstPart" :secondPart="logoSecondPart" />
      </div>
      <div class="search-header">{{ searchHeaderMessage }}</div>
      <div class="search-bar"><SearchBar /></div>
      <div class="search-by">
        <FilterButtons
          :message="searchByMessage"
          :firstButtonTitle="titleMessage"
          :secondButtonTitle="genreMessage"
          :firstOption="firstOption"
          :secondOption="secondOption"
          :options="options"
          :checked="isChecked"
          @[ON_CHANGE_INPUT]="changeSearchOption"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue";
import SearchBar from "@/components/SearchBar.vue";
import FilterButtons from "@/components/FilterButtons.vue";
import { I18Y, LOCALE } from "@/core/i18y";
import { mapActions, mapGetters } from "vuex";
import { ACTIONS, GETTERS } from "@/store/storeConstants";
import {
  TITLE_OPTION,
  GENRE_OPTION,
  SEARCH_BY_INPUT,
  LOGO_FIRST_PART,
  LOGO_SECOND_PART
} from "@/core/constants";
import { ON_CHANGE_INPUT } from "@/core/events";

export default {
  name: "Header",
  components: {
    Logo,
    SearchBar,
    FilterButtons
  },
  data() {
    return {
      searchHeaderMessage: I18Y[LOCALE].SEARCH_HEADER.toUpperCase(),
      searchByMessage: I18Y[LOCALE].SEARCH_BY.toUpperCase(),
      titleMessage: I18Y[LOCALE].TITLE.toUpperCase(),
      genreMessage: I18Y[LOCALE].GENRE.toUpperCase(),
      firstOption: TITLE_OPTION,
      secondOption: GENRE_OPTION,
      options: SEARCH_BY_INPUT,
      logoFirstPart: LOGO_FIRST_PART,
      logoSecondPart: LOGO_SECOND_PART,
      ON_CHANGE_INPUT
    };
  },
  computed: {
    ...mapGetters([GETTERS.GET_SEARCH_OPTION]),
    isChecked() {
      return this[GETTERS.GET_SEARCH_OPTION];
    }
  },
  methods: {
    ...mapActions([ACTIONS.UPDATE_SEARCH_OPTION]),
    changeSearchOption(searchOption) {
      this[ACTIONS.UPDATE_SEARCH_OPTION](searchOption);
    }
  }
};
</script>

<style scoped>
.header {
  position: relative;
  width: 100%;
  height: 250px;
}

.header-bg {
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 252px;

  background-image: url("../../assets/header_background.jpg");
  background-size: 80%;
  filter: blur(2px);
  filter: brightness(0.35);
  -webkit-filter: blur(2px) brightness(0.35);
}

.header-logo {
  padding: 10px 0 0 30px;
}

.search-header {
  color: white;
  font-size: 26px;
  font-weight: 100;
  padding: 30px 60px 10px 60px;
  letter-spacing: 2px;
}

.search-bar {
  padding: 5px 60px;
}

.search-by {
  padding: 5px 60px;
}
</style>
