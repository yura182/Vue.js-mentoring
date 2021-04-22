<template>
  <div class="main-block">
    <div class="firs-block">
      <FilmInfo :movie="movie" />
    </div>
    <div class="second-block">
      <MiddleBlock :infoMessage="middleText" />
    </div>
    <div class="third-block">
      <SimilarList />
    </div>
    <div class="footer-block">
      <div class="footer-logo">
        <Logo :firstPart="logoFirstPart" :secondPart="logoSecondPart" />
      </div>
    </div>
  </div>
</template>

<script>
import FilmInfo from "@/components/filmDetailsPage/FilmInfo";
import MiddleBlock from "@/components/filmDetailsPage/MiddleBlock";
import SimilarList from "@/components/filmDetailsPage/SimilarList";
import Logo from "@/components/Logo";
import { LOGO_FIRST_PART, LOGO_SECOND_PART } from "@/core/constants";
import { mapGetters, mapActions } from "vuex";
import { I18Y, LOCALE } from "@/core/i18y";
import { ACTIONS, GETTERS } from "@/store/storeConstants";

export default {
  name: "Page",
  components: {
    FilmInfo,
    MiddleBlock,
    SimilarList,
    Logo
  },
  data() {
    return {
      logoFirstPart: LOGO_FIRST_PART,
      logoSecondPart: LOGO_SECOND_PART,
      messageFirstPart: I18Y[LOCALE].FILMS_BY,
      messageLastPart: I18Y[LOCALE].GENRE.toLocaleLowerCase()
    };
  },
  computed: {
    ...mapGetters([GETTERS.GET_MOVIE_BY_ID]),
    movie() {
      return this[GETTERS.GET_MOVIE_BY_ID](this.currentMovieId);
    },
    middleText() {
      const genre = this.$options.filters
        .getOneGenre(this.movie.genres)
        .toLowerCase();

      this[ACTIONS.UPDATE_SIMILAR_MOVIES_GENRE](genre);

      return `${this.messageFirstPart} ${genre} ${this.messageLastPart}`;
    },
    currentMovieId() {
      window.scrollTo(0, 0);
      return this.$route.params.id;
    }
  },
  methods: {
    ...mapActions([ACTIONS.UPDATE_SIMILAR_MOVIES_GENRE])
  }
};
</script>

<style scoped>
.main-block {
  width: 1000px;
  margin: 0 auto;
  -webkit-box-shadow: 0 0 15px 2px rgba(31, 30, 30, 0.8);
  -moz-box-shadow: 0 0 15px 2px rgba(31, 30, 30, 0.8);
  box-shadow: 0 0 20px 2px rgba(31, 30, 30, 0.8);
}

.footer-block {
  background-color: #555555;
  width: 100%;
  display: flex;
}

.footer-logo {
  padding: 10px 0;
  margin-left: auto;
  margin-right: auto;
}
</style>
